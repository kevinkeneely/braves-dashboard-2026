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
 
   export const lastUpdated = "June 29, 2026";
 
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
      // Upcoming
     { date:"Tue, Jun 30", opp:"St. Louis",   home:true,},
      // July
     { date:"Wed, Jul 1", opp:"St. Louis",   home:true,},
     { date:"Thu, Jul 2", opp:"St. Louis",   home:true,},
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
     record: "49-33",
     runs: 390,
     era: "3.41",
     avg: ".248",
     obp: ".311",
     slg: ".409",
     ops: ".719",
     wrc: 98,
     iso: ".162",
     battingK: "21.2%",
     battingBB: "7.8%",
     woba: ".317",
     xwoba: ".324",
     fip: "3.92",
     xera: "3.80",
     xfip: "4.00",
     whip: "1.21",
     gb: "41.6%",
     siera: "3.95",
     pitchingK: "23.2%",
     pitchingBB: "9.0%",
     pitchingKBB: "14.2%",
     swstr: "11.3%",
     cstr: "16.2%",
     csw: "27.6%",
     fastSwing: "26.1%",
     sqUpSw: "24.3%",
     blastSw: "10.0%",
     idealAtk: "49.2%",
     batFastSwing: "32.0%",
     batSqUpSw: "24.5%",
     batBlastSw: "11.1%",
     batIdealAtk: "50.2%",
     batSwStr: "11.0%",
     batCStr: "15.1%",
     batCSW: "26.0%",
     batChase: "33.8%",
     batWhiff: "24.8%",
     chase: "30.6%",
     whiff: "26.2%",
     batBatSpeed: "72.6",
     batSpeed: "72.1",
// Plate Discipline additions
     batZoneSwing: "67.9%",
     batZoneContact: "84.1%",
     batChaseContact: "59.7%",
     zoneSwing: "66.4%",
     zoneContact: "84.3%",
     chaseContact: "54.1%",
// Statcast (hitters)
     batBarrel: "9.0%",
     batHardHit: "39.6%",
     batExitVelo: "89.3",
     batXBA: ".251",
     batXSLG: ".425",
     batXwOBAcon: ".376",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "6.7%",
     hardHit: "37.6%",
     exitVelo: "88.7",
     xBA: ".236",
     xSLG: ".375",
     pXwOBA: ".305",
     xwOBAcon: ".353",
 };
   
