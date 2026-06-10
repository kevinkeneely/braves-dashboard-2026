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

   export const lastUpdated = "June 9, 2026";

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
     // Upcoming
     { date:"Tue, Jun 9",  opp:"White Sox",   home:false,},
     { date:"Wed, Jun 10", opp:"White Sox",   home:false,},
     { date:"Thu, Jun 11", opp:"White Sox",   home:false,},
     { date:"Fri, Jun 12", opp:"Mets",        home:true,},
     { date:"Sat, Jun 13", opp:"Mets",        home:false,},
     { date:"Sun, Jun 14", opp:"Mets",        home:false,},
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true,},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true,},
     { date:"Thu, Jun 18", opp:"San Francisco",   home:true,},
   ];
   
   export const TEAM_HEADER = {
     record: "45-21",
     runs: 344,
     era: "3.19",
     avg: ".256",
     obp: ".323",
     slg: ".430",
     ops: ".753",
     wrc: 110,
     woba: ".331",
     xwoba: ".334",
     fip: "3.82",
     xera: "3.59",
     xfip: "3.88",
     whip: "1.16",
     gb: "40.6%",
     pitchingKBB: "15.1%",
     siera: "3.78",
     battingK: "20.7%",
     battingBB: "8.3%",
     pitchingK: "23.9%",
     pitchingBB: "8.9%",
     swstr: "11.7%",
     cstr: "15.9%",
     csw: "27.6%",
     fastSwing: "25.5%",
     sqUpSw: "24.0%",
     blastSw: "9.9%",
     idealAtk: "48.7%",
     batFastSwing: "32.3%",
     batSqUpSw: "24.9%",
     batBlastSw: "11.5%",
     batIdealAtk: "50.6%",
     batSwStr: "11.0%",
     batCStr: "14.7%",
     batCSW: "25.7%",
     batChase: "33.4%",
     batWhiff: "24.7%",
     chase: "31.2%",
     whiff: "26.6%",
   };
   
   export const hitters = [
     // Updated June 6, 2026 — Splits (vsL/vsR/RISP) refreshed from FanGraphs; season totals + Savant held from June 9
     { name:"Ronald Acuña Jr.", pos:"RF", pa:233, avg:".254", obp:".373", slg:".425", ops:".798", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"15.0%", kpct:"21.9%", war:1.1, war2:1.0, wrc:126, woba:".355", xwoba:".380", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.2%", fastSwing:"62.0%", laSwSp:"33.6%", idealAttack:"53.7%", armValue:null, armStrength:93.1, abs:{netOvr:-2.5, netRuns:-0.6, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.7%", xChalRate:"6.3%", rateVsExp:"+8.4%"}, splits:{vsL:{pa:80,r:12,h:12,hr:1,rbi:1,avg:".182",obp:".325",slg:".318",ops:".643",wrc:85,woba:".295",iso:".136",bbpct:"16.3%",kpct:"28.7%",babip:".262"}, vsR:{pa:153,r:19,h:37,hr:6,rbi:21,avg:".291",obp:".399",slg:".480",ops:".879",wrc:147,woba:".386",iso:".189",bbpct:"14.4%",kpct:"18.3%",babip:".326"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:132,woba:".364",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:216, avg:".303", obp:".389", slg:".543", ops:".931", hr:13, rbi:38, r:39, h:57, doubles:6, triples:0, sb:1, bbpct:"11.1%", kpct:"20.4%", war:2.5, war2:2.2, wrc:160, woba:".404", xwoba:".418", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"27.0%", fastSwing:"53.4%", laSwSp:"42.1%", idealAttack:"49.1%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.0%", xChalRate:"3.8%", rateVsExp:"-2.8%"}, absCatch:{netOvr:12.6, netRuns:0.5, chal:27, won:20, lost:7, wonPct:"74%", chalRate:"2.0%", xChalRate:"2.1%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:84,r:18,h:25,hr:7,rbi:16,avg:".342",obp:".429",slg:".658",ops:"1.086",wrc:202,woba:".466",iso:".315",bbpct:"10.7%",kpct:"14.3%",babip:".333"}, vsR:{pa:132,r:21,h:32,hr:6,rbi:22,avg:".278",obp:".364",slg:".470",ops:".833",wrc:133,woba:".365",iso:".191",bbpct:"11.4%",kpct:"24.2%",babip:".333"}, risp:{pa:54,r:0,h:16,hr:0,rbi:24,avg:".356",obp:".444",slg:".467",ops:".911",wrc:156,woba:".399",iso:".111",bbpct:"14.8%",kpct:"13.0%",babip:".410"}}},
     { name:"Matt Olson", pos:"1B", pa:290, avg:".267", obp:".338", slg:".539", ops:".877", hr:17, rbi:47, r:47, h:69, doubles:19, triples:0, sb:2, bbpct:"9.7%", kpct:"23.1%", war:2.7, war2:2.3, wrc:140, woba:".375", xwoba:".371", oaa:6, frv:5, batSpeed:74.8, squaredUp:"24.5%", fastSwing:"50.4%", laSwSp:"33.7%", idealAttack:"52.5%", armValue:null, armStrength:82.3, abs:{netOvr:1.1, netRuns:0.1, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"4.2%", xChalRate:"3.2%", rateVsExp:"+0.9%"}, splits:{vsL:{pa:122,r:19,h:28,hr:6,rbi:17,avg:".252",obp:".311",slg:".505",ops:".816",wrc:124,woba:".352",iso:".252",bbpct:"7.4%",kpct:"22.1%",babip:".278"}, vsR:{pa:168,r:28,h:41,hr:11,rbi:30,avg:".279",obp:".357",slg:".565",ops:".922",wrc:151,woba:".391",iso:".286",bbpct:"11.3%",kpct:"23.8%",babip:".306"}, risp:{pa:77,r:2,h:14,hr:2,rbi:25,avg:".222",obp:".325",slg:".413",ops:".737",wrc:97,woba:".313",iso:".190",bbpct:"14.3%",kpct:"23.4%",babip:".261"}}},
     { name:"Ozzie Albies", pos:"2B", pa:283, avg:".275", obp:".332", slg:".442", ops:".774", hr:10, rbi:36, r:41, h:69, doubles:12, triples:0, sb:1, bbpct:"7.4%", kpct:"12.4%", war:2.3, war2:1.7, wrc:115, woba:".341", xwoba:".309", oaa:4, frv:2, batSpeed:68.9, squaredUp:"28.7%", fastSwing:"5.8%", laSwSp:"33.3%", idealAttack:"56.3%", armValue:null, armStrength:71.5, abs:{netOvr:-0.2, netRuns:0.3, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.4%", xChalRate:"5.5%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:116,r:14,h:33,hr:4,rbi:14,avg:".303",obp:".328",slg:".505",ops:".832",wrc:129,woba:".359",iso:".202",bbpct:"2.6%",kpct:"6.0%",babip:".290"}, vsR:{pa:167,r:27,h:36,hr:6,rbi:22,avg:".254",obp:".335",slg:".394",ops:".730",wrc:105,woba:".324",iso:".141",bbpct:"10.8%",kpct:"16.8%",babip:".265"}, risp:{pa:68,r:3,h:19,hr:3,rbi:28,avg:".352",obp:".382",slg:".556",ops:".938",wrc:147,woba:".386",iso:".204",bbpct:"8.8%",kpct:"5.9%",babip:".296"}}},
     { name:"Michael Harris II", pos:"CF", pa:235, avg:".306", obp:".340", slg:".523", ops:".863", hr:13, rbi:40, r:30, h:68, doubles:9, triples:0, sb:3, bbpct:"4.7%", kpct:"18.7%", war:2.3, war2:2.1, wrc:140, woba:".375", xwoba:".386", oaa:5, frv:5, batSpeed:75.0, squaredUp:"26.3%", fastSwing:"51.1%", laSwSp:"28.5%", idealAttack:"49.4%", armValue:null, armStrength:84.9, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"5.9%", xChalRate:"2.8%", rateVsExp:"+3.1%"}, splits:{vsL:{pa:87,r:8,h:24,hr:4,rbi:14,avg:".296",obp:".345",slg:".494",ops:".839",wrc:134,woba:".367",iso:".198",bbpct:"5.7%",kpct:"18.4%",babip:".328"}, vsR:{pa:148,r:22,h:44,hr:9,rbi:26,avg:".312",obp:".338",slg:".539",ops:".877",wrc:142,woba:".379",iso:".227",bbpct:"4.1%",kpct:"18.9%",babip:".333"}, risp:{pa:50,r:0,h:13,hr:0,rbi:18,avg:".295",obp:".360",slg:".409",ops:".769",wrc:117,woba:".341",iso:".114",bbpct:"8.0%",kpct:"14.0%",babip:".342"}}},
     { name:"Austin Riley", pos:"3B", pa:268, avg:".208", obp:".284", slg:".358", ops:".642", hr:8, rbi:34, r:31, h:50, doubles:10, triples:1, sb:4, bbpct:"7.8%", kpct:"28.4%", war:0.3, war2:0.2, wrc:80, woba:".288", xwoba:".305", oaa:-5, frv:-4, batSpeed:75.5, squaredUp:"21.5%", fastSwing:"55.2%", laSwSp:"30.7%", idealAttack:"46.6%", armValue:null, armStrength:84.2, abs:{netOvr:0.3, netRuns:0.0, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"2.0%", xChalRate:"5.2%", rateVsExp:"-3.1%"}, splits:{vsL:{pa:96,r:9,h:19,hr:1,rbi:12,avg:".224",obp:".302",slg:".318",ops:".620",wrc:76,woba:".282",iso:".094",bbpct:"10.4%",kpct:"32.3%",babip:".333"}, vsR:{pa:172,r:22,h:31,hr:7,rbi:22,avg:".200",obp:".273",slg:".381",ops:".654",wrc:82,woba:".291",iso:".181",bbpct:"6.4%",kpct:"26.2%",babip:".231"}, risp:{pa:75,r:4,h:18,hr:4,rbi:30,avg:".265",obp:".307",slg:".529",ops:".836",wrc:126,woba:".355",iso:".265",bbpct:"6.7%",kpct:"29.3%",babip:".318"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:246, avg:".260", obp:".317", slg:".414", ops:".731", hr:6, rbi:36, r:28, h:59, doubles:13, triples:2, sb:1, bbpct:"6.9%", kpct:"16.3%", war:1.8, war2:1.5, wrc:105, woba:".324", xwoba:".313", oaa:7, frv:5, batSpeed:69.1, squaredUp:"27.2%", fastSwing:"2.9%", laSwSp:"37.8%", idealAttack:"36.9%", armValue:null, armStrength:90.8, abs:{netOvr:-4.0, netRuns:-0.9, chal:9, won:2, lost:7, wonPct:"22%", chalRate:"7.3%", xChalRate:"4.7%", rateVsExp:"+2.6%"}, splits:{vsL:{pa:97,r:9,h:21,hr:1,rbi:16,avg:".233",obp:".289",slg:".333",ops:".622",wrc:75,woba:".280",iso:".100",bbpct:"6.2%",kpct:"12.4%",babip:".260"}, vsR:{pa:149,r:19,h:38,hr:5,rbi:20,avg:".277",obp:".336",slg:".467",ops:".803",wrc:124,woba:".352",iso:".190",bbpct:"7.4%",kpct:"18.8%",babip:".317"}, risp:{pa:59,r:2,h:19,hr:2,rbi:31,avg:".352",obp:".407",slg:".611",ops:"1.018",wrc:183,woba:".438",iso:".259",bbpct:"8.5%",kpct:"13.6%",babip:".386"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:57, avg:".096", obp:".175", slg:".096", ops:".272", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"8.8%", kpct:"24.6%", war:-0.7, war2:-0.9, wrc:-20, woba:".140", xwoba:".219", oaa:-4, frv:-3, batSpeed:71.9, squaredUp:"17.0%", fastSwing:"22.3%", laSwSp:"19.4%", idealAttack:"55.3%", armValue:null, armStrength:null, abs:{netOvr:0.8, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.0%", xChalRate:"4.4%", rateVsExp:"-2.4%"}, splits:{vsL:{pa:29,r:1,h:2,hr:0,rbi:2,avg:".077",obp:".172",slg:".077",ops:".249",wrc:-24,woba:".134",iso:".000",bbpct:"10.3%",kpct:"27.6%",babip:".111"}, vsR:{pa:28,r:3,h:3,hr:0,rbi:1,avg:".115",obp:".179",slg:".115",ops:".294",wrc:-16,woba:".146",iso:".000",bbpct:"7.1%",kpct:"21.4%",babip:".150"}, risp:{pa:14,r:0,h:3,hr:0,rbi:3,avg:".250",obp:".357",slg:".250",ops:".607",wrc:83,woba:".292",iso:".000",bbpct:"14.3%",kpct:"21.4%",babip:".333"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:184, avg:".235", obp:".326", slg:".358", ops:".684", hr:3, rbi:17, r:26, h:38, doubles:9, triples:1, sb:1, bbpct:"9.8%", kpct:"22.3%", war:0.7, war2:0.5, wrc:96, woba:".311", xwoba:".299", oaa:0, frv:1, batSpeed:70.9, squaredUp:"28.7%", fastSwing:"5.3%", laSwSp:"30.0%", idealAttack:"62.4%", armValue:null, armStrength:83.0, abs:{netOvr:2.6, netRuns:0.6, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"1.4%", xChalRate:"3.3%", rateVsExp:"-1.9%"}, splits:{vsL:{pa:24,r:4,h:3,hr:0,rbi:1,avg:".150",obp:".292",slg:".200",ops:".492",wrc:53,woba:".247",iso:".050",bbpct:"8.3%",kpct:"33.3%",babip:".250"}, vsR:{pa:160,r:22,h:35,hr:3,rbi:16,avg:".246",obp:".331",slg:".380",ops:".712",wrc:103,woba:".321",iso:".134",bbpct:"10.0%",kpct:"20.6%",babip:".302"}, risp:{pa:44,r:0,h:11,hr:0,rbi:12,avg:".282",obp:".364",slg:".385",ops:".748",wrc:114,woba:".338",iso:".103",bbpct:"11.4%",kpct:"34.1%",babip:".458"}}},
     { name:"Dominic Smith", pos:"DH", pa:153, avg:".302", obp:".342", slg:".475", ops:".817", hr:6, rbi:28, r:24, h:42, doubles:4, triples:1, sb:0, bbpct:"5.9%", kpct:"14.4%", war:0.7, war2:0.5, wrc:126, woba:".355", xwoba:".354", oaa:null, frv:null, batSpeed:68.6, squaredUp:"28.8%", fastSwing:"4.4%", laSwSp:"38.3%", idealAttack:"53.5%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"7.1%", xChalRate:"5.5%", rateVsExp:"+1.7%"}, splits:{vsL:{pa:20,r:3,h:4,hr:0,rbi:2,avg:".250",obp:".368",slg:".313",ops:".681",wrc:102,woba:".319",iso:".063",bbpct:"15.0%",kpct:"10.0%",babip:".286"}, vsR:{pa:133,r:21,h:38,hr:6,rbi:26,avg:".309",obp:".338",slg:".496",ops:".834",wrc:129,woba:".360",iso:".187",bbpct:"4.5%",kpct:"15.0%",babip:".320"}, risp:{pa:39,r:3,h:12,hr:3,rbi:24,avg:".364",obp:".368",slg:".667",ops:"1.035",wrc:172,woba:".422",iso:".303",bbpct:"5.1%",kpct:"10.3%",babip:".310"}}},
     { name:"Jorge Mateo", pos:"SS", pa:91, avg:".294", obp:".341", slg:".482", ops:".823", hr:4, rbi:11, r:23, h:25, doubles:4, triples:0, sb:7, bbpct:"6.6%", kpct:"28.6%", war:0.8, war2:0.8, wrc:130, woba:".361", xwoba:".357", oaa:1, frv:1, batSpeed:73.7, squaredUp:"18.9%", fastSwing:"36.1%", laSwSp:"48.2%", idealAttack:"42.6%", armValue:null, armStrength:90.4, abs:{netOvr:-1.8, netRuns:-0.3, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"8.7%", xChalRate:"4.7%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:34,r:7,h:10,hr:2,rbi:3,avg:".313",obp:".353",slg:".531",ops:".884",wrc:146,woba:".385",iso:".219",bbpct:"5.9%",kpct:"38.2%",babip:".471"}, vsR:{pa:57,r:16,h:15,hr:2,rbi:8,avg:".283",obp:".333",slg:".453",ops:".786",wrc:120,woba:".346",iso:".170",bbpct:"7.0%",kpct:"22.8%",babip:".342"}, risp:{pa:22,r:0,h:6,hr:0,rbi:6,avg:".300",obp:".364",slg:".300",ops:".664",wrc:94,woba:".308",iso:".000",bbpct:"9.1%",kpct:"31.8%",babip:".462"}}},
     { name:"Eli White", pos:"OF", pa:77, avg:".211", obp:".260", slg:".352", ops:".612", hr:2, rbi:11, r:11, h:15, doubles:2, triples:1, sb:2, bbpct:"5.2%", kpct:"18.2%", war:0.2, war2:-0.1, wrc:68, woba:".270", xwoba:".287", oaa:0, frv:-1, batSpeed:73.7, squaredUp:"22.3%", fastSwing:"38.5%", laSwSp:"33.9%", idealAttack:"54.6%", armValue:null, armStrength:null, abs:{netOvr:0.2, netRuns:0.7, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.8%", xChalRate:"4.6%", rateVsExp:"-1.8%"}, splits:{vsL:{pa:47,r:4,h:9,hr:1,rbi:7,avg:".220",obp:".298",slg:".366",ops:".664",wrc:85,woba:".295",iso:".146",bbpct:"8.5%",kpct:"19.1%",babip:".250"}, vsR:{pa:30,r:7,h:6,hr:1,rbi:4,avg:".200",obp:".200",slg:".333",ops:".533",wrc:42,woba:".231",iso:".133",bbpct:"0.0%",kpct:"16.7%",babip:".208"}, risp:{pa:22,r:1,h:6,hr:1,rbi:10,avg:".333",obp:".409",slg:".556",ops:".965",wrc:164,woba:".410",iso:".222",bbpct:"13.6%",kpct:"13.6%",babip:".333"}}},
     { name:"Sandy León", pos:"C", pa:34, avg:".059", obp:".059", slg:".059", ops:".118", hr:0, rbi:0, r:0, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"38.9%", war:-0.4, war2:-0.4, wrc:-65, woba:".075", xwoba:".149", oaa:null, frv:1, batSpeed:67.3, squaredUp:"19.4%", fastSwing:"2.8%", laSwSp:"25.0%", idealAttack:"54.2%", armValue:null, armStrength:75.7, absCatch:{netOvr:7.9, netRuns:0.4, chal:17, won:13, lost:4, wonPct:"76%", chalRate:"2.8%", xChalRate:"2.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:16,r:0,h:2,hr:0,rbi:0,avg:".125",obp:".125",slg:".125",ops:".250",wrc:-39,woba:".112",iso:".000",bbpct:"0.0%",kpct:"43.8%",babip:".222"}, vsR:{pa:20,r:0,h:1,hr:0,rbi:0,avg:".050",obp:".050",slg:".050",ops:".100",wrc:-85,woba:".045",iso:".000",bbpct:"0.0%",kpct:"35.0%",babip:".077"}, risp:{pa:7,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"71.4%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:12, woba:".187", xwoba:".178", oaa:null, frv:1, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"33.3%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-1.4, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:19,woba:".197",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:7,woba:".179",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:20,woba:".199",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.2, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.7, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.2%", rateVsExp:"+1.5%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".100",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
   ];
   
   export const starters = [
     // Updated June 9, 2026 — B-Ref + FanGraphs through June 9 (45-21); Savant held from June 9
     { name:"Chris Sale", wl:"8-4", era:"2.23", ip:"72.2", kpct:"29.3%", bbpct:"6.5%", whip:"1.032", war:2.2, war2:1.9, fip:"2.89", xfip:"3.06", siera:"3.03", batSpeed:70.7, fastSwing:"17.5%", swstr:"13.9%", cstr:"17.6%", csw:"31.5%", laSwSp:"35.8%", idealAttack:"46.3%", splits:{vsL:{ip:"15.2",era:"1.15",fip:"1.93",xfip:"1.64",whip:"0.89",avg:".207",obp:".246",slg:".310",woba:".250",kpct:"32.8%",bbpct:"3.3%",kbb:"29.5%"}, vsR:{ip:"46.1",era:"2.14",fip:"3.27",xfip:"3.35",whip:"0.86",avg:".172",obp:".244",slg:".270",woba:".238",kpct:"28.9%",bbpct:"6.7%",kbb:"22.2%"}}},
     { name:"Spencer Strider", wl:"4-1", era:"4.00", ip:"36.0", kpct:"29.1%", bbpct:"12.8%", whip:"1.278", war:0.4, war2:0.3, fip:"4.47", xfip:"4.14", siera:"4.01", batSpeed:72.4, fastSwing:"26.2%", swstr:"12.5%", cstr:"15.2%", csw:"27.8%", laSwSp:"31.4%", idealAttack:"46.0%", splits:{vsL:{ip:"16.2",era:"4.32",fip:"5.84",xfip:"3.71",whip:"1.08",avg:".155",obp:".269",slg:".448",woba:".315",kpct:"34.3%",bbpct:"13.4%",kbb:"20.9%"}, vsR:{ip:"9.1",era:"1.93",fip:"4.47",xfip:"4.58",whip:"1.29",avg:".200",obp:".333",slg:".367",woba:".321",kpct:"25.0%",bbpct:"16.7%",kbb:"8.3%"}}},
     { name:"Bryce Elder", wl:"5-3", era:"2.66", ip:"84.2", kpct:"20.8%", bbpct:"7.3%", whip:"1.051", war:1.8, war2:1.6, fip:"3.46", xfip:"3.90", siera:"4.06", batSpeed:72.3, fastSwing:"26.5%", swstr:"9.4%", cstr:"16.2%", csw:"25.6%", laSwSp:"31.6%", idealAttack:"49.0%", splits:{vsL:{ip:"46.2",era:"1.54",fip:"3.53",xfip:"4.20",whip:"0.86",avg:".135",obp:".232",slg:".231",woba:".219",kpct:"21.9%",bbpct:"10.7%",kbb:"11.2%"}, vsR:{ip:"22.0",era:"2.86",fip:"2.76",xfip:"2.73",whip:"1.27",avg:".283",obp:".305",slg:".391",woba:".309",kpct:"22.1%",bbpct:"2.1%",kbb:"20.0%"}}},
     { name:"Martín Pérez", wl:"4-3", era:"3.02", ip:"56.2", kpct:"20.9%", bbpct:"8.9%", whip:"1.059", war:1.2, war2:0.6, fip:"3.99", xfip:"3.98", siera:"4.16", batSpeed:73.2, fastSwing:"34.0%", swstr:"9.0%", cstr:"18.5%", csw:"27.6%", laSwSp:"36.5%", idealAttack:"49.1%", splits:{vsL:{ip:"13.2",era:"1.98",fip:"3.15",xfip:"3.43",whip:"0.88",avg:".200",obp:".259",slg:".360",woba:".276",kpct:"22.2%",bbpct:"3.7%",kbb:"18.5%"}, vsR:{ip:"33.0",era:"3.00",fip:"4.14",xfip:"3.97",whip:"1.09",avg:".200",obp:".277",slg:".357",woba:".283",kpct:"21.4%",bbpct:"9.9%",kbb:"11.5%"}}},
     { name:"Grant Holmes", wl:"4-2", era:"3.86", ip:"63.0", kpct:"21.2%", bbpct:"10.0%", whip:"1.317", war:0.7, war2:0.1, fip:"5.11", xfip:"4.27", siera:"4.39", batSpeed:72.8, fastSwing:"28.5%", swstr:"12.7%", cstr:"14.4%", csw:"27.1%", laSwSp:"31.9%", idealAttack:"49.9%", splits:{vsL:{ip:"31.0",era:"3.19",fip:"4.63",xfip:"3.84",whip:"1.26",avg:".211",obp:".300",slg:".386",woba:".307",kpct:"23.8%",bbpct:"11.5%",kbb:"12.3%"}, vsR:{ip:"21.1",era:"4.64",fip:"5.19",xfip:"4.66",whip:"1.36",avg:".238",obp:".312",slg:".429",woba:".329",kpct:"18.3%",bbpct:"9.7%",kbb:"8.6%"}}},
     { name:"JR Ritchie", wl:"1-1", era:"4.56", ip:"25.2", kpct:"18.4%", bbpct:"14.0%", whip:"1.442", war:0.0, war2:-0.2, fip:"5.72", xfip:"4.98", siera:"5.15", batSpeed:72.2, fastSwing:"27.0%", swstr:"8.5%", cstr:"14.7%", csw:"23.2%", laSwSp:"31.1%", idealAttack:"52.9%", splits:{vsL:{ip:"16.0",era:"6.75",fip:"7.20",xfip:"5.36",whip:"1.75",avg:".270",obp:".403",slg:".492",woba:".399",kpct:"18.2%",bbpct:"14.3%",kbb:"3.9%"}, vsR:{ip:"9.2",era:"0.93",fip:"3.18",xfip:"4.20",whip:"0.93",avg:".125",obp:".243",slg:".125",woba:".192",kpct:"18.9%",bbpct:"13.5%",kbb:"5.4%"}}},
   ];
   
   export const bullpen = [
     // Updated June 9, 2026 — B-Ref + FanGraphs through June 9 (45-21); Savant held from June 9
     { name:"Raisel Iglesias", role:"CL", era:"0.87", ip:"20.2", sv:13, kpct:"30.4%", bbpct:"5.1%", whip:"0.968", fip:"1.36", war:1.0, war2:0.9, xfip:"2.90", siera:"2.51", batSpeed:71.4, fastSwing:"27.4%", swstr:"16.4%", cstr:"15.5%", csw:"31.9", laSwSp:"28.3%", idealAttack:"49.0%", splits:{vsL:{ip:"10.0",era:"0.00",fip:"2.58",xfip:"4.12",whip:"1.00",avg:".206",obp:".270",slg:".265",woba:".247",kpct:"18.9%",bbpct:"8.1%",kbb:"10.8%"}, vsR:{ip:"6.2",era:"2.70",fip:"-0.82",xfip:"0.44",whip:"0.75",avg:".192",obp:".192",slg:".231",woba:".187",kpct:"50.0%",bbpct:"0.0%",kbb:"50.0%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.17", ip:"30.2", sv:0, kpct:"34.2%", bbpct:"4.5%", whip:"0.620", fip:"1.54", war:1.2, war2:1.0, xfip:"2.62", siera:"2.10", batSpeed:72.4, fastSwing:"28.2%", swstr:"19.2%", cstr:"15.2%", csw:"34.4%", laSwSp:"33.3%", idealAttack:"49.5%", splits:{vsL:{ip:"8.2",era:"3.12",fip:"0.65",xfip:"2.11",whip:"0.69",avg:".167",obp:".188",slg:".400",woba:".242",kpct:"37.5%",bbpct:"3.1%",kbb:"34.4%"}, vsR:{ip:"17.0",era:"0.53",fip:"2.08",xfip:"3.05",whip:"0.59",avg:".136",obp:".164",slg:".203",woba:".167",kpct:"29.5%",bbpct:"3.3%",kbb:"26.2%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.63", ip:"28.2", sv:4, kpct:"23.1%", bbpct:"4.6%", whip:"0.837", fip:"2.34", war:1.4, war2:0.7, xfip:"3.19", siera:"3.06", batSpeed:71.4, fastSwing:"23.5%", swstr:"12.9%", cstr:"12.2%", csw:"25.1%", laSwSp:"32.9%", idealAttack:"51.5%", splits:{vsL:{ip:"14.2",era:"0.61",fip:"2.74",xfip:"3.38",whip:"0.55",avg:".125",obp:".160",slg:".188",woba:".160",kpct:"23.5%",bbpct:"3.9%",kbb:"19.6%"}, vsR:{ip:"8.2",era:"1.04",fip:"2.04",xfip:"3.01",whip:"1.38",avg:".257",obp:".316",slg:".257",woba:".268",kpct:"23.7%",bbpct:"7.9%",kbb:"15.8%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.38", war:0.4, war2:0.1, xfip:"3.91", siera:"3.38", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.9%", idealAttack:"56.0%", splits:{vsL:{ip:"13.2",era:"5.93",fip:"5.49",xfip:"3.43",whip:"1.10",avg:".200",obp:".273",slg:".480",woba:".321",kpct:"30.9%",bbpct:"9.1%",kbb:"21.8%"}, vsR:{ip:"9.0",era:"0.00",fip:"2.97",xfip:"4.84",whip:"1.44",avg:".250",obp:".341",slg:".306",woba:".302",kpct:"19.5%",bbpct:"9.8%",kbb:"9.8%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.42", ip:"26.0", sv:1, kpct:"28.0%", bbpct:"8.4%", whip:"1.077", fip:"2.57", war:0.8, war2:0.7, xfip:"3.56", siera:"3.12", batSpeed:71.6, fastSwing:"23.8%", swstr:"12.0%", cstr:"15.3%", csw:"27.4%", laSwSp:"27.0%", idealAttack:"42.1%", splits:{vsL:{ip:"11.2",era:"4.63",fip:"3.16",xfip:"3.25",whip:"1.37",avg:".250",obp:".333",slg:".364",woba:".315",kpct:"29.4%",bbpct:"9.8%",kbb:"19.6%"}, vsR:{ip:"8.2",era:"0.00",fip:"2.38",xfip:"4.00",whip:"0.69",avg:".107",obp:".212",slg:".107",woba:".168",kpct:"27.3%",bbpct:"9.1%",kbb:"18.2%"}}},
     { name:"Reynaldo López", role:"RP", era:"4.21", ip:"36.1", sv:0, kpct:"20.5%", bbpct:"10.8%", whip:"1.460", fip:"4.88", war:0.0, war2:0.0, xfip:"4.65", siera:"4.49", batSpeed:71.2, fastSwing:"18.7%", swstr:"8.4%", cstr:"17.5%", csw:"26.0%", laSwSp:"37.9%", idealAttack:"44.8%", splits:{vsL:{ip:"16.2",era:"3.78",fip:"5.42",xfip:"5.37",whip:"1.86",avg:".254",obp:".397",slg:".413",woba:".369",kpct:"20.5%",bbpct:"19.2%",kbb:"1.3%"}, vsR:{ip:"15.2",era:"3.45",fip:"5.12",xfip:"3.95",whip:"0.89",avg:".220",obp:".242",slg:".458",woba:".301",kpct:"21.0%",bbpct:"1.6%",kbb:"19.4%"}}},
     { name:"Dylan Dodd", role:"RP", era:"1.42", ip:"12.2", sv:1, kpct:"34.0%", bbpct:"4.3%", whip:"0.711", fip:"2.08", war:0.3, war2:0.3, xfip:"2.53", siera:"2.08", batSpeed:72.9, fastSwing:"32.6%", swstr:"14.4%", cstr:"12.7%", csw:"27.1%", laSwSp:"29.6%", idealAttack:"51.7", splits:{vsL:{ip:"3.0",era:"3.00",fip:"2.09",xfip:"3.48",whip:"1.33",avg:".250",obp:".308",slg:".333",woba:".257",kpct:"23.1%",bbpct:"7.7%",kbb:"15.4%"}, vsR:{ip:"5.0",era:"0.00",fip:"0.68",xfip:"1.80",whip:"0.40",avg:".118",obp:".118",slg:".118",woba:".106",kpct:"35.3%",bbpct:"0.0%",kbb:"35.3%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:45,l:21,pct:".682",gb:"—", home:"22-11",away:"23-10", rs:344, ra:228, diff:+116, strk:"W3", l10:"8-2", highlight:true,  srs:1.7 },
     { team:"PHI", full:"Philadelphia Phillies", w:35,l:30,pct:".538",gb:"9.5", home:"19-17",away:"16-13", rs:262, ra:281, diff:-19, strk:"W1", l10:"7-3", highlight:false, srs:-0.3 },
     { team:"WSN", full:"Washington Nationals", w:33,l:33,pct:".500",gb:"12.0", home:"12-20",away:"21-13", rs:352, ra:348, diff:+4, strk:"L1", l10:"4-6", highlight:false, srs:0.3 },
     { team:"MIA", full:"Miami Marlins",        w:31,l:35,pct:".470",gb:"14.0", home:"20-16",away:"11-19", rs:276, ra:296, diff:-20, strk:"W2", l10:"5-5", highlight:false, srs:-0.1 },
     { team:"NYM", full:"New York Mets",        w:29,l:36,pct:".446",gb:"15.5", home:"15-15",away:"14-20", rs:265, ra:270, diff:-5, strk:"W1", l10:"7-3", highlight:false, srs:-0.2 },
   ];
   
   export const statcastHitters = [
     { name:"Michael Harris II", ev:"93.0",hardHit:"53.1%",xwoba:".386",xba:".306",xslg:".556",barrel:"15.2%",chase:"43.7%",whiff:"26.4%",kpct:"18.7%",bbpct:"4.7%", gbpct:"43.6%",fbpct:"25.7%",ldpct:"24.0%",pupct:"6.7%",pullAir:"16.8%"},
     { name:"Matt Olson", ev:"93.7",hardHit:"53.1%",xwoba:".371",xba:".263",xslg:".533",barrel:"14.0%",chase:"27.7%",whiff:"24.8%",kpct:"23.1%",bbpct:"9.7%", gbpct:"34.5%",fbpct:"34.0%",ldpct:"22.2%",pupct:"9.3%",pullAir:"19.6%"},
     { name:"Dominic Smith", ev:"88.9",hardHit:"35.5%",xwoba:".354",xba:".292",xslg:".472",barrel:"8.4%",chase:"35.3%",whiff:"20.0%",kpct:"14.4%",bbpct:"5.9%", gbpct:"33.9%",fbpct:"35.5%",ldpct:"27.3%",pupct:"3.3%",pullAir:"16.8%"},
     { name:"Drake Baldwin", ev:"92.8",hardHit:"53.8%",xwoba:".418",xba:".305",xslg:".587",barrel:"18.6%",chase:"34.4%",whiff:"23.1%",kpct:"20.4%",bbpct:"11.1%", gbpct:"44.1%",fbpct:"24.8%",ldpct:"26.2%",pupct:"4.8%",pullAir:"15.9%"},
     { name:"Mauricio Dubón", ev:"87.0",hardHit:"28.9",xwoba:".313",xba:".262",xslg:".390",barrel:"5.9%",chase:"36.4%",whiff:"18.1%",kpct:"16.3%",bbpct:"6.9%", gbpct:"36.4%",fbpct:"27.3%",ldpct:"28.9%",pupct:"7.5%",pullAir:"13.4%"},
     { name:"Jorge Mateo", ev:"89.9",hardHit:"47.5%",xwoba:".357",xba:".289",xslg:".491",barrel:"11.9%",chase:"39.7%",whiff:"29.1%",kpct:"28.6%",bbpct:"6.6%", gbpct:"44.1%",fbpct:"30.5%",ldpct:"23.7%",pupct:"1.7%",pullAir:"25.0%"},
     { name:"Austin Riley", ev:"91.0",hardHit:"44.6%",xwoba:".305",xba:".215",xslg:".401",barrel:"10.2%",chase:"32.3%",whiff:"31.5%",kpct:"28.4%",bbpct:"7.8%", gbpct:"39.2%",fbpct:"31.3%",ldpct:"20.5%",pupct:"9.0%",pullAir:"18.7%"},
     { name:"Ozzie Albies", ev:"87.0",hardHit:"28.7%",xwoba:".307",xba:".251",xslg:".387",barrel:"4.6%",chase:"35.6%",whiff:"20.8%",kpct:"12.4%",bbpct:"7.4%", gbpct:"36.3%",fbpct:"31.4%",ldpct:"24.7%",pupct:"7.6%",pullAir:"23.7%"},
     { name:"Mike Yastrzemski", ev:"90.6",hardHit:"39.7%",xwoba:".299",xba:".236",xslg:".331",barrel:"4.1%",chase:"27.2%",whiff:"24.7%",kpct:"22.3%",bbpct:"9.8%", gbpct:"40.5%",fbpct:"28.9%",ldpct:"24.8%",pupct:"5.8%",pullAir:"20.9%"},
     { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"19.5%"},
     { name:"Eli White", ev:"86.8",hardHit:"32.8%",xwoba:".287",xba:".252",xslg:".345",barrel:"6.9%",chase:"27.4%",whiff:"27.9%",kpct:"18.2%",bbpct:"5.2%", gbpct:"56.9%",fbpct:"20.7%",ldpct:"19.0%",pupct:"3.4%",pullAir:"10.7%"},
     { name:"Ha-Seong Kim", ev:"85.0",hardHit:"23.7%",xwoba:".219",xba:".172",xslg:".222",barrel:"2.8%",chase:"27.3%",whiff:"19.0%",kpct:"24.6%",bbpct:"8.8%", gbpct:"52.6%",fbpct:"31.6%",ldpct:"7.9%",pupct:"7.9%",pullAir:"12.9%"},
     { name:"Sandy León", ev:"82.1",hardHit:"18.2%",xwoba:".149",xba:".151",xslg:".192",barrel:"0.0%",chase:"43.1%",whiff:"28.9%",kpct:"38.9%",bbpct:"0.0%", gbpct:"36.4%",fbpct:"18.2%",ldpct:"22.7%",pupct:"22.7%",pullAir:"43.8%"},
     { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
     { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
   ];
   
   export const statcastPitchers = [
     { name:"Raisel Iglesias", ev:"87.6",hardHit:"27.5%",xwoba:".235",xba:".209",xslg:".276",kpct:"30.4%",bbpct:"5.1%", barrel:"4.0%", chase:"40.9%",whiff:"34.3%",gbpct:"33.3%",fbpct:"25.5%",ldpct:"27.5%",pupct:"13.7%", pullAir:"17.6%"},
     { name:"Dylan Lee", ev:"86.9",hardHit:"32.4%",xwoba:".214",xba:".175",xslg:".256",kpct:"34.2%",bbpct:"4.5%", barrel:"4.4%", chase:"36.2%",whiff:"38.3%",gbpct:"33.8%",fbpct:"30.9%",ldpct:"25.0%",pupct:"10.3%", pullAir:"27.9%"},
     { name:"Robert Suarez", ev:"84.5",hardHit:"31.2%",xwoba:".275",xba:".244",xslg:".344",kpct:"23.1%",bbpct:"4.6%", barrel:"3.9%", chase:"39.4%",whiff:"25.6%",gbpct:"46.8%",fbpct:"24.7%",ldpct:"20.8%",pupct:"7.8%", pullAir:"14.3%"},
     { name:"Bryce Elder", ev:"89.4",hardHit:"38.9%",xwoba:".275",xba:".224",xslg:".331",kpct:"20.8%",bbpct:"7.3%", barrel:"3.7%", chase:"29.9%",whiff:"23.0%",gbpct:"45.9%",fbpct:"26.6%",ldpct:"20.9%",pupct:"6.6%", pullAir:"17.6%"},
     { name:"Chris Sale", ev:"86.9",hardHit:"30.2%",xwoba:".289",xba:".228",xslg:".347",kpct:"29.3%",bbpct:"6.5%", barrel:"6.6%", chase:"36.6%",whiff:"29.8%",gbpct:"44.5%",fbpct:"24.2%",ldpct:"26.4%",pupct:"4.9%", pullAir:"17.0%"},
     { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"29.1%",bbpct:"12.8%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.9%"},
     { name:"Didier Fuentes", ev:"88.5",hardHit:"31.8%",xwoba:".272",xba:".210",xslg:".310",kpct:"28.0%",bbpct:"8.4%", barrel:"4.6%", chase:"28.4%",whiff:"26.5%",gbpct:"37.9%",fbpct:"28.8%",ldpct:"22.7%",pupct:"10.6%", pullAir:"9.1%"},
     { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
     { name:"Martín Pérez", ev:"89.0",hardHit:"39.7%",xwoba:".317",xba:".244",xslg:".389",kpct:"20.9%",bbpct:"8.9%", barrel:"7.7%", chase:"27.8%",whiff:"22.3%",gbpct:"45.5%",fbpct:"25.0%",ldpct:"24.4%",pupct:"5.1%", pullAir:"22.4%"},
     { name:"Grant Holmes", ev:"90.8",hardHit:"46.2%",xwoba:".333",xba:".246",xslg:".437",kpct:"21.2%",bbpct:"10.0%", barrel:"10.4%", chase:"33.5%",whiff:"28.3%",gbpct:"42.4%",fbpct:"26.6%",ldpct:"23.4%",pupct:"7.6%", pullAir:"22.3%"},
     { name:"Reynaldo López", ev:"87.2",hardHit:"36.3%",xwoba:".345",xba:".267",xslg:".435",kpct:"20.5%",bbpct:"10.8%", barrel:"6.3%", chase:"25.1%",whiff:"20.1%",gbpct:"35.4%",fbpct:"27.4%",ldpct:"30.1%",pupct:"7.1%", pullAir:"23.0%"},
     { name:"JR Ritchie", ev:"88.1",hardHit:"35.0%",xwoba:".336",xba:".215",xslg:".393",kpct:"18.3%",bbpct:"16.1%", barrel:"6.7%", chase:"26.1%",whiff:"21.3%",gbpct:"48.6%",ldpct:"23.0%",pupct:"2.7%", pullAir:"18.9%"},
     { name:"Dylan Dodd", ev:"88.5",hardHit:"34.5%",xwoba:".225",xba:".205",xslg:".293",kpct:"34.0%",bbpct:"4.3%", barrel:"6.9%", chase:"37.4%",whiff:"28.6%",gbpct:"31.0%",fbpct:"17.2%",ldpct:"27.6%",pupct:"24.1%", pullAir:"31.0%"},
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