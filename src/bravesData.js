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
 
   export const lastUpdated = "July 3, 2026";
 
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
      //   - Joey Bart
      //   - Rowdy Tellez
   
      STARTERS (6):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Martín Pérez
      //   - Grant Holmes
      //   - JR Ritchie
      //   - Hurston Waldrep
   
      BULLPEN (9):
      //   - Raisel Iglesias
      //   - Dylan Lee
      //   - Robert Suarez
      //   - Tyler Kinley
      //   - Didier Fuentes
      //   - Reynaldo López
      //   - Dylan Dodd
      //   - James Karinchak
      //   - Carlos Carrasco
      //   - Ian Hamilton
      //   - Hurston Waldrep
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
     // June
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
     { date:"Fri, Jun 19", opp:"Milwaukee",   home:true, result:"W", score:"3-2", record:"47-27"},
     { date:"Sat, Jun 20", opp:"Milwaukee",   home:true, result:"W", score:"4-3", record:"48-27"},
     { date:"Sun, Jun 21", opp:"Milwaukee",   home:true, result:"L", score:"4-9", record:"48-28"},
     { date:"Mon, Jun 22", opp:"San Diego",   home:false, result:"L", score:"0-1", record:"48-29"},
     { date:"Tue, Jun 23", opp:"San Diego",   home:false, result:"L", score:"6-7", record:"48-30"},
     { date:"Wed, Jun 24", opp:"San Diego",   home:false, result:"L", score:"2-5", record:"48-31"},
     { date:"Fri, Jun 26", opp:"San Francisco",   home:false, result:"W", score:"3-1", record:"49-31"},
     { date:"Sat, Jun 27", opp:"San Francisco",   home:false, result:"L", score:"0-5", record:"49-32"},
     { date:"Sun, Jun 28", opp:"San Francisco",   home:false, result:"L", score:"2-3", record:"49-33"},
     { date:"Tue, Jun 30", opp:"St. Louis",   home:true, result:"L", score:"3-5", record:"49-34"},
      // July
     { date:"Wed, Jul 1", opp:"St. Louis",   home:true, result:"W", score:"5-1", record:"50-34"},
     { date:"Thu, Jul 2", opp:"St. Louis",   home:true, result:"L", score:"5-11", record:"50-35"},
      // Upcoming
     { date:"Fri, Jul 3", opp:"Mets",   home:true,},
     { date:"Sat, Jul 4", opp:"Mets",   home:true,},
     { date:"Sun, Jul 5", opp:"Mets",   home:true,},
     { date:"Mon, Jul 6", opp:"Mets",   home:true,},
     { date:"Tue, Jul 7", opp:"Pittsburgh",   home:false,},
     { date:"Wed, Jul 8", opp:"Pittsburgh",   home:false,},
     { date:"Thu, Jul 9", opp:"Pittsburgh",   home:false,},
     { date:"Fri, Jul 10", opp:"St. Louis",   home:false,},
     { date:"Sat, Jul 11", opp:"St. Louis",   home:false,},
     { date:"Sun, Jul 12", opp:"St. Louis",   home:false,},
      // All-Star Break
   ];
   
   export const TEAM_HEADER = {
     record: "50-35",
     runs: 403,
     era: "3.49",
     avg: ".246",
     obp: ".311",
     slg: ".404",
     ops: ".715",
     wrc: 96,
     iso: ".158",
     battingK: "21.0%",
     battingBB: "7.9%",
     woba: ".314",
     xwoba: ".322",
     fip: "3.98",
     xera: "3.79",
     xfip: "4.01",
     whip: "1.21",
     gb: "41.6%",
     siera: "3.96",
     pitchingK: "23.2%",
     pitchingBB: "8.9%",
     pitchingKBB: "14.3%",
     swstr: "11.4%",
     cstr: "16.2%",
     csw: "27.6%",
     fastSwing: "26.1%",
     sqUpSw: "24.1%",
     blastSw: "9.9%",
     idealAtk: "49.1%",
     batFastSwing: "32.1%",
     batSqUpSw: "24.5%",
     batBlastSw: "11.0%",
     batIdealAtk: "50.1%",
     batSwStr: "10.9%",
     batCStr: "15.1%",
     batCSW: "26.1%",
     batChase: "33.6%",
     batWhiff: "24.8%",
     chase: "30.7%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.1",
// Plate Discipline additions
     batZoneSwing: "67.8%",
     batZoneContact: "84.1%",
     batChaseContact: "59.7%",
     zoneSwing: "66.5%",
     zoneContact: "84.0%",
     chaseContact: "54.1%",
// Statcast (hitters)
     batBarrel: "8.8%",
     batHardHit: "39.5%",
     batExitVelo: "89.2",
     batXBA: ".250",
     batXSLG: ".421",
     batXwOBAcon: ".372",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "6.6%",
     hardHit: "37.3%",
     exitVelo: "88.6",
     xBA: ".235",
     xSLG: ".373",
     pXwOBA: ".303",
     xwOBAcon: ".351",
 };
   
