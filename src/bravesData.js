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
 
   export const lastUpdated = "June 14, 2026";
 
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
     { date:"Thu, Jun 11", opp:"White Sox",   home:false,},
      // Upcoming
     { date:"Fri, Jun 12", opp:"Mets",        home:false,},
     { date:"Sat, Jun 13", opp:"Mets",        home:false,},
     { date:"Sun, Jun 14", opp:"Mets",        home:false,},
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true,},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true,},
     { date:"Thu, Jun 18", opp:"San Francisco",   home:true,},
   ];
   
   export const TEAM_HEADER = {
     record: "45-23",
     runs: 350,
     era: "3.20",
     avg: ".256",
     obp: ".323",
     slg: ".428",
     ops: ".751",
     wrc: 108,
     woba: ".330",
     xwoba: ".334",
     fip: "3.84",
     xera: "3.63",
     xfip: "3.92",
     whip: "1.17",
     gb: "41.2%",
     pitchingKBB: "14.9%",
     siera: "3.82",
     battingK: "20.5%",
     battingBB: "8.2%",
     pitchingK: "23.7%",
     pitchingBB: "8.8%",
     swstr: "11.7%",
     cstr: "15.9%",
     csw: "27.6%",
     fastSwing: "25.4%",
     sqUpSw: "24.0%",
     blastSw: "9.9%",
     idealAtk: "48.9%",
     batFastSwing: "32.4%",
     batSqUpSw: "24.9%",
     batBlastSw: "11.5%",
     batIdealAtk: "50.6%",
     batSwStr: "10.9%",
     batCStr: "14.7%",
     batCSW: "25.6%",
     batChase: "33.4%",
     batWhiff: "24.6%",
     chase: "31.1%",
     whiff: "26.7%",
   };
   
   export const hitters = [
     // Updated June 6, 2026 — Splits (vsL/vsR/RISP) refreshed from FanGraphs; season totals + Savant held from June 9
     // June 12, 2026 — Added high-leverage splits (FanGraphs through Jun 11)
     { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:1.0, war2:0.9, wrc:124, woba:".353", xwoba:".379", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.7%", armValue:null, armStrength:93.1, abs:{netOvr:-2.5, netRuns:-0.6, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.7%", xChalRate:"6.3%", rateVsExp:"+8.4%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:82,woba:".291",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:38,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:146,woba:".385",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:131,woba:".364",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:143,woba:".381",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:216, avg:".303", obp:".389", slg:".543", ops:".931", hr:13, rbi:38, r:39, h:57, doubles:6, triples:0, sb:1, bbpct:"11.1%", kpct:"20.4%", war:2.5, war2:2.2, wrc:159, woba:".404", xwoba:".418", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"27.0%", fastSwing:"53.4%", laSwSp:"42.1%", idealAttack:"49.1%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.0%", xChalRate:"3.8%", rateVsExp:"-2.8%"}, absCatch:{netOvr:12.6, netRuns:0.5, chal:27, won:20, lost:7, wonPct:"74%", chalRate:"2.0%", xChalRate:"2.1%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:84,r:18,h:25,hr:7,rbi:16,avg:".342",obp:".429",slg:".658",ops:"1.086",wrc:202,woba:".466",iso:".315",bbpct:"10.7%",kpct:"14.3%",babip:".333"}, vsR:{pa:132,r:21,h:32,hr:6,rbi:22,avg:".278",obp:".364",slg:".470",ops:".833",wrc:133,woba:".365",iso:".191",bbpct:"11.4%",kpct:"24.2%",babip:".333"}, risp:{pa:54,r:0,h:16,hr:0,rbi:24,avg:".356",obp:".444",slg:".467",ops:".911",wrc:156,woba:".399",iso:".111",bbpct:"14.8%",kpct:"13.0%",babip:".410"}, highLeverage:{pa:12,r:10,h:4,hr:0,rbi:7,avg:".364",obp:".417",slg:".455",ops:".871",wrc:148,woba:".388",iso:".091",bbpct:"8.3%",kpct:"8.3%",babip:".400"}}},
     { name:"Matt Olson", pos:"1B", pa:312, avg:".270", obp:".340", slg:".554", ops:".894", hr:19, rbi:50, r:49, h:72, doubles:19, triples:0, sb:2, bbpct:"9.6%", kpct:"23.1%", war:3.1, war2:2.5, wrc:143, woba:".384", xwoba:".378", oaa:6, frv:5, batSpeed:74.9, squaredUp:"24.6%", fastSwing:"51.3%", laSwSp:"34.0%", idealAttack:"52.5%", armValue:null, armStrength:82.3, abs:{netOvr:1.1, netRuns:0.1, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"4.2%", xChalRate:"3.2%", rateVsExp:"+0.9%"}, splits:{vsL:{pa:125,r:20,h:30,hr:7,rbi:19,avg:".259",obp:".328",slg:".536",ops:".864",wrc:136,woba:".371",iso:".277",bbpct:"8.8%",kpct:"21.6%",babip:".278"}, vsR:{pa:174,r:29,h:44,hr:12,rbi:31,avg:".281",obp:".356",slg:".575",ops:".931",wrc:152,woba:".394",iso:".294",bbpct:"10.9%",kpct:"23.6%",babip:".304"}, risp:{pa:78,r:2,h:14,hr:2,rbi:25,avg:".222",obp:".333",slg:".413",ops:".746",wrc:100,woba:".318",iso:".190",bbpct:"15.4%",kpct:"23.1%",babip:".261"}, highLeverage:{pa:30,r:14,h:6,hr:3,rbi:9,avg:".231",obp:".300",slg:".577",ops:".877",wrc:125,woba:".355",iso:".346",bbpct:"10.0%",kpct:"30.0%",babip:".200"}}},
     { name:"Ozzie Albies", pos:"2B", pa:305, avg:".279", obp:".334", slg:".438", ops:".772", hr:10, rbi:36, r:43, h:73, doubles:13, triples:0, sb:1, bbpct:"7.2%", kpct:"12.1%", war:2.4, war2:1.8, wrc:114, woba:".340", xwoba:".309", oaa:4, frv:2, batSpeed:68.8, squaredUp:"28.3%", fastSwing:"5.8%", laSwSp:"34.5%", idealAttack:"56.3%", armValue:null, armStrength:71.5, abs:{netOvr:-0.2, netRuns:0.3, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.4%", xChalRate:"5.5%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:120,r:14,h:36,hr:4,rbi:14,avg:".310",obp:".333",slg:".504",ops:".838",wrc:130,woba:".361",iso:".195",bbpct:"2.5%",kpct:"5.8%",babip:".298"}, vsR:{pa:173,r:29,h:40,hr:6,rbi:22,avg:".257",obp:".335",slg:".399",ops:".734",wrc:105,woba:".325",iso:".142",bbpct:"10.4%",kpct:"16.8%",babip:".271"}, risp:{pa:68,r:3,h:19,hr:3,rbi:28,avg:".352",obp:".382",slg:".556",ops:".938",wrc:146,woba:".386",iso:".204",bbpct:"8.8%",kpct:"5.9%",babip:".296"}, highLeverage:{pa:28,r:14,h:7,hr:1,rbi:8,avg:".261",obp:".357",slg:".478",ops:".835",wrc:130,woba:".362",iso:".217",bbpct:"10.7%",kpct:"10.7%",babip:".250"}}},
     { name:"Michael Harris II", pos:"CF", pa:258, avg:".303", obp:".337", slg:".512", ops:".850", hr:13, rbi:40, r:31, h:71, doubles:9, triples:0, sb:3, bbpct:"4.7%", kpct:"20.2%", war:2.2, war2:2.1, wrc:135, woba:".370", xwoba:".383", oaa:5, frv:5, batSpeed:75.0, squaredUp:"25.5", fastSwing:"50.7%", laSwSp:"29.6%", idealAttack:"49.4%", armValue:null, armStrength:84.9, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"5.9%", xChalRate:"2.8%", rateVsExp:"+3.1%"}, splits:{vsL:{pa:91,r:9,h:25,hr:4,rbi:14,avg:".294",obp:".341",slg:".482",ops:".823",wrc:129,woba:".360",iso:".188",bbpct:"5.5%",kpct:"18.7%",babip:".328"}, vsR:{pa:154,r:22,h:46,hr:9,rbi:26,avg:".313",obp:".338",slg:".531",ops:".868",wrc:139,woba:".375",iso:".218",bbpct:"3.9%",kpct:"19.5%",babip:".339"}, risp:{pa:51,r:0,h:13,hr:0,rbi:18,avg:".289",obp:".353",slg:".400",ops:".753",wrc:111,woba:".334",iso:".111",bbpct:"7.8%",kpct:"13.7%",babip:".333"}, highLeverage:{pa:23,r:9,h:6,hr:1,rbi:9,avg:".263",obp:".348",slg:".526",ops:".874",wrc:136,woba:".371",iso:".263",bbpct:"8.7%",kpct:"17.4%",babip:".267"}}},
     { name:"Austin Riley", pos:"3B", pa:289, avg:".203", obp:".287", slg:".348", ops:".635", hr:8, rbi:34, r:31, h:51, doubles:10, triples:1, sb:4, bbpct:"8.7%", kpct:"28.4%", war:0.2, war2:0.1, wrc:79, woba:".286", xwoba:".301", oaa:-5, frv:-4, batSpeed:75.5, squaredUp:"21.3%", fastSwing:"55.4%", laSwSp:"29.4%", idealAttack:"46.6%", armValue:null, armStrength:84.2, abs:{netOvr:0.3, netRuns:0.0, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"2.0%", xChalRate:"5.2%", rateVsExp:"-3.1%"}, splits:{vsL:{pa:96,r:9,h:19,hr:1,rbi:12,avg:".224",obp:".302",slg:".318",ops:".620",wrc:76,woba:".282",iso:".094",bbpct:"10.4%",kpct:"32.3%",babip:".333"}, vsR:{pa:181,r:22,h:33,hr:7,rbi:22,avg:".198",obp:".276",slg:".370",ops:".647",wrc:80,woba:".289",iso:".173",bbpct:"6.6%",kpct:"26.5%",babip:".231"}, risp:{pa:77,r:4,h:18,hr:4,rbi:30,avg:".257",obp:".299",slg:".514",ops:".813",wrc:118,woba:".345",iso:".257",bbpct:"6.5%",kpct:"29.9%",babip:".311"}, highLeverage:{pa:31,r:4,h:8,hr:1,rbi:12,avg:".259",obp:".290",slg:".407",ops:".698",wrc:86,woba:".297",iso:".148",bbpct:"6.5%",kpct:"19.4%",babip:".273"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:268, avg:".259", obp:".315", slg:".401", ops:".715", hr:6, rbi:37, r:28, h:61, doubles:13, triples:2, sb:1, bbpct:"6.7%", kpct:"15.7%", war:1.8, war2:1.6, wrc:100, woba:".323", xwoba:".314", oaa:7, frv:5, batSpeed:69.0, squaredUp:"26.6%", fastSwing:"2.8%", laSwSp:"38.7%", idealAttack:"36.9%", armValue:null, armStrength:90.8, abs:{netOvr:-4.0, netRuns:-0.9, chal:9, won:2, lost:7, wonPct:"22%", chalRate:"7.3%", xChalRate:"4.7%", rateVsExp:"+2.6%"}, splits:{vsL:{pa:98,r:9,h:21,hr:1,rbi:16,avg:".233",obp:".296",slg:".333",ops:".629",wrc:77,woba:".284",iso:".100",bbpct:"7.1%",kpct:"12.2%",babip:".260"}, vsR:{pa:157,r:19,h:41,hr:5,rbi:21,avg:".278",obp:".333",slg:".458",ops:".792",wrc:120,woba:".347",iso:".181",bbpct:"7.0%",kpct:"17.8%",babip:".315"}, risp:{pa:63,r:2,h:20,hr:2,rbi:32,avg:".351",obp:".403",slg:".596",ops:"1.000",wrc:177,woba:".431",iso:".246",bbpct:"7.9%",kpct:"12.7%",babip:".383"}, highLeverage:{pa:29,r:6,h:11,hr:1,rbi:19,avg:".423",obp:".483",slg:".731",ops:"1.214",wrc:235,woba:".516",iso:".308",bbpct:"10.3%",kpct:"6.9%",babip:".435"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:62, avg:".089", obp:".177", slg:".089", ops:".267", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"9.7%", kpct:"22.6%", war:-0.8, war2:-0.9, wrc:-21, woba:".140", xwoba:".219", oaa:-4, frv:-3, batSpeed:71.9, squaredUp:"17.0%", fastSwing:"22.3%", laSwSp:"18.4%", idealAttack:"55.3%", armValue:null, armStrength:null, abs:{netOvr:0.8, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.0%", xChalRate:"4.4%", rateVsExp:"-2.4%"}, splits:{vsL:{pa:29,r:2,h:2,hr:0,rbi:2,avg:".077",obp:".172",slg:".077",ops:".249",wrc:-24,woba:".134",iso:".000",bbpct:"10.3%",kpct:"27.6%",babip:".111"}, vsR:{pa:28,r:3,h:3,hr:0,rbi:1,avg:".115",obp:".179",slg:".115",ops:".294",wrc:-16,woba:".146",iso:".000",bbpct:"7.1%",kpct:"21.4%",babip:".150"}, risp:{pa:14,r:0,h:3,hr:0,rbi:3,avg:".250",obp:".357",slg:".250",ops:".607",wrc:83,woba:".292",iso:".000",bbpct:"14.3%",kpct:"21.4%",babip:".333"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".355",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:200, avg:".232", obp:".320", slg:".345", ops:".665", hr:3, rbi:17, r:26, h:40, doubles:9, triples:1, sb:1, bbpct:"9.5%", kpct:"23.5%", war:0.7, war2:0.4, wrc:90, woba:".305", xwoba:".293", oaa:0, frv:1, batSpeed:71.1, squaredUp:"29.0%", fastSwing:"6.7%", laSwSp:"29.9%", idealAttack:"62.4%", armValue:null, armStrength:83.0, abs:{netOvr:2.6, netRuns:0.6, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"1.4%", xChalRate:"3.3%", rateVsExp:"-1.9%"}, splits:{vsL:{pa:24,r:4,h:3,hr:0,rbi:1,avg:".150",obp:".292",slg:".200",ops:".492",wrc:52,woba:".247",iso:".050",bbpct:"8.3%",kpct:"33.3%",babip:".250"}, vsR:{pa:169,r:22,h:38,hr:3,rbi:16,avg:".245",obp:".325",slg:".371",ops:".696",wrc:97,woba:".314",iso:".126",bbpct:"9.5%",kpct:"21.3%",babip:".304"}, risp:{pa:46,r:0,h:12,hr:0,rbi:12,avg:".293",obp:".370",slg:".390",ops:".760",wrc:117,woba:".342",iso:".098",bbpct:"10.9%",kpct:"34.8%",babip:".480"}, highLeverage:{pa:18,r:5,h:5,hr:0,rbi:5,avg:".313",obp:".389",slg:".438",ops:".826",wrc:135,woba:".368",iso:".125",bbpct:"11.1%",kpct:"27.8%",babip:".455"}}},
     { name:"Dominic Smith", pos:"DH", pa:171, avg:".282", obp:".318", slg:".436", ops:".754", hr:6, rbi:28, r:24, h:43, doubles:4, triples:1, sb:0, bbpct:"5.3%", kpct:"12.9%", war:0.6, war2:0.3, wrc:107, woba:".340", xwoba:".351", oaa:null, frv:null, batSpeed:68.7, squaredUp:"29.3%", fastSwing:"5.2%", laSwSp:"37.7%", idealAttack:"53.5%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"7.1%", xChalRate:"5.5%", rateVsExp:"+1.7%"}, splits:{vsL:{pa:22,r:3,h:4,hr:0,rbi:2,avg:".222",obp:".333",slg:".278",ops:".611",wrc:80,woba:".289",iso:".056",bbpct:"13.6%",kpct:"9.1%",babip:".250"}, vsR:{pa:140,r:21,h:40,hr:9,rbi:26,avg:".300",obp:".329",slg:".477",ops:".805",wrc:121,woba:".348",iso:".177",bbpct:"4.3%",kpct:"14.3%",babip:".308"}, risp:{pa:44,r:3,h:12,hr:3,rbi:24,avg:".316",obp:".326",slg:".579",ops:".905",wrc:138,woba:".373",iso:".263",bbpct:"4.5%",kpct:"9.1%",babip:".265"}, highLeverage:{pa:20,r:4,h:4,hr:1,rbi:10,avg:".200",obp:".263",slg:".467",ops:".730",wrc:86,woba:".297",iso:".267",bbpct:"10.0%",kpct:"25.0%",babip:".182"}}},
     { name:"Jorge Mateo", pos:"SS", pa:100, avg:".287", obp:".330", slg:".468", ops:".798", hr:4, rbi:11, r:24, h:27, doubles:4, triples:0, sb:7, bbpct:"6.0%", kpct:"29.0%", war:1.0, war2:0.9, wrc:122, woba:".364", xwoba:".356", oaa:1, frv:1, batSpeed:73.7, squaredUp:"19.7%", fastSwing:"36.0%", laSwSp:"46.0%", idealAttack:"42.6%", armValue:null, armStrength:90.4, abs:{netOvr:-1.8, netRuns:-0.3, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"8.7%", xChalRate:"4.7%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:36,r:8,h:11,hr:2,rbi:3,avg:".324",obp:".361",slg:".529",ops:".891",wrc:148,woba:".388",iso:".206",bbpct:"5.6%",kpct:"36.1%",babip:".474"}, vsR:{pa:60,r:16,h:16,hr:2,rbi:8,avg:".286",obp:".333",slg:".464",ops:".798",wrc:122,woba:".349",iso:".179",bbpct:"6.7%",kpct:"23.3%",babip:".350"}, risp:{pa:23,r:0,h:6,hr:0,rbi:6,avg:".286",obp:".348",slg:".286",ops:".634",wrc:84,woba:".294",iso:".000",bbpct:"8.7%",kpct:"34.8%",babip:".462"}, highLeverage:{pa:9,r:7,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".355",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Eli White", pos:"OF", pa:87, avg:".238", obp:".287", slg:".425", ops:".712", hr:2, rbi:11, r:11, h:15, doubles:2, triples:1, sb:2, bbpct:"5.7%", kpct:"16.1%", war:0.4, war2:-0.1, wrc:95, woba:".268", xwoba:".294", oaa:0, frv:-1, batSpeed:73.7, squaredUp:"23.3%", fastSwing:"39.1%", laSwSp:"33.3%", idealAttack:"54.6%", armValue:null, armStrength:null, abs:{netOvr:0.2, netRuns:0.7, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.8%", xChalRate:"4.6%", rateVsExp:"-1.8%"}, splits:{vsL:{pa:48,r:4,h:10,hr:1,rbi:7,avg:".220",obp:".313",slg:".366",ops:".678",wrc:90,woba:".303",iso:".146",bbpct:"10.4%",kpct:"18.8%",babip:".250"}, vsR:{pa:32,r:7,h:6,hr:1,rbi:4,avg:".188",obp:".188",slg:".313",ops:".500",wrc:31,woba:".216",iso:".125",bbpct:"0.0%",kpct:"15.6%",babip:".192"}, risp:{pa:23,r:1,h:6,hr:1,rbi:10,avg:".316",obp:".391",slg:".526",ops:".918",wrc:151,woba:".392",iso:".211",bbpct:"13.0%",kpct:"13.0%",babip:".313"}, highLeverage:{pa:12,r:3,h:2,hr:0,rbi:4,avg:".200",obp:".333",slg:".200",ops:".533",wrc:65,woba:".266",iso:".000",bbpct:"16.7%",kpct:"8.3%",babip:".222"}}},
     { name:"Sandy León", pos:"C", pa:42, avg:".095", obp:".095", slg:".095", ops:".190", hr:0, rbi:0, r:0, h:3, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.5, war2:-0.4, wrc:-58, woba:".075", xwoba:".149", oaa:null, frv:1, batSpeed:67.3, squaredUp:"19.4%", fastSwing:"2.8%", laSwSp:"27.3%", idealAttack:"54.2%", armValue:null, armStrength:75.7, absCatch:{netOvr:7.9, netRuns:0.4, chal:17, won:13, lost:4, wonPct:"76%", chalRate:"2.8%", xChalRate:"2.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:16,r:0,h:2,hr:0,rbi:0,avg:".125",obp:".125",slg:".125",ops:".250",wrc:-40,woba:".112",iso:".000",bbpct:"0.0%",kpct:"43.8%",babip:".222"}, vsR:{pa:20,r:0,h:1,hr:0,rbi:0,avg:".050",obp:".050",slg:".050",ops:".100",wrc:-85,woba:".045",iso:".000",bbpct:"0.0%",kpct:"35.0%",babip:".077"}, risp:{pa:7,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"71.4%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:11, woba:".187", xwoba:".178", oaa:null, frv:1, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-1.4, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:19,woba:".197",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:7,woba:".179",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".199",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:188,woba:".448",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.2, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.7, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.2%", rateVsExp:"+1.5%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".100",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:492,woba:".895",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
   ];
   
   export const starters = [
     // Updated June 9, 2026 — B-Ref + FanGraphs through June 9 (45-21); Savant held from June 9
     { name:"Chris Sale", wl:"8-5", era:"2.30", ip:"78.1", kpct:"28.8%", bbpct:"6.3%", whip:"1.047", war:2.3, war2:2.1, fip:"2.82", xfip:"3.07", siera:"3.06", batSpeed:70.7, fastSwing:"17.9%", swstr:"13.5%", cstr:"17.5%", csw:"31.0%", laSwSp:"38.2%", idealAttack:"46.3%", splits:{vsL:{ip:"19.1",era:"1.40",fip:"2.02",xfip:"1.87",whip:"0.93",avg:".211",obp:".273",slg:".310",woba:".265",kpct:"33.3%",bbpct:"3.8%",kbb:"29.5%"}, vsR:{ip:"59.0",era:"2.59",fip:"3.08",xfip:"3.47",whip:"1.08",avg:".216",obp:".286",slg:".312",woba:".273",kpct:"27.4%",bbpct:"7.1%",kbb:"20.3%"}}},
     { name:"Spencer Strider", wl:"4-1", era:"4.00", ip:"36.0", kpct:"29.1%", bbpct:"12.8%", whip:"1.278", war:0.4, war2:0.4, fip:"4.46", xfip:"4.16", siera:"4.04", batSpeed:72.5, fastSwing:"26.4%", swstr:"12.5%", cstr:"15.2%", csw:"27.8%", laSwSp:"34.9%", idealAttack:"46.0%", splits:{vsL:{ip:"22.2",era:"4.76",fip:"5.18",xfip:"4.37",whip:"1.28",avg:".207",obp:".305",slg:".476",woba:".338",kpct:"28.4%",bbpct:"12.6%",kbb:"15.8%"}, vsR:{ip:"13.1",era:"2.70",fip:"3.25",xfip:"3.81",whip:"1.28",avg:".222",obp:".321",slg:".356",woba:".305",kpct:"30.2%",bbpct:"13.2%",kbb:"17.0%"}}},
     { name:"Bryce Elder", wl:"5-3", era:"2.66", ip:"84.2", kpct:"20.8%", bbpct:"7.3%", whip:"1.051", war:1.8, war2:1.7, fip:"3.46", xfip:"3.91", siera:"4.08", batSpeed:72.3, fastSwing:"26.4%", swstr:"9.4%", cstr:"16.2%", csw:"25.6%", laSwSp:"29.5%", idealAttack:"49.0%", splits:{vsL:{ip:"56.2",era:"2.06",fip:"3.54",xfip:"4.32",whip:"0.88",avg:".155",obp:".235",slg:".247",woba:".224",kpct:"20.5%",bbpct:"9.1%",kbb:"11.4%"}, vsR:{ip:"28.0",era:"3.86",fip:"3.28",xfip:"3.09",whip:"1.39",avg:".291",obp:".325",slg:".410",woba:".325",kpct:"21.1%",bbpct:"4.1%",kbb:"17.1%"}}},
     { name:"Martín Pérez", wl:"4-3", era:"3.02", ip:"56.2", kpct:"20.9%", bbpct:"8.9%", whip:"1.059", war:1.2, war2:0.6, fip:"3.98", xfip:"4.00", siera:"4.18", batSpeed:73.2, fastSwing:"34.1%", swstr:"9.0%", cstr:"18.5%", csw:"27.6%", laSwSp:"36.5%", idealAttack:"49.1%", splits:{vsL:{ip:"16.2",era:"2.70",fip:"3.94",xfip:"3.69",whip:"0.90",avg:".186",obp:".262",slg:".373",woba:".281",kpct:"23.1%",bbpct:"6.2%",kbb:"16.9%"}, vsR:{ip:"40.0",era:"3.15",fip:"4.00",xfip:"4.12",whip:"1.13",avg:".207",obp:".283",slg:".364",woba:".286",kpct:"20.0%",bbpct:"10.0%",kbb:"10.0%"}}},
     { name:"Grant Holmes", wl:"4-2", era:"4.05", ip:"66.2", kpct:"20.6%", bbpct:"10.1%", whip:"1.335", war:0.6, war2:0.0, fip:"5.26", xfip:"4.43", siera:"4.50", batSpeed:72.7, fastSwing:"28.0%", swstr:"12.9%", cstr:"14.4%", csw:"27.2%", laSwSp:"33.5%", idealAttack:"49.9%", splits:{vsL:{ip:"39.1",era:"3.66",fip:"5.34",xfip:"4.21",whip:"1.35",avg:".231",obp:".321",slg:".429",woba:".332",kpct:"22.6%",bbpct:"11.3%",kbb:"11.3%"}, vsR:{ip:"27.1",era:"4.61",fip:"5.15",xfip:"4.75",whip:"1.32",avg:".241",obp:".311",slg:".426",woba:".326",kpct:"17.6%",bbpct:"8.4%",kbb:"9.2%"}}},
     { name:"JR Ritchie", wl:"1-1", era:"4.56", ip:"25.2", kpct:"18.4%", bbpct:"14.0%", whip:"1.442", war:0.0, war2:-0.2, fip:"5.71", xfip:"4.99", siera:"5.17", batSpeed:72.2, fastSwing:"27.0%", swstr:"8.5%", cstr:"14.7%", csw:"23.2%", laSwSp:"31.1%", idealAttack:"52.9%", splits:{vsL:{ip:"16.0",era:"6.75",fip:"7.20",xfip:"5.36",whip:"1.75",avg:".270",obp:".403",slg:".492",woba:".399",kpct:"18.2%",bbpct:"14.3%",kbb:"3.9%"}, vsR:{ip:"9.2",era:"0.93",fip:"3.18",xfip:"4.20",whip:"0.93",avg:".125",obp:".243",slg:".125",woba:".192",kpct:"18.9%",bbpct:"13.5%",kbb:"5.4%"}}},
   ];
   
   export const bullpen = [
     // Updated June 9, 2026 — B-Ref + FanGraphs through June 9 (45-21); Savant held from June 9
     { name:"Raisel Iglesias", role:"CL", era:"1.21", ip:"22.1", sv:13, kpct:"30.6%", bbpct:"4.7%", whip:"0.940", fip:"1.89", war:0.9, war2:0.8, xfip:"2.88", siera:"2.47", batSpeed:71.3, fastSwing:"26.2%", swstr:"15.5%", cstr:"16.5%", csw:"32.0", laSwSp:"27.3%", idealAttack:"49.0%", splits:{vsL:{ip:"14.0",era:"0.64",fip:"3.32",xfip:"4.26",whip:"0.93",avg:".191",obp:".255",slg:".298",woba:".251",kpct:"21.6%",bbpct:"7.8%",kbb:"13.7%"}, vsR:{ip:"8.1",era:"2.16",fip:"-0.50",xfip:"0.55",whip:"0.96",avg:".235",obp:".235",slg:".265",woba:".222",kpct:"44.1%",bbpct:"0.0%",kbb:"44.1%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.16", ip:"31.0", sv:0, kpct:"34.8%", bbpct:"4.5%", whip:"0.613", fip:"1.49", war:1.2, war2:1.1, xfip:"2.57", siera:"2.05", batSpeed:72.4, fastSwing:"28.0%", swstr:"19.5%", cstr:"15.4%", csw:"34.9%", laSwSp:"33.8%", idealAttack:"49.5%", splits:{vsL:{ip:"11.0",era:"2.45",fip:"0.74",xfip:"1.93",whip:"0.73",avg:".158",obp:".195",slg:".342",woba:".226",kpct:"39.0%",bbpct:"4.9%",kbb:"34.1%"}, vsR:{ip:"20.0",era:"0.45",fip:"1.90",xfip:"2.93",whip:"0.55",avg:".118",obp:".155",slg:".176",woba:".152",kpct:"32.4%",bbpct:"4.2%",kbb:"28.2%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.61", ip:"29.2", sv:4, kpct:"22.5%", bbpct:"4.5%", whip:"0.809", fip:"2.36", war:1.5, war2:0.8, xfip:"3.30", siera:"3.17", batSpeed:71.4, fastSwing:"23.2%", swstr:"12.9%", cstr:"12.2%", csw:"25.2%", laSwSp:"32.5%", idealAttack:"51.5%", splits:{vsL:{ip:"17.1",era:"0.52",fip:"2.70",xfip:"3.63",whip:"0.58",avg:".138",obp:".167",slg:".190",woba:".162",kpct:"21.3%",bbpct:"3.3%",kbb:"18.0%"}, vsR:{ip:"12.1",era:"0.73",fip:"1.89",xfip:"2.83",whip:"1.14",avg:".234",obp:".280",slg:".255",woba:".246",kpct:"24.0%",bbpct:"6.0%",kbb:"18.0%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.37", war:0.4, war2:0.1, xfip:"3.93", siera:"3.40", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.2%", idealAttack:"56.0%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.86",xfip:"3.75",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".321",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.17",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".284",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.33", ip:"27.0", sv:1, kpct:"27.3%", bbpct:"8.2%", whip:"1.074", fip:"2.58", war:0.8, war2:0.7, xfip:"3.56", siera:"3.18", batSpeed:71.6, fastSwing:"23.9%", swstr:"12.1%", cstr:"15.5%", csw:"27.7%", laSwSp:"26.1%", idealAttack:"42.1%", splits:{vsL:{ip:"14.2",era:"3.68",fip:"2.62",xfip:"2.93",whip:"1.23",avg:".236",obp:".306",slg:".345",woba:".293",kpct:"30.6%",bbpct:"8.1%",kbb:"22.6%"}, vsR:{ip:"12.1",era:"0.73",fip:"2.53",xfip:"4.31",whip:"0.89",avg:".167",obp:".250",slg:".190",woba:".212",kpct:"22.9%",bbpct:"8.3%",kbb:"14.6%"}}},
     { name:"Reynaldo López", role:"RP", era:"4.06", ip:"37.2", sv:0, kpct:"20.5%", bbpct:"10.8%", whip:"1.460", fip:"4.88", war:0.0, war2:0.0, xfip:"4.67", siera:"4.51", batSpeed:71.2, fastSwing:"18.8%", swstr:"8.4%", cstr:"17.5%", csw:"26.0%", laSwSp:"39.8%", idealAttack:"44.8%", splits:{vsL:{ip:"18.2",era:"4.82",fip:"5.30",xfip:"5.47",whip:"1.93",avg:".264",obp:".404",slg:".417",woba:".372",kpct:"20.2%",bbpct:"19.1%",kbb:"1.1%"}, vsR:{ip:"19.0",era:"3.32",fip:"4.47",xfip:"3.88",whip:"1.00",avg:".243",obp:".260",slg:".446",woba:".303",kpct:"20.8%",bbpct:"1.3%",kbb:"19.5%"}}},
     { name:"Dylan Dodd", role:"RP", era:"1.26", ip:"14.1", sv:1, kpct:"31.5%", bbpct:"7.4%", whip:"0.767", fip:"2.47", war:0.5, war2:0.3, xfip:"3.09", siera:"2.70", batSpeed:72.9, fastSwing:"31.7%", swstr:"14.2%", cstr:"11.3%", csw:"25.5%", laSwSp:"36.4%", idealAttack:"51.7", splits:{vsL:{ip:"5.2",era:"1.59",fip:"2.22",xfip:"3.76",whip:"1.24",avg:".190",obp:".292",slg:".238",woba:".233",kpct:"29.2%",bbpct:"12.5%",kbb:"16.7%"}, vsR:{ip:"8.2",era:"1.04",fip:"2.64",xfip:"2.65",whip:"0.46",avg:".103",obp:".133",slg:".207",woba:".152",kpct:"33.3%",bbpct:"3.3%",kbb:"30.0%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:45,l:23,pct:".662",gb:"—", home:"22-11",away:"23-12", rs:350, ra:236, diff:+114, strk:"L2", l10:"6-4", highlight:true,  srs:1.6 },
     { team:"PHI", full:"Philadelphia Phillies", w:37,l:31,pct:".544",gb:"8.0", home:"19-17",away:"18-14", rs:276, ra:290, diff:-14, strk:"W1", l10:"7-3", highlight:false, srs:-0.2 },
     { team:"WSN", full:"Washington Nationals", w:35,l:34,pct:".507",gb:"10.5", home:"12-20",away:"23-14", rs:372, ra:365, diff:+7, strk:"L1", l10:"5-5", highlight:false, srs:0.3 },
     { team:"MIA", full:"Miami Marlins",        w:34,l:35,pct:".493",gb:"11.5", home:"23-16",away:"11-19", rs:296, ra:302, diff:-6, strk:"W5", l10:"8-2", highlight:false, srs:0.1 },
     { team:"NYM", full:"New York Mets",        w:30,l:38,pct:".441",gb:"15.0", home:"16-17",away:"14-21", rs:272, ra:290, diff:-18, strk:"W1", l10:"5-5", highlight:false, srs:-0.3 },
   ];
   
   export const statcastHitters = [
     { name:"Michael Harris II", ev:"92.8",hardHit:"52.2%",xwoba:".383",xba:".305",xslg:".549",barrel:"15.1%",chase:"44.3%",whiff:"26.3%",kpct:"19.2%",bbpct:"4.5%", gbpct:"43.0%",fbpct:"24.7%",ldpct:"25.3%",pupct:"7.0%",pullAir:"16.7%"},
     { name:"Matt Olson", ev:"93.8",hardHit:"53.5%",xwoba:".378",xba:".265",xslg:".548",barrel:"14.6%",chase:"27.5%",whiff:"24.7%",kpct:"22.7%",bbpct:"10.0%", gbpct:"33.5%",fbpct:"35.0%",ldpct:"22.5%",pupct:"9.0%",pullAir:"21.0%"},
     { name:"Dominic Smith", ev:"89.3",hardHit:"36.9%",xwoba:".351",xba:".292",xslg:".467",barrel:"7.8%",chase:"35.2%",whiff:"19.4%",kpct:"13.6%",bbpct:"5.6%", gbpct:"33.8%",fbpct:"34.6%",ldpct:"26.9%",pupct:"4.6%",pullAir:"15.4%"},
     { name:"Drake Baldwin", ev:"92.8",hardHit:"53.8%",xwoba:".418",xba:".305",xslg:".587",barrel:"18.6%",chase:"34.4%",whiff:"23.1%",kpct:"20.4%",bbpct:"11.1%", gbpct:"44.1%",fbpct:"24.8%",ldpct:"26.2%",pupct:"4.8%",pullAir:"15.9%"},
     { name:"Mauricio Dubón", ev:"86.6",hardHit:"28.4%",xwoba:".314",xba:".262",xslg:".392",barrel:"6.2%",chase:"37.1%",whiff:"17.8%",kpct:"15.7%",bbpct:"7.1%", gbpct:"36.6%",fbpct:"26.8%",ldpct:"28.9%",pupct:"7.7%",pullAir:"14.4%"},
     { name:"Jorge Mateo", ev:"90.4",hardHit:"49.2%",xwoba:".356",xba:".291",xslg:".489",barrel:"11.1%",chase:"39.3%",whiff:"28.6%",kpct:"28.1%",bbpct:"6.3%", gbpct:"42.9%",fbpct:"30.2%",ldpct:"25.4%",pupct:"1.6%",pullAir:"22.2%"},
     { name:"Austin Riley", ev:"90.8",hardHit:"44.1%",xwoba:".301",xba:".210",xslg:".391",barrel:"10.0%",chase:"32.1%",whiff:"31.7%",kpct:"28.5%",bbpct:"7.9%", gbpct:"39.4%",fbpct:"31.8%",ldpct:"20.0%",pupct:"8.8%",pullAir:"19.4%"},
     { name:"Ozzie Albies", ev:"86.8",hardHit:"27.6%",xwoba:".309",xba:".255",xslg:".388",barrel:"4.4%",chase:"35.8%",whiff:"20.4%",kpct:"12.3%",bbpct:"7.2%", gbpct:"36.6%",fbpct:"30.6%",ldpct:"25.0%",pupct:"7.8%",pullAir:"25.4%"},
     { name:"Mike Yastrzemski", ev:"90.6",hardHit:"40.9%",xwoba:".293",xba:".231",xslg:".324",barrel:"3.9%",chase:"27.0%",whiff:"24.3%",kpct:"22.8%",bbpct:"9.3%", gbpct:"41.7%",fbpct:"29.1%",ldpct:"23.6%",pupct:"5.5%",pullAir:"19.7%"},
     { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
     { name:"Eli White", ev:"87.3",hardHit:"35.0%",xwoba:".295",xba:".253",xslg:".352",barrel:"6.7%",chase:"26.5%",whiff:"27.3%",kpct:"17.5%",bbpct:"6.3%", gbpct:"56.7%",fbpct:"21.7%",ldpct:"18.3%",pupct:"3.3%",pullAir:"11.7%"},
     { name:"Ha-Seong Kim", ev:"85.0",hardHit:"23.7%",xwoba:".219",xba:".172",xslg:".222",barrel:"2.8%",chase:"27.3%",whiff:"19.0%",kpct:"24.6%",bbpct:"8.8%", gbpct:"52.6%",fbpct:"31.6%",ldpct:"7.9%",pupct:"7.9%",pullAir:"13.2%"},
     { name:"Sandy León", ev:"82.1",hardHit:"18.2%",xwoba:".149",xba:".151",xslg:".192",barrel:"0.0%",chase:"43.1%",whiff:"28.9%",kpct:"38.9%",bbpct:"0.0%", gbpct:"36.4%",fbpct:"18.2%",ldpct:"22.7%",pupct:"22.7%",pullAir:"36.4%"},
     { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
     { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
   ];
   
   export const statcastPitchers = [
     { name:"Raisel Iglesias", ev:"87.6",hardHit:"29.1%",xwoba:".231",xba:".204",xslg:".276",kpct:"30.6%",bbpct:"4.7%", barrel:"5.6%", chase:"40.1%",whiff:"32.8%",gbpct:"34.5%",fbpct:"27.3%",ldpct:"25.5%",pupct:"12.7%", pullAir:"16.4%"},
     { name:"Dylan Lee", ev:"86.9",hardHit:"32.4%",xwoba:".212",xba:".173",xslg:".254",kpct:"34.8%",bbpct:"4.5%", barrel:"4.4%", chase:"36.7%",whiff:"38.8%",gbpct:"33.8%",fbpct:"30.9%",ldpct:"25.0%",pupct:"10.3%", pullAir:"27.9%"},
     { name:"Robert Suarez", ev:"84.5",hardHit:"31.3%",xwoba:".272",xba:".241",xslg:".341",kpct:"22.5%",bbpct:"4.5%", barrel:"3.8%", chase:"39.3%",whiff:"25.6%",gbpct:"46.3%",fbpct:"25.0%",ldpct:"20.0%",pupct:"8.8%", pullAir:"13.7%"},
     { name:"Bryce Elder", ev:"89.4",hardHit:"38.9%",xwoba:".275",xba:".224",xslg:".332",kpct:"20.8%",bbpct:"7.3%", barrel:"3.7%", chase:"29.9%",whiff:"23.0%",gbpct:"45.9%",fbpct:"26.6%",ldpct:"20.9%",pupct:"6.6%", pullAir:"17.6%"},
     { name:"Chris Sale", ev:"86.8",hardHit:"31.2%",xwoba:".292",xba:".234",xslg:".349",kpct:"28.8%",bbpct:"6.3%", barrel:"6.0%", chase:"36.2%",whiff:"29.5%",gbpct:"44.7%",fbpct:"23.6%",ldpct:"26.6%",pupct:"5.0%", pullAir:"18.1%"},
     { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"29.1%",bbpct:"12.8%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.9%"},
     { name:"Didier Fuentes", ev:"88.3",hardHit:"31.9%",xwoba:".270",xba:".210",xslg:".308",kpct:"27.3%",bbpct:"8.2%", barrel:"4.4%", chase:"28.8%",whiff:"26.8%",gbpct:"39.1%",fbpct:"27.5%",ldpct:"21.7%",pupct:"11.6%", pullAir:"8.7%"},
     { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
     { name:"Martín Pérez", ev:"89.0",hardHit:"39.7%",xwoba:".317",xba:".244",xslg:".389",kpct:"20.9%",bbpct:"8.9%", barrel:"7.7%", chase:"27.8%",whiff:"22.3%",gbpct:"45.5%",fbpct:"25.0%",ldpct:"24.4%",pupct:"5.1%", pullAir:"22.4%"},
     { name:"Grant Holmes", ev:"90.8",hardHit:"45.2%",xwoba:".335",xba:".247",xslg:".437",kpct:"20.6%",bbpct:"10.1%", barrel:"10.2%", chase:"32.9%",whiff:"28.7%",gbpct:"42.1%",fbpct:"26.9%",ldpct:"23.9%",pupct:"7.1%", pullAir:"22.8%"},
     { name:"Reynaldo López", ev:"87.2",hardHit:"36.3%",xwoba:".345",xba:".267",xslg:".435",kpct:"20.5%",bbpct:"10.8%", barrel:"6.3%", chase:"25.1%",whiff:"20.1%",gbpct:"35.4%",fbpct:"27.4%",ldpct:"30.1%",pupct:"7.1%", pullAir:"23.0%"},
     { name:"JR Ritchie", ev:"88.5",hardHit:"37.8%",xwoba:".338",xba:".232",xslg:".386",kpct:"18.4%",bbpct:"14.0%", barrel:"5.4%", chase:"27.8%",whiff:"21.8%",gbpct:"48.6%",fbpct:"25.7%",ldpct:"23.0%",pupct:"2.7%", pullAir:"18.9%"},
     { name:"Dylan Dodd", ev:"89.3",hardHit:"36.4%",xwoba:".268",xba:".220",xslg:".349",kpct:"31.5%",bbpct:"7.4%", barrel:"9.1%", chase:"35.3%",whiff:"30.1%",gbpct:"27.3%",fbpct:"21.2%",ldpct:"30.3%",pupct:"21.2%", pullAir:"36.4%"},
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
   ];
