const db = require("../../models");
const percentile = require("percentile");
const Kid = db.kids;

const readXlsxFile = require("read-excel-file/node");
const excel = require("exceljs");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    await readXlsxFile(path).then((rows) => {
      rows.shift();
      let kids = [];
      rows.forEach((row) => {
        let kid = {
          sex: row[0],
          born_date: row[1],
          years: row[2],
          vzg: row[3],
          dotr: row[4],
          dta: row[5],
          mta: row[6],
          bmi: row[7],
          ogka: row[8]
        };

        kids.push(kid);
      });
      Kid.bulkCreate(kids)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const normative = (req,res) => {
  Kid.findAll().then((objs) => {
    let kids = [];

    objs.forEach((obj) => {
      kids.push({
        id: obj.id,
        sex: obj.sex,
        born_date: obj.born_date,
        years: obj.years,
        vzg: obj.vzg,
        dotr: obj.dotr,
        dta: obj.dta,
        mta: obj.mta,
        bmi: obj.bmi,
        ogka: obj.ogka
      });
    });

    let norms = [];
    norms.push({
      param: "Рост",
      nx: 0,
      mhx: 0,
      mx: 0,
      sigx: 0,
      p25: 0,
      p50: 0,
      p75: 0,
      vx: 0,
      r: 0,
      rxdely: 0,
      br: 0,
      x2n: 0,
      ximean: 0
    },
    {
      param: "Вес",
      nx: 0,
      mhx: 0,
      mx: 0,
      sigx: 0,
      p25: 0,
      p50: 0,
      p75: 0,
      vx: 0,
      r: 0,
      rxdely: 0,
      br: 0,
      x2n: 0,
      ximean: 0
    },)
    val1 = [];
    val2 = [];
    //0 - рост, 1 - вес
    kids.forEach((kid) => {
      norms[0].nx = norms[0].nx + 1;
      norms[1].nx = norms[1].nx + 1;
      norms[0].mhx = norms[0].mhx + kid.dta;
      norms[1].mhx = norms[1].mhx + kid.mta;
      norms[0].x2n = norms[0].x2n + kid.dta*kid.dta;
      norms[1].x2n = norms[1].x2n + kid.mta*kid.mta;
      val1.push(kid.dta);
      val2.push(kid.mta);
    })
    norms[0].mhx = norms[0].mhx / norms[0].nx;
    norms[1].mhx = norms[1].mhx / norms[1].nx;
    //means
    kids.forEach((kid) =>{
      norms[0].ximean = norms[0].ximean + (kid.dta - norms[0].mhx);
      norms[1].ximean = norms[1].ximean + (kid.mta - norms[1].mhx);
    })
    //sigma x
    norms[0].sigx = Math.sqrt(Math.abs(norms[0].ximean) / norms[0].nx);
    norms[1].sigx = Math.sqrt(Math.abs(norms[1].ximean) / norms[1].nx);
    //Mx
    norms[0].mx = norms[0].sigx / Math.sqrt(norms[0].nx);
    norms[1].mx = norms[1].sigx / Math.sqrt(norms[1].nx);
    //Vx
    norms[0].vx = norms[0].sigx / norms[0].mhx;
    norms[1].vx = norms[1].sigx / norms[1].mhx;
    //percentille
    norms[0].p25 = percentile(25, val1);
    norms[1].p25 = percentile(25, val2);
    norms[0].p50 = percentile(50, val1);
    norms[1].p50 = percentile(50, val2);
    norms[0].p75 = percentile(75, val1);
    norms[1].p75 = percentile(75, val2);


    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("norms");
    let comparisonsw = workbook.addWorksheet("comparisonsw");

    comparisonsw.columns = [
      { header: "Оценка", key: "q", width: 25 },
      { header: "Длина тела", key: "length", width: 25 },
      { header: "ПАРАМЕТР", key: "param", width: 25 },
    ]

    // TODO
    // Сортировка по полу 1 - мальчики, 2 - девочки
    // Сортировка по возрастной группе (1 - 2 - 3 - 4)
    // балл ик2


    worksheet.columns = [
      { header: "ПАРАМЕТР", key: "param", width: 25 },
      { header: "Nx", key: "nx", width: 5 },
      { header: "Mx", key: "mhx", width: 5 },
      { header: "mx", key: "mx", width: 15 },
      { header: "σx", key: "sigx", width: 15 },
      { header: "P25", key: "p25", width: 5 },
      { header: "P50", key: "p50", width: 5 },
      { header: "P75", key: "p75", width: 5 },
      { header: "Vx", key: "vx", width: 15 },
      { header: "r", key: "r", width: 5 },
      { header: "Rx/y", key: "rxdely", width: 5 },
      { header: "δR", key: "br", width: 5 },
    ];

    worksheet.addRows(norms);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "norms.xlsx"
    );
    res.send(norms)
  })
}

const getKids = (req, res) => {
  Kid.findAll().then((objs) => {
    let kids = [];
    let norms = {
      mens: {
        mrs: {
          value: 385,
          pm: 15
        },
        kp: {
          value: 90,
          pm: 2,
        }
      },
      womens: {
        mrs: {
          value: 350,
          pm: 25
        },
        kp: {
          value: 73,
          pm: 2,
        }
      },
      ik2:{
        low: 14,
        high: 23,
      },
      stl:{
        value: 1.5
      }
    }
    objs.forEach((obj) => {
      kids.push({
        sex: obj.sex,
        years: obj.years,
        dta: obj.dta,
        mta: obj.mta,
      });
    });
    res.send(kids)
  });
}

const download = (req, res) => {
  Kid.findAll().then((objs) => {
    let kids = [];

    objs.forEach((obj) => {
      kids.push({
        id: obj.id,
        sex: obj.sex,
        born_date: obj.born_date,
        years: obj.years,
        vzg: obj.vzg,
        dotr: obj.dotr,
        dta: obj.dta,
        mta: obj.mta,
        bmi: obj.bmi,
        ogka: obj.ogka
      });
    });

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("Kids");

    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "POL", key: "sex", width: 5 },
      { header: "DTR", key: "born_date", width: 25 },
      { header: "VOZR", key: "years", width: 10 },
      { header: "VZG", key: "vzg", width: 10 },
      { header: "DOTR", key: "dotr", width: 25 },
      { header: "DTA", key: "dta", width: 10 },
      { header: "MTA", key: "mta", width: 10 },
      { header: "BMI", key: "bmi", width: 10 },
      { header: "OGKA", key: "ogka", width: 10 },
    ];

    // Add Array Rows
    worksheet.addRows(kids);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "Kids.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};

const single = (req, res) => {
  const { 
    lmom, 
    lmo,
    dta, 
    mta,
    ogka,
    gela,
    sada,
    dada,
    hss,
    hdd,
    soma,
    kdp,
    kdl } = req.body;
    if (!lmom || !lmo || !dta || !mta || !ogka || !gela || !sada || !dada || !hss || !hdd || !soma || !kdp || !kdl){
      res.status(500).send({
        message: "Не указаны все обязательные параметры"
      })
    } else {
      let ik2 =  mta/(dta/100*dta/100);
      let stela = (100+mta+dta-160)/100;
      let gi = gela*1000/mta;
      let pd = sada-dada;
      let dp = hss/hdd;
      let udobse = 90.97+0.54*dp-0.57*dada-0.61*lmo;
      let mok = udobse*hss;
      let ifi = 0.0111*hss+0.014*sada+0.008*dada+0.014*lmo-0.009*(dta-mta)-0.27;
      let vik = 1-dada/hss;
      let via = hss/sada;
      let ir = sada*hss/100;
      let do_ = gela*1000*17/100;
      let mdo = do_*hdd/1000;
      let si = kdp/mta;
      res.send({
        ik2,
        stela,
        gi,
        pd,
        dp,
        udobse,
        mok, 
        ifi,
        vik,
        via,
        ir,
        do_,
        mdo,
        si
    })}
}

module.exports = {
  upload,
  getKids,
  download,
  normative,
  single,
};