export const hitters = [
    // Updated July 3, 2026 — RISP, vsL (LHP), and vsR (RHP) splits refreshed for all hitters from FanGraphs splits screenshots
    // All other fields preserved from prior update (July 2 top-level stats, catcher ABS refresh, High Leverage splits)
    // Hidden players (León, Tromp, Murphy) split data included per screenshots; non-roster (Wynns/Heim/Farmer/Azócar/Williams/Jarvis/Camargo) not added
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:122, woba:".351", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:80,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:143,woba:".383",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:129,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:1,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:141,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
    { name:"Drake Baldwin", pos:"C", pa:275, avg:".255", obp:".338", slg:".453", ops:".791", hr:14, rbi:39, r:45, h:62, doubles:6, triples:0, sb:1, bbpct:"9.5%", kpct:"24.4%", war:1.7, war2:1.3, wrc:118, woba:".346", xwoba:".373", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"23.8%", fastSwing:"52.9%", laSwSp:"39.1%", idealAttack:"46.7%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.6, netRuns:0.3, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:8.8, netRuns:0.3, chal:29, won:21, lost:8, wonPct:"72%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:114,r:19,h:27,hr:7,rbi:16,avg:".267",obp:".351",slg:".495",ops:".846",wrc:134,woba:".369",iso:".228",bbpct:"8.8%",kpct:"22.8%",babip:".294"}, vsR:{pa:161,r:26,h:35,hr:7,rbi:23,avg:".246",obp:".329",slg:".423",ops:".752",wrc:107,woba:".329",iso:".176",bbpct:"9.9%",kpct:"25.5%",babip:".295"}, risp:{pa:65,r:0,h:16,hr:0,rbi:24,avg:".296",obp:".400",slg:".389",ops:".789",wrc:122,woba:".351",iso:".093",bbpct:"12.3%",kpct:"15.4%",babip:".356"}, highLeverage:{pa:17,r:11,h:4,hr:0,rbi:7,avg:".250",obp:".294",slg:".313",ops:".607",wrc:69,woba:".273",iso:".063",bbpct:"5.9%",kpct:"17.6%",babip:".308"}}},
    { name:"Matt Olson", pos:"1B", pa:370, avg:".270", obp:".341", slg:".518", ops:".859", hr:20, rbi:52, r:55, h:89, doubles:22, triples:0, sb:2, bbpct:"9.7%", kpct:"22.7%", war:3.0, war2:2.5, wrc:132, woba:".367", xwoba:".361", oaa:5, frv:5, batSpeed:75.0, squaredUp:"24.1%", fastSwing:"51.6%", laSwSp:"31.3%", idealAttack:"52.5%", armValue:null, armStrength:82.8, abs:{netOvr:0.8, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.8%", xChalRate:"3.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:169,r:24,h:41,hr:8,rbi:21,avg:".270",obp:".337",slg:".493",ops:".831",wrc:127,woba:".359",iso:".224",bbpct:"8.9%",kpct:"21.9%",babip:".306"}, vsR:{pa:201,r:31,h:48,hr:12,rbi:31,avg:".270",obp:".343",slg:".539",ops:".883",wrc:137,woba:".374",iso:".270",bbpct:"10.4%",kpct:"23.4%",babip:".298"}, risp:{pa:91,r:2,h:15,hr:2,rbi:26,avg:".205",obp:".330",slg:".370",ops:".700",wrc:89,woba:".303",iso:".164",bbpct:"16.5%",kpct:"23.1%",babip:".245"}, highLeverage:{pa:34,r:16,h:7,hr:3,rbi:9,avg:".241",obp:".324",slg:".552",ops:".875",wrc:126,woba:".358",iso:".310",bbpct:"11.8%",kpct:"29.4%",babip:".235"}}},
    { name:"Ozzie Albies", pos:"2B", pa:365, avg:".273", obp:".323", slg:".439", ops:".762", hr:13, rbi:48, r:54, h:89, doubles:15, triples:0, sb:1, bbpct:"6.8%", kpct:"11.5%", war:2.0, war2:1.7, wrc:106, woba:".329", xwoba:".302", oaa:2, frv:0, batSpeed:69.0, squaredUp:"30.7%", fastSwing:"5.6%", laSwSp:"34.4%", idealAttack:"57.9%", armValue:null, armStrength:70.8, abs:{netOvr:-0.3, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.2%", xChalRate:"5.6%", rateVsExp:"-0.5%"}, splits:{vsL:{pa:159,r:16,h:44,hr:6,rbi:22,avg:".295",obp:".314",slg:".490",ops:".804",wrc:114,woba:".340",iso:".195",bbpct:"2.5%",kpct:"6.3%",babip:".277"}, vsR:{pa:206,r:38,h:45,hr:7,rbi:26,avg:".254",obp:".330",slg:".395",ops:".726",wrc:100,woba:".320",iso:".141",bbpct:"10.2%",kpct:"15.5%",babip:".264"}, risp:{pa:85,r:3,h:23,hr:3,rbi:35,avg:".348",obp:".376",slg:".530",ops:".907",wrc:131,woba:".365",iso:".182",bbpct:"9.4%",kpct:"5.9%",babip:".294"}, highLeverage:{pa:35,r:17,h:8,hr:2,rbi:10,avg:".267",obp:".343",slg:".533",ops:".876",wrc:136,woba:".372",iso:".267",bbpct:"8.6%",kpct:"11.4%",babip:".240"}}},
    { name:"Michael Harris II", pos:"CF", pa:305, avg:".293", obp:".328", slg:".484", ops:".812", hr:14, rbi:44, r:37, h:84, doubles:13, triples:0, sb:5, bbpct:"4.9%", kpct:"20.0%", war:2.4, war2:2.1, wrc:122, woba:".351", xwoba:".377", oaa:6, frv:5, batSpeed:74.9, squaredUp:"23.7%", fastSwing:"48.5%", laSwSp:"30.7%", idealAttack:"45.8%", armValue:null, armStrength:85.4, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.4%", xChalRate:"2.5%", rateVsExp:"+1.9%"}, splits:{vsL:{pa:120,r:12,h:32,hr:4,rbi:16,avg:".288",obp:".333",slg:".459",ops:".793",wrc:117,woba:".345",iso:".171",bbpct:"5.8%",kpct:"20.8%",babip:".337"}, vsR:{pa:185,r:25,h:52,hr:10,rbi:28,avg:".295",obp:".324",slg:".500",ops:".824",wrc:124,woba:".355",iso:".205",bbpct:"4.3%",kpct:"19.5%",babip:".321"}, risp:{pa:60,r:0,h:15,hr:0,rbi:21,avg:".283",obp:".333",slg:".396",ops:".730",wrc:100,woba:".319",iso:".113",bbpct:"6.7%",kpct:"15.0%",babip:".326"}, highLeverage:{pa:31,r:10,h:6,hr:1,rbi:10,avg:".231",obp:".290",slg:".462",ops:".752",wrc:97,woba:".314",iso:".231",bbpct:"6.5%",kpct:"22.6%",babip:".250"}}},
    { name:"Mauricio Dubón", pos:"SS", pa:327, avg:".269", obp:".323", slg:".419", ops:".742", hr:8, rbi:45, r:37, h:81, doubles:17, triples:2, sb:2, bbpct:"6.7%", kpct:"14.1%", war:2.3, war2:1.8, wrc:105, woba:".326", xwoba:".322", oaa:7, frv:5, batSpeed:69.1, squaredUp:"27.9%", fastSwing:"3.1%", laSwSp:"37.4%", idealAttack:"38.1%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.4%", xChalRate:"4.2%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:130,r:12,h:29,hr:3,rbi:19,avg:".242",obp:".300",slg:".392",ops:".692",wrc:91,woba:".305",iso:".150",bbpct:"6.9%",kpct:"11.5%",babip:".255"}, vsR:{pa:197,r:25,h:52,hr:5,rbi:26,avg:".287",obp:".338",slg:".436",ops:".775",wrc:114,woba:".340",iso:".149",bbpct:"6.6%",kpct:"15.7%",babip:".324"}, risp:{pa:76,r:3,h:24,hr:3,rbi:39,avg:".348",obp:".392",slg:".594",ops:".986",wrc:170,woba:".423",iso:".246",bbpct:"6.6%",kpct:"10.5%",babip:".362"}, highLeverage:{pa:33,r:8,h:12,hr:1,rbi:21,avg:".400",obp:".455",slg:".667",ops:"1.121",wrc:207,woba:".478",iso:".267",bbpct:"9.1%",kpct:"9.1%",babip:".423"}}},
    { name:"Austin Riley", pos:"3B", pa:344, avg:".208", obp:".285", slg:".331", ops:".616", hr:8, rbi:38, r:33, h:64, doubles:12, triples:1, sb:4, bbpct:"8.1%", kpct:"29.1%", war:-0.1, war2:-0.2, wrc:72, woba:".277", xwoba:".291", oaa:-5, frv:-4, batSpeed:75.6, squaredUp:"20.6%", fastSwing:"57.1%", laSwSp:"30.0%", idealAttack:"47.7%", armValue:null, armStrength:83.8, abs:{netOvr:-0.3, netRuns:-0.1, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.1%", xChalRate:"5.1%", rateVsExp:"-3.0%"}, splits:{vsL:{pa:121,r:10,h:24,hr:1,rbi:13,avg:".224",obp:".306",slg:".318",ops:".624",wrc:75,woba:".283",iso:".093",bbpct:"10.7%",kpct:"31.4%",babip:".333"}, vsR:{pa:223,r:23,h:40,hr:7,rbi:25,avg:".199",obp:".274",slg:".338",ops:".612",wrc:70,woba:".274",iso:".139",bbpct:"6.7%",kpct:"27.8%",babip:".248"}, risp:{pa:97,r:4,h:21,hr:4,rbi:34,avg:".236",obp:".278",slg:".438",ops:".717",wrc:92,woba:".307",iso:".202",bbpct:"6.2%",kpct:"33.0%",babip:".309"}, highLeverage:{pa:38,r:4,h:7,hr:1,rbi:14,avg:".206",obp:".237",slg:".324",ops:".560",wrc:48,woba:".241",iso:".118",bbpct:"5.3%",kpct:"23.7%",babip:".231"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.1, wrc:-26, woba:".131", xwoba:".212", oaa:-2, frv:-3, batSpeed:71.9, squaredUp:"16.9%", fastSwing:"20.8%", laSwSp:"19.6%", idealAttack:"56.9%", armValue:null, armStrength:84.2, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-41,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:79,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:123,woba:".353",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
    { name:"Mike Yastrzemski", pos:"LF", pa:235, avg:".222", obp:".311", slg:".333", ops:".644", hr:4, rbi:20, r:27, h:46, doubles:9, triples:1, sb:1, bbpct:"9.8%", kpct:"23.8%", war:0.2, war2:0.0, wrc:82, woba:".292", xwoba:".291", oaa:-2, frv:-1, batSpeed:71.1, squaredUp:"28.3%", fastSwing:"7.3%", laSwSp:"31.8%", idealAttack:"61.6%", armValue:null, armStrength:83.4, abs:{netOvr:2.3, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:34,r:4,h:5,hr:0,rbi:1,avg:".172",obp:".294",slg:".207",ops:".501",wrc:51,woba:".247",iso:".034",bbpct:"8.8%",kpct:"38.2%",babip:".313"}, vsR:{pa:201,r:23,h:41,hr:4,rbi:19,avg:".230",obp:".313",slg:".354",ops:".667",wrc:87,woba:".300",iso:".124",bbpct:"10.0%",kpct:"21.4%",babip:".280"}, risp:{pa:60,r:0,h:13,hr:0,rbi:14,avg:".250",obp:".333",slg:".327",ops:".660",wrc:87,woba:".299",iso:".077",bbpct:"11.7%",kpct:"36.7%",babip:".419"}, highLeverage:{pa:24,r:5,h:6,hr:0,rbi:6,avg:".273",obp:".333",slg:".364",ops:".697",wrc:96,woba:".312",iso:".091",bbpct:"8.3%",kpct:"29.2%",babip:".400"}}},
    { name:"Dominic Smith", pos:"DH", pa:207, avg:".278", obp:".320", slg:".417", ops:".738", hr:6, rbi:35, r:27, h:52, doubles:6, triples:1, sb:0, bbpct:"6.3%", kpct:"13.0%", war:0.5, war2:0.1, wrc:101, woba:".320", xwoba:".330", oaa:null, frv:0, batSpeed:68.7, squaredUp:"30.0%", fastSwing:"5.3%", laSwSp:"34.6%", idealAttack:"52.4%", armValue:null, armStrength:null, abs:{netOvr:-1.0, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.2%", xChalRate:"4.6%", rateVsExp:"+0.6%"}, splits:{vsL:{pa:31,r:3,h:4,hr:0,rbi:2,avg:".154",obp:".267",slg:".192",ops:".459",wrc:36,woba:".224",iso:".038",bbpct:"12.9%",kpct:"9.7%",babip:".174"}, vsR:{pa:176,r:24,h:48,hr:6,rbi:33,avg:".298",obp:".330",slg:".453",ops:".783",wrc:112,woba:".337",iso:".155",bbpct:"5.1%",kpct:"13.6%",babip:".309"}, risp:{pa:59,r:3,h:16,hr:3,rbi:31,avg:".327",obp:".345",slg:".551",ops:".896",wrc:132,woba:".367",iso:".224",bbpct:"6.8%",kpct:"8.5%",babip:".283"}, highLeverage:{pa:28,r:6,h:3,hr:1,rbi:11,avg:".150",obp:".259",slg:".350",ops:".609",wrc:60,woba:".259",iso:".200",bbpct:"14.3%",kpct:"21.4%",babip:".125"}}},
    { name:"Jorge Mateo", pos:"SS", pa:119, avg:".259", obp:".303", slg:".411", ops:".713", hr:4, rbi:11, r:27, h:29, doubles:5, triples:0, sb:9, bbpct:"5.9%", kpct:"28.6%", war:1.0, war2:0.7, wrc:96, woba:".313", xwoba:".330", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.3%", fastSwing:"36.0%", laSwSp:"47.4%", idealAttack:"41.9%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:47,r:10,h:12,hr:2,rbi:3,avg:".267",obp:".298",slg:".422",ops:".720",wrc:97,woba:".314",iso:".156",bbpct:"4.3%",kpct:"36.2%",babip:".385"}, vsR:{pa:72,r:17,h:17,hr:2,rbi:8,avg:".254",obp:".306",slg:".403",ops:".709",wrc:95,woba:".312",iso:".149",bbpct:"6.9%",kpct:"23.6%",babip:".313"}, risp:{pa:28,r:0,h:6,hr:0,rbi:6,avg:".231",obp:".286",slg:".231",ops:".516",wrc:47,woba:".241",iso:".000",bbpct:"7.1%",kpct:"32.1%",babip:".353"}, highLeverage:{pa:12,r:8,h:2,hr:0,rbi:1,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"25.0%",babip:".286"}}},
    { name:"Eli White", pos:"OF", pa:115, avg:".215", obp:".261", slg:".355", ops:".616", hr:3, rbi:14, r:13, h:23, doubles:4, triples:1, sb:4, bbpct:"5.2%", kpct:"21.7%", war:0.7, war2:0.2, wrc:67, woba:".270", xwoba:".281", oaa:2, frv:3, batSpeed:73.1, squaredUp:"20.8%", fastSwing:"31.5%", laSwSp:"32.5%", idealAttack:"53.3%", armValue:null, armStrength:89.5, abs:{netOvr:-0.9, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.8%", xChalRate:"5.1%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:70,r:6,h:15,hr:2,rbi:9,avg:".242",obp:".314",slg:".403",ops:".718",wrc:97,woba:".315",iso:".161",bbpct:"8.6%",kpct:"22.9%",babip:".289"}, vsR:{pa:45,r:7,h:8,hr:1,rbi:5,avg:".178",obp:".178",slg:".289",ops:".467",wrc:20,woba:".201",iso:".111",bbpct:"0.0%",kpct:"20.0%",babip:".200"}, risp:{pa:32,r:1,h:7,hr:1,rbi:11,avg:".250",obp:".313",slg:".393",ops:".705",wrc:93,woba:".308",iso:".143",bbpct:"9.4%",kpct:"18.8%",babip:".273"}, highLeverage:{pa:17,r:4,h:2,hr:0,rbi:4,avg:".133",obp:".235",slg:".133",ops:".369",wrc:11,woba:".187",iso:".000",bbpct:"11.8%",kpct:"11.8%",babip:".154"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-55,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-65,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:186,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:486,woba:".891",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
    { name:"Joey Bart", pos:"C", pa:17, avg:".125", obp:".176", slg:".313", ops:".489", hr:1, rbi:3, r:1, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"11.8%", war:0.0, war2:-0.1, wrc:30, woba:".216", xwoba:".309", oaa:null, frv:0, batSpeed:75.5, squaredUp:"20.0%", fastSwing:"56.0%", laSwSp:"36.5%", idealAttack:"32.0%", avgPop:1.93, armValue:null, armStrength:84.1, absCatch:{netOvr:1.4, netRuns:0.1, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.5%", xChalRate:"2.1%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:12,r:1,h:2,hr:1,rbi:3,avg:".182",obp:".250",slg:".455",ops:".705",wrc:91,woba:".306",iso:".273",bbpct:"0.0%",kpct:"8.3%",babip:".111"}, vsR:{pa:5,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"20.0%",babip:".000"}, risp:{pa:3,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, highLeverage:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
    { name:"Rowdy Tellez", pos:"1B", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:157,woba:".404",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:153,woba:".398",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}}},
  ];

export const starters = [
    // Updated July 2, 2026 — vsL and vsR splits refreshed from FanGraphs pitcher splits screenshots
    // All other fields (season totals, ratios, bat tracking, plate discipline) preserved from prior update
    { name:"Chris Sale", wl:"8-6", era:"2.10", ip:"90.0", kpct:"29.6%", bbpct:"6.0%", whip:"1.078", war:2.8, war2:2.8, fip:"2.56", xfip:"2.96", siera:"3.01", batSpeed:70.7, fastSwing:"19.3%", swstr:"13.6%", cstr:"17.6%", csw:"31.1%", laSwSp:"36.2%", idealAttack:"45.6%", splits:{vsL:{ip:"22.2",era:"1.59",fip:"1.74",xfip:"1.70",whip:"0.97",avg:".224",obp:".275",slg:".306",woba:".262",kpct:"33.7%",bbpct:"3.3%",kbb:"30.4%"}, vsR:{ip:"67.1",era:"2.27",fip:"2.83",xfip:"3.38",whip:"1.11",avg:".224",obp:".290",slg:".308",woba:".271",kpct:"28.3%",bbpct:"6.9%",kbb:"21.4%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.37", xfip:"4.38", siera:"4.15", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.56",xfip:"4.62",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".342",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.92",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Martín Pérez", wl:"6-5", era:"3.27", ip:"77.0", kpct:"19.5%", bbpct:"9.6%", whip:"1.156", fip:"4.29", war:1.5, war2:0.7, xfip:"4.17", siera:"4.47", batSpeed:73.2, fastSwing:"33.6%", swstr:"8.9%", cstr:"18.8%", csw:"27.7%", laSwSp:"34.5%", idealAttack:"51.0%", splits:{vsL:{ip:"22.0",era:"3.68",fip:"4.15",xfip:"3.61",whip:"1.09",avg:".220",obp:".289",slg:".390",woba:".300",kpct:"22.2%",bbpct:"6.7%",kbb:"15.6%"}, vsR:{ip:"55.0",era:"3.11",fip:"4.35",xfip:"4.38",whip:"1.18",avg:".211",obp:".293",slg:".371",woba:".291",kpct:"18.4%",bbpct:"10.8%",kbb:"7.6%"}}},
    { name:"Bryce Elder", wl:"5-6", era:"4.01", ip:"98.2", kpct:"20.0%", bbpct:"7.2%", whip:"1.226", fip:"3.98", war:0.7, war2:1.5, xfip:"4.05", siera:"4.24", batSpeed:72.4, fastSwing:"27.3%", swstr:"9.2%", cstr:"16.7%", csw:"26.0%", laSwSp:"31.7%", idealAttack:"50.2%", splits:{vsL:{ip:"65.2",era:"3.70",fip:"3.98",xfip:"4.38",whip:"1.10",avg:".206",obp:".275",slg:".336",woba:".273",kpct:"19.9%",bbpct:"8.6%",kbb:"11.2%"}, vsR:{ip:"33.0",era:"4.64",fip:"3.99",xfip:"3.39",whip:"1.48",avg:".300",obp:".338",slg:".443",woba:".342",kpct:"20.3%",bbpct:"4.7%",kbb:"15.5%"}}},
    { name:"Grant Holmes", wl:"4-4", era:"3.96", ip:"77.1", kpct:"20.7%", bbpct:"11.1%", whip:"1.358", fip:"5.19", war:0.9, war2:0.0, xfip:"4.56", siera:"4.66", batSpeed:72.7, fastSwing:"28.2%", swstr:"12.3%", cstr:"14.9%", csw:"27.2%", laSwSp:"34.5%", idealAttack:"49.2%", splits:{vsL:{ip:"44.1",era:"3.65",fip:"5.25",xfip:"4.50",whip:"1.40",avg:".230",obp:".328",slg:".412",woba:".327",kpct:"21.9%",bbpct:"12.5%",kbb:"9.4%"}, vsR:{ip:"33.0",era:"4.36",fip:"5.11",xfip:"4.62",whip:"1.30",avg:".236",obp:".310",slg:".417",woba:".319",kpct:"19.0%",bbpct:"9.2%",kbb:"9.9%"}}},
    { name:"Reynaldo López", wl:"4-1", era:"3.31", ip:"51.2", sv:0, kpct:"21.0%", bbpct:"10.0%", whip:"1.297", fip:"4.18", war:0.5, war2:0.4, xfip:"4.51", siera:"4.40", batSpeed:71.5, fastSwing:"22.5%", swstr:"9.1%", cstr:"17.1%", csw:"26.2%", laSwSp:"39.6%", idealAttack:"44.2%", splits:{vsL:{ip:"26.2",era:"3.71",fip:"4.50",xfip:"5.16",whip:"1.61",avg:".222",obp:".358",slg:".364",woba:".330",kpct:"21.5%",bbpct:"17.4%",kbb:"4.1%"}, vsR:{ip:"25.0",era:"2.88",fip:"3.83",xfip:"3.80",whip:"0.96",avg:".242",obp:".255",slg:".411",woba:".286",kpct:"20.4%",bbpct:"1.0%",kbb:"19.4%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.87", ip:"40.2", kpct:"20.8%", bbpct:"14.0%", whip:"1.426", fip:"5.59", war:-0.2, war2:-0.2, xfip:"4.82", siera:"4.99", batSpeed:72.4, fastSwing:"27.5%", swstr:"8.7%", cstr:"16.2%", csw:"24.9%", laSwSp:"31.0%", idealAttack:"53.6%", splits:{vsL:{ip:"24.1",era:"6.29",fip:"6.77",xfip:"5.23",whip:"1.60",avg:".247",obp:".375",slg:".484",woba:".375",kpct:"20.5%",bbpct:"14.3%",kbb:"6.3%"}, vsR:{ip:"16.1",era:"2.76",fip:"3.84",xfip:"4.25",whip:"1.16",avg:".179",obp:".288",slg:".250",woba:".254",kpct:"21.2%",bbpct:"13.6%",kbb:"7.6%"}}},
    { name:"Hurston Waldrep", wl:"0-0", era:"3.68", ip:"7.1", kpct:"20.6%", bbpct:"14.7%", whip:"1.636", war:0.1, war2:0.0, fip:"5.43", xfip:"4.48", siera:"4.42", batSpeed:73.9, fastSwing:"52.9%", swstr:"10.7%", cstr:"17.6%", csw:"28.2%", laSwSp:"20.0%", idealAttack:"58.8%", splits:{vsL:{ip:"1.0",era:"0.00",fip:"7.11",xfip:"8.62",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"16.7%",bbpct:"33.3%",kbb:"-16.7%"}, vsR:{ip:"1.0",era:"0.00",fip:"5.11",xfip:"5.11",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"33.3%",bbpct:"33.3%",kbb:"0.0%"}}},
  ];

  export const bullpen = [
    // Updated July 2, 2026 — vsL and vsR splits refreshed from FanGraphs pitcher splits screenshots
    // All other fields (season totals, ratios, bat tracking, plate discipline) preserved from prior update; Carrasco hidden — split data included per screenshots
    { name:"Raisel Iglesias", role:"CL", era:"1.27", ip:"28.1", sv:17, kpct:"28.7%", bbpct:"5.6%", whip:"0.988", fip:"2.02", war:1.2, war2:1.0, xfip:"3.10", siera:"2.80", batSpeed:71.5, fastSwing:"25.8%", swstr:"14.7%", cstr:"17.1%", csw:"31.8%", laSwSp:"29.6%", idealAttack:"49.8%", splits:{vsL:{ip:"17.1",era:"1.04",fip:"3.34",xfip:"4.50",whip:"0.92",avg:".190",obp:".254",slg:".293",woba:".247",kpct:"19.0%",bbpct:"7.9%",kbb:"11.1%"}, vsR:{ip:"11.0",era:"1.64",fip:"-0.07",xfip:"0.89",whip:"1.09",avg:".250",obp:".267",slg:".295",woba:".250",kpct:"42.2%",bbpct:"2.2%",kbb:"40.0%"}}},
    { name:"Dylan Lee", role:"RP", era:"1.64", ip:"38.1", sv:0, kpct:"32.6%", bbpct:"3.5%", whip:"0.678", fip:"1.44", war:1.4, war2:1.5, xfip:"2.96", siera:"2.26", batSpeed:72.4, fastSwing:"27.0%", swstr:"19.7%", cstr:"14.9%", csw:"34.6%", laSwSp:"32.6%", idealAttack:"50.0%", splits:{vsL:{ip:"14.0",era:"1.93",fip:"0.97",xfip:"2.37",whip:"0.57",avg:".130",obp:".163",slg:".283",woba:".188",kpct:"36.0%",bbpct:"4.0%",kbb:"32.0%"}, vsR:{ip:"24.0",era:"0.38",fip:"1.69",xfip:"2.91",whip:"0.63",avg:".143",obp:".172",slg:".202",woba:".169",kpct:"32.2%",bbpct:"3.4%",kbb:"28.7%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.46", war:1.7, war2:0.8, xfip:"3.42", siera:"3.36", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.9%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.71",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.98",xfip:"3.00",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.51", ip:"32.1", sv:1, kpct:"28.0%", bbpct:"8.3%", whip:"1.082", fip:"2.43", war:1.0, war2:0.9, xfip:"3.43", siera:"3.16", batSpeed:72.0, fastSwing:"25.8%", swstr:"12.0%", cstr:"14.8%", csw:"26.8%", laSwSp:"28.0%", idealAttack:"41.8%", splits:{vsL:{ip:"17.1",era:"3.63",fip:"2.24",xfip:"2.71",whip:"1.10",avg:".219",obp:".278",slg:".313",woba:".264",kpct:"31.9%",bbpct:"6.9%",kbb:"25.0%"}, vsR:{ip:"15.0",era:"1.20",fip:"2.64",xfip:"4.25",whip:"1.07",avg:".192",obp:".283",slg:".231",woba:".243",kpct:"23.3%",bbpct:"10.0%",kbb:"13.3%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.82", ip:"30.2", sv:0, kpct:"25.0%", bbpct:"8.6%", whip:"1.239", fip:"4.74", war:0.3, war2:0.0, xfip:"4.17", siera:"3.65", batSpeed:70.6, fastSwing:"16.4%", swstr:"12.2%", cstr:"17.8%", csw:"30.0%", laSwSp:"32.1%", idealAttack:"55.9%", splits:{vsL:{ip:"16.2",era:"5.40",fip:"5.81",xfip:"3.90",whip:"1.08",avg:".197",obp:".269",slg:".475",woba:".314",kpct:"28.4%",bbpct:"9.0%",kbb:"19.4%"}, vsR:{ip:"13.1",era:"0.00",fip:"2.28",xfip:"4.09",whip:"1.28",avg:".250",obp:".316",slg:".288",woba:".278",kpct:"22.8%",bbpct:"7.0%",kbb:"15.8%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.45", ip:"22.0", sv:1, kpct:"29.8%", bbpct:"9.5%", whip:"0.864", fip:"3.70", war:0.5, war2:0.2, xfip:"3.58", siera:"3.22", batSpeed:72.8, fastSwing:"31.5%", swstr:"13.1%", cstr:"12.5%", csw:"25.6%", laSwSp:"37.3%", idealAttack:"55.2%", splits:{vsL:{ip:"9.0",era:"3.00",fip:"5.00",xfip:"3.78",whip:"1.22",avg:".182",obp:".289",slg:".394",woba:".293",kpct:"31.6%",bbpct:"13.2%",kbb:"18.4%"}, vsR:{ip:"13.0",era:"2.08",fip:"2.80",xfip:"3.42",whip:"0.62",avg:".119",obp:".178",slg:".238",woba:".188",kpct:"28.3%",bbpct:"6.5%",kbb:"21.7%"}}},
    { name:"James Karinchak", role:"RP", era:"2.08", ip:"8.2", sv:0, kpct:"21.2%", bbpct:"12.1%", whip:"0.923", fip:"4.38", war:0.2, war2:0.0, xfip:"5.49", siera:"4.95", batSpeed:71.8, fastSwing:"24.2%", swstr:"8.5%", cstr:"21.8%", csw:"30.3%", laSwSp:"23.5%", idealAttack:"60.6", splits:{vsL:{ip:"2.2",era:"0.00",fip:"3.86",xfip:"6.12",whip:"1.13",avg:".125",obp:".300",slg:".250",woba:".266",kpct:"20.0%",bbpct:"20.0%",kbb:"0.0%"}, vsR:{ip:"5.0",era:"1.80",fip:"1.71",xfip:"4.12",whip:"0.40",avg:".067",obp:".118",slg:".067",woba:".094",kpct:"29.4%",bbpct:"5.9%",kbb:"23.5%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"3.68", ip:"14.2", sv:0, kpct:"9.8%", bbpct:"1.6%", whip:"1.159", fip:"4.67", war:0.1, war2:0.0, xfip:"4.34", siera:"4.39", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.9%", cstr:"12.4%", csw:"21.3%", laSwSp:"42.3%", idealAttack:"57.4", splits:{vsL:{ip:"8.2",era:"5.19",fip:"4.49",xfip:"4.56",whip:"1.27",avg:".314",obp:".333",slg:".429",woba:".335",kpct:"5.4%",bbpct:"0.0%",kbb:"5.4%"}, vsR:{ip:"6.0",era:"1.50",fip:"4.94",xfip:"4.03",whip:"1.00",avg:".238",obp:".304",slg:".381",woba:".306",kpct:"16.7%",bbpct:"4.2%",kbb:"12.5%"}}},
    { name:"Ian Hamilton", role:"RP", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.33", war:-0.1, war2:0.0, xfip:"3.97", siera:"3.95", batSpeed:72.6, fastSwing:"31.8%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"50.0", idealAttack:"31.8%", splits:{vsL:{ip:"1.0",era:"18.00",fip:"4.11",xfip:"5.62",whip:"4.00",avg:".500",obp:".571",slg:".667",woba:".535",kpct:"14.3%",bbpct:"14.3%",kbb:"0.0%"}, vsR:{ip:"2.0",era:"4.50",fip:"3.11",xfip:"3.86",whip:"1.00",avg:".000",obp:".250",slg:".000",woba:".175",kpct:"37.5%",bbpct:"25.0%",kbb:"12.5%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:50,l:35,pct:".588",gb:"—", home:"25-16",away:"25-19", rs:403, ra:319, diff:+84, strk:"L1", l10:"2-8", highlight:true,  srs:1.0 },
     { team:"PHI", full:"Philadelphia Phillies", w:49,l:39,pct:".557",gb:"2.5", home:"25-21",away:"24-18", rs:394, ra:389, diff:+5, strk:"L1", l10:"7-3", highlight:false, srs:0.1 },
     { team:"MIA", full:"Miami Marlins",        w:46,l:42,pct:".523",gb:"5.5", home:"28-17",away:"18-25", rs:390, ra:379, diff:+11, strk:"L2", l10:"6-4", highlight:false, srs:0.2 },
     { team:"WSN", full:"Washington Nationals", w:45,l:43,pct:".511",gb:"6.5", home:"17-25",away:"28-18", rs:470, ra:453, diff:+17, strk:"W2", l10:"5-5", highlight:false, srs:0.3 },
     { team:"NYM", full:"New York Mets",        w:36,l:51,pct:".414",gb:"15.0", home:"19-24",away:"17-27", rs:346, ra:395, diff:-49, strk:"L1", l10:"2-8", highlight:false, srs:-0.5 },
   ];
   
export const statcastHitters = [
  // Updated July 2, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Acuña, León, Tromp, Murphy hidden — held; Tellez not in current screenshots — held; Jim Jarvis intentionally not added
  { name:"Michael Harris II", ev:"91.9",hardHit:"50.4%",xwoba:".374",xba:".305",xslg:".526",barrel:"14.1%",chase:"44.6%",whiff:"25.7%",kpct:"20.0%",bbpct:"4.9%", gbpct:"44.4%",fbpct:"23.1%",ldpct:"26.2%",pupct:"6.2%",pullAir:"17.3%"},
  { name:"Matt Olson", ev:"92.8",hardHit:"51.0%",xwoba:".361",xba:".255",xslg:".512",barrel:"13.3%",chase:"27.4%",whiff:"24.6%",kpct:"22.7%",bbpct:"9.7%", gbpct:"36.6%",fbpct:"33.7%",ldpct:"21.1%",pupct:"8.5%",pullAir:"19.5%"},
  { name:"Dominic Smith", ev:"87.8",hardHit:"36.1%",xwoba:".328",xba:".273",xslg:".424",barrel:"6.7%",chase:"32.2%",whiff:"20.1%",kpct:"13.0%",bbpct:"6.3%", gbpct:"38.3%",fbpct:"30.2%",ldpct:"25.9%",pupct:"5.6%",pullAir:"17.3%"},
  { name:"Drake Baldwin", ev:"91.1",hardHit:"48.6%",xwoba:".373",xba:".273",xslg:".509",barrel:"15.8%",chase:"36.0%",whiff:"25.7%",kpct:"24.4%",bbpct:"9.5%", gbpct:"47.1%",fbpct:"22.4%",ldpct:"25.3%",pupct:"5.2%",pullAir:"13.2%"},
  { name:"Mauricio Dubón", ev:"86.4",hardHit:"30.1%",xwoba:".323",xba:".277",xslg:".405",barrel:"5.1%",chase:"37.1%",whiff:"16.5%",kpct:"14.1%",bbpct:"6.7%", gbpct:"39.0%",fbpct:"24.8%",ldpct:"28.0%",pupct:"8.3%",pullAir:"14.6%"},
  { name:"Jorge Mateo", ev:"90.5",hardHit:"47.4%",xwoba:".330",xba:".269",xslg:".449",barrel:"9.0%",chase:"41.7%",whiff:"29.4%",kpct:"28.6%",bbpct:"5.9%", gbpct:"37.2%",fbpct:"30.8%",ldpct:"28.2%",pupct:"3.8%",pullAir:"21.8%"},
  { name:"Austin Riley", ev:"90.7",hardHit:"43.3%",xwoba:".289",xba:".204",xslg:".369",barrel:"9.5%",chase:"32.8%",whiff:"33.0%",kpct:"29.1%",bbpct:"8.1%", gbpct:"39.1%",fbpct:"30.9%",ldpct:"20.8%",pupct:"9.2%",pullAir:"17.4%"},
  { name:"Ozzie Albies", ev:"87.2",hardHit:"27.9%",xwoba:".302",xba:".254",xslg:".385",barrel:"4.1%",chase:"36.3%",whiff:"19.9%",kpct:"11.5%",bbpct:"6.8%", gbpct:"35.7%",fbpct:"32.0%",ldpct:"25.4%",pupct:"6.9%",pullAir:"24.7%"},
  { name:"Mike Yastrzemski", ev:"90.4",hardHit:"43.4%",xwoba:".291",xba:".223",xslg:".324",barrel:"4.6%",chase:"26.7%",whiff:"23.7%",kpct:"23.8%",bbpct:"9.8%", gbpct:"41.9%",fbpct:"29.1%",ldpct:"24.3%",pupct:"4.7%",pullAir:"18.2%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.0",hardHit:"32.5%",xwoba:".281",xba:".242",xslg:".347",barrel:"6.1%",chase:"29.4%",whiff:"29.2%",kpct:"21.7%",bbpct:"5.2%", gbpct:"56.6%",fbpct:"21.7%",ldpct:"19.3%",pupct:"2.4%",pullAir:"9.6%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.3",hardHit:"34.6%",xwoba:".267",xba:".206",xslg:".373",barrel:"7.7%",chase:"32.5%",whiff:"26.0%",kpct:"29.1%",bbpct:"2.5%", gbpct:"36.5%",fbpct:"40.4%",ldpct:"17.3%",pupct:"5.8%",pullAir:"21.4%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".487",xba:".339",xslg:".828",barrel:"28.6%",chase:"33.3%",whiff:"28.6%",kpct:"30.0%",bbpct:"0.0%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
];

export const statcastPitchers = [
  // Updated July 2, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez not in current screenshots — held; Strider/Ritchie/Carrasco hidden — held
  { name:"Raisel Iglesias", ev:"87.1",hardHit:"29.6%",xwoba:".242",xba:".210",xslg:".289",kpct:"28.7%",bbpct:"5.6%", barrel:"4.3%", chase:"38.4%",whiff:"30.9%",gbpct:"35.2%",fbpct:"26.8%",ldpct:"28.2%",pupct:"9.9%", pullAir:"19.7%"},
  { name:"Dylan Lee", ev:"86.8",hardHit:"28.9%",xwoba:".216",xba:".184",xslg:".266",kpct:"32.6%",bbpct:"3.5%", barrel:"4.4%", chase:"37.7%",whiff:"38.3%",gbpct:"33.3%",fbpct:"31.1%",ldpct:"25.6%",pupct:"10.0%", pullAir:"26.7%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.3%",xwoba:".296",xba:".244",xslg:".369",kpct:"20.0%",bbpct:"7.2%", barrel:"4.7%", chase:"29.3%",whiff:"22.4%",gbpct:"43.7%",fbpct:"26.3%",ldpct:"23.3%",pupct:"6.7%", pullAir:"18.0%"},
  { name:"Chris Sale", ev:"86.8",hardHit:"31.0%",xwoba:".280",xba:".227",xslg:".332",kpct:"29.6%",bbpct:"6.0%", barrel:"5.2%", chase:"35.8%",whiff:"29.8%",gbpct:"45.4%",fbpct:"23.6%",ldpct:"25.8%",pupct:"5.2%", pullAir:"17.0%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.3",hardHit:"36.6%",xwoba:".277",xba:".222",xslg:".319",kpct:"28.0%",bbpct:"8.3%", barrel:"4.9%", chase:"29.7%",whiff:"26.3%",gbpct:"40.2%",fbpct:"26.8%",ldpct:"23.2%",pupct:"9.8%", pullAir:"11.0%"},
  { name:"Hurston Waldrep", ev:"89.5",hardHit:"33.3%",xwoba:".303",xba:".203",xslg:".301",kpct:"20.6%",bbpct:"14.7%", barrel:"4.8%", chase:"26.3%",whiff:"28.8%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"9.5%",pupct:"4.8%", pullAir:"9.5%"},
  { name:"Tyler Kinley", ev:"84.4",hardHit:"26.2%",xwoba:".271",xba:".196",xslg:".346",kpct:"25.0%",bbpct:"8.6%", barrel:"6.0%", chase:"25.8%",whiff:"27.8%",gbpct:"31.0%",fbpct:"32.1%",ldpct:"23.8%",pupct:"13.1%", pullAir:"34.5%"},
  { name:"Martín Pérez", ev:"87.9",hardHit:"36.8%",xwoba:".323",xba:".253",xslg:".397",kpct:"19.5%",bbpct:"9.6%", barrel:"6.8%", chase:"26.2%",whiff:"22.3%",gbpct:"48.2%",fbpct:"22.3%",ldpct:"24.5%",pupct:"5.0%", pullAir:"21.4%"},
  { name:"Grant Holmes", ev:"91.1",hardHit:"44.7%",xwoba:".336",xba:".247",xslg:".427",kpct:"20.7%",bbpct:"11.1%", barrel:"9.3%", chase:"32.2%",whiff:"28.1%",gbpct:"42.5%",fbpct:"26.5%",ldpct:"24.8%",pupct:"6.2%", pullAir:"20.8%"},
  { name:"Reynaldo López", ev:"86.9",hardHit:"35.6%",xwoba:".331",xba:".257",xslg:".417",kpct:"21.0%",bbpct:"10.0%", barrel:"6.1%", chase:"26.4%",whiff:"21.7%",gbpct:"36.2%",fbpct:"27.5%",ldpct:"28.9%",pupct:"7.4%", pullAir:"21.5%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.5%"},
  { name:"Dylan Dodd", ev:"90.5",hardHit:"41.2%",xwoba:".273",xba:".206",xslg:".343",kpct:"29.8%",bbpct:"9.5%", barrel:"7.8%", chase:"30.5%",whiff:"29.1%",gbpct:"27.5%",fbpct:"21.6%",ldpct:"29.4%",pupct:"21.6%", pullAir:"41.2%"},
  { name:"James Karinchak", ev:"87.2",hardHit:"27.3%",xwoba:".244",xba:".130",xslg:".280",kpct:"21.2%",bbpct:"12.1%", barrel:"9.1%", chase:"22.4%",whiff:"24.5%",gbpct:"27.3%",fbpct:"40.9%",ldpct:"13.6%",pupct:"18.2%", pullAir:"13.6%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.9%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
];
   
   export const hitterWarProgress = [
     { week:"G6",  "Olson":0.5,"Albies":0.3,"Baldwin":0.2,"Harris":0.1,"Dubón":0.1,"Acuña":0.0,"Smith":0.0,"Mateo":0.0,"Riley":0.0,"White":0.0,"Yaz":0.0,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0 },
     { week:"G12", "Olson":1.0,"Albies":0.8,"Baldwin":0.6,"Harris":0.4,"Dubón":0.3,"Acuña":0.0,"Smith":0.1,"Mateo":0.0,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0 },
     { week:"G18", "Olson":1.4,"Albies":1.0,"Baldwin":0.9,"Harris":0.7,"Dubón":0.4,"Acuña":0.1,"Smith":0.2,"Mateo":0.1,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0 },
     { week:"G24", "Olson":1.7,"Albies":1.4,"Baldwin":1.2,"Harris":0.9,"Dubón":0.6,"Acuña":0.2,"Smith":0.3,"Mateo":0.2,"Riley":0.2,"White":0.0,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0 },
     { week:"G30", "Olson":2.0,"Albies":1.6,"Baldwin":1.4,"Harris":1.1,"Dubón":0.7,"Acuña":0.3,"Smith":0.4,"Mateo":0.3,"Riley":0.2,"White":-0.1,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0 },
     { week:"G36", "Olson":2.1,"Albies":1.7,"Baldwin":1.6,"Harris":1.2,"Dubón":0.8,"Acuña":0.5,"Smith":0.5,"Mateo":0.4,"Riley":0.2,"White":-0.2,"Yaz":-0.3,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":-0.1,"Bart":0.0,"Tellez":0.0 },
     { week:"G42", "Olson":2.4,"Albies":1.5,"Baldwin":1.8,"Harris":1.2,"Dubón":1.0,"Acuña":0.6,"Smith":0.6,"Mateo":0.6,"Riley":0.3,"White":-0.1,"Yaz":0.1,"León":0.0,"Kim":0.1,"Tromp":0.0,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
     { week:"G54", "Olson":2.2,"Albies":1.4,"Baldwin":2.3,"Harris":1.5,"Dubón":0.9,"Acuña":0.5,"Smith":0.6,"Mateo":0.6,"Riley":0.5,"White":-0.1,"Yaz":0.3,"León":-0.2,"Kim":-0.6,"Tromp":0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
     { week:"G60", "Olson":2.2,"Albies":1.5,"Baldwin":2.2,"Harris":1.9,"Dubón":1.0,"Acuña":1.0,"Smith":0.6,"Mateo":0.9,"Riley":0.3,"White":-0.1,"Yaz":0.6,"León":-0.3,"Kim":-0.8,"Tromp":-0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
     { week:"G66", "Olson":2.3,"Albies":1.7,"Baldwin":2.2,"Harris":2.1,"Dubón":1.5,"Acuña":1.0,"Smith":0.5,"Mateo":0.8,"Riley":0.2,"White":-0.1,"Yaz":0.5,"León":-0.4,"Kim":-0.9,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
     { week:"G81", "Olson":2.5,"Albies":1.7,"Baldwin":1.5,"Harris":2.2,"Dubón":1.7,"Acuña":0.9,"Smith":0.0,"Mateo":0.7,"Riley":0.1,"White":0.2,"Yaz":0.0,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"D.Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"D.Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"D.Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"D.Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"D.Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"D.Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"D.Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"D.Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"D.Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"D.Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"D.Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0 },
     { week:"G81", "Elder":1.4,"Sale":2.4,"D.Lee":1.3,"Iglesias":0.9,"Suarez":0.8,"Fuentes":0.9,"Pérez":0.9,"Holmes":0.0,"Kinley":0.1,"López":0.2,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.1,"Karinchak":0.1,"Waldrep":0.0,"Hamilton":0.0 },
   ];

// ════════════════════════════════════════════════════════════════════════════
// TrackerHit+ / TrackerArm+ — Composite performance metrics
// Updated June 25, 2026
//   Hitters:  wOBA (23) · LD% (17) · Whiff% inv (15) · LA SwSp% (12) ·
//             Hard Hit% (11) · EV (11) · Chase% inv (08)
//   Pitchers: SIERA inv (26) · K-BB% (24) · WHIP inv (20) · xwOBA inv (12) ·
//             SwStr% (10) · EV inv (8)
// 100-centered, 15 points per pooled standard deviation. Recalibrate league
// constants at season end from Baseball Savant / FanGraphs MLB-wide leaderboards.
// ════════════════════════════════════════════════════════════════════════════

const _pct = (v) => (typeof v === "string" ? parseFloat(v.replace("%","")) : Number(v));
const _num = (v) => (typeof v === "string" ? parseFloat(v.replace(/[^\d.\-]/g,"")) : Number(v));
const _z   = (val, mean, sd) => (sd > 0 ? (val - mean) / sd : 0);

// ─── League constants ──────────────────────────────────────────────────────
const LG_HIT = {
  woba:    { mean: 0.317, sd: 0.030 },
  ldpct:   { mean: 23.7,  sd: 3.0   },
  whiff:   { mean: 25.0,  sd: 4.0   },   // inverted (lower = better)
  laSwSp:  { mean: 33.7,  sd: 4.0   },
  hardHit: { mean: 39.2,  sd: 6.0   },
  ev:      { mean: 88.7,  sd: 2.0   },
  chase:   { mean: 30.0,  sd: 4.0   },   // inverted (lower = better)
};
const W_HIT = {
  woba: 0.26, ldpct: 0.17, whiff: 0.15, laSwSp: 0.12, hardHit: 0.11, ev: 0.11, chase: 0.08,
};

const LG_PIT = {
  siera: { mean: 4.05,  sd: 0.50  },   // inverted (lower = better)
  kbb:   { mean: 15.0,  sd: 5.0   },
  whip:  { mean: 1.30,  sd: 0.15  },   // inverted (lower = better)
  xwoba: { mean: 0.320, sd: 0.030 },   // inverted (lower allowed = better)
  swstr: { mean: 11.5,  sd: 2.5   },
  ev:    { mean: 88.7,  sd: 2.0   },   // inverted (lower allowed = better)
};
const W_PIT = {
  siera: 0.26, kbb: 0.24, whip: 0.20, xwoba: 0.12, swstr: 0.10, ev: 0.08,
};

// ─── Lookup tables ─────────────────────────────────────────────────────────
const _scHitterByName  = Object.fromEntries(statcastHitters.map(s => [s.name, s]));
const _scPitcherByName = Object.fromEntries(statcastPitchers.map(s => [s.name, s]));

// ─── Compute TrackerHit+ for a hitter ──────────────────────────────────────
const _computeTrackerHit = (h) => {
  const sc = _scHitterByName[h.name] || {};
  const woba    = _num(h.woba);
  const ldpct   = _pct(sc.ldpct);
  const whiff   = _pct(sc.whiff);
  const laSwSp  = _pct(h.laSwSp);
  const hardHit = _pct(sc.hardHit);
  const ev      = _num(sc.ev);
  const chase   = _pct(sc.chase);
  if ([woba, ldpct, whiff, laSwSp, hardHit, ev, chase].some(v => !isFinite(v))) return null;
  const z =
      W_HIT.woba    *  _z(woba,    LG_HIT.woba.mean,    LG_HIT.woba.sd)
    + W_HIT.ldpct   *  _z(ldpct,   LG_HIT.ldpct.mean,   LG_HIT.ldpct.sd)
    + W_HIT.whiff   * -_z(whiff,   LG_HIT.whiff.mean,   LG_HIT.whiff.sd)   // inverted
    + W_HIT.laSwSp  *  _z(laSwSp,  LG_HIT.laSwSp.mean,  LG_HIT.laSwSp.sd)
    + W_HIT.hardHit *  _z(hardHit, LG_HIT.hardHit.mean, LG_HIT.hardHit.sd)
    + W_HIT.ev      *  _z(ev,      LG_HIT.ev.mean,      LG_HIT.ev.sd)
    + W_HIT.chase   * -_z(chase,   LG_HIT.chase.mean,   LG_HIT.chase.sd);  // inverted
  return Math.round(100 + 15 * z);
};

// ─── Compute TrackerArm+ for a pitcher ─────────────────────────────────────
const _computeTrackerArm = (p) => {
  const sc = _scPitcherByName[p.name] || {};
  const siera = _num(p.siera);
  const kpct  = _pct(p.kpct);
  const bbpct = _pct(p.bbpct);
  const kbb   = kpct - bbpct;
  const whip  = _num(p.whip);
  const xwoba = _num(sc.xwoba);
  const swstr = _pct(p.swstr);
  const ev    = _num(sc.ev);
  if ([siera, kbb, whip, xwoba, swstr, ev].some(v => !isFinite(v))) return null;
  const z =
      W_PIT.siera * -_z(siera, LG_PIT.siera.mean, LG_PIT.siera.sd)   // inverted
    + W_PIT.kbb   *  _z(kbb,   LG_PIT.kbb.mean,   LG_PIT.kbb.sd)
    + W_PIT.whip  * -_z(whip,  LG_PIT.whip.mean,  LG_PIT.whip.sd)    // inverted
    + W_PIT.xwoba * -_z(xwoba, LG_PIT.xwoba.mean, LG_PIT.xwoba.sd)   // inverted
    + W_PIT.swstr *  _z(swstr, LG_PIT.swstr.mean, LG_PIT.swstr.sd)
    + W_PIT.ev    * -_z(ev,    LG_PIT.ev.mean,    LG_PIT.ev.sd);     // inverted
  return Math.round(100 + 15 * z);
};

// ─── Attach to player objects ──────────────────────────────────────────────
hitters.forEach(h => { h.trackerHit = _computeTrackerHit(h); });
starters.forEach(p => { p.trackerArm = _computeTrackerArm(p); });
bullpen.forEach(p => { p.trackerArm = _computeTrackerArm(p); });