export const hitters = [
    // Updated June 28, 2026 — Counting stats, slash lines, wRC+, wOBA, bWAR, fWAR refreshed from Baseball Reference + FanGraphs
    // Splits, bat tracking, Statcast, ABS, defensive metrics held at prior values (no new screenshots this session)
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".351", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:81,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:145,woba:".384",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:130,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:1,h:2,hr:0,rbi:4,avg:".222",obp:".500",slg:".222",ops:".722",wrc:142,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
    { name:"Drake Baldwin", pos:"C", pa:257, avg:".260", obp:".342", slg:".471", ops:".814", hr:14, rbi:39, r:42, h:59, doubles:6, triples:0, sb:1, bbpct:"9.7%", kpct:"24.9%", war:1.8, war2:1.5, wrc:125, woba:".355", xwoba:".377", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"24.4%", fastSwing:"52.4%", laSwSp:"39.9%", idealAttack:"47.8%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:9.4, netRuns:0.5, chal:28, won:21, lost:7, wonPct:"75%", chalRate:"1.9%", xChalRate:"2.1%", rateVsExp:"-0.2%"}, splits:{vsL:{pa:102,r:18,h:26,hr:7,rbi:16,avg:".286",obp:".363",slg:".538",ops:".901",wrc:149,woba:".390",iso:".253",bbpct:"8.8%",kpct:"22.5%",babip:".311"}, vsR:{pa:151,r:24,h:33,hr:7,rbi:23,avg:".250",obp:".338",slg:".439",ops:".777",wrc:115,woba:".340",iso:".189",bbpct:"10.6%",kpct:"26.5%",babip:".302"}, risp:{pa:59,r:0,h:16,hr:0,rbi:24,avg:".333",obp:".424",slg:".429",ops:".852",wrc:139,woba:".375",iso:".102",bbpct:"13.6%",kpct:"15.3%",babip:".390"}, highLeverage:{pa:14,r:11,h:4,hr:0,rbi:7,avg:".308",obp:".357",slg:".385",ops:".742",wrc:109,woba:".331",iso:".077",bbpct:"7.1%",kpct:"21.4%",babip:".400"}}},
    { name:"Matt Olson", pos:"1B", pa:353, avg:".270", obp:".340", slg:".524", ops:".864", hr:20, rbi:52, r:53, h:85, doubles:20, triples:0, sb:2, bbpct:"9.6%", kpct:"22.9%", war:3.2, war2:2.5, wrc:135, woba:".369", xwoba:".362", oaa:5, frv:5, batSpeed:75.0, squaredUp:"23.7%", fastSwing:"52.0%", laSwSp:"31.6%", idealAttack:"53.1%", armValue:null, armStrength:82.8, abs:{netOvr:0.5, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.9%", xChalRate:"3.0%", rateVsExp:"+1.0%"}, splits:{vsL:{pa:158,r:24,h:39,hr:8,rbi:21,avg:".275",obp:".342",slg:".514",ops:".856",wrc:135,woba:".369",iso:".239",bbpct:"8.9%",kpct:"21.5%",babip:".307"}, vsR:{pa:191,r:29,h:46,hr:12,rbi:31,avg:".272",obp:".346",slg:".544",ops:".890",wrc:140,woba:".377",iso:".272",bbpct:"10.5%",kpct:"24.1%",babip:".301"}, risp:{pa:87,r:2,h:15,hr:2,rbi:26,avg:".214",obp:".333",slg:".386",ops:".719",wrc:95,woba:".310",iso:".171",bbpct:"16.1%",kpct:"24.1%",babip:".260"}, highLeverage:{pa:34,r:15,h:7,hr:3,rbi:9,avg:".241",obp:".324",slg:".552",ops:".875",wrc:128,woba:".358",iso:".310",bbpct:"11.8%",kpct:"29.4%",babip:".235"}}},
    { name:"Ozzie Albies", pos:"2B", pa:347, avg:".277", obp:".329", slg:".439", ops:".767", hr:12, rbi:44, r:51, h:86, doubles:14, triples:0, sb:1, bbpct:"6.9%", kpct:"11.2%", war:2.1, war2:1.7, wrc:110, woba:".332", xwoba:".304", oaa:2, frv:0, batSpeed:69.0, squaredUp:"30.7%", fastSwing:"5.7%", laSwSp:"34.9%", idealAttack:"57.5%", armValue:null, armStrength:70.8, abs:{netOvr:-0.4, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.4%", xChalRate:"5.8%", rateVsExp:"-0.4%"}, splits:{vsL:{pa:147,r:16,h:43,hr:6,rbi:20,avg:".312",obp:".333",slg:".522",ops:".855",wrc:131,woba:".363",iso:".210",bbpct:"2.7%",kpct:"5.4%",babip:".291"}, vsR:{pa:196,r:35,h:43,hr:6,rbi:22,avg:".256",obp:".332",slg:".381",ops:".713",wrc:99,woba:".316",iso:".125",bbpct:"10.2%",kpct:"15.8%",babip:".270"}, risp:{pa:80,r:3,h:22,hr:3,rbi:33,avg:".355",obp:".388",slg:".548",ops:".936",wrc:141,woba:".378",iso:".194",bbpct:"10.0%",kpct:"6.3%",babip:".302"}, highLeverage:{pa:34,r:17,h:8,hr:2,rbi:10,avg:".276",obp:".353",slg:".552",ops:".905",wrc:145,woba:".383",iso:".276",bbpct:"8.8%",kpct:"11.8%",babip:".250"}}},
    { name:"Michael Harris II", pos:"CF", pa:288, avg:".300", obp:".333", slg:".502", ops:".835", hr:14, rbi:42, r:37, h:82, doubles:13, triples:0, sb:5, bbpct:"4.5%", kpct:"20.5%", war:2.6, war2:2.2, wrc:129, woba:".361", xwoba:".377", oaa:6, frv:5, batSpeed:74.9, squaredUp:"23.6%", fastSwing:"48.7%", laSwSp:"32.1%", idealAttack:"46.7%", armValue:null, armStrength:85.4, abs:{netOvr:-1.1, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.7%", xChalRate:"2.5%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:110,r:12,h:30,hr:4,rbi:14,avg:".288",obp:".327",slg:".471",ops:".798",wrc:120,woba:".347",iso:".183",bbpct:"4.5%",kpct:"21.8%",babip:".342"}, vsR:{pa:174,r:25,h:52,hr:10,rbi:25,avg:".313",obp:".339",slg:".530",ops:".869",wrc:138,woba:".374",iso:".217",bbpct:"4.0%",kpct:"19.5%",babip:".341"}, risp:{pa:55,r:0,h:14,hr:0,rbi:19,avg:".286",obp:".345",slg:".408",ops:".754",wrc:110,woba:".332",iso:".122",bbpct:"7.3%",kpct:"14.5%",babip:".333"}, highLeverage:{pa:28,r:10,h:6,hr:1,rbi:9,avg:".250",obp:".321",slg:".500",ops:".821",wrc:121,woba:".348",iso:".250",bbpct:"7.1%",kpct:"25.0%",babip:".294"}}},
    { name:"Austin Riley", pos:"3B", pa:328, avg:".212", obp:".293", slg:".342", ops:".635", hr:8, rbi:36, r:33, h:62, doubles:12, triples:1, sb:4, bbpct:"8.5%", kpct:"29.0%", war:0.3, war2:0.1, wrc:78, woba:".286", xwoba:".298", oaa:-4, frv:-3, batSpeed:75.6, squaredUp:"21.1%", fastSwing:"56.6%", laSwSp:"30.4%", idealAttack:"47.5%", armValue:null, armStrength:83.8, abs:{netOvr:-0.6, netRuns:-0.2, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.2%", xChalRate:"5.0%", rateVsExp:"-2.8%"}, splits:{vsL:{pa:115,r:10,h:24,hr:1,rbi:13,avg:".238",obp:".322",slg:".337",ops:".658",wrc:86,woba:".298",iso:".099",bbpct:"11.3%",kpct:"31.3%",babip:".354"}, vsR:{pa:210,r:22,h:38,hr:7,rbi:23,avg:".202",obp:".281",slg:".351",ops:".632",wrc:77,woba:".283",iso:".149",bbpct:"7.1%",kpct:"27.6%",babip:".250"}, risp:{pa:89,r:4,h:19,hr:4,rbi:32,avg:".235",obp:".281",slg:".457",ops:".738",wrc:98,woba:".315",iso:".222",bbpct:"6.7%",kpct:"31.5%",babip:".294"}, highLeverage:{pa:35,r:4,h:7,hr:1,rbi:13,avg:".226",obp:".257",slg:".355",ops:".612",wrc:62,woba:".262",iso:".129",bbpct:"5.7%",kpct:"20.0%",babip:".240"}}},
    { name:"Mauricio Dubón", pos:"SS", pa:310, avg:".267", obp:".317", slg:".420", ops:".737", hr:8, rbi:43, r:34, h:77, doubles:16, triples:2, sb:2, bbpct:"6.1%", kpct:"14.5%", war:1.9, war2:1.7, wrc:104, woba:".324", xwoba:".320", oaa:7, frv:5, batSpeed:69.0, squaredUp:"27.2%", fastSwing:"3.1%", laSwSp:"38.1%", idealAttack:"37.8%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.6%", xChalRate:"4.3%", rateVsExp:"+2.3%"}, splits:{vsL:{pa:122,r:12,h:27,hr:3,rbi:19,avg:".239",obp:".295",slg:".389",ops:".684",wrc:89,woba:".302",iso:".150",bbpct:"6.6%",kpct:"11.5%",babip:".250"}, vsR:{pa:185,r:20,h:49,hr:5,rbi:24,avg:".285",obp:".332",slg:".436",ops:".768",wrc:113,woba:".337",iso:".151",bbpct:"5.9%",kpct:"16.8%",babip:".324"}, risp:{pa:71,r:3,h:23,hr:3,rbi:37,avg:".354",obp:".400",slg:".615",ops:"1.015",wrc:180,woba:".435",iso:".262",bbpct:"7.0%",kpct:"11.3%",babip:".370"}, highLeverage:{pa:32,r:7,h:12,hr:1,rbi:21,avg:".414",obp:".469",slg:".690",ops:"1.158",wrc:219,woba:".493",iso:".276",bbpct:"9.4%",kpct:"9.4%",babip:".440"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:79, avg:".070", obp:".165", slg:".070", ops:".235", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"10.1%", kpct:"27.8%", war:-0.9, war2:-1.2, wrc:-29, woba:".127", xwoba:".209", oaa:-3, frv:-3, batSpeed:71.9, squaredUp:"16.3%", fastSwing:"22.0%", laSwSp:"19.1%", idealAttack:"58.4%", armValue:null, armStrength:84.2, abs:{netOvr:0.7, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.6%", xChalRate:"4.2%", rateVsExp:"-2.6%"}, splits:{vsL:{pa:39,r:1,h:2,hr:0,rbi:2,avg:".056",obp:".128",slg:".056",ops:".184",wrc:-48,woba:".100",iso:".000",bbpct:"7.7%",kpct:"30.8%",babip:".083"}, vsR:{pa:37,r:3,h:3,hr:0,rbi:1,avg:".091",obp:".189",slg:".091",ops:".280",wrc:-15,woba:".148",iso:".000",bbpct:"10.8%",kpct:"21.6%",babip:".120"}, risp:{pa:17,r:0,h:3,hr:0,rbi:3,avg:".214",obp:".353",slg:".214",ops:".567",wrc:75,woba:".281",iso:".000",bbpct:"17.6%",kpct:"17.6%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:124,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
    { name:"Mike Yastrzemski", pos:"LF", pa:224, avg:".221", obp:".308", slg:".337", ops:".645", hr:4, rbi:19, r:27, h:44, doubles:9, triples:1, sb:1, bbpct:"9.4%", kpct:"24.1%", war:0.3, war2:0.0, wrc:83, woba:".293", xwoba:".289", oaa:-2, frv:-1, batSpeed:71.1, squaredUp:"29.0%", fastSwing:"7.1%", laSwSp:"30.9%", idealAttack:"60.8%", armValue:null, armStrength:83.4, abs:{netOvr:2.2, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:32,r:4,h:3,hr:0,rbi:1,avg:".111",obp:".250",slg:".148",ops:".398",wrc:24,woba:".206",iso:".037",bbpct:"9.4%",kpct:"40.6%",babip:".214"}, vsR:{pa:189,r:23,h:41,hr:4,rbi:18,avg:".241",obp:".317",slg:".371",ops:".688",wrc:94,woba:".308",iso:".129",bbpct:"9.0%",kpct:"21.7%",babip:".296"}, risp:{pa:53,r:0,h:13,hr:0,rbi:13,avg:".271",obp:".340",slg:".354",ops:".694",wrc:97,woba:".313",iso:".083",bbpct:"9.4%",kpct:"37.7%",babip:".464"}, highLeverage:{pa:23,r:5,h:6,hr:0,rbi:6,avg:".286",obp:".348",slg:".381",ops:".729",wrc:106,woba:".326",iso:".095",bbpct:"8.7%",kpct:"26.1%",babip:".400"}}},
    { name:"Dominic Smith", pos:"DH", pa:197, avg:".275", obp:".316", slg:".416", ops:".732", hr:6, rbi:32, r:26, h:49, doubles:5, triples:1, sb:0, bbpct:"6.1%", kpct:"13.2%", war:0.5, war2:0.0, wrc:100, woba:".318", xwoba:".327", oaa:null, frv:0, batSpeed:68.7, squaredUp:"30.1%", fastSwing:"5.2%", laSwSp:"35.3%", idealAttack:"53.2%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.6%", xChalRate:"4.9%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:30,r:3,h:4,hr:0,rbi:2,avg:".160",obp:".276",slg:".200",ops:".476",wrc:42,woba:".232",iso:".040",bbpct:"13.3%",kpct:"10.0%",babip:".182"}, vsR:{pa:164,r:23,h:45,hr:6,rbi:29,avg:".300",obp:".329",slg:".460",ops:".789",wrc:115,woba:".339",iso:".160",bbpct:"4.9%",kpct:"13.4%",babip:".307"}, risp:{pa:55,r:3,h:14,hr:3,rbi:28,avg:".304",obp:".315",slg:".522",ops:".837",wrc:116,woba:".341",iso:".217",bbpct:"5.5%",kpct:"9.1%",babip:".256"}, highLeverage:{pa:27,r:6,h:3,hr:1,rbi:11,avg:".150",obp:".231",slg:".350",ops:".581",wrc:49,woba:".243",iso:".200",bbpct:"11.1%",kpct:"22.2%",babip:".125"}}},
    { name:"Jorge Mateo", pos:"SS", pa:113, avg:".262", obp:".301", slg:".421", ops:".721", hr:4, rbi:11, r:25, h:28, doubles:5, triples:0, sb:7, bbpct:"5.3%", kpct:"29.2%", war:0.7, war2:0.7, wrc:99, woba:".316", xwoba:".332", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.4%", fastSwing:"35.5%", laSwSp:"48.6%", idealAttack:"40.3%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:45,r:8,h:11,hr:2,rbi:3,avg:".256",obp:".289",slg:".419",ops:".707",wrc:94,woba:".309",iso:".163",bbpct:"4.4%",kpct:"35.6%",babip:".360"}, vsR:{pa:68,r:17,h:17,hr:2,rbi:8,avg:".266",obp:".309",slg:".422",ops:".731",wrc:102,woba:".320",iso:".156",bbpct:"5.9%",kpct:"25.0%",babip:".333"}, risp:{pa:27,r:0,h:6,hr:0,rbi:6,avg:".240",obp:".296",slg:".240",ops:".536",wrc:54,woba:".250",iso:".000",bbpct:"7.4%",kpct:"33.3%",babip:".375"}, highLeverage:{pa:12,r:8,h:2,hr:0,rbi:1,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"25.0%",babip:".286"}}},
    { name:"Eli White", pos:"OF", pa:110, avg:".216", obp:".264", slg:".363", ops:".626", hr:3, rbi:14, r:12, h:22, doubles:4, triples:1, sb:3, bbpct:"5.5%", kpct:"20.9%", war:0.8, war2:0.2, wrc:71, woba:".275", xwoba:".284", oaa:1, frv:2, batSpeed:73.1, squaredUp:"21.4%", fastSwing:"32.6%", laSwSp:"32.5%", idealAttack:"53.5%", armValue:null, armStrength:89.5, abs:{netOvr:-1.0, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.9%", xChalRate:"5.2%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:65,r:5,h:14,hr:2,rbi:9,avg:".246",obp:".323",slg:".421",ops:".744",wrc:106,woba:".326",iso:".175",bbpct:"9.2%",kpct:"21.5%",babip:".286"}, vsR:{pa:45,r:7,h:8,hr:1,rbi:5,avg:".178",obp:".178",slg:".289",ops:".467",wrc:21,woba:".201",iso:".111",bbpct:"0.0%",kpct:"20.0%",babip:".200"}, risp:{pa:31,r:1,h:7,hr:1,rbi:11,avg:".259",obp:".323",slg:".407",ops:".730",wrc:101,woba:".318",iso:".148",bbpct:"9.7%",kpct:"16.1%",babip:".273"}, highLeverage:{pa:17,r:3,h:2,hr:0,rbi:4,avg:".133",obp:".235",slg:".133",ops:".369",wrc:11,woba:".187",iso:".000",bbpct:"11.8%",kpct:"11.8%",babip:".154"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-55,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-65,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:187,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.2, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:490,woba:".892",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
    { name:"Joey Bart", pos:"C", pa:11, avg:".182", obp:".182", slg:".455", ops:".636", hr:1, rbi:3, r:1, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"0.0%", war:0.0, war2:0.0, wrc:66, woba:".268", xwoba:".363", oaa:null, frv:1, batSpeed:75.6, squaredUp:"18.8%", fastSwing:"62.5%", laSwSp:"36.7%", idealAttack:"25.0%", avgPop:1.93, armValue:null, armStrength:84.1, splits:{vsL:{pa:7,r:1,h:2,hr:1,rbi:3,avg:".286",obp:".286",slg:".714",ops:"1.000",wrc:170,woba:".421",iso:".429",bbpct:"0.0%",kpct:"0.0%",babip:".167"}, vsR:{pa:4,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:2,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
    { name:"Rowdy Tellez", pos:"1B", pa:10, avg:".200", obp:".200", slg:".500", ops:".700", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"30.0%", war:0.0, war2:0.0, wrc:84, woba:".294", xwoba:".487", oaa:null, frv:null, batSpeed:76.4, squaredUp:"15.8%", fastSwing:"47.4%", laSwSp:"57.1%", idealAttack:"68.4%", armValue:null, armStrength:null, splits:{vsL:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:8,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".250",slg:".625",ops:".875",wrc:134,woba:".368",iso:".375",bbpct:"0.0%",kpct:"37.5%",babip:".250"}, risp:{pa:5,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".200",slg:".400",ops:".600",wrc:5,woba:".178",iso:".200",bbpct:"0.0%",kpct:"40.0%",babip:".333"}, highLeverage:{pa:3,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".333",slg:".333",ops:".667",wrc:86,woba:".297",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".500"}}},
  ];

export const starters = [
    // Updated June 27, 2026 PM — Bat Speed / Fast Swing% refreshed from Baseball Savant
    { name:"Chris Sale", wl:"8-6", era:"2.10", ip:"90.0", kpct:"28.9%", bbpct:"6.1%", whip:"1.078", war:2.8, war2:2.4, fip:"2.54", xfip:"3.06", siera:"3.09", batSpeed:70.8, fastSwing:"19.5%", swstr:"13.3%", cstr:"18.0%", csw:"31.3%", laSwSp:"37.4%", idealAttack:"46.1%", splits:{vsL:{ip:"20.2",era:"1.31",fip:"1.70",xfip:"1.58",whip:"0.87",avg:".197",obp:".256",slg:".289",woba:".248",kpct:"36.1%",bbpct:"3.6%",kbb:"32.5%"}, vsR:{ip:"63.1",era:"2.42",fip:"3.04",xfip:"3.55",whip:"1.11",avg:".222",obp:".290",slg:".312",woba:".273",kpct:"26.6%",bbpct:"6.9%",kbb:"19.7%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.35", xfip:"4.35", siera:"4.13", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.7%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.60",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".343",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.90",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Martín Pérez", wl:"6-4", era:"3.00", ip:"72.0", kpct:"20.7%", bbpct:"9.3%", whip:"1.125", fip:"3.90", war:1.7, war2:1.0, xfip:"3.95", siera:"4.25", batSpeed:73.2, fastSwing:"33.3%", swstr:"9.1%", cstr:"18.9%", csw:"28.0%", laSwSp:"34.3%", idealAttack:"50.3%", splits:{vsL:{ip:"20.2",era:"2.61",fip:"3.44",xfip:"3.27",whip:"1.02",avg:".211",obp:".277",slg:".355",woba:".282",kpct:"24.1%",bbpct:"6.0%",kbb:"18.1%"}, vsR:{ip:"51.1",era:"3.16",fip:"4.10",xfip:"4.23",whip:"1.17",avg:".211",obp:".291",slg:".367",woba:".288",kpct:"19.3%",bbpct:"10.6%",kbb:"8.7%"}}},
    { name:"Bryce Elder", wl:"5-6", era:"4.01", ip:"98.2", kpct:"20.0%", bbpct:"7.2%", whip:"1.226", fip:"3.97", war:0.7, war2:1.4, xfip:"4.03", siera:"4.23", batSpeed:72.4, fastSwing:"27.5%", swstr:"9.2%", cstr:"16.7%", csw:"26.0%", laSwSp:"31.3%", idealAttack:"50.3%", splits:{vsL:{ip:"63.0",era:"3.14",fip:"3.69",xfip:"4.39",whip:"1.08",avg:".197",obp:".272",slg:".303",woba:".260",kpct:"19.5%",bbpct:"9.0%",kbb:"10.5%"}, vsR:{ip:"31.2",era:"4.83",fip:"3.99",xfip:"3.26",whip:"1.48",avg:".304",obp:".338",slg:".452",woba:".346",kpct:"20.4%",bbpct:"4.2%",kbb:"16.2%"}}},
    { name:"Grant Holmes", wl:"4-4", era:"3.96", ip:"77.1", kpct:"20.7%", bbpct:"11.1%", whip:"1.358", fip:"5.18", war:0.8, war2:0.0, xfip:"4.54", siera:"4.65", batSpeed:72.8, fastSwing:"28.7%", swstr:"12.3%", cstr:"14.9%", csw:"27.2%", laSwSp:"33.6%", idealAttack:"49.1%", splits:{vsL:{ip:"41.1",era:"3.92",fip:"5.50",xfip:"4.54",whip:"1.50",avg:".244",obp:".344",slg:".436",woba:".344",kpct:"21.9%",bbpct:"13.1%",kbb:"8.7%"}, vsR:{ip:"32.0",era:"4.50",fip:"5.29",xfip:"4.72",whip:"1.31",avg:".236",obp:".312",slg:".423",woba:".323",kpct:"18.1%",bbpct:"9.4%",kbb:"8.7%"}}},
    { name:"Reynaldo López", wl:"3-1", era:"3.47", ip:"46.2", sv:0, kpct:"19.9%", bbpct:"10.4%", whip:"1.371", fip:"4.47", war:0.3, war2:0.1, xfip:"4.64", siera:"4.53", batSpeed:71.4, fastSwing:"22.1%", swstr:"8.5%", cstr:"17.3%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"45.5%", splits:{vsL:{ip:"23.2",era:"4.18",fip:"4.80",xfip:"5.34",whip:"1.77",avg:".244",obp:".382",slg:".400",woba:".354",kpct:"20.7%",bbpct:"18.0%",kbb:"2.7%"}, vsR:{ip:"23.0",era:"2.74",fip:"4.15",xfip:"3.97",whip:"0.96",avg:".241",obp:".256",slg:".414",woba:".288",kpct:"18.9%",bbpct:"1.1%",kbb:"17.8%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.87", ip:"40.2", kpct:"20.8%", bbpct:"14.0%", whip:"1.426", fip:"5.59", war:-0.2, war2:-0.2, xfip:"4.82", siera:"4.98", batSpeed:72.4, fastSwing:"27.5%", swstr:"8.7%", cstr:"16.2%", csw:"24.9%", laSwSp:"31.0%", idealAttack:"53.6%", splits:{vsL:{ip:"24.1",era:"6.29",fip:"6.76",xfip:"5.22",whip:"1.60",avg:".247",obp:".375",slg:".484",woba:".375",kpct:"20.5%",bbpct:"14.3%",kbb:"6.3%"}, vsR:{ip:"16.1",era:"2.76",fip:"3.84",xfip:"4.23",whip:"1.16",avg:".179",obp:".288",slg:".250",woba:".254",kpct:"21.2%",bbpct:"13.6%",kbb:"7.6%"}}},
  ];

  export const bullpen = [
    // Updated June 27, 2026 PM — Bat Speed / Fast Swing% refreshed from Baseball Savant
    { name:"Raisel Iglesias", role:"CL", era:"1.37", ip:"26.1", sv:16, kpct:"28.4%", bbpct:"5.9%", whip:"1.063", fip:"2.07", war:1.1, war2:0.9, xfip:"3.12", siera:"2.78", batSpeed:71.3, fastSwing:"24.6%", swstr:"14.9%", cstr:"17.2%", csw:"32.1%", laSwSp:"29.7%", idealAttack:"49.2%", splits:{vsL:{ip:"16.0",era:"1.13",fip:"3.48",xfip:"4.63",whip:"1.00",avg:".204",obp:".271",slg:".315",woba:".264",kpct:"18.6%",bbpct:"8.5%",kbb:"10.2%"}, vsR:{ip:"10.1",era:"1.74",fip:"-0.09",xfip:"0.78",whip:"1.16",avg:".262",obp:".279",slg:".310",woba:".262",kpct:"41.9%",bbpct:"2.3%",kbb:"39.5%"}}},
    { name:"Dylan Lee", role:"RP", era:"0.97", ip:"37.0", sv:0, kpct:"31.8%", bbpct:"3.8%", whip:"0.622", fip:"1.48", war:1.7, war2:1.2, xfip:"2.66", siera:"2.19", batSpeed:72.4, fastSwing:"26.7%", swstr:"19.1%", cstr:"15.2%", csw:"34.3%", laSwSp:"34.2%", idealAttack:"50.0%", splits:{vsL:{ip:"13.2",era:"1.98",fip:"1.06",xfip:"2.48",whip:"0.59",avg:".133",obp:".167",slg:".289",woba:".193",kpct:"34.7%",bbpct:"4.1%",kbb:"30.6%"}, vsR:{ip:"22.2",era:"0.40",fip:"1.87",xfip:"3.08",whip:"0.66",avg:".150",obp:".181",slg:".213",woba:".177",kpct:"30.1%",bbpct:"3.6%",kbb:"26.5%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.44", war:1.7, war2:0.8, xfip:"3.40", siera:"3.34", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.9%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.69",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.98",xfip:"2.99",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.59", ip:"31.1", sv:1, kpct:"28.8%", bbpct:"8.0%", whip:"1.117", fip:"2.46", war:0.9, war2:0.9, xfip:"3.31", siera:"3.08", batSpeed:71.9, fastSwing:"25.5%", swstr:"12.3%", cstr:"15.1%", csw:"27.4%", laSwSp:"27.3%", idealAttack:"41.7%", splits:{vsL:{ip:"16.2",era:"3.24",fip:"2.21",xfip:"2.50",whip:"1.08",avg:".210",obp:".275",slg:".306",woba:".262",kpct:"33.3%",bbpct:"7.2%",kbb:"26.1%"}, vsR:{ip:"14.1",era:"1.26",fip:"2.55",xfip:"4.11",whip:"0.98",avg:".184",obp:".268",slg:".204",woba:".225",kpct:"23.2%",bbpct:"8.9%",kbb:"14.3%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.00", ip:"30.0", sv:0, kpct:"26.4%", bbpct:"8.3%", whip:"1.167", fip:"4.23", war:0.5, war2:0.1, xfip:"3.89", siera:"3.39", batSpeed:70.6, fastSwing:"16.9%", swstr:"11.7%", cstr:"18.2%", csw:"30.0%", laSwSp:"32.1%", idealAttack:"55.6%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.86",xfip:"3.80",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".319",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.2",era:"0.00",fip:"2.24",xfip:"4.01",whip:"1.34",avg:".260",obp:".327",slg:".300",woba:".288",kpct:"23.6%",bbpct:"7.3%",kbb:"16.4%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.70", ip:"20.0", sv:1, kpct:"29.3%", bbpct:"10.7%", whip:"0.950", fip:"4.05", war:0.4, war2:0.1, xfip:"3.70", siera:"3.37", batSpeed:72.8, fastSwing:"31.6%", swstr:"12.8%", cstr:"11.8%", csw:"24.6%", laSwSp:"35.6%", idealAttack:"54.4%", splits:{vsL:{ip:"8.0",era:"3.38",fip:"5.73",xfip:"4.35",whip:"1.38",avg:".200",obp:".314",slg:".433",woba:".319",kpct:"28.6%",bbpct:"14.3%",kbb:"14.3%"}, vsR:{ip:"12.0",era:"2.25",fip:"2.94",xfip:"3.60",whip:"0.67",avg:".128",obp:".190",slg:".256",woba:".201",kpct:"27.9%",bbpct:"7.0%",kbb:"20.9%"}}},
    { name:"James Karinchak", role:"RP", era:"0.00", ip:"6.2", sv:0, kpct:"26.1%", bbpct:"8.7%", whip:"0.600", fip:"2.20", war:0.3, war2:0.1, xfip:"4.45", siera:"3.73", batSpeed:72.2, fastSwing:"27.6%", swstr:"10.0%", cstr:"23.0%", csw:"33.0%", laSwSp:"20.0%", idealAttack:"62.1", splits:{vsL:{ip:"2.0",era:"0.00",fip:"5.11",xfip:"7.35",whip:"1.50",avg:".167",obp:".375",slg:".333",woba:".333",kpct:"12.5%",bbpct:"25.0%",kbb:"-12.5%"}, vsR:{ip:"4.2",era:"0.00",fip:"0.96",xfip:"3.21",whip:"0.21",avg:".067",obp:".067",slg:".067",woba:".059",kpct:"33.3%",bbpct:"0.0%",kbb:"33.3%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"3.68", ip:"14.2", sv:0, kpct:"9.8%", bbpct:"1.6%", whip:"1.159", fip:"4.67", war:0.1, war2:0.0, xfip:"4.33", siera:"4.39", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.9%", cstr:"12.4%", csw:"21.3%", laSwSp:"42.3%", idealAttack:"57.4", splits:{vsL:{ip:"8.2",era:"5.19",fip:"4.49",xfip:"4.54",whip:"1.27",avg:".314",obp:".333",slg:".429",woba:".335",kpct:"5.4%",bbpct:"0.0%",kbb:"5.4%"}, vsR:{ip:"6.0",era:"1.50",fip:"4.94",xfip:"4.02",whip:"1.00",avg:".238",obp:".304",slg:".381",woba:".307",kpct:"16.7%",bbpct:"4.2%",kbb:"12.5%"}}},
    { name:"Ian Hamilton", role:"RP", era:"13.50", ip:"2.0", sv:0, kpct:"30.0%", bbpct:"20.0%", whip:"2.000", fip:"3.10", war:-0.1, war2:0.0, xfip:"3.85", siera:"4.45", batSpeed:72.4, fastSwing:"37.5%", swstr:"20.0%", cstr:"15.6%", csw:"35.6%", laSwSp:"40.0", idealAttack:"37.5%", splits:{vsL:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"1.1",era:"6.75",fip:"0.86",xfip:"0.86",whip:"0.75",avg:".000",obp:".200",slg:".000",woba:".140",kpct:"60.0%",bbpct:"20.0%",kbb:"40.0%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:49,l:33,pct:".605",gb:"—", home:"24-14",away:"25-19", rs:390, ra:302, diff:+88, strk:"L2", l10:"2-8", highlight:true,  srs:1.1 },
     { team:"PHI", full:"Philadelphia Phillies", w:47,l:37,pct:".554",gb:"3.0", home:"23-19",away:"23-18", rs:363, ra:362, diff:+1, strk:"W1", l10:"6-4", highlight:false, srs:0.1 },
     { team:"MIA", full:"Miami Marlins",        w:44,l:40,pct:".530",gb:"6.0", home:"28-17",away:"16-22", rs:358, ra:347, diff:+11, strk:"L1", l10:"8-2", highlight:false, srs:0.2 },
     { team:"WSN", full:"Washington Nationals", w:43,l:42,pct:".500",gb:"7.5", home:"17-25",away:"25-17", rs:443, ra:440, diff:+3, strk:"W2", l10:"3-7", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:35,l:49,pct:".422",gb:"15.0", home:"19-23",away:"16-25", rs:335, ra:379, diff:-44, strk:"L1", l10:"3-7", highlight:false, srs:-0.5 },
   ];
   
export const statcastHitters = [
  // Updated June 28, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Acuña, León, Tromp, Murphy not in this screenshot set — held
  { name:"Michael Harris II", ev:"92.0",hardHit:"50.7%",xwoba:".377",xba:".306",xslg:".536",barrel:"15.0%",chase:"45.6%",whiff:"26.2%",kpct:"20.5%",bbpct:"4.5%", gbpct:"43.3%",fbpct:"23.7%",ldpct:"26.5%",pupct:"6.5%",pullAir:"17.8%"},
  { name:"Matt Olson", ev:"92.7",hardHit:"50.6%",xwoba:".362",xba:".256",xslg:".515",barrel:"13.1%",chase:"27.9%",whiff:"24.2%",kpct:"22.9%",bbpct:"9.6%", gbpct:"36.3%",fbpct:"34.2%",ldpct:"20.7%",pupct:"8.9%",pullAir:"19.2%"},
  { name:"Dominic Smith", ev:"87.8",hardHit:"35.4%",xwoba:".327",xba:".272",xslg:".427",barrel:"7.1%",chase:"33.0%",whiff:"20.4%",kpct:"13.2%",bbpct:"6.1%", gbpct:"38.0%",fbpct:"31.0%",ldpct:"25.3%",pupct:"5.7%",pullAir:"16.7%"},
  { name:"Drake Baldwin", ev:"91.6",hardHit:"50.6%",xwoba:".377",xba:".272",xslg:".522",barrel:"17.1%",chase:"36.1%",whiff:"25.9%",kpct:"24.9%",bbpct:"9.7%", gbpct:"47.6%",fbpct:"22.6%",ldpct:"24.4%",pupct:"5.5%",pullAir:"14.3%"},
  { name:"Mauricio Dubón", ev:"86.4",hardHit:"29.6%",xwoba:".320",xba:".274",xslg:".405",barrel:"5.4%",chase:"37.3%",whiff:"16.5%",kpct:"14.5%",bbpct:"6.1%", gbpct:"38.7%",fbpct:"25.1%",ldpct:"28.4%",pupct:"7.8%",pullAir:"14.2%"},
  { name:"Jorge Mateo", ev:"90.4",hardHit:"48.6%",xwoba:".332",xba:".272",xslg:".458",barrel:"9.5%",chase:"41.5%",whiff:"29.8%",kpct:"29.2%",bbpct:"5.3%", gbpct:"37.8%",fbpct:"32.4%",ldpct:"28.4%",pupct:"1.4%",pullAir:"20.3%"},
  { name:"Austin Riley", ev:"90.9",hardHit:"44.7%",xwoba:".298",xba:".209",xslg:".381",barrel:"10.1%",chase:"32.5%",whiff:"32.4%",kpct:"29.0%",bbpct:"8.5%", gbpct:"38.7%",fbpct:"31.2%",ldpct:"21.1%",pupct:"9.0%",pullAir:"18.3%"},
  { name:"Ozzie Albies", ev:"87.1",hardHit:"27.9%",xwoba:".304",xba:".256",xslg:".384",barrel:"4.0%",chase:"36.0%",whiff:"19.6%",kpct:"11.2%",bbpct:"6.9%", gbpct:"35.4%",fbpct:"31.8%",ldpct:"26.1%",pupct:"6.8%",pullAir:"25.0%"},
  { name:"Mike Yastrzemski", ev:"90.7",hardHit:"43.4%",xwoba:".289",xba:".226",xslg:".327",barrel:"4.1%",chase:"26.3%",whiff:"24.0%",kpct:"24.1%",bbpct:"9.4%", gbpct:"41.4%",fbpct:"29.7%",ldpct:"24.1%",pupct:"4.8%",pullAir:"18.9%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.1",hardHit:"32.5%",xwoba:".284",xba:".242",xslg:".352",barrel:"6.3%",chase:"29.6%",whiff:"28.8%",kpct:"20.9%",bbpct:"5.5%", gbpct:"55.0%",fbpct:"22.5%",ldpct:"20.0%",pupct:"2.5%",pullAir:"10.0%"},
  { name:"Ha-Seong Kim", ev:"84.8",hardHit:"20.4%",xwoba:".209",xba:".149",xslg:".203",barrel:"4.3%",chase:"25.4%",whiff:"21.5%",kpct:"27.8%",bbpct:"10.1%", gbpct:"44.9%",fbpct:"34.7%",ldpct:"10.2%",pupct:"10.2%",pullAir:"18.4%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.0",hardHit:"34.7%",xwoba:".272",xba:".217",xslg:".386",barrel:"8.2%",chase:"32.2%",whiff:"26.7%",kpct:"28.8%",bbpct:"2.7%", gbpct:"38.8%",fbpct:"36.7%",ldpct:"18.4%",pupct:"6.1%",pullAir:"27.3%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".487",xba:".339",xslg:".828",barrel:"28.6%",chase:"33.3%",whiff:"28.6%",kpct:"30.0%",bbpct:"0.0%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
];

export const statcastPitchers = [
  // Updated June 28, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez/Strider/Ritchie not in this screenshot set — held; Carrasco hidden; Waldrep skipped (non-roster)
  { name:"Raisel Iglesias", ev:"87.7",hardHit:"31.3%",xwoba:".250",xba:".215",xslg:".298",kpct:"28.4%",bbpct:"5.9%", barrel:"4.5%", chase:"37.7%",whiff:"31.3%",gbpct:"35.8%",fbpct:"25.4%",ldpct:"28.4%",pupct:"10.4%", pullAir:"17.9%"},
  { name:"Dylan Lee", ev:"87.1",hardHit:"30.6%",xwoba:".213",xba:".178",xslg:".263",kpct:"31.8%",bbpct:"3.8%", barrel:"4.7%", chase:"37.7%",whiff:"37.1%",gbpct:"34.1%",fbpct:"31.8%",ldpct:"23.5%",pupct:"10.6%", pullAir:"25.9%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.3%",xwoba:".296",xba:".244",xslg:".369",kpct:"20.0%",bbpct:"7.2%", barrel:"4.7%", chase:"29.3%",whiff:"22.4%",gbpct:"43.7%",fbpct:"26.3%",ldpct:"23.3%",pupct:"6.7%", pullAir:"17.4%"},
  { name:"Chris Sale", ev:"87.2",hardHit:"32.2%",xwoba:".291",xba:".236",xslg:".348",kpct:"28.9%",bbpct:"6.1%", barrel:"5.6%", chase:"35.5%",whiff:"29.5%",gbpct:"44.4%",fbpct:"23.8%",ldpct:"26.6%",pupct:"5.1%", pullAir:"18.2%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.0",hardHit:"35.1%",xwoba:".270",xba:".215",xslg:".306",kpct:"28.8%",bbpct:"8.0%", barrel:"3.9%", chase:"30.7%",whiff:"26.6%",gbpct:"41.6%",fbpct:"24.7%",ldpct:"23.4%",pupct:"10.4%", pullAir:"10.4%"},
  { name:"Tyler Kinley", ev:"84.7",hardHit:"26.9%",xwoba:".270",xba:".196",xslg:".347",kpct:"26.4%",bbpct:"8.3%", barrel:"6.5%", chase:"24.8%",whiff:"27.1%",gbpct:"32.1%",fbpct:"30.8%",ldpct:"24.4%",pupct:"12.8%", pullAir:"34.6%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"37.3%",xwoba:".313",xba:".246",xslg:".379",kpct:"20.7%",bbpct:"9.3%", barrel:"6.5%", chase:"26.3%",whiff:"22.7%",gbpct:"49.3%",fbpct:"21.4%",ldpct:"24.9%",pupct:"4.5%", pullAir:"21.4%"},
  { name:"Grant Holmes", ev:"91.1",hardHit:"44.7%",xwoba:".336",xba:".247",xslg:".427",kpct:"20.7%",bbpct:"11.1%", barrel:"9.3%", chase:"32.2%",whiff:"28.1%",gbpct:"42.5%",fbpct:"26.5%",ldpct:"24.8%",pupct:"6.2%", pullAir:"21.7%"},
  { name:"Reynaldo López", ev:"87.2",hardHit:"35.5%",xwoba:".340",xba:".264",xslg:".428",kpct:"19.9%",bbpct:"10.4%", barrel:"5.8%", chase:"24.7%",whiff:"20.2%",gbpct:"36.2%",fbpct:"27.5%",ldpct:"29.0%",pupct:"7.2%", pullAir:"21.7%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.5%"},
  { name:"Dylan Dodd", ev:"90.0",hardHit:"39.6%",xwoba:".277",xba:".206",xslg:".347",kpct:"28.2%",bbpct:"10.3%", barrel:"8.3%", chase:"30.8%",whiff:"27.8%",gbpct:"27.1%",fbpct:"22.9%",ldpct:"27.1%",pupct:"22.9%", pullAir:"41.7%"},
  { name:"James Karinchak", ev:"85.4",hardHit:"20.0%",xwoba:".192",xba:".112",xslg:".228",kpct:"26.1%",bbpct:"8.7%", barrel:"6.7%", chase:"28.1%",whiff:"29.7%",gbpct:"33.3%",fbpct:"40.0%",ldpct:"13.3%",pupct:"13.3%", pullAir:"6.7%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.9%"},
  { name:"Ian Hamilton", ev:"96.3",hardHit:"60.0%",xwoba:".351",xba:".278",xslg:".328",kpct:"30.0%",bbpct:"20.0%", barrel:"0.0%", chase:"26.9%",whiff:"45.0%",gbpct:"60.0%",fbpct:"0.0%",ldpct:"40.0%",pupct:"0.0%", pullAir:"0.0%"},
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
