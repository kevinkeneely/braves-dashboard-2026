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
 
   export const lastUpdated = "June 16, 2026";
 
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
      // Upcoming
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true,},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true,},
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
     record: "46-25",
     runs: 359,
     era: "3.29",
     avg: ".254",
     obp: ".320",
     slg: ".424",
     ops: ".744",
     wrc: 106,
     woba: ".327",
     xwoba: ".333",
     fip: "3.89",
     xera: "3.65",
     xfip: "3.94",
     whip: "1.18",
     gb: "41.2%",
     pitchingKBB: "14.8%",
     siera: "3.86",
     battingK: "20.7%",
     battingBB: "8.1%",
     pitchingK: "23.7%",
     pitchingBB: "8.9%",
     swstr: "11.6%",
     cstr: "15.9%",
     csw: "27.5%",
     fastSwing: "25.3%",
     sqUpSw: "24.0%",
     blastSw: "9.9%",
     idealAtk: "49.1%",
     batFastSwing: "32.0%",
     batSqUpSw: "24.7%",
     batBlastSw: "11.5%",
     batIdealAtk: "50.5%",
     batSwStr: "10.9%",
     batCStr: "14.8%",
     batCSW: "25.7%",
     batChase: "33.6%",
     batWhiff: "24.6%",
     chase: "30.9%",
     whiff: "26.6%",
   };
   
