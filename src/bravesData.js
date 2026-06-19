/* ═══════════════════════════════════════════════════════════════════════════
   BRAVES DASHBOARD — DAILY DATA FILE
   ═══════════════════════════════════════════════════════════════════════════
   HOW TO UPDATE (daily):
   1. Edit lastUpdated below to today's date.
   2. Find the player/section you want (Ctrl+F the player's name).
   3. Change the number or "value" next to the stat label. Keep quotes as-is:
        • quoted values  -> avg: ".263"   (strings: rates, percentages)
        • bare numbers   -> hr: 15        (counting stats, WAR)
   4. Save. The dashboard re-renders automatically.
   Do NOT rename keys or remove commas/braces — only change the values.
   ═══════════════════════════════════════════════════════════════════════════ */
 
   export const lastUpdated = "June 18, 2026";
 
   /* ═══════════════════════════════════════════════════════════════════════════
      ROSTER CHECKLIST — exact spellings (for Ctrl+F). Update when adding/removing
      a player. This is just a reference comment; it does not affect the dashboard.
      ───────────────────────────────────────────────────────────────────────────
      HITTERS (15):
      //   - Ronald Acuña Jr.
      //   - Drake Baldwin
      //   - Matt Olson
      //   - Ozzie Albies
      //   - Michael Harris II
      //   - Austin Riley
      //   - Mauricio Dubón
      //   - Ha-Seong Kim
      //   - Mike Yastrzemski
      //   - Dominic Smith
      //   - Jorge Mateo
      //   - Eli White
      //   - Sandy León
      //   - Chadwick Tromp
      //   - Sean Murphy
   
      STARTERS (6):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Martín Pérez
      //   - Grant Holmes
      //   - JR Ritchie
   
      BULLPEN (7):
      //   - Raisel Iglesias
      //   - Dylan Lee
      //   - Robert Suarez
      //   - Tyler Kinley
      //   - Didier Fuentes
      //   - Reynaldo López
      //   - Dylan Dodd
      ───────────────────────────────────────────────────────────────────────────
      QUICK CHECK before saving:
      • Did you keep quotes on rate stats?   avg:".271"   kpct:"11.8%"
      • Did you leave counting stats bare?    hr:9   pa:241   war:1.8
      • Every line still ends in a comma, every block still closes with ] or } ?
      • If the screen goes blank: press Ctrl+Z until it returns, then re-do slowly.
      ═══════════════════════════════════════════════════════════════════════════ */
   
   
   
   export const SCHEDULE = [
     // March
     { date:"Fri, Mar 27", opp:"Kansas City", home:true,  result:"W", score:"6-0",  record:"1-0"  },
     { date:"Sat, Mar 28", opp:"Kansas City", home:true,  result:"W", score:"6-2",  record:"2-0"  },
     { date:"Sun, Mar 29", opp:"Kansas City", home:true,  result:"L", score:"4-1",  record:"2-1"  },
     { date:"Mon, Mar 30", opp:"Athletics",   home:true,  result:"W", score:"4-0",  record:"3-1"  },
     { date:"Tue, Mar 31", opp:"Athletics",   home:true,  result:"L", score:"5-2",  record:"3-2"  },
     // April
     { date:"Wed, Apr 1",  opp:"Athletics",   home:true,  result:"W", score:"5-1",  record:"4-2"  },
     { date:"Thu, Apr 2",  opp:"Arizona",     home:false, result:"W", score:"17-2", record:"5-2"  },
     { date:"Fri, Apr 3",  opp:"Arizona",     home:false, result:"W", score:"2-0",  record:"6-2"  },
     { date:"Sat, Apr 4",  opp:"Arizona",     home:false, result:"L", score:"2-1",  record:"6-3"  },
     { date:"Sun, Apr 5",  opp:"Arizona",     home:false, result:"L", score:"6-5 F/10", record:"6-4" },
     { date:"Mon, Apr 6",  opp:"Los Angeles", home:false, result:"L", score:"6-2",  record:"6-5"  },
     { date:"Tue, Apr 7",  opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"7-5"  },
     { date:"Wed, Apr 8",  opp:"Los Angeles", home:false, result:"W", score:"8-2",  record:"8-5"  },
     { date:"Fri, Apr 10", opp:"Cleveland",   home:true,  result:"W", score:"11-5", record:"9-5"  },
     { date:"Sat, Apr 11", opp:"Cleveland",   home:true,  result:"L", score:"6-0",  record:"9-6"  },
     { date:"Sun, Apr 12", opp:"Cleveland",   home:true,  result:"W", score:"13-1", record:"10-6" },
     { date:"Mon, Apr 13", opp:"Miami",       home:true,  result:"L", score:"10-4", record:"10-7" },
     { date:"Tue, Apr 14", opp:"Miami",       home:true,  result:"W", score:"6-5",  record:"11-7" },
     { date:"Wed, Apr 15", opp:"Miami",       home:true,  result:"W", score:"6-3",  record:"12-7" },
     { date:"Fri, Apr 17", opp:"Philadelphia",home:false, result:"W", score:"9-0",  record:"13-7" },
     { date:"Sat, Apr 18", opp:"Philadelphia",home:false, result:"W", score:"3-1",  record:"14-7" },
     { date:"Sun, Apr 19", opp:"Philadelphia",home:false, result:"W", score:"4-2",  record:"15-7" },
     { date:"Mon, Apr 20", opp:"Washington",  home:false, result:"W", score:"9-4",  record:"16-7" },
     { date:"Tue, Apr 21", opp:"Washington",  home:false, result:"L", score:"11-4", record:"16-8" },
     { date:"Wed, Apr 22", opp:"Washington",  home:false, result:"W", score:"8-6",  record:"17-8" },
     { date:"Thu, Apr 23", opp:"Washington",  home:false, result:"W", score:"7-2",  record:"18-8" },
     { date:"Fri, Apr 24", opp:"Philadelphia",home:true,  result:"W", score:"5-3",  record:"19-8" },
     { date:"Sat, Apr 25", opp:"Philadelphia",home:true,  result:"L", score:"8-5 F/10", record:"19-9" },
     { date:"Sun, Apr 26", opp:"Philadelphia",home:true,  result:"W", score:"6-2",  record:"20-9" },
     { date:"Tue, Apr 28", opp:"Detroit",     home:true,  result:"W", score:"5-2",  record:"21-9" },
     { date:"Wed, Apr 29", opp:"Detroit",     home:true,  result:"W", score:"4-3",  record:"22-9" },
     { date:"Thu, Apr 30", opp:"Detroit",     home:true,  result:"L", score:"5-2",  record:"22-10"},
     // May
     { date:"Fri, May 1",  opp:"Colorado",    home:false, result:"W", score:"8-6",  record:"23-10"},
     { date:"Sat, May 2",  opp:"Colorado",    home:false, result:"W", score:"9-1",  record:"24-10"},
     { date:"Sun, May 3",  opp:"Colorado",    home:false, result:"W", score:"11-6", record:"25-10"},
     { date:"Mon, May 4",  opp:"Seattle",     home:false, result:"L", score:"5-4",  record:"25-11"},
     { date:"Tue, May 5",  opp:"Seattle",     home:false, result:"W", score:"3-2",  record:"26-11"},
     { date:"Wed, May 6",  opp:"Seattle",     home:false, result:"L", score:"3-1",  record:"26-12"},
     { date:"Fri, May 8",  opp:"Los Angeles", home:false, result:"L", score:"3-1",  record:"26-13"},
     { date:"Sat, May 9",  opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"27-13"},
     { date:"Sun, May 10", opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"28-13"},
     { date:"Tue, May 12", opp:"Chicago",     home:true,  result:"W", score:"5-2",  record:"29-13"},
     { date:"Wed, May 13", opp:"Chicago",     home:true,  result:"W", score:"4-1",  record:"30-13"},
     { date:"Thu, May 14", opp:"Chicago",     home:true,  result:"L", score:"2-0",  record:"30-14"},
     { date:"Fri, May 15", opp:"Boston",      home:true,  result:"W", score:"3-2",  record:"31-14"},
     { date:"Sat, May 16", opp:"Boston",      home:true,  result:"L", score:"2-3",  record:"31-15"},
     { date:"Sun, May 17", opp:"Boston",      home:true,  result:"W", score:"8-1",  record:"32-15"},
     { date:"Mon, May 18", opp:"Miami",       home:false, result:"L", score:"0-12", record:"32-16"},
     { date:"Tue, May 19", opp:"Miami",       home:false, result:"W", score:"8-4",  record:"33-16"},
     { date:"Wed, May 20", opp:"Miami",       home:false, result:"W", score:"9-1",  record:"34-16"},
     { date:"Thu, May 21", opp:"Miami",       home:false, result:"W", score:"9-3",  record:"35-16"},
     { date:"Fri, May 22", opp:"Washington",  home:true,  result:"W", score:"5-4",  record:"36-16"},
     { date:"Sat, May 23", opp:"Washington",  home:true,  result:"L", score:"0-2",  record:"36-17"},
     { date:"Sun, May 24", opp:"Washington",  home:true,  result:"L", score:"1-2",  record:"36-18"},
     { date:"Tue, May 26", opp:"Boston",      home:false, result:"W", score:"7-6",  record:"37-18"},
     { date:"Wed, May 27", opp:"Boston",      home:false, result:"L", score:"0-8",  record:"37-19"},
     { date:"Thu, May 28", opp:"Boston",      home:false, result:"W", score:"10-2", record:"38-19"},
     { date:"Fri, May 29", opp:"Cincinnati",  home:false, result:"W", score:"8-3", record:"39-19" },
     { date:"Sat, May 30", opp:"Cincinnati",  home:false, result:"W", score:"5-2", record:"40-19" },
     { date:"Sun, May 31", opp:"Cincinnati",  home:false, result:"L", score:"4-6", record:"40-20" },
     // June (partial)
     { date:"Tue, Jun 2",  opp:"Toronto",     home:true,  result:"W", score:"4-3", record:"41-20" },
     { date:"Wed, Jun 3",  opp:"Toronto",     home:true,  result:"W", score:"7-3", record:"42-20" },
     { date:"Thu, Jun 4",  opp:"Toronto",     home:true,  result:"L", score:"2-7", record:"42-21" },
     { date:"Fri, Jun 5",  opp:"Pittsburgh",  home:true,  result:"W", score:"6-3", record:"43-21" },
     { date:"Sat, Jun 6",  opp:"Pittsburgh",  home:true,  result:"W", score:"6-3", record:"44-21" },
     { date:"Sun, Jun 7",  opp:"Pittsburgh",  home:true,  result:"W", score:"3-2", record:"45-21"},
     { date:"Tue, Jun 9",  opp:"White Sox",   home:false, result:"L", score:"5-6", record:"45-22"},
     { date:"Wed, Jun 10", opp:"White Sox",   home:false, result:"L", score:"1-2", record:"45-23"},
     { date:"Fri, Jun 12", opp:"Mets",        home:false, result:"L", score:"5-7", record:"45-24"},
     { date:"Sat, Jun 13", opp:"Mets",        home:false, result:"W", score:"3-1", record:"46-24"},
     { date:"Sun, Jun 14", opp:"Mets",        home:false, result:"L", score:"1-8", record:"46-25"},
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true, result:"L", score:"2-7", record:"46-26"},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true, result:"L", score:"5-7", record:"46-27"},
      // Upcoming
     { date:"Thu, Jun 18", opp:"San Francisco",   home:true,},
     { date:"Fri, Jun 19", opp:"Milwaukee",   home:true,},
     { date:"Sat, Jun 20", opp:"Milwaukee",   home:true,},
     { date:"Sun, Jun 21", opp:"Milwaukee",   home:true,},
     { date:"Mon, Jun 22", opp:"San Diego",   home:false,},
     { date:"Tue, Jun 23", opp:"San Diego",   home:false,},
     { date:"Wed, Jun 24", opp:"San Diego",   home:false,},
     { date:"Fri, Jun 26", opp:"San Francisco",   home:false,},
     { date:"Sat, Jun 27", opp:"San Francisco",   home:false,},
     { date:"Sun, Jun 28", opp:"San Francisco",   home:false,},
     { date:"Tue, Jun 30", opp:"St. Louis",   home:true,},
     { date:"Wed, Jul 1", opp:"St. Louis",   home:true,},
     { date:"Thu, Jul 2", opp:"St. Louis",   home:true,},
     { date:"Fri, Jul 3", opp:"Mets",   home:true,},
     { date:"Sat, Jul 4", opp:"Mets",   home:true,},
     { date:"Sun, Jul 5", opp:"Mets",   home:true,},
     { date:"Mon, Jul 6", opp:"Mets",   home:true,},
   ];
   
   export const TEAM_HEADER = {
     record: "46-27",
     runs: 366,
     era: "3.39",
     avg: ".254",
     obp: ".320",
     slg: ".423",
     ops: ".742",
     wrc: 105,
     woba: ".326",
     xwoba: ".331",
     fip: "3.99",
     xera: "3.70",
     xfip: "3.98",
     whip: "1.19",
     gb: "41.3%",
     pitchingKBB: "14.5%",
     siera: "3.89",
     battingK: "20.8%",
     battingBB: "8.1%",
     pitchingK: "23.4%",
     pitchingBB: "8.9%",
     swstr: "11.5%",
     cstr: "15.9%",
     csw: "27.5%",
     fastSwing: "25.2%",
     sqUpSw: "23.9%",
     blastSw: "9.9%",
     idealAtk: "49.0%",
     batFastSwing: "31.9%",
     batSqUpSw: "24.7%",
     batBlastSw: "11.4%",
     batIdealAtk: "50.5%",
     batSwStr: "10.9%",
     batCStr: "14.9%",
     batCSW: "25.7%",
     batChase: "33.5%",
     batWhiff: "24.6%",
     chase: "30.9%",
     whiff: "26.4%",
   };
   
