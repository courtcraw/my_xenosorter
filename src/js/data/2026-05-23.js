dataSetVersion = "2026-05-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Protagonist", key: "protag" },
      { name: "Supporting Roles", key: "npc" },
      { name: "Major Antagonist", key: "majant" },
      { name: "Minor Antagonist", key: "minant" },
      { name: "Nopon", key: "nopon" },
      { name: "BLADE (XCX)", key: "xblade" },
      { name: "Blade (XC2)", key: "2blade" },
      { name: "Hero (XC3)", key: "hero" },
      { name: "Moebius", key: "moebius" },
      { name: "BLADE (XCXDE)", key: "xblade" },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to series.",
    checked: true,
    sub: [
      { name: "Xenogears", key: "XG" },
      { name: "Xenosaga", key: "XS" },
      { name: "Xenoblade Chronicles", key: "XC" },
      { name: "Future Connected", key: "FC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" },
      { name: "The Golden Country", key: "TGC" },
      { name: "Xenoblade Chronicles 3", key: "XC3" },
      { name: "Future Redeemed", key: "FR" },
      { name: "Xenoblade Chronicles X: Definitive Edition", key: "XCXDE" }
    ]
  },
  {
    name: "Restrict Spoilers",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers.",
    checked: false
  },
  {
    name: "Restrict Duplicates",
    key: "duplicate",
    tooltip: "Check this to restrict duplicates.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  // Xenogears
  {
    name: "Fei",
    imgUrls: ["XG-Fei.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fei_Fong_Wong",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Citan",
    imgUrls: ["XG-Citan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Citan_Uzuki", 
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Elly",
    imgUrls: ["XG-Elly.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Elehayym_Van_Houten",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Bart",
    imgUrls: ["XG-Bart.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bartholomew_Fatima",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Billy",
    imgUrls: ["XG-Billy.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Billy_Lee_Black",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Chu-Chu",
    imgUrls: ["XG-Chu.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Chu-Chu",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Emeralda",
    imgUrls: ["XG-Emeralda.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Emeralda_Kasim",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Rico",
    imgUrls: ["XG-Rico.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ricardo_Banderas",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Maria",
    imgUrls: ["XG-Maria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Maria_Balthasar",
    opts: {
      role: ["protag"],
      series: ["XG"]
    }
  },
  {
    name: "Id",
    imgUrls: ["XG-ID.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Id",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Grahf",
    imgUrls: ["XG-Grahf.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Grahf",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Miang",
    imgUrls: ["XG-Miang.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Myyah_Hawwa",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Krelian",
    imgUrls: ["XG-Krelian.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Karellen",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Ramsus",
    imgUrls: ["XG-Ramsus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kahran_Ramsus",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },
  {
    name: "Deus",
    imgUrls: ["XG-Deus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Deus",
    opts: {
      role: ["majant"],
      series: ["XG"]
    }
  },

  // Xenosaga
  {
    name: "Allen",
    imgUrls: ["XS-Allen.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Allen_Ridgeley",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "chaos",
    imgUrls: ["XS-Chaos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Chaos",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jin (XS)",
    imgUrls: ["XS-Jin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Jin_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Jr.",
    imgUrls: ["XS-JR.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gaignun_Kukai_Jr.",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "KOS-MOS (XS)",
    imgUrls: ["XS-KOS-MOS.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/KOS-MOS",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "MOMO",
    imgUrls: ["XS-MOMO.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/MOMO_Mizrahi",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Shion",
    imgUrls: ["XS-Shion.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shion_Uzuki",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Ziggy",
    imgUrls: ["XS-Ziggy.png", "PP-Jan.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ziggy",
    opts: {
      role: ["protag"],
      series: ["XS"]
    }
  },
  {
    name: "Febronia",
    imgUrls: ["XS-Febronia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Febronia",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Miyuki",
    imgUrls: ["XS-Miyuki.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Miyuki_Itsumi",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Nephilim",
    imgUrls: ["XS-Nephilim.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nephilim",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Gaignun",
    imgUrls: ["XS-Gaignun.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gaignun_Kukai",
    opts: {
      role: ["npc"],
      series: ["XS"]
    }
  },
  {
    name: "Albedo",
    imgUrls: ["XS-Albedo.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Albedo_Piazzolla",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Dmitri Yuriev",
    imgUrls: ["XS-Dmitri.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dmitri_Yuriev",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Kevin",
    imgUrls: ["XS-Kevin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kevin_Winnicot",
    opts: {
      role: ["majant"],
      series: ["XS"]
    }
  },
  {
    name: "Wilhelm",
    imgUrls: ["XS-Wilhelm.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wilhelm",
    opts: {
      role: ["majant"],
      series: ["XS"],
      spoiler: true
    }
  },
 
  // Xenoblade Chronicles 1
  {
    name: "Shulk",
    imgUrls: ["XC-Shulk.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shulk",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Fiora",
    imgUrls: ["XC-Fiora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiora",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Reyn",
    imgUrls: ["XC-Reyn.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Reyn",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    imgUrls: ["XC-Dunban.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dunban",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    imgUrls: ["XC-Sharla.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sharla",
    opts: {
      role: ["protag"],
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    imgUrls: ["XC-Riki.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Riki",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    imgUrls: ["XC-Melia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Melia",
    opts: {
      role: ["protag"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Dickson",
    imgUrls: ["XC-Dickson.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dickson",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    imgUrls: ["XC-Mumkhar.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mumkhar",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    imgUrls: ["XC-Alvis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alvis",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    imgUrls: ["XC-Juju.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Juju",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    imgUrls: ["XC-Otharon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Otharon",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    imgUrls: ["XC-Vanea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vanea",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    imgUrls: ["XC-Gadolt.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gadolt",
    opts: {
      role: ["minant"],
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    imgUrls: ["XC-Egil.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Egil",
    opts: {
      role: ["majant"],
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    imgUrls: ["XC-Meyneth.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Meyneth",
    opts: {
      role: ["npc"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Tyrea",
    imgUrls: ["XC-Tyrea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tyrea",
    opts: {
      role: ["minant", "npc"],
      series: ["XC", "FC"]
    }
  },
  {
    name: "Kallian",
    imgUrls: ["XC-Kallian.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kallian",
    opts: {
      role: ["npc"],
      series: ["XC"]
    }
  },
  {
    name: "Klaus",
    imgUrls: ["XC-Klaus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Klaus",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Galea",
    imgUrls: ["XC-Galea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Galea",
    opts: {
      role: ["npc"],
      series: ["XC", "XC2"],
      spoiler: true
    }
  },
  {
    name: "Zanza",
    imgUrls: ["XC-Zanza.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zanza",
    opts: {
      role: ["majant"],
      series: ["XC"],
      spoiler: true
    }
  },
  // Future Connected
  {
    name: "Nene",
    imgUrls: ["FC-Nene.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nene",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
  {
    name: "Kino",
    imgUrls: ["FC-Kino.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kino",
    opts: {
      role: ["protag", "nopon"],
      series: ["FC"]
    }
  },
 
  // Xenoblade Chronicles 2
  {
    name: "Rex",
    imgUrls: ["XC2-Rex.png"],
    overrideimgUrls: ["XC2-Rex-Spoiler.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Rex",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    imgUrls: ["XC2-Nia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nia",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    imgUrls: ["XC2-Tora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Tora_(XC2)",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    imgUrls: ["XC2-Vandham.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vandham_(XC2)",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    imgUrls: ["XC2-Mòrag.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mòrag",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    imgUrls: ["XC2-Zeke.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zeke",
    opts: {
      role: ["protag"],
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    imgUrls: ["XC2-Pyra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pyra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    imgUrls: ["XC2-Mythra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mythra",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pneuma",
    imgUrls: ["XC2-Pneuma.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pneuma",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Roc",
    imgUrls: ["XC2-Roc.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Roc",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dromarch",
    imgUrls: ["XC2-Dromarch.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dromarch",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi α",
    imgUrls: ["XC2-Poppi α.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_%CE%B1",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    imgUrls: ["XC2-Poppi QT.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_QT",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Poppi QTπ",
    imgUrls: ["XC2-Poppi QTπ.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Poppi_QT%CF%80",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"],
      duplicate: true
    }
  },
  {
    name: "Brighid",
    imgUrls: ["XC2-Brighid.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Brighid",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Aegaeon",
    imgUrls: ["XC2-Aegaeon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Aegaeon",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Pandoria",
    imgUrls: ["XC2-Pandoria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Pandoria",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    imgUrls: ["XC2-Adenine.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Adenine",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Agate",
    imgUrls: ["XC2-Agate.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Agate",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Azami",
    imgUrls: ["XC2-Azami.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Azami",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Boreas",
    imgUrls: ["XC2-Boreas.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Boreas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dagas",
    imgUrls: ["XC2-Dagas.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dagas",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Dahlia",
    imgUrls: ["XC2-Dahlia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Dahlia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Electra",
    imgUrls: ["XC2-Electra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Electra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Finch",
    imgUrls: ["XC2-Finch.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Finch",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Floren",
    imgUrls: ["XC2-Floren.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Floren",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Godfrey",
    imgUrls: ["XC2-Godfrey.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Godfrey",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Gorg",
    imgUrls: ["XC2-Gorg.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gorg",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Herald",
    imgUrls: ["XC2-Herald.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Herald",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kasandra",
    imgUrls: ["XC2-Kasandra.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kasandra",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Kora",
    imgUrls: ["XC2-Kora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Kora",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Newt",
    imgUrls: ["XC2-Newt.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Newt",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Nim",
    imgUrls: ["XC2-Nim.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nim",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perceval",
    imgUrls: ["XC2-Perceval.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Perceval",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Perun",
    imgUrls: ["XC2-Perun.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Perun",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Praxis",
    imgUrls: ["XC2-Praxis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Praxis",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Sheba",
    imgUrls: ["XC2-Sheba.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sheba",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Theory",
    imgUrls: ["XC2-Theory.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Theory",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Ursula",
    imgUrls: ["XC2-Ursula.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ursula",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vale",
    imgUrls: ["XC2-Vale.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vale",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Vess",
    imgUrls: ["XC2-Vess.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Vess",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Wulfric",
    imgUrls: ["XC2-Wulfric.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Wulfric",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Zenobia",
    imgUrls: ["XC2-Zenobia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zenobia",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Akhos",
    imgUrls: ["XC2-Akhos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Akhos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Mikhail",
    imgUrls: ["XC2-Mikhail.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mikhail",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Patroka",
    imgUrls: ["XC2-Patroka.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Patroka",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Jin (XC2)",
    imgUrls: ["XC2-Jin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Jin_(XC2)",
    opts: {
      role: ["protag", "majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Malos",
    imgUrls: ["XC2-Malos.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Malos",
    opts: {
      role: ["majant", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Amalthus",
    imgUrls: ["XC2-Amalthus.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Amalthus",
    opts: {
      role: ["majant"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Azurda",
    imgUrls: ["XC2-Azurda.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Azurda",
    opts: {
      role: ["npc"],
      series: ["XC2", "TGC"],
    }
  },
  {
    name: "Corvin",
    imgUrls: ["XC2-Corvin.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Corvin",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  {
    name: "Crossette",
    imgUrls: ["XC2-Crossette.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Crossette",
    opts: {
      role: ["2blade"],
      series: ["XC2"]
    }
  },
  // The Golden Country
  {
    name: "Addam",
    imgUrls: ["TGC-Addam.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Addam",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Haze",
    imgUrls: ["TGC-Haze.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Haze",
    opts: {
      role: ["protag", "2blade"],
      series: ["XC2", "TGC"]
    }
  },
  {
    name: "Hugo",
    imgUrls: ["TGC-Hugo.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Hugo_(TTGC)",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Lora",
    imgUrls: ["TGC-Lora.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lora",
    opts: {
      role: ["protag"],
      series: ["TGC"]
    }
  },
  {
    name: "Minoth",
    imgUrls: ["TGC-Minoth.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Minoth",
    opts: {
      role: ["protag", "2blade"],
      series: ["TGC"]
    }
  },
  {
    name: "Milton",
    imgUrls: ["TGC-Milton.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Milton",
    opts: {
      role: ["npc"],
      series: ["TGC"]
    }
  },
  // Xenoblade Chronicles 3
  {
    name: "Noah",
    imgUrls: ["XC3-Noah.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Noah",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Mio",
    imgUrls: ["XC3-Mio.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Mio",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Eunie",
    imgUrls: ["XC3-Eunie.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Eunie",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Taion",
    imgUrls: ["XC3-Taion.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Taion",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Lanz",
    imgUrls: ["XC3-Lanz.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Lanz",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Sena",
    imgUrls: ["XC3-Sena.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Sena",
    opts: {
      role: ["protag"],
      series: ["XC3"]
    }
  },
  {
    name: "Riku",
    imgUrls: ["XC3-Riku.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Riku",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Manana",
    imgUrls: ["XC3-Manana.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Manana",
    opts: {
      role: ["protag", "nopon"],
      series: ["XC3"],
    }
  },
  {
    name: "Alexandria",
    imgUrls: ["XC3-Alexandria.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alexandria",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ashera",
    imgUrls: ["XC3-Ashera.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ashera",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Cammuravi",
    imgUrls: ["XC3-Cammuravi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Cammuravi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ethel",
    imgUrls: ["XC3-Ethel.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ethel",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Fiona",
    imgUrls: ["XC3-Fiona.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Fiona",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Ghondor (XC3)",
    imgUrls: ["XC3-Ghondor.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ghondor",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Gray",
    imgUrls: ["XC3-Gray.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Gray",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Isurd",
    imgUrls: ["XC3-Isurd.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Isurd",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Juniper",
    imgUrls: ["XC3-Juniper.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Juniper",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Miyabi",
    imgUrls: ["XC3-Miyabi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Miyabi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Monica",
    imgUrls: ["XC3-Monica.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Monica_Vandham",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Segiri",
    imgUrls: ["XC3-Segiri.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Segiri",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Teach",
    imgUrls: ["XC3-Teach.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Teach",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Triton",
    imgUrls: ["XC3-Triton.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Triton",
    opts: {
      role: ["hero", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Valdi",
    imgUrls: ["XC3-Valdi.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Valdi",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Zeon",
    imgUrls: ["XC3-Zeon.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Zeon",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Guernica Vandham",
    imgUrls: ["XC3-Vandham.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Guernica_Vandham",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Melia (XC3)",
    imgUrls: ["XC3-Melia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Melia#In_Xenoblade_Chronicles_3",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Nia (XC3)",
    imgUrls: ["XC3-Nia.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nia#In_Xenoblade_Chronicles_3_2",
    opts: {
      role: ["hero"],
      series: ["XC3"],
      duplicate: true,
    }
  },
  {
    name: "Bolearis",
    imgUrls: ["XC3-Bolearis.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Bolearis",
    opts: {
      role: ["npc"],
      series: ["XC3"],
    }
  },
  {
    name: "Crys",
    imgUrls: ["XC3-Crys.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Crys",
    opts: {
      role: ["npc", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Joran",
    imgUrls: ["XC3-Joran.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Joran",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Moebius M",
    imgUrls: ["XC3-M.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/M",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
      spoiler: true
    }
  },
  {
    name: "Moebius N",
    imgUrls: ["XC3-N.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/N",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Shania",
    imgUrls: ["XC3-Shania.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shania",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3"],
    }
  },
  {
    name: "Z",
    imgUrls: ["XC3-Z.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Z",
    opts: {
      role: ["majant", "moebius"],
      series: ["XC3", "FR"],
    }
  },
  {
    name: "Ino",
    imgUrls: ["XC3-Ino.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Ino",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  {
    name: "Masha",
    imgUrls: ["XC3-Masha.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Masha",
    opts: {
      role: ["hero"],
      series: ["XC3"],
    }
  },
  // Future Redeemed
  {
    name: "Matthew",
    imgUrls: ["FR-Matthew.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Matthew",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Na'el",
    imgUrls: ["FR-Na'el.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Na%27el",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "A",
    imgUrls: ["FR-A.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/A",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Nikol",
    imgUrls: ["FR-Nikol.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Nikol",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Glimmer",
    imgUrls: ["FR-Glimmer.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Glimmer",
    opts: {
      role: ["protag"],
      series: ["FR"],
    }
  },
  {
    name: "Shulk (FR)",
    imgUrls: ["FR-Shulk.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Shulk#Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Rex (FR)",
    imgUrls: ["FR-Rex.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Rex#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["protag", "hero"],
      series: ["FR"],
      duplicate: true,
    }
  },
  {
    name: "Panacea",
    imgUrls: ["FR-Panacea.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Panacea",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Linka",
    imgUrls: ["FR-Linka.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Linka",
    opts: {
      role: ["npc"],
      series: ["FR"],
    }
  },
  {
    name: "Alpha",
    imgUrls: ["FR-Alpha.png"],
    wiki: "https://www.xenoserieswiki.org/wiki/Alvis?so=search#Xenoblade_Chronicles_3:_Future_Redeemed",
    opts: {
      role: ["majant"],
      series: ["FR"],
    }
  },
];