export const hitters = [
     // Updated June 15, 2026 — RISP, High Leverage, vsL/vsR splits all refreshed from FanGraphs; season totals + Savant held from June 12
     { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:124, woba:".352", xwoba:".379", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.1, abs:{netOvr:-2.5, netRuns:-0.6, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.2%", rateVsExp:"+8.2%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:82,woba:".291",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:146,woba:".385",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:131,woba:".363",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:143,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:216, avg:".303", obp:".389", slg:".543", ops:".931", hr:13, rbi:38, r:39, h:57, doubles:6, triples:0, sb:1, bbpct:"11.1%", kpct:"20.4%", war:2.4, war2:2.1, wrc:158, woba:".403", xwoba:".418", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"27.0%", fastSwing:"53.4%", laSwSp:"42.1%", idealAttack:"49.1%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.0%", xChalRate:"3.8%", rateVsExp:"-2.8%"}, absCatch:{netOvr:12.6, netRuns:0.5, chal:27, won:20, lost:7, wonPct:"74%", chalRate:"2.0%", xChalRate:"2.1%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:84,r:18,h:25,hr:7,rbi:16,avg:".342",obp:".429",slg:".658",ops:"1.086",wrc:200,woba:".465",iso:".315",bbpct:"10.7%",kpct:"14.3%",babip:".333"}, vsR:{pa:132,r:21,h:32,hr:6,rbi:22,avg:".278",obp:".364",slg:".470",ops:".833",wrc:131,woba:".364",iso:".191",bbpct:"11.4%",kpct:"24.2%",babip:".333"}, risp:{pa:54,r:0,h:16,hr:0,rbi:24,avg:".356",obp:".444",slg:".467",ops:".911",wrc:155,woba:".398",iso:".111",bbpct:"14.8%",kpct:"13.0%",babip:".410"}, highLeverage:{pa:12,r:10,h:4,hr:0,rbi:7,avg:".364",obp:".417",slg:".455",ops:".871",wrc:148,woba:".388",iso:".091",bbpct:"8.3%",kpct:"8.3%",babip:".400"}}},
     { name:"Matt Olson", pos:"1B", pa:312, avg:".270", obp:".340", slg:".554", ops:".894", hr:20, rbi:51, r:51, h:75, doubles:19, triples:0, sb:2, bbpct:"9.6%", kpct:"23.1%", war:3.0, war2:2.5, wrc:142, woba:".380", xwoba:".373", oaa:5, frv:5, batSpeed:74.9, squaredUp:"24.2%", fastSwing:"51.1%", laSwSp:"33.5%", idealAttack:"54.0%", armValue:null, armStrength:82.3, abs:{netOvr:1.3, netRuns:0.2, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"3.9%", xChalRate:"3.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:132,r:22,h:31,hr:8,rbi:20,avg:".261",obp:".326",slg:".546",ops:".872",wrc:138,woba:".373",iso:".286",bbpct:"8.3%",kpct:"22.0%",babip:".277"}, vsR:{pa:180,r:29,h:44,hr:12,rbi:31,avg:".277",obp:".350",slg:".560",ops:".910",wrc:146,woba:".385",iso:".283",bbpct:"10.6%",kpct:"23.9%",babip:".302"}, risp:{pa:80,r:2,h:15,hr:2,rbi:25,avg:".231",obp:".338",slg:".415",ops:".753",wrc:102,woba:".320",iso:".185",bbpct:"15.0%",kpct:"22.5%",babip:".271"}, highLeverage:{pa:30,r:14,h:6,hr:3,rbi:9,avg:".231",obp:".300",slg:".577",ops:".877",wrc:125,woba:".354",iso:".346",bbpct:"10.0%",kpct:"30.0%",babip:".200"}}},
     { name:"Ozzie Albies", pos:"2B", pa:305, avg:".279", obp:".334", slg:".438", ops:".772", hr:10, rbi:37, r:45, h:76, doubles:13, triples:0, sb:1, bbpct:"7.2%", kpct:"12.1%", war:2.4, war2:1.8, wrc:113, woba:".337", xwoba:".313", oaa:5, frv:4, batSpeed:68.9, squaredUp:"28.5%", fastSwing:"5.5%", laSwSp:"34.7%", idealAttack:"56.7%", armValue:null, armStrength:71.5, abs:{netOvr:0.5, netRuns:0.3, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.8%", xChalRate:"5.6%", rateVsExp:"+0.2%"}, splits:{vsL:{pa:127,r:14,h:36,hr:4,rbi:15,avg:".300",obp:".323",slg:".483",ops:".806",wrc:120,woba:".348",iso:".183",bbpct:"2.4%",kpct:"5.5%",babip:".288"}, vsR:{pa:178,r:22,h:40,hr:6,rbi:31,avg:".263",obp:".343",slg:".401",ops:".744",wrc:108,woba:".330",iso:".138",bbpct:"10.7%",kpct:"16.9%",babip:".281"}, risp:{pa:70,r:3,h:20,hr:3,rbi:29,avg:".357",obp:".386",slg:".554",ops:".939",wrc:147,woba:".387",iso:".196",bbpct:"8.6%",kpct:"7.1%",babip:".309"}, highLeverage:{pa:29,r:14,h:6,hr:1,rbi:8,avg:".250",obp:".345",slg:".458",ops:".803",wrc:121,woba:".349",iso:".208",bbpct:"10.3%",kpct:"13.8%",babip:".250"}}},
     { name:"Michael Harris II", pos:"CF", pa:259, avg:".306", obp:".340", slg:".514", ops:".854", hr:14, rbi:41, r:35, h:75, doubles:9, triples:0, sb:3, bbpct:"4.6%", kpct:"20.1%", war:2.3, war2:2.2, wrc:136, woba:".370", xwoba:".381", oaa:6, frv:5, batSpeed:75.0, squaredUp:"24.7", fastSwing:"50.4%", laSwSp:"30.6%", idealAttack:"47.3%", armValue:null, armStrength:84.9, abs:{netOvr:-0.8, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"5.2%", xChalRate:"2.7%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:96,r:10,h:26,hr:4,rbi:14,avg:".289",obp:".333",slg:".467",ops:".800",wrc:122,woba:".350",iso:".178",bbpct:"5.2%",kpct:"19.8%",babip:".328"}, vsR:{pa:162,r:24,h:48,hr:10,rbi:27,avg:".312",obp:".340",slg:".539",ops:".878",wrc:142,woba:".379",iso:".227",bbpct:"4.3%",kpct:"20.4%",babip:".339"}, risp:{pa:52,r:0,h:13,hr:0,rbi:18,avg:".283",obp:".346",slg:".391",ops:".737",wrc:107,woba:".327",iso:".109",bbpct:"7.7%",kpct:"15.4%",babip:".333"}, highLeverage:{pa:25,r:10,h:5,hr:1,rbi:9,avg:".238",obp:".320",slg:".476",ops:".796",wrc:116,woba:".341",iso:".238",bbpct:"8.0%",kpct:"24.0%",babip:".267"}}},
     { name:"Austin Riley", pos:"3B", pa:289, avg:".203", obp:".287", slg:".348", ops:".635", hr:8, rbi:34, r:31, h:52, doubles:11, triples:1, sb:4, bbpct:"8.7%", kpct:"28.4%", war:0.2, war2:0.0, wrc:78, woba:".286", xwoba:".303", oaa:-5, frv:-4, batSpeed:75.5, squaredUp:"21.1%", fastSwing:"55.1%", laSwSp:"30.1%", idealAttack:"47.3%", armValue:null, armStrength:84.2, abs:{netOvr:0.4, netRuns:0.0, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.9%", xChalRate:"5.2%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:100,r:9,h:20,hr:1,rbi:12,avg:".227",obp:".310",slg:".330",ops:".640",wrc:81,woba:".290",iso:".102",bbpct:"11.0%",kpct:"32.0%",babip:".339"}, vsR:{pa:189,r:22,h:32,hr:7,rbi:22,avg:".190",obp:".275",slg:".357",ops:".632",wrc:77,woba:".284",iso:".167",bbpct:"7.4%",kpct:"26.5%",babip:".223"}, risp:{pa:79,r:4,h:18,hr:4,rbi:30,avg:".254",obp:".304",slg:".507",ops:".811",wrc:118,woba:".344",iso:".254",bbpct:"7.6%",kpct:"29.1%",babip:".304"}, highLeverage:{pa:31,r:4,h:7,hr:1,rbi:12,avg:".259",obp:".290",slg:".407",ops:".698",wrc:86,woba:".297",iso:".148",bbpct:"6.5%",kpct:"19.4%",babip:".273"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:268, avg:".259", obp:".315", slg:".401", ops:".715", hr:6, rbi:37, r:28, h:64, doubles:13, triples:2, sb:1, bbpct:"6.7%", kpct:"15.7%", war:1.5, war2:1.5, wrc:99, woba:".317", xwoba:".314", oaa:8, frv:6, batSpeed:68.9, squaredUp:"26.2%", fastSwing:"2.8%", laSwSp:"38.0%", idealAttack:"36.7%", armValue:null, armStrength:90.8, abs:{netOvr:-3.1, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"7.3%", xChalRate:"4.5%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:102,r:9,h:22,hr:1,rbi:16,avg:".234",obp:".294",slg:".330",ops:".624",wrc:75,woba:".282",iso:".096",bbpct:"6.9%",kpct:"11.8%",babip:".259"}, vsR:{pa:166,r:19,h:42,hr:5,rbi:21,avg:".275",obp:".327",slg:".444",ops:".772",wrc:114,woba:".338",iso:".170",bbpct:"6.6%",kpct:"18.1%",babip:".314"}, risp:{pa:65,r:2,h:20,hr:2,rbi:32,avg:".339",obp:".391",slg:".576",ops:".967",wrc:167,woba:".417",iso:".237",bbpct:"7.7%",kpct:"12.3%",babip:".367"}, highLeverage:{pa:30,r:6,h:11,hr:1,rbi:19,avg:".407",obp:".467",slg:".704",ops:"1.170",wrc:223,woba:".498",iso:".296",bbpct:"10.0%",kpct:"6.7%",babip:".417"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:62, avg:".089", obp:".177", slg:".089", ops:".267", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"9.7%", kpct:"22.6%", war:-0.8, war2:-1.0, wrc:-21, woba:".140", xwoba:".215", oaa:-4, frv:-3, batSpeed:72.0, squaredUp:"16.8%", fastSwing:"22.8%", laSwSp:"16.7%", idealAttack:"56.4%", armValue:null, armStrength:null, abs:{netOvr:0.9, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.9%", xChalRate:"4.3%", rateVsExp:"-2.5%"}, splits:{vsL:{pa:31,r:1,h:2,hr:0,rbi:2,avg:".071",obp:".161",slg:".071",ops:".233",wrc:-31,woba:".126",iso:".000",bbpct:"9.7%",kpct:"25.8%",babip:".100"}, vsR:{pa:31,r:3,h:3,hr:0,rbi:1,avg:".107",obp:".194",slg:".107",ops:".301",wrc:-11,woba:".154",iso:".000",bbpct:"9.7%",kpct:"19.4%",babip:".136"}, risp:{pa:16,r:0,h:3,hr:0,rbi:3,avg:".231",obp:".375",slg:".231",ops:".606",wrc:87,woba:".299",iso:".000",bbpct:"18.8%",kpct:"18.8%",babip:".300"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".355",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:200, avg:".232", obp:".320", slg:".345", ops:".665", hr:3, rbi:18, r:26, h:41, doubles:9, triples:1, sb:1, bbpct:"9.5%", kpct:"23.5%", war:0.6, war2:0.3, wrc:90, woba:".302", xwoba:".288", oaa:-1, frv:0, batSpeed:71.1, squaredUp:"28.7%", fastSwing:"6.5%", laSwSp:"29.2%", idealAttack:"61.2%", armValue:null, armStrength:83.0, abs:{netOvr:3.5, netRuns:0.8, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"1.3%", xChalRate:"3.6%", rateVsExp:"-2.3%"}, splits:{vsL:{pa:24,r:4,h:3,hr:0,rbi:1,avg:".150",obp:".292",slg:".200",ops:".492",wrc:52,woba:".247",iso:".050",bbpct:"8.3%",kpct:"33.3%",babip:".250"}, vsR:{pa:176,r:22,h:38,hr:3,rbi:17,avg:".242",obp:".324",slg:".363",ops:".687",wrc:95,woba:".310",iso:".121",bbpct:"9.7%",kpct:"22.2%",babip:".304"}, risp:{pa:48,r:0,h:13,hr:0,rbi:13,avg:".302",obp:".375",slg:".395",ops:".770",wrc:119,woba:".346",iso:".093",bbpct:"10.4%",kpct:"35.4%",babip:".500"}, highLeverage:{pa:19,r:5,h:6,hr:0,rbi:6,avg:".353",obp:".421",slg:".471",ops:".892",wrc:153,woba:".395",iso:".118",bbpct:"10.5%",kpct:"26.3%",babip:".500"}}},
     { name:"Dominic Smith", pos:"DH", pa:171, avg:".282", obp:".318", slg:".436", ops:".754", hr:6, rbi:30, r:25, h:44, doubles:4, triples:1, sb:0, bbpct:"5.3%", kpct:"12.9%", war:0.5, war2:0.2, wrc:106, woba:".327", xwoba:".346", oaa:null, frv:null, batSpeed:68.8, squaredUp:"29.9%", fastSwing:"5.3%", laSwSp:"36.7%", idealAttack:"54.2%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"6.5%", xChalRate:"5.1%", rateVsExp:"+1.4%"}, splits:{vsL:{pa:24,r:3,h:4,hr:0,rbi:2,avg:".200",obp:".304",slg:".250",ops:".554",wrc:63,woba:".263",iso:".050",bbpct:"12.5%",kpct:"8.3%",babip:".222"}, vsR:{pa:147,r:22,h:40,hr:6,rbi:28,avg:".294",obp:".320",slg:".463",ops:".783",wrc:113,woba:".337",iso:".169",bbpct:"4.1%",kpct:"13.6%",babip:".298"}, risp:{pa:47,r:3,h:13,hr:3,rbi:26,avg:".325",obp:".326",slg:".575",ops:".901",wrc:134,woba:".367",iso:".250",bbpct:"4.3%",kpct:"8.5%",babip:".270"}, highLeverage:{pa:21,r:5,h:3,hr:1,rbi:11,avg:".200",obp:".250",slg:".467",ops:".717",wrc:75,woba:".281",iso:".267",bbpct:"9.5%",kpct:"23.8%",babip:".167"}}},
     { name:"Jorge Mateo", pos:"SS", pa:100, avg:".287", obp:".330", slg:".468", ops:".798", hr:4, rbi:11, r:24, h:27, doubles:5, triples:0, sb:7, bbpct:"6.0%", kpct:"29.0%", war:0.8, war2:0.8, wrc:121, woba:".349", xwoba:".346", oaa:1, frv:1, batSpeed:73.7, squaredUp:"19.9%", fastSwing:"36.0%", laSwSp:"46.2%", idealAttack:"39.8%", armValue:null, armStrength:90.4, abs:{netOvr:-2.1, netRuns:-0.4, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"7.7%", xChalRate:"4.9%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:39,r:8,h:11,hr:2,rbi:3,avg:".297",obp:".333",slg:".486",ops:".820",wrc:127,woba:".357",iso:".189",bbpct:"5.1%",kpct:"38.5%",babip:".450"}, vsR:{pa:61,r:16,h:16,hr:2,rbi:8,avg:".281",obp:".328",slg:".456",ops:".784",wrc:117,woba:".343",iso:".175",bbpct:"6.6%",kpct:"23.0%",babip:".341"}, risp:{pa:24,r:0,h:6,hr:0,rbi:6,avg:".273",obp:".333",slg:".273",ops:".606",wrc:76,woba:".282",iso:".000",bbpct:"8.3%",kpct:"37.5%",babip:".462"}, highLeverage:{pa:9,r:7,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".355",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Eli White", pos:"OF", pa:87, avg:".238", obp:".287", slg:".425", ops:".712", hr:3, rbi:14, r:12, h:19, doubles:4, triples:1, sb:2, bbpct:"5.7%", kpct:"16.1%", war:0.6, war2:0.3, wrc:94, woba:".309", xwoba:".315", oaa:1, frv:0, batSpeed:73.7, squaredUp:"24.7%", fastSwing:"38.4%", laSwSp:"35.8%", idealAttack:"56.2%", armValue:null, armStrength:null, abs:{netOvr:0.1, netRuns:0.7, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.4%", xChalRate:"4.5%", rateVsExp:"-2.1%"}, splits:{vsL:{pa:50,r:5,h:11,hr:2,rbi:9,avg:".256",obp:".340",slg:".488",ops:".828",wrc:127,woba:".357",iso:".233",bbpct:"10.0%",kpct:"18.0%",babip:".273"}, vsR:{pa:37,r:7,h:8,hr:1,rbi:5,avg:".216",obp:".216",slg:".351",ops:".568",wrc:51,woba:".245",iso:".135",bbpct:"0.0%",kpct:"13.5%",babip:".226"}, risp:{pa:24,r:1,h:7,hr:1,rbi:11,avg:".350",obp:".417",slg:".550",ops:".967",wrc:165,woba:".413",iso:".200",bbpct:"12.5%",kpct:"12.5%",babip:".353"}, highLeverage:{pa:12,r:3,h:2,hr:0,rbi:4,avg:".200",obp:".333",slg:".200",ops:".533",wrc:65,woba:".266",iso:".000",bbpct:"16.7%",kpct:"8.3%",babip:".222"}}},
     { name:"Sandy León", pos:"C", pa:42, avg:".095", obp:".095", slg:".095", ops:".190", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.6, war2:-0.5, wrc:-58, woba:".085", xwoba:".140", oaa:null, frv:1, batSpeed:67.4, squaredUp:"18.1%", fastSwing:"2.4%", laSwSp:"25.0%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:9.0, netRuns:0.6, chal:20, won:15, lost:5, wonPct:"75%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:18,r:0,h:2,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-65,woba:".075",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:7,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"71.4%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:11, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-1.4, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:18,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:6,woba:".179",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".199",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:188,woba:".448",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.2, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.7, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.2%", rateVsExp:"+1.5%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:492,woba:".895",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
   ];
   
export const starters = [
     // Updated June 15, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 9
     { name:"Chris Sale", wl:"8-5", era:"2.30", ip:"78.1", kpct:"28.8%", bbpct:"6.3%", whip:"1.047", war:2.3, war2:2.1, fip:"2.82", xfip:"3.09", siera:"3.09", batSpeed:70.7, fastSwing:"17.9%", swstr:"13.5%", cstr:"17.5%", csw:"31.0%", laSwSp:"38.2%", idealAttack:"46.3%", splits:{vsL:{ip:"19.1",era:"1.40",fip:"2.02",xfip:"1.88",whip:"0.93",avg:".211",obp:".273",slg:".310",woba:".265",kpct:"33.3%",bbpct:"3.8%",kbb:"29.5%"}, vsR:{ip:"59.0",era:"2.59",fip:"3.09",xfip:"3.49",whip:"1.08",avg:".216",obp:".286",slg:".312",woba:".272",kpct:"27.4%",bbpct:"7.1%",kbb:"20.3%"}}},
     { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.36", xfip:"4.33", siera:"4.11", batSpeed:72.4, fastSwing:"25.3%", swstr:"12.5%", cstr:"15.2%", csw:"27.8%", laSwSp:"35.7%", idealAttack:"46.0%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.57",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".344",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.88",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".380",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
     { name:"Bryce Elder", wl:"5-4", era:"3.15", ip:"88.2", kpct:"19.9%", bbpct:"7.4%", whip:"1.139", war:1.4, war2:1.5, fip:"3.76", xfip:"4.02", siera:"4.21", batSpeed:72.3, fastSwing:"26.7%", swstr:"9.4%", cstr:"16.2%", csw:"25.6%", laSwSp:"30.7%", idealAttack:"49.0%", splits:{vsL:{ip:"58.2",era:"2.76",fip:"3.85",xfip:"4.51",whip:"1.02",avg:".183",obp:".262",slg:".288",woba:".251",kpct:"19.1%",bbpct:"9.4%",kbb:"9.8%"}, vsR:{ip:"30.0",era:"3.90",fip:"3.57",xfip:"3.07",whip:"1.37",avg:".288",obp:".321",slg:".424",woba:".328",kpct:"21.4%",bbpct:"3.8%",kbb:"17.6%"}}},
     { name:"Martín Pérez", wl:"5-3", era:"2.90", ip:"62.0", kpct:"20.8%", bbpct:"8.6%", whip:"1.048", war:1.4, war2:0.8, fip:"3.83", xfip:"3.91", siera:"4.14", batSpeed:73.1, fastSwing:"32.6%", swstr:"9.0%", cstr:"18.5%", csw:"27.6%", laSwSp:"36.3%", idealAttack:"49.1%", splits:{vsL:{ip:"18.0",era:"2.50",fip:"3.94",xfip:"3.72",whip:"1.00",avg:".200",obp:".278",slg:".369",woba:".288",kpct:"22.2%",bbpct:"6.9%",kbb:"15.3%"}, vsR:{ip:"44.0",era:"3.07",fip:"3.79",xfip:"3.98",whip:"1.07",avg:".203",obp:".273",slg:".353",woba:".277",kpct:"20.2%",bbpct:"9.2%",kbb:"11.0%"}}},
     { name:"Grant Holmes", wl:"4-2", era:"4.05", ip:"66.2", kpct:"20.6%", bbpct:"10.1%", whip:"1.335", war:0.6, war2:0.0, fip:"5.26", xfip:"4.46", siera:"4.53", batSpeed:72.8, fastSwing:"28.0%", swstr:"12.9%", cstr:"14.4%", csw:"27.2%", laSwSp:"33.5%", idealAttack:"49.9%", splits:{vsL:{ip:"39.1",era:"3.66",fip:"5.34",xfip:"4.24",whip:"1.35",avg:".231",obp:".321",slg:".429",woba:".331",kpct:"22.6%",bbpct:"11.3%",kbb:"11.3%"}, vsR:{ip:"27.1",era:"4.61",fip:"5.15",xfip:"4.77",whip:"1.32",avg:".241",obp:".311",slg:".426",woba:".325",kpct:"17.6%",bbpct:"8.4%",kbb:"9.2%"}}},
     { name:"JR Ritchie", wl:"1-1", era:"3.82", ip:"30.2", kpct:"19.7%", bbpct:"13.6%", whip:"1.337", war:0.2, war2:-0.1, fip:"5.16", xfip:"4.71", siera:"4.93", batSpeed:72.2, fastSwing:"26.2%", swstr:"8.5%", cstr:"14.7%", csw:"23.2%", laSwSp:"31.8%", idealAttack:"52.9%", splits:{vsL:{ip:"19.2",era:"5.49",fip:"6.21",xfip:"4.91",whip:"1.53",avg:".243",obp:".371",slg:".432",woba:".357",kpct:"20.2%",bbpct:"13.5%",kbb:"6.7%"}, vsR:{ip:"11.0",era:"0.82",fip:"3.29",xfip:"4.36",whip:"1.00",avg:".139",obp:".256",slg:".139",woba:".202",kpct:"18.6%",bbpct:"14.0%",kbb:"4.7%"}}},
   ];

   export const bullpen = [
     // Updated June 15, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 9
     { name:"Raisel Iglesias", role:"CL", era:"1.16", ip:"23.1", sv:14, kpct:"30.3%", bbpct:"5.6%", whip:"0.986", fip:"1.99", war:1.0, war2:0.8, xfip:"3.01", siera:"2.61", batSpeed:71.3, fastSwing:"26.6%", swstr:"15.5%", cstr:"16.5%", csw:"32.0", laSwSp:"26.3%", idealAttack:"49.0%", splits:{vsL:{ip:"14.0",era:"0.64",fip:"3.32",xfip:"4.39",whip:"1.00",avg:".208",obp:".269",slg:".333",woba:".270",kpct:"21.2%",bbpct:"7.7%",kbb:"13.5%"}, vsR:{ip:"9.1",era:"1.93",fip:"0.00",xfip:"0.95",whip:"0.96",avg:".222",obp:".243",slg:".250",woba:".222",kpct:"43.2%",bbpct:"2.7%",kbb:"40.5%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.14", ip:"31.2", sv:0, kpct:"34.8%", bbpct:"4.3%", whip:"0.632", fip:"1.46", war:1.3, war2:1.1, xfip:"2.59", siera:"2.08", batSpeed:72.4, fastSwing:"27.9%", swstr:"19.5%", cstr:"15.4%", csw:"34.9%", laSwSp:"34.3%", idealAttack:"49.5%", splits:{vsL:{ip:"11.1",era:"2.38",fip:"0.81",xfip:"2.11",whip:"0.71",avg:".154",obp:".190",slg:".333",woba:".221",kpct:"38.1%",bbpct:"4.8%",kbb:"33.3%"}, vsR:{ip:"20.1",era:"0.44",fip:"1.83",xfip:"2.86",whip:"0.59",avg:".129",obp:".164",slg:".186",woba:".160",kpct:"32.9%",bbpct:"4.1%",kbb:"28.8%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.59", ip:"30.2", sv:4, kpct:"22.8%", bbpct:"4.4%", whip:"0.783", fip:"2.32", war:1.5, war2:0.8, xfip:"3.25", siera:"3.15", batSpeed:71.3, fastSwing:"22.6%", swstr:"12.9%", cstr:"12.2%", csw:"25.2%", laSwSp:"32.9%", idealAttack:"51.5%", splits:{vsL:{ip:"18.0",era:"0.50",fip:"2.60",xfip:"3.52",whip:"0.56",avg:".133",obp:".161",slg:".183",woba:".157",kpct:"22.2%",bbpct:"3.2%",kbb:"19.0%"}, vsR:{ip:"12.2",era:"0.71",fip:"1.92",xfip:"2.85",whip:"1.11",avg:".229",obp:".275",slg:".250",woba:".241",kpct:"23.5%",bbpct:"5.9%",kbb:"17.6%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.38", war:0.4, war2:0.1, xfip:"3.96", siera:"3.43", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.2%", idealAttack:"56.0%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.86",xfip:"3.78",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".320",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.20",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".283",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.25", ip:"28.0", sv:1, kpct:"29.2%", bbpct:"8.0%", whip:"1.036", fip:"2.39", war:0.9, war2:0.8, xfip:"3.35", siera:"2.97", batSpeed:71.7, fastSwing:"25.0%", swstr:"12.1%", cstr:"15.5%", csw:"27.7%", laSwSp:"26.1%", idealAttack:"42.1%", splits:{vsL:{ip:"15.1",era:"3.52",fip:"2.39",xfip:"2.69",whip:"1.17",avg:".228",obp:".297",slg:".333",woba:".284",kpct:"32.8%",bbpct:"7.8%",kbb:"25.0%"}, vsR:{ip:"12.2",era:"0.71",fip:"2.39",xfip:"4.14",whip:"0.87",avg:".163",obp:".245",slg:".186",woba:".208",kpct:"24.5%",bbpct:"8.2%",kbb:"16.3%"}}},
     { name:"Reynaldo López", role:"RP", era:"3.96", ip:"38.2", sv:0, kpct:"20.5%", bbpct:"11.7%", whip:"1.474", fip:"4.94", war:0.1, war2:0.0, xfip:"4.79", siera:"4.65", batSpeed:71.2, fastSwing:"19.3%", swstr:"8.4%", cstr:"17.5%", csw:"26.0%", laSwSp:"39.1%", idealAttack:"44.8%", splits:{vsL:{ip:"19.0",era:"4.74",fip:"5.58",xfip:"5.76",whip:"2.00",avg:".260",obp:".413",slg:".411",woba:".375",kpct:"19.6%",bbpct:"20.7%",kbb:"-1.1%"}, vsR:{ip:"19.2",era:"3.20",fip:"4.33",xfip:"3.86",whip:"0.97",avg:".237",obp:".253",slg:".434",woba:".295",kpct:"21.5%",bbpct:"1.3%",kbb:"20.3%"}}},
     { name:"Dylan Dodd", role:"RP", era:"1.17", ip:"15.1", sv:1, kpct:"31.0%", bbpct:"10.3%", whip:"0.848", fip:"2.78", war:0.5, war2:0.3, xfip:"3.37", siera:"3.08", batSpeed:72.8, fastSwing:"30.0%", swstr:"14.2%", cstr:"11.3%", csw:"25.5%", laSwSp:"35.3%", idealAttack:"51.7", splits:{vsL:{ip:"6.0",era:"1.50",fip:"2.94",xfip:"4.41",whip:"1.50",avg:".182",obp:".333",slg:".227",woba:".260",kpct:"29.6%",bbpct:"18.5%",kbb:"11.1%"}, vsR:{ip:"9.1",era:"0.96",fip:"2.68",xfip:"2.71",whip:"0.43",avg:".100",obp:".129",slg:".200",woba:".147",kpct:"32.3%",bbpct:"3.2%",kbb:"29.0%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:46,l:25,pct:".648",gb:"—", home:"22-11",away:"24-14", rs:359, ra:252, diff:+107, strk:"L1", l10:"5-5", highlight:true,  srs:1.4 },
     { team:"PHI", full:"Philadelphia Phillies", w:38,l:33,pct:".535",gb:"8.0", home:"19-17",away:"19-16", rs:285, ra:308, diff:-23, strk:"L1", l10:"6-4", highlight:false, srs:-0.3 },
     { team:"WSN", full:"Washington Nationals", w:37,l:35,pct:".514",gb:"9.5", home:"14-21",away:"23-14", rs:392, ra:379, diff:+13, strk:"W2", l10:"6-4", highlight:false, srs:0.4 },
     { team:"MIA", full:"Miami Marlins",        w:36,l:36,pct:".500",gb:"10.5", home:"23-16",away:"13-20", rs:310, ra:310, diff:0, strk:"W1", l10:"8-2", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:32,l:39,pct:".451",gb:"14.0", home:"18-18",away:"14-21", rs:288, ra:299, diff:-11, strk:"W1", l10:"6-4", highlight:false, srs:-0.2 },
   ];
   
export const statcastHitters = [
     { name:"Michael Harris II", ev:"92.4",hardHit:"51.8%",xwoba:".383",xba:".306",xslg:".549",barrel:"15.1%",chase:"44.9%",whiff:"26.5%",kpct:"20.2%",bbpct:"4.7%", gbpct:"43.0%",fbpct:"24.4%",ldpct:"25.9%",pupct:"6.7%",pullAir:"16.6%"},
     { name:"Matt Olson", ev:"93.5",hardHit:"52.6%",xwoba:".370",xba:".261",xslg:".534",barrel:"14.4%",chase:"27.8%",whiff:"25.0%",kpct:"23.1%",bbpct:"9.6%", gbpct:"34.4%",fbpct:"34.4%",ldpct:"22.0%",pupct:"9.1%",pullAir:"20.6%"},
     { name:"Dominic Smith", ev:"88.8",hardHit:"36.0%",xwoba:".341",xba:".285",xslg:".452",barrel:"7.3%",chase:"34.7%",whiff:"19.2%",kpct:"12.9%",bbpct:"5.3%", gbpct:"36.0%",fbpct:"33.1%",ldpct:"26.6%",pupct:"4.3%",pullAir:"15.1%"},
     { name:"Drake Baldwin", ev:"92.8",hardHit:"53.8%",xwoba:".418",xba:".305",xslg:".587",barrel:"18.6%",chase:"34.4%",whiff:"23.1%",kpct:"20.4%",bbpct:"11.1%", gbpct:"44.1%",fbpct:"24.8%",ldpct:"26.2%",pupct:"4.8%",pullAir:"15.9%"},
     { name:"Mauricio Dubón", ev:"86.3",hardHit:"27.8%",xwoba:".315",xba:".265",xslg:".394",barrel:"5.9%",chase:"38.2%",whiff:"17.4%",kpct:"15.7%",bbpct:"6.7%", gbpct:"37.6%",fbpct:"25.9%",ldpct:"28.8%",pupct:"7.8%",pullAir:"13.7%"},
     { name:"Jorge Mateo", ev:"90.5",hardHit:"49.2%",xwoba:".346",xba:".283",xslg:".476",barrel:"10.8%",chase:"39.8%",whiff:"28.8%",kpct:"29.0%",bbpct:"6.0%", gbpct:"41.5%",fbpct:"30.8%",ldpct:"26.2%",pupct:"1.5%",pullAir:"21.5%"},
     { name:"Austin Riley", ev:"90.8",hardHit:"43.8%",xwoba:".302",xba:".208",xslg:".387",barrel:"10.2%",chase:"31.8%",whiff:"32.0%",kpct:"28.4%",bbpct:"8.7%", gbpct:"38.6%",fbpct:"31.8%",ldpct:"19.9%",pupct:"9.7%",pullAir:"19.3%"},
     { name:"Ozzie Albies", ev:"87.0",hardHit:"28.9%",xwoba:".311",xba:".258",xslg:".391",barrel:"4.6%",chase:"35.8%",whiff:"20.4%",kpct:"12.1%",bbpct:"7.2%", gbpct:"37.6%",fbpct:"29.8%",ldpct:"25.2%",pupct:"7.4%",pullAir:"25.6%"},
     { name:"Mike Yastrzemski", ev:"90.6",hardHit:"41.5%",xwoba:".288",xba:".226",xslg:".317",barrel:"3.8%",chase:"27.2%",whiff:"24.7%",kpct:"23.5%",bbpct:"9.5%", gbpct:"43.1%",fbpct:"28.5%",ldpct:"23.1%",pupct:"5.4%",pullAir:"19.2%"},
     { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
     { name:"Eli White", ev:"87.6",hardHit:"35.8%",xwoba:".311",xba:".263",xslg:".394",barrel:"7.5%",chase:"26.0%",whiff:"25.6%",kpct:"16.1%",bbpct:"5.7%", gbpct:"55.2%",fbpct:"20.9%",ldpct:"20.9%",pupct:"3.0%",pullAir:"11.9%"},
     { name:"Ha-Seong Kim", ev:"84.5",hardHit:"21.4%",xwoba:".215",xba:".163",xslg:".210",barrel:"2.5%",chase:"26.0%",whiff:"17.5%",kpct:"22.6%",bbpct:"9.7%", gbpct:"52.4%",fbpct:"31.0%",ldpct:"7.1%",pupct:"9.5%",pullAir:"14.3%"},
     { name:"Sandy León", ev:"81.7",hardHit:"20.8%",xwoba:".136",xba:".138",xslg:".174",barrel:"0.0%",chase:"40.0%",whiff:"29.2%",kpct:"42.9%",bbpct:"0.0%", gbpct:"41.7%",fbpct:"16.7%",ldpct:"20.8%",pupct:"20.8%",pullAir:"33.3%"},
     { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
     { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
   ];

   export const statcastPitchers = [
     { name:"Raisel Iglesias", ev:"87.2",hardHit:"29.8%",xwoba:".239",xba:".202",xslg:".286",kpct:"30.3%",bbpct:"5.6%", barrel:"5.4%", chase:"39.2%",whiff:"32.6%",gbpct:"35.1%",fbpct:"28.1%",ldpct:"24.6%",pupct:"12.3%", pullAir:"15.8%"},
     { name:"Dylan Lee", ev:"87.1",hardHit:"32.9%",xwoba:".212",xba:".174",xslg:".256",kpct:"34.8%",bbpct:"4.3%", barrel:"4.3%", chase:"36.4%",whiff:"38.2%",gbpct:"32.9%",fbpct:"31.4%",ldpct:"25.7%",pupct:"10.0%", pullAir:"28.6%"},
     { name:"Robert Suarez", ev:"84.3",hardHit:"30.5%",xwoba:".271",xba:".242",xslg:".340",kpct:"22.8%",bbpct:"4.4%", barrel:"3.7%", chase:"40.0%",whiff:"24.8%",gbpct:"46.3%",fbpct:"24.4%",ldpct:"20.7%",pupct:"8.5%", pullAir:"13.4%"},
     { name:"Bryce Elder", ev:"89.5",hardHit:"38.3%",xwoba:".283",xba:".233",xslg:".343",kpct:"19.9%",bbpct:"7.4%", barrel:"3.8%", chase:"29.9%",whiff:"22.6%",gbpct:"45.1%",fbpct:"26.1%",ldpct:"22.0%",pupct:"6.8%", pullAir:"17.8%"},
     { name:"Chris Sale", ev:"86.8",hardHit:"31.2%",xwoba:".292",xba:".234",xslg:".349",kpct:"28.8%",bbpct:"6.3%", barrel:"6.0%", chase:"36.2%",whiff:"29.5%",gbpct:"44.7%",fbpct:"23.6%",ldpct:"26.6%",pupct:"5.0%", pullAir:"18.1%"},
     { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
     { name:"Didier Fuentes", ev:"88.3",hardHit:"31.9%",xwoba:".263",xba:".204",xslg:".299",kpct:"29.2%",bbpct:"8.0%", barrel:"4.4%", chase:"29.0%",whiff:"28.0%",gbpct:"39.1%",fbpct:"27.5%",ldpct:"21.7%",pupct:"11.6%", pullAir:"8.7%"},
     { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
     { name:"Martín Pérez", ev:"88.3",hardHit:"38.0%",xwoba:".314",xba:".247",xslg:".382",kpct:"20.8%",bbpct:"8.6%", barrel:"7.1%", chase:"27.1%",whiff:"22.5%",gbpct:"47.4%",fbpct:"22.8%",ldpct:"25.1%",pupct:"4.7%", pullAir:"21.6%"},
     { name:"Grant Holmes", ev:"90.8",hardHit:"45.2%",xwoba:".335",xba:".247",xslg:".437",kpct:"20.6%",bbpct:"10.1%", barrel:"10.2%", chase:"32.9%",whiff:"28.7%",gbpct:"42.1%",fbpct:"26.9%",ldpct:"23.9%",pupct:"7.1%", pullAir:"22.8%"},
     { name:"Reynaldo López", ev:"86.9",hardHit:"35.7%",xwoba:".344",xba:".263",xslg:".428",kpct:"20.5%",bbpct:"11.7%", barrel:"6.1%", chase:"25.0%",whiff:"20.1%",gbpct:"35.7%",fbpct:"27.0%",ldpct:"29.6%",pupct:"7.8%", pullAir:"22.6"},
     { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".327",xba:".233",xslg:".375",kpct:"19.7%",bbpct:"13.6%", barrel:"4.7%", chase:"27.8%",whiff:"22.2%",gbpct:"48.2%",fbpct:"25.9%",ldpct:"23.5%",pupct:"2.4%", pullAir:"17.6%"},
     { name:"Dylan Dodd", ev:"89.1",hardHit:"35.3%",xwoba:".278",xba:".216",xslg:".341",kpct:"31.0%",bbpct:"10.3%", barrel:"8.8%", chase:"33.1%",whiff:"31.1%",gbpct:"29.4%",fbpct:"20.6%",ldpct:"29.4%",pupct:"20.6%", pullAir:"35.3%"},
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