export const hitters = [
     // Updated June 15, 2026 — RISP, High Leverage, vsL/vsR splits all refreshed from FanGraphs; season totals + Savant held from June 18
     { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".352", xwoba:".379", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.1, abs:{netOvr:-2.5, netRuns:-0.6, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.2%", rateVsExp:"+8.2%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:82,woba:".291",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:146,woba:".385",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:131,woba:".363",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:143,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:226, avg:".298", obp:".381", slg:".540", ops:".921", hr:14, rbi:39, r:41, h:59, doubles:6, triples:0, sb:1, bbpct:"10.6%", kpct:"21.7%", war:2.3, war2:2.1, wrc:155, woba:".398", xwoba:".418", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"26.3%", fastSwing:"52.7%", laSwSp:"42.1%", idealAttack:"49.1%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.0%", xChalRate:"3.8%", rateVsExp:"-2.8%"}, absCatch:{netOvr:12.6, netRuns:0.5, chal:27, won:20, lost:7, wonPct:"74%", chalRate:"2.0%", xChalRate:"2.1%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:92,r:18,h:26,hr:7,rbi:16,avg:".321",obp:".402",slg:".605",ops:"1.007",wrc:179,woba:".434",iso:".284",bbpct:"9.8%",kpct:"17.4%",babip:".328"}, vsR:{pa:134,r:23,h:33,hr:7,rbi:23,avg:".282",obp:".366",slg:".496",ops:".861",wrc:138,woba:".373",iso:".214",bbpct:"11.2%",kpct:"24.6%",babip:".333"}, risp:{pa:56,r:0,h:16,hr:0,rbi:24,avg:".340",obp:".429",slg:".447",ops:".875",wrc:144,woba:".383",iso:".106",bbpct:"14.3%",kpct:"16.1%",babip:".410"}, highLeverage:{pa:12,r:11,h:4,hr:0,rbi:7,avg:".364",obp:".417",slg:".455",ops:".871",wrc:147,woba:".387",iso:".091",bbpct:"8.3%",kpct:"8.3%",babip:".400"}}},
     { name:"Matt Olson", pos:"1B", pa:321, avg:".276", obp:".346", slg:".552", ops:".898", hr:20, rbi:51, r:52, h:79, doubles:19, triples:0, sb:2, bbpct:"9.7%", kpct:"22.7%", war:3.2, war2:2.7, wrc:144, woba:".382", xwoba:".373", oaa:6, frv:5, batSpeed:74.9, squaredUp:"24.3%", fastSwing:"51.0%", laSwSp:"33.5%", idealAttack:"54.0%", armValue:null, armStrength:82.3, abs:{netOvr:1.3, netRuns:0.2, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"3.9%", xChalRate:"3.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:140,r:23,h:35,hr:8,rbi:20,avg:".278",obp:".343",slg:".548",ops:".890",wrc:143,woba:".382",iso:".270",bbpct:"8.6%",kpct:"20.7%",babip:".300"}, vsR:{pa:181,r:29,h:44,hr:12,rbi:31,avg:".275",obp:".348",slg:".556",ops:".904",wrc:144,woba:".383",iso:".281",bbpct:"10.5%",kpct:"24.3%",babip:".302"}, risp:{pa:80,r:2,h:15,hr:2,rbi:25,avg:".231",obp:".338",slg:".415",ops:".753",wrc:102,woba:".320",iso:".185",bbpct:"15.0%",kpct:"22.5%",babip:".271"}, highLeverage:{pa:30,r:14,h:6,hr:3,rbi:9,avg:".231",obp:".300",slg:".577",ops:".877",wrc:124,woba:".353",iso:".346",bbpct:"10.0%",kpct:"30.0%",babip:".200"}}},
     { name:"Ozzie Albies", pos:"2B", pa:314, avg:".278", obp:".331", slg:".431", ops:".762", hr:10, rbi:37, r:46, h:78, doubles:13, triples:0, sb:1, bbpct:"7.0%", kpct:"12.1%", war:2.2, war2:1.7, wrc:110, woba:".333", xwoba:".313", oaa:5, frv:4, batSpeed:68.9, squaredUp:"29.2%", fastSwing:"5.6%", laSwSp:"34.7%", idealAttack:"56.7%", armValue:null, armStrength:71.5, abs:{netOvr:0.5, netRuns:0.3, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.8%", xChalRate:"5.6%", rateVsExp:"+0.2%"}, splits:{vsL:{pa:132,r:14,h:38,hr:4,rbi:15,avg:".304",obp:".326",slg:".480",ops:".806",wrc:120,woba:".348",iso:".176",bbpct:"2.3%",kpct:"5.3%",babip:".293"}, vsR:{pa:182,r:32,h:40,hr:6,rbi:22,avg:".256",obp:".335",slg:".391",ops:".726",wrc:103,woba:".322",iso:".135",bbpct:"10.4%",kpct:"17.0%",babip:".274"}, risp:{pa:71,r:3,h:20,hr:3,rbi:29,avg:".351",obp:".380",slg:".544",ops:".924",wrc:143,woba:".381",iso:".193",bbpct:"8.5%",kpct:"7.0%",babip:".304"}, highLeverage:{pa:30,r:14,h:6,hr:1,rbi:8,avg:".240",obp:".333",slg:".440",ops:".773",wrc:113,woba:".337",iso:".200",bbpct:"10.0%",kpct:"13.3%",babip:".238"}}},
     { name:"Michael Harris II", pos:"CF", pa:259, avg:".306", obp:".340", slg:".514", ops:".854", hr:14, rbi:41, r:35, h:75, doubles:9, triples:0, sb:3, bbpct:"4.6%", kpct:"20.1%", war:2.4, war2:2.2, wrc:135, woba:".370", xwoba:".381", oaa:6, frv:5, batSpeed:75.0, squaredUp:"24.6", fastSwing:"50.2%", laSwSp:"30.6%", idealAttack:"47.3%", armValue:null, armStrength:84.9, abs:{netOvr:-0.8, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"5.2%", xChalRate:"2.7%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:96,r:10,h:26,hr:4,rbi:14,avg:".289",obp:".333",slg:".467",ops:".800",wrc:122,woba:".350",iso:".178",bbpct:"5.2%",kpct:"19.8%",babip:".328"}, vsR:{pa:163,r:25,h:49,hr:10,rbi:27,avg:".316",obp:".344",slg:".542",ops:".885",wrc:143,woba:".381",iso:".226",bbpct:"4.3%",kpct:"20.2%",babip:".345"}, risp:{pa:52,r:0,h:13,hr:0,rbi:18,avg:".283",obp:".346",slg:".391",ops:".737",wrc:106,woba:".327",iso:".109",bbpct:"7.7%",kpct:"15.4%",babip:".333"}, highLeverage:{pa:25,r:10,h:5,hr:1,rbi:9,avg:".238",obp:".320",slg:".476",ops:".796",wrc:115,woba:".340",iso:".238",bbpct:"8.0%",kpct:"24.0%",babip:".267"}}},
     { name:"Austin Riley", pos:"3B", pa:298, avg:".211", obp:".292", slg:".355", ops:".647", hr:8, rbi:35, r:31, h:56, doubles:12, triples:1, sb:4, bbpct:"8.4%", kpct:"28.5%", war:0.4, war2:0.1, wrc:81, woba:".290", xwoba:".303", oaa:-6, frv:-4, batSpeed:75.6, squaredUp:"21.5%", fastSwing:"55.8%", laSwSp:"30.1%", idealAttack:"47.3%", armValue:null, armStrength:84.2, abs:{netOvr:0.4, netRuns:0.0, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.9%", xChalRate:"5.2%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:105,r:9,h:23,hr:1,rbi:13,avg:".247",obp:".324",slg:".355",ops:".679",wrc:91,woba:".305",iso:".108",bbpct:"10.5%",kpct:"30.5%",babip:".361"}, vsR:{pa:193,r:22,h:33,hr:7,rbi:22,avg:".192",obp:".275",slg:".355",ops:".629",wrc:76,woba:".282",iso:".163",bbpct:"7.3%",kpct:"27.5%",babip:".230"}, risp:{pa:83,r:4,h:19,hr:4,rbi:31,avg:".253",obp:".301",slg:".493",ops:".795",wrc:114,woba:".338",iso:".240",bbpct:"7.2%",kpct:"30.1%",babip:".313"}, highLeverage:{pa:32,r:4,h:7,hr:1,rbi:12,avg:".250",obp:".281",slg:".393",ops:".674",wrc:79,woba:".287",iso:".143",bbpct:"6.3%",kpct:"18.8%",babip:".261"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:277, avg:".259", obp:".315", slg:".408", ops:".723", hr:7, rbi:40, r:29, h:66, doubles:13, triples:2, sb:1, bbpct:"6.9%", kpct:"15.2%", war:1.6, war2:1.6, wrc:101, woba:".319", xwoba:".314", oaa:8, frv:6, batSpeed:69.0, squaredUp:"26.7%", fastSwing:"3.0%", laSwSp:"38.0%", idealAttack:"36.7%", armValue:null, armStrength:90.8, abs:{netOvr:-3.1, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"7.3%", xChalRate:"4.5%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:109,r:10,h:23,hr:2,rbi:18,avg:".230",obp:".294",slg:".350",ops:".644",wrc:80,woba:".288",iso:".120",bbpct:"7.3%",kpct:"11.0%",babip:".244"}, vsR:{pa:168,r:19,h:43,hr:5,rbi:22,avg:".277",obp:".329",slg:".445",ops:".775",wrc:115,woba:".339",iso:".168",bbpct:"6.5%",kpct:"17.9%",babip:".317"}, risp:{pa:69,r:3,h:22,hr:3,rbi:35,avg:".349",obp:".397",slg:".619",ops:"1.016",wrc:180,woba:".435",iso:".270",bbpct:"7.2%",kpct:"11.6%",babip:".365"}, highLeverage:{pa:30,r:6,h:11,hr:1,rbi:19,avg:".407",obp:".467",slg:".704",ops:"1.170",wrc:222,woba:".497",iso:".296",bbpct:"10.0%",kpct:"6.7%",babip:".417"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:66, avg:".085", obp:".182", slg:".085", ops:".267", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"10.6%", kpct:"24.2%", war:-0.8, war2:-1.0, wrc:-20, woba:".142", xwoba:".215", oaa:-4, frv:-3, batSpeed:72.0, squaredUp:"16.2%", fastSwing:"22.9%", laSwSp:"16.7%", idealAttack:"56.4%", armValue:null, armStrength:null, abs:{netOvr:0.9, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.9%", xChalRate:"4.3%", rateVsExp:"-2.5%"}, splits:{vsL:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".065",obp:".147",slg:".065",ops:".212",wrc:-38,woba:".114",iso:".000",bbpct:"8.8%",kpct:"29.4%",babip:".095"}, vsR:{pa:32,r:3,h:3,hr:0,rbi:1,avg:".107",obp:".219",slg:".107",ops:".326",wrc:0,woba:".171",iso:".000",bbpct:"12.5%",kpct:"18.8%",babip:".136"}, risp:{pa:17,r:0,h:3,hr:0,rbi:3,avg:".214",obp:".353",slg:".214",ops:".567",wrc:75,woba:".281",iso:".000",bbpct:"17.6%",kpct:"17.6%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:208, avg:".228", obp:".317", slg:".337", ops:".654", hr:3, rbi:18, r:26, h:42, doubles:9, triples:1, sb:1, bbpct:"9.6%", kpct:"24.5%", war:0.3, war2:0.2, wrc:87, woba:".298", xwoba:".288", oaa:-1, frv:0, batSpeed:71.1, squaredUp:"28.1%", fastSwing:"6.9%", laSwSp:"29.2%", idealAttack:"61.2%", armValue:null, armStrength:83.0, abs:{netOvr:3.5, netRuns:0.8, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"1.3%", xChalRate:"3.6%", rateVsExp:"-2.3%"}, splits:{vsL:{pa:30,r:4,h:3,hr:0,rbi:1,avg:".120",obp:".267",slg:".160",ops:".427",wrc:34,woba:".221",iso:".040",bbpct:"10.0%",kpct:"40.0%",babip:".231"}, vsR:{pa:178,r:22,h:39,hr:3,rbi:22,avg:".245",obp:".326",slg:".365",ops:".691",wrc:95,woba:".311",iso:".120",bbpct:"9.6%",kpct:"21.9%",babip:".308"}, risp:{pa:49,r:0,h:13,hr:0,rbi:13,avg:".295",obp:".367",slg:".386",ops:".754",wrc:114,woba:".339",iso:".091",bbpct:"10.2%",kpct:"36.7%",babip:".500"}, highLeverage:{pa:19,r:5,h:6,hr:0,rbi:6,avg:".353",obp:".421",slg:".471",ops:".892",wrc:153,woba:".395",iso:".118",bbpct:"10.5%",kpct:"26.3%",babip:".500"}}},
     { name:"Dominic Smith", pos:"DH", pa:176, avg:".283", obp:".320", slg:".434", ops:".754", hr:6, rbi:31, r:25, h:45, doubles:4, triples:1, sb:0, bbpct:"5.7%", kpct:"13.1%", war:0.5, war2:0.2, wrc:106, woba:".326", xwoba:".346", oaa:null, frv:null, batSpeed:68.8, squaredUp:"30.2%", fastSwing:"5.2%", laSwSp:"36.7%", idealAttack:"54.2%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"6.5%", xChalRate:"5.1%", rateVsExp:"+1.4%"}, splits:{vsL:{pa:26,r:3,h:4,hr:0,rbi:2,avg:".182",obp:".280",slg:".227",ops:".507",wrc:48,woba:".242",iso:".045",bbpct:"11.5%",kpct:"11.5%",babip:".211"}, vsR:{pa:150,r:22,h:41,hr:6,rbi:29,avg:".299",obp:".327",slg:".467",ops:".794",wrc:115,woba:".340",iso:".168",bbpct:"4.7%",kpct:"13.3%",babip:".302"}, risp:{pa:48,r:3,h:13,hr:3,rbi:27,avg:".325",obp:".319",slg:".575",ops:".894",wrc:128,woba:".359",iso:".250",bbpct:"4.2%",kpct:"8.3%",babip:".263"}, highLeverage:{pa:21,r:5,h:3,hr:1,rbi:11,avg:".200",obp:".250",slg:".467",ops:".717",wrc:75,woba:".281",iso:".267",bbpct:"9.5%",kpct:"23.8%",babip:".167"}}},
     { name:"Jorge Mateo", pos:"SS", pa:102, avg:".281", obp:".324", slg:".458", ops:".782", hr:4, rbi:11, r:24, h:27, doubles:5, triples:0, sb:7, bbpct:"5.9%", kpct:"28.4%", war:0.8, war2:0.8, wrc:116, woba:".342", xwoba:".346", oaa:1, frv:1, batSpeed:73.6, squaredUp:"20.1%", fastSwing:"35.4%", laSwSp:"46.2%", idealAttack:"39.8%", armValue:null, armStrength:90.4, abs:{netOvr:-2.1, netRuns:-0.4, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"7.7%", xChalRate:"4.9%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:41,r:8,h:11,hr:2,rbi:3,avg:".282",obp:".317",slg:".462",ops:".779",wrc:115,woba:".340",iso:".179",bbpct:"4.9%",kpct:"36.6%",babip:".409"}, vsR:{pa:61,r:16,h:16,hr:2,rbi:8,avg:".281",obp:".328",slg:".456",ops:".784",wrc:117,woba:".343",iso:".175",bbpct:"6.6%",kpct:"23.0%",babip:".341"}, risp:{pa:24,r:0,h:6,hr:0,rbi:6,avg:".273",obp:".333",slg:".273",ops:".606",wrc:75,woba:".282",iso:".000",bbpct:"8.3%",kpct:"37.5%",babip:".462"}, highLeverage:{pa:9,r:7,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Eli White", pos:"OF", pa:95, avg:".230", obp:".284", slg:".402", ops:".687", hr:3, rbi:14, r:12, h:19, doubles:4, triples:1, sb:2, bbpct:"6.3%", kpct:"15.8%", war:0.6, war2:0.2, wrc:88, woba:".300", xwoba:".309", oaa:0, frv:-1, batSpeed:73.5, squaredUp:"23.9%", fastSwing:"36.5%", laSwSp:"33.3%", idealAttack:"54.7%", armValue:null, armStrength:null, abs:{netOvr:0.1, netRuns:0.7, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.4%", xChalRate:"4.5%", rateVsExp:"-2.1%"}, splits:{vsL:{pa:55,r:5,h:12,hr:2,rbi:9,avg:".255",obp:".345",slg:".468",ops:".814",wrc:124,woba:".353",iso:".213",bbpct:"10.9%",kpct:"16.4%",babip:".270"}, vsR:{pa:40,r:7,h:8,hr:1,rbi:5,avg:".200",obp:".200",slg:".325",ops:".525",wrc:38,woba:".226",iso:".125",bbpct:"0.0%",kpct:"15.0%",babip:".212"}, risp:{pa:27,r:1,h:7,hr:1,rbi:11,avg:".304",obp:".370",slg:".478",ops:".849",wrc:133,woba:".366",iso:".174",bbpct:"11.1%",kpct:"14.8%",babip:".316"}, highLeverage:{pa:14,r:3,h:2,hr:0,rbi:4,avg:".167",obp:".286",slg:".167",ops:".452",wrc:39,woba:".228",iso:".000",bbpct:"14.3%",kpct:"7.1%",babip:".182"}}},
     { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".140", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"25.0%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:9.0, netRuns:0.6, chal:20, won:15, lost:5, wonPct:"75%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-56,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-66,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-1.4, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:18,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:6,woba:".179",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".199",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:188,woba:".448",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.7, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.2%", rateVsExp:"+1.5%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:492,woba:".895",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
   ];
   
export const starters = [
     // Updated June 15, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 18
     { name:"Chris Sale", wl:"8-5", era:"2.30", ip:"78.1", kpct:"28.8%", bbpct:"6.3%", whip:"1.047", war:2.4, war2:2.2, fip:"2.82", xfip:"3.09", siera:"3.09", batSpeed:70.7, fastSwing:"17.9%", swstr:"13.5%", cstr:"17.5%", csw:"31.0%", laSwSp:"38.2%", idealAttack:"46.3%", splits:{vsL:{ip:"19.1",era:"1.40",fip:"2.02",xfip:"1.88",whip:"0.93",avg:".211",obp:".273",slg:".310",woba:".265",kpct:"33.3%",bbpct:"3.8%",kbb:"29.5%"}, vsR:{ip:"59.0",era:"2.59",fip:"3.09",xfip:"3.49",whip:"1.08",avg:".216",obp:".286",slg:".312",woba:".272",kpct:"27.4%",bbpct:"7.1%",kbb:"20.3%"}}},
     { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.35", xfip:"4.34", siera:"4.12", batSpeed:72.4, fastSwing:"25.3%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"46.0%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.57",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".344",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.88",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".380",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
     { name:"Bryce Elder", wl:"5-4", era:"3.15", ip:"88.2", kpct:"19.9%", bbpct:"7.4%", whip:"1.139", war:1.4, war2:1.5, fip:"3.75", xfip:"4.03", siera:"4.22", batSpeed:72.3, fastSwing:"26.7%", swstr:"9.2%", cstr:"16.3%", csw:"25.6%", laSwSp:"30.7%", idealAttack:"49.0%", splits:{vsL:{ip:"58.2",era:"2.76",fip:"3.85",xfip:"4.51",whip:"1.02",avg:".183",obp:".262",slg:".288",woba:".251",kpct:"19.1%",bbpct:"9.4%",kbb:"9.8%"}, vsR:{ip:"30.0",era:"3.90",fip:"3.57",xfip:"3.07",whip:"1.37",avg:".288",obp:".321",slg:".424",woba:".328",kpct:"21.4%",bbpct:"3.8%",kbb:"17.6%"}}},
     { name:"Martín Pérez", wl:"5-3", era:"2.90", ip:"62.0", kpct:"20.8%", bbpct:"8.6%", whip:"1.048", war:1.5, war2:0.8, fip:"3.82", xfip:"3.91", siera:"4.15", batSpeed:73.1, fastSwing:"32.5%", swstr:"9.2%", cstr:"18.4%", csw:"27.6%", laSwSp:"36.3%", idealAttack:"49.1%", splits:{vsL:{ip:"18.0",era:"2.50",fip:"3.94",xfip:"3.72",whip:"1.00",avg:".200",obp:".278",slg:".369",woba:".288",kpct:"22.2%",bbpct:"6.9%",kbb:"15.3%"}, vsR:{ip:"44.0",era:"3.07",fip:"3.79",xfip:"3.98",whip:"1.07",avg:".203",obp:".273",slg:".353",woba:".277",kpct:"20.2%",bbpct:"9.2%",kbb:"11.0%"}}},
     { name:"Grant Holmes", wl:"4-3", era:"4.33", ip:"68.2", kpct:"20.3%", bbpct:"10.7%", whip:"1.398", war:0.4, war2:0.0, fip:"5.27", xfip:"4.56", siera:"4.64", batSpeed:72.7, fastSwing:"27.7%", swstr:"12.6%", cstr:"14.6%", csw:"27.2%", laSwSp:"33.5%", idealAttack:"49.9%", splits:{vsL:{ip:"39.1",era:"3.66",fip:"5.34",xfip:"4.24",whip:"1.35",avg:".231",obp:".321",slg:".429",woba:".331",kpct:"22.6%",bbpct:"11.3%",kbb:"11.3%"}, vsR:{ip:"27.1",era:"4.61",fip:"5.15",xfip:"4.77",whip:"1.32",avg:".241",obp:".311",slg:".426",woba:".325",kpct:"17.6%",bbpct:"8.4%",kbb:"9.2%"}}},
     { name:"JR Ritchie", wl:"1-2", era:"4.54", ip:"35.2", kpct:"19.5%", bbpct:"13.6%", whip:"1.374", war:0.0, war2:-0.4, fip:"5.99", xfip:"4.85", siera:"5.03", batSpeed:72.2, fastSwing:"26.8%", swstr:"8.7%", cstr:"15.2%", csw:"23.9%", laSwSp:"31.8%", idealAttack:"52.9%", splits:{vsL:{ip:"19.2",era:"5.49",fip:"6.21",xfip:"4.91",whip:"1.53",avg:".243",obp:".371",slg:".432",woba:".357",kpct:"20.2%",bbpct:"13.5%",kbb:"6.7%"}, vsR:{ip:"11.0",era:"0.82",fip:"3.29",xfip:"4.36",whip:"1.00",avg:".139",obp:".256",slg:".139",woba:".202",kpct:"18.6%",bbpct:"14.0%",kbb:"4.7%"}}},
   ];

   export const bullpen = [
     // Updated June 15, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 18
     { name:"Raisel Iglesias", role:"CL", era:"1.16", ip:"23.1", sv:14, kpct:"30.3%", bbpct:"5.6%", whip:"0.986", fip:"1.98", war:1.1, war2:0.8, xfip:"3.02", siera:"2.62", batSpeed:71.3, fastSwing:"26.7%", swstr:"15.1%", cstr:"17.2%", csw:"32.3", laSwSp:"26.3%", idealAttack:"49.0%", splits:{vsL:{ip:"14.0",era:"0.64",fip:"3.32",xfip:"4.39",whip:"1.00",avg:".208",obp:".269",slg:".333",woba:".270",kpct:"21.2%",bbpct:"7.7%",kbb:"13.5%"}, vsR:{ip:"9.1",era:"1.93",fip:"0.00",xfip:"0.95",whip:"0.96",avg:".222",obp:".243",slg:".250",woba:".222",kpct:"43.2%",bbpct:"2.7%",kbb:"40.5%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.14", ip:"31.2", sv:0, kpct:"34.8%", bbpct:"4.3%", whip:"0.632", fip:"1.46", war:1.3, war2:1.1, xfip:"2.60", siera:"2.09", batSpeed:72.3, fastSwing:"27.8%", swstr:"19.2%", cstr:"15.3%", csw:"34.6%", laSwSp:"34.3%", idealAttack:"49.5%", splits:{vsL:{ip:"11.1",era:"2.38",fip:"0.81",xfip:"2.11",whip:"0.71",avg:".154",obp:".190",slg:".333",woba:".221",kpct:"38.1%",bbpct:"4.8%",kbb:"33.3%"}, vsR:{ip:"20.1",era:"0.44",fip:"1.83",xfip:"2.86",whip:"0.59",avg:".129",obp:".164",slg:".186",woba:".160",kpct:"32.9%",bbpct:"4.1%",kbb:"28.8%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.59", ip:"30.2", sv:4, kpct:"22.8%", bbpct:"4.4%", whip:"0.783", fip:"2.32", war:1.6, war2:0.8, xfip:"3.25", siera:"3.15", batSpeed:71.3, fastSwing:"22.6%", swstr:"12.8%", cstr:"12.1%", csw:"24.8%", laSwSp:"32.9%", idealAttack:"51.5%", splits:{vsL:{ip:"18.0",era:"0.50",fip:"2.60",xfip:"3.52",whip:"0.56",avg:".133",obp:".161",slg:".183",woba:".157",kpct:"22.2%",bbpct:"3.2%",kbb:"19.0%"}, vsR:{ip:"12.2",era:"0.71",fip:"1.92",xfip:"2.85",whip:"1.11",avg:".229",obp:".275",slg:".250",woba:".241",kpct:"23.5%",bbpct:"5.9%",kbb:"17.6%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.37", war:0.4, war2:0.1, xfip:"3.96", siera:"3.43", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.2%", idealAttack:"56.0%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.86",xfip:"3.78",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".320",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.20",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".283",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.25", ip:"28.0", sv:1, kpct:"29.2%", bbpct:"8.0%", whip:"1.036", fip:"2.38", war:0.9, war2:0.8, xfip:"3.35", siera:"2.98", batSpeed:71.7, fastSwing:"25.0%", swstr:"12.8%", cstr:"15.3%", csw:"28.2%", laSwSp:"26.1%", idealAttack:"42.1%", splits:{vsL:{ip:"15.1",era:"3.52",fip:"2.39",xfip:"2.69",whip:"1.17",avg:".228",obp:".297",slg:".333",woba:".284",kpct:"32.8%",bbpct:"7.8%",kbb:"25.0%"}, vsR:{ip:"12.2",era:"0.71",fip:"2.39",xfip:"4.14",whip:"0.87",avg:".163",obp:".245",slg:".186",woba:".208",kpct:"24.5%",bbpct:"8.2%",kbb:"16.3%"}}},
     { name:"Reynaldo López", role:"RP", era:"3.76", ip:"40.2", sv:0, kpct:"20.2%", bbpct:"11.2%", whip:"1.426", fip:"4.79", war:0.2, war2:0.0, xfip:"4.74", siera:"4.60", batSpeed:71.3, fastSwing:"19.6%", swstr:"8.5%", cstr:"17.3%", csw:"25.8%", laSwSp:"39.1%", idealAttack:"44.8%", splits:{vsL:{ip:"19.0",era:"4.74",fip:"5.58",xfip:"5.76",whip:"2.00",avg:".260",obp:".413",slg:".411",woba:".375",kpct:"19.6%",bbpct:"20.7%",kbb:"-1.1%"}, vsR:{ip:"19.2",era:"3.20",fip:"4.33",xfip:"3.86",whip:"0.97",avg:".237",obp:".253",slg:".434",woba:".295",kpct:"21.5%",bbpct:"1.3%",kbb:"20.3%"}}},
     { name:"Dylan Dodd", role:"RP", era:"2.08", ip:"17.1", sv:1, kpct:"28.8%", bbpct:"9.1%", whip:"0.865", fip:"4.19", war:0.4, war2:0.0, xfip:"3.57", siera:"3.21", batSpeed:72.7, fastSwing:"30.6%", swstr:"13.3%", cstr:"12.5%", csw:"25.9%", laSwSp:"35.3%", idealAttack:"51.7", splits:{vsL:{ip:"6.0",era:"1.50",fip:"2.94",xfip:"4.41",whip:"1.50",avg:".182",obp:".333",slg:".227",woba:".260",kpct:"29.6%",bbpct:"18.5%",kbb:"11.1%"}, vsR:{ip:"9.1",era:"0.96",fip:"2.68",xfip:"2.71",whip:"0.43",avg:".100",obp:".129",slg:".200",woba:".147",kpct:"32.3%",bbpct:"3.2%",kbb:"29.0%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:46,l:27,pct:".630",gb:"—", home:"22-13",away:"24-14", rs:366, ra:266, diff:+100, strk:"L3", l10:"4-6", highlight:true,  srs:1.3 },
     { team:"PHI", full:"Philadelphia Phillies", w:40,l:34,pct:".541",gb:"6.5", home:"21-18",away:"19-16", rs:304, ra:322, diff:-18, strk:"L1", l10:"6-4", highlight:false, srs:-0.2 },
     { team:"WSN", full:"Washington Nationals", w:39,l:36,pct:".520",gb:"8.0", home:"16-22",away:"23-14", rs:407, ra:392, diff:+15, strk:"L1", l10:"6-4", highlight:false, srs:0.4 },
     { team:"MIA", full:"Miami Marlins",        w:37,l:38,pct:".493",gb:"10.0", home:"23-16",away:"14-22", rs:324, ra:329, diff:-5, strk:"W1", l10:"7-3", highlight:false, srs:0.1 },
     { team:"NYM", full:"New York Mets",        w:33,l:41,pct:".446",gb:"13.5", home:"18-18",away:"15-23", rs:300, ra:317, diff:-17, strk:"W1", l10:"5-5", highlight:false, srs:-0.3 },
   ];
   
export const statcastHitters = [
  { name:"Michael Harris II", ev:"92.3",hardHit:"51.5%",xwoba:".384",xba:".308",xslg:".550",barrel:"15.0%",chase:"44.7%",whiff:"26.4%",kpct:"20.1%",bbpct:"4.6%", gbpct:"42.8%",fbpct:"24.2%",ldpct:"26.3%",pupct:"6.7%",pullAir:"16.5%"},
  { name:"Matt Olson", ev:"93.5",hardHit:"52.3%",xwoba:".370",xba:".261",xslg:".533",barrel:"14.4%",chase:"28.2%",whiff:"25.0%",kpct:"22.7%",bbpct:"9.7%", gbpct:"35.6%",fbpct:"34.3%",ldpct:"21.3%",pupct:"8.8%",pullAir:"19.9%"},
  { name:"Dominic Smith", ev:"88.8",hardHit:"35.9%",xwoba:".339",xba:".284",xslg:".448",barrel:"7.1%",chase:"34.0%",whiff:"19.2%",kpct:"13.1%",bbpct:"5.7%", gbpct:"35.9%",fbpct:"33.8%",ldpct:"26.1%",pupct:"4.2%",pullAir:"15.5%"},
  { name:"Drake Baldwin", ev:"92.5",hardHit:"52.7%",xwoba:".410",xba:".297",xslg:".580",barrel:"18.7%",chase:"34.9%",whiff:"23.6%",kpct:"21.7%",bbpct:"10.6%", gbpct:"45.3%",fbpct:"24.7%",ldpct:"25.3%",pupct:"4.7%",pullAir:"15.3%"},
  { name:"Mauricio Dubón", ev:"86.6",hardHit:"28.6%",xwoba:".322",xba:".270",xslg:".407",barrel:"6.1%",chase:"37.8%",whiff:"17.1%",kpct:"15.2%",bbpct:"6.9%", gbpct:"37.1%",fbpct:"26.3%",ldpct:"29.1%",pupct:"7.5%",pullAir:"14.6%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"47.8%",xwoba:".350",xba:".288",xslg:".480",barrel:"10.4%",chase:"40.1%",whiff:"28.9%",kpct:"28.4%",bbpct:"5.9%", gbpct:"40.3%",fbpct:"31.3%",ldpct:"26.9%",pupct:"1.5%",pullAir:"20.9%"},
  { name:"Austin Riley", ev:"91.2",hardHit:"45.1%",xwoba:".302",xba:".212",xslg:".390",barrel:"10.4%",chase:"31.9%",whiff:"32.1%",kpct:"28.5%",bbpct:"8.4%", gbpct:"38.5%",fbpct:"31.3%",ldpct:"20.9%",pupct:"9.3%",pullAir:"19.8%"},
  { name:"Ozzie Albies", ev:"87.1",hardHit:"28.8%",xwoba:".310",xba:".259",xslg:".389",barrel:"4.5%",chase:"35.5%",whiff:"20.1%",kpct:"12.1%",bbpct:"7.0%", gbpct:"36.8%",fbpct:"30.0%",ldpct:"25.6%",pupct:"7.6%",pullAir:"25.6%"},
  { name:"Mike Yastrzemski", ev:"90.5",hardHit:"41.4%",xwoba:".287",xba:".225",xslg:".314",barrel:"3.8%",chase:"26.7%",whiff:"24.8%",kpct:"24.5%",bbpct:"9.6%", gbpct:"42.1%",fbpct:"29.3%",ldpct:"23.3%",pupct:"5.3%",pullAir:"19.5%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.6",hardHit:"34.2%",xwoba:".309",xba:".261",xslg:".386",barrel:"6.8%",chase:"27.7%",whiff:"25.3%",kpct:"15.8%",bbpct:"6.3%", gbpct:"54.8%",fbpct:"21.9%",ldpct:"20.5%",pupct:"2.7%",pullAir:"11.0%"},
  { name:"Ha-Seong Kim", ev:"84.6",hardHit:"20.9%",xwoba:".213",xba:".154",xslg:".199",barrel:"2.4%",chase:"25.9%",whiff:"19.3%",kpct:"24.2%",bbpct:"10.6%", gbpct:"51.2%",fbpct:"32.6%",ldpct:"7.0%",pupct:"9.3%",pullAir:"16.3%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
];

export const statcastPitchers = [
  { name:"Raisel Iglesias", ev:"87.2",hardHit:"29.8%",xwoba:".238",xba:".202",xslg:".286",kpct:"30.3%",bbpct:"5.6%", barrel:"5.4%", chase:"39.2%",whiff:"32.6%",gbpct:"35.1%",fbpct:"28.1%",ldpct:"24.6%",pupct:"12.3%", pullAir:"15.8%"},
  { name:"Dylan Lee", ev:"87.1",hardHit:"32.9%",xwoba:".212",xba:".174",xslg:".256",kpct:"34.8%",bbpct:"4.3%", barrel:"4.3%", chase:"36.4%",whiff:"38.2%",gbpct:"32.9%",fbpct:"31.4%",ldpct:"25.7%",pupct:"10.0%", pullAir:"28.6%"},
  { name:"Robert Suarez", ev:"84.3",hardHit:"30.5%",xwoba:".271",xba:".242",xslg:".340",kpct:"22.8%",bbpct:"4.4%", barrel:"3.7%", chase:"40.0%",whiff:"24.8%",gbpct:"46.3%",fbpct:"24.4%",ldpct:"20.7%",pupct:"8.5%", pullAir:"13.4%"},
  { name:"Bryce Elder", ev:"89.5",hardHit:"38.3%",xwoba:".283",xba:".233",xslg:".343",kpct:"19.9%",bbpct:"7.4%", barrel:"3.8%", chase:"29.9%",whiff:"22.6%",gbpct:"45.1%",fbpct:"26.1%",ldpct:"22.0%",pupct:"6.8%", pullAir:"17.8%"},
  { name:"Chris Sale", ev:"86.8",hardHit:"31.2%",xwoba:".292",xba:".234",xslg:".349",kpct:"28.8%",bbpct:"6.3%", barrel:"6.0%", chase:"36.2%",whiff:"29.5%",gbpct:"44.7%",fbpct:"23.6%",ldpct:"26.6%",pupct:"5.0%", pullAir:"18.1%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"88.3",hardHit:"31.9%",xwoba:".263",xba:".204",xslg:".299",kpct:"29.2%",bbpct:"8.0%", barrel:"4.4%", chase:"29.0%",whiff:"28.0%",gbpct:"39.1%",fbpct:"27.5%",ldpct:"21.7%",pupct:"11.6%", pullAir:"8.7%"},
  { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"38.0%",xwoba:".314",xba:".247",xslg:".382",kpct:"20.8%",bbpct:"8.6%", barrel:"7.1%", chase:"27.1%",whiff:"22.5%",gbpct:"47.4%",fbpct:"22.8%",ldpct:"25.1%",pupct:"4.7%", pullAir:"21.6%"},
  { name:"Grant Holmes", ev:"91.0",hardHit:"44.9%",xwoba:".338",xba:".248",xslg:".433",kpct:"20.3%",bbpct:"10.7%", barrel:"9.8%", chase:"32.0%",whiff:"28.5%",gbpct:"42.0%",fbpct:"27.3%",ldpct:"23.9%",pupct:"6.8%", pullAir:"22.0%"},
  { name:"Reynaldo López", ev:"86.9",hardHit:"34.7%",xwoba:".339",xba:".261",xslg:".420",kpct:"20.2%",bbpct:"11.2%", barrel:"5.8%", chase:"25.0%",whiff:"20.2%",gbpct:"36.4%",fbpct:"27.3%",ldpct:"28.9%",pupct:"7.4%", pullAir:"23.1%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.0%"},
  { name:"Dylan Dodd", ev:"89.7",hardHit:"36.6%",xwoba:".282",xba:".216",xslg:".366",kpct:"28.8%",bbpct:"9.1%", barrel:"9.8%", chase:"31.3%",whiff:"28.8%",gbpct:"29.3%",fbpct:"24.4%",ldpct:"26.8%",pupct:"19.5%", pullAir:"41.5%"},
];
   
   export const hitterWarProgress = [
     { week:"G6",  "Olson":0.5,"Albies":0.3,"Baldwin":0.2,"Harris":0.1,"Dubón":0.1,"Acuña":0.0,"Smith":0.0,"Mateo":0.0,"Riley":0.0,"White":0.0,"Yaz":0.0,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0 },
     { week:"G12", "Olson":1.0,"Albies":0.8,"Baldwin":0.6,"Harris":0.4,"Dubón":0.3,"Acuña":0.0,"Smith":0.1,"Mateo":0.0,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0 },
     { week:"G18", "Olson":1.4,"Albies":1.0,"Baldwin":0.9,"Harris":0.7,"Dubón":0.4,"Acuña":0.1,"Smith":0.2,"Mateo":0.1,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0 },
     { week:"G24", "Olson":1.7,"Albies":1.4,"Baldwin":1.2,"Harris":0.9,"Dubón":0.6,"Acuña":0.2,"Smith":0.3,"Mateo":0.2,"Riley":0.2,"White":0.0,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0 },
     { week:"G30", "Olson":2.0,"Albies":1.6,"Baldwin":1.4,"Harris":1.1,"Dubón":0.7,"Acuña":0.3,"Smith":0.4,"Mateo":0.3,"Riley":0.2,"White":-0.1,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0 },
     { week:"G36", "Olson":2.1,"Albies":1.7,"Baldwin":1.6,"Harris":1.2,"Dubón":0.8,"Acuña":0.5,"Smith":0.5,"Mateo":0.4,"Riley":0.2,"White":-0.2,"Yaz":-0.3,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":-0.1 },
     { week:"G42", "Olson":2.4,"Albies":1.5,"Baldwin":1.8,"Harris":1.2,"Dubón":1.0,"Acuña":0.6,"Smith":0.6,"Mateo":0.6,"Riley":0.3,"White":-0.1,"Yaz":0.1,"León":0.0,"Kim":0.1,"Tromp":0.0,"Murphy":-0.2 },
     { week:"G54", "Olson":2.2,"Albies":1.4,"Baldwin":2.3,"Harris":1.5,"Dubón":0.9,"Acuña":0.5,"Smith":0.6,"Mateo":0.6,"Riley":0.5,"White":-0.1,"Yaz":0.3,"León":-0.2,"Kim":-0.6,"Tromp":0.1,"Murphy":-0.2 },
     { week:"G60", "Olson":2.2,"Albies":1.5,"Baldwin":2.2,"Harris":1.9,"Dubón":1.0,"Acuña":1.0,"Smith":0.6,"Mateo":0.9,"Riley":0.3,"White":-0.1,"Yaz":0.6,"León":-0.3,"Kim":-0.8,"Tromp":-0.1,"Murphy":-0.2 },
     { week:"G66", "Olson":2.3,"Albies":1.7,"Baldwin":2.2,"Harris":2.1,"Dubón":1.5,"Acuña":1.0,"Smith":0.5,"Mateo":0.8,"Riley":0.2,"White":-0.1,"Yaz":0.5,"León":-0.4,"Kim":-0.9,"Tromp":-0.2,"Murphy":-0.2 },
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"D.Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"D.Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"D.Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"D.Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"D.Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"D.Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"D.Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"D.Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"D.Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"D.Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"D.Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0 },
   ];

// =====================================================================
// COMPOSITE METRICS — append to bottom of bravesData.js
// Adds h.truHit (hitters) and p.truArm (pitchers) to every player.
// 100 = league avg · 115 = good · 130 = elite · 70 = poor
// =====================================================================

// League average constants (2026 MLB approximations)
const LG = {
  wrc:    100,   sd_wrc:    30,
  xwoba:  0.315, sd_xwoba:  0.040,
  barrel: 7.5,   sd_barrel: 4.0,
  chase:  28.5,  sd_chase:  5.0,
  siera:  4.10,  sd_siera:  0.75,
  kbb:    14.0,  sd_kbb:    5.0,
  csw:    30.0,  sd_csw:    3.0,
};

// Weights — the four/three-axis design
const W_HIT = { wrc: 0.35, xwoba: 0.30, barrel: 0.20, chase: 0.15 };
const W_ARM = { siera: 0.50, kbb: 0.30, csw: 0.20 };

const _pct = (s) => { if (s == null) return null; const n = parseFloat(String(s).replace("%","")); return isNaN(n) ? null : n; };
const _avg = (s) => { if (s == null) return null; const n = parseFloat(s); return isNaN(n) ? null : n; };
const _z   = (v, m, sd) => (v - m) / sd;

// Lookup statcast row by name (only needed for barrel% and chase%)
const _SCH = Object.fromEntries(statcastHitters.map(h => [h.name, h]));

export function computeTruHit(h) {
  const sc = _SCH[h.name];
  if (!sc) return null;
  const wrc    = h.wrc;
  const xwoba  = _avg(h.xwoba) ?? _avg(sc.xwoba);
  const barrel = _pct(sc.barrel);
  const chase  = _pct(sc.chase);
  if (wrc == null || xwoba == null || barrel == null || chase == null) return null;
  const composite =
      W_HIT.wrc    * _z(wrc,    LG.wrc,    LG.sd_wrc)
    + W_HIT.xwoba  * _z(xwoba,  LG.xwoba,  LG.sd_xwoba)
    + W_HIT.barrel * _z(barrel, LG.barrel, LG.sd_barrel)
    - W_HIT.chase  * _z(chase,  LG.chase,  LG.sd_chase); // invert: lower chase = better
  // 100-centered, 15 per composite SD → 130 ≈ elite, 70 ≈ poor
  return Math.round(100 + composite * 15);
}

export function computeTruArm(p) {
  const siera = _avg(p.siera);
  const k     = _pct(p.kpct);
  const bb    = _pct(p.bbpct);
  const csw   = _pct(p.csw);
  if (siera == null || k == null || bb == null || csw == null) return null;
  const kbb = k - bb;
  const composite =
    - W_ARM.siera * _z(siera, LG.siera, LG.sd_siera)   // invert: lower SIERA = better
    + W_ARM.kbb   * _z(kbb,   LG.kbb,   LG.sd_kbb)
    + W_ARM.csw   * _z(csw,   LG.csw,   LG.sd_csw);
  return Math.round(100 + composite * 15);
}

// Attach so every player has the field — sortable / heatable like any other stat
hitters.forEach(h  => { h.truHit = computeTruHit(h); });
starters.forEach(p => { p.truArm = computeTruArm(p); });
bullpen.forEach(p  => { p.truArm = computeTruArm(p); });
