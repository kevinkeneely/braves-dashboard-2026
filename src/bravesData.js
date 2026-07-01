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
 
   export const lastUpdated = "June 30, 2026";
 
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
      // Upcoming
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
     record: "49-34",
     runs: 393,
     era: "3.43",
     avg: ".247",
     obp: ".311",
     slg: ".406",
     ops: ".716",
     wrc: 98,
     iso: ".161",
     battingK: "21.1%",
     battingBB: "7.8%",
     woba: ".315",
     xwoba: ".323",
     fip: "3.92",
     xera: "3.79",
     xfip: "3.97",
     whip: "1.21",
     gb: "41.7%",
     siera: "3.91",
     pitchingK: "23.3%",
     pitchingBB: "9.0%",
     pitchingKBB: "14.4%",
     swstr: "11.4%",
     cstr: "16.2%",
     csw: "27.6%",
     fastSwing: "25.9%",
     sqUpSw: "24.2%",
     blastSw: "9.9%",
     idealAtk: "49.2%",
     batFastSwing: "32.1%",
     batSqUpSw: "24.7%",
     batBlastSw: "11.1%",
     batIdealAtk: "50.1%",
     batSwStr: "11.0%",
     batCStr: "15.1%",
     batCSW: "26.0%",
     batChase: "33.7%",
     batWhiff: "24.8%",
     chase: "30.7%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.0",
// Plate Discipline additions
     batZoneSwing: "67.9%",
     batZoneContact: "84.1%",
     batChaseContact: "59.6%",
     zoneSwing: "66.5%",
     zoneContact: "84.1%",
     chaseContact: "54.0%",
// Statcast (hitters)
     batBarrel: "8.9%",
     batHardHit: "39.8%",
     batExitVelo: "89.3",
     batXBA: ".251",
     batXSLG: ".424",
     batXwOBAcon: ".375",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "6.6%",
     hardHit: "37.4%",
     exitVelo: "88.7",
     xBA: ".235",
     xSLG: ".372",
     pXwOBA: ".303",
     xwOBAcon: ".351",
 };
   
export const hitters = [
    // Updated June 30, 2026 — Catcher ABS (framing) metrics refreshed from Baseball Savant
    // Baldwin absCatch updated; Bart absCatch newly added; hidden catchers (León, Tromp, Murphy) held — values match screenshot
    // All other fields preserved at prior values
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".351", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:81,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:145,woba:".384",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:131,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:1,h:2,hr:0,rbi:4,avg:".222",obp:".500",slg:".222",ops:".722",wrc:142,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
    { name:"Drake Baldwin", pos:"C", pa:261, avg:".255", obp:".337", slg:".463", ops:".800", hr:14, rbi:39, r:42, h:59, doubles:6, triples:0, sb:1, bbpct:"9.6%", kpct:"24.5%", war:1.8, war2:1.5, wrc:125, woba:".355", xwoba:".377", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"24.4%", fastSwing:"52.4%", laSwSp:"39.9%", idealAttack:"47.8%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.6, netRuns:0.3, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:8.8, netRuns:0.3, chal:29, won:21, lost:8, wonPct:"72%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:106,r:18,h:26,hr:7,rbi:16,avg:".274",obp:".349",slg:".516",ops:".865",wrc:140,woba:".376",iso:".242",bbpct:"8.5%",kpct:"22.6%",babip:".297"}, vsR:{pa:155,r:24,h:33,hr:7,rbi:23,avg:".243",obp:".329",slg:".426",ops:".756",wrc:109,woba:".331",iso:".184",bbpct:"10.3%",kpct:"25.8%",babip:".289"}, risp:{pa:61,r:0,h:16,hr:0,rbi:24,avg:".314",obp:".410",slg:".412",ops:".822",wrc:131,woba:".363",iso:".098",bbpct:"13.1%",kpct:"14.8%",babip:".372"}, highLeverage:{pa:16,r:11,h:4,hr:0,rbi:7,avg:".267",obp:".313",slg:".333",ops:".646",wrc:81,woba:".290",iso:".067",bbpct:"6.3%",kpct:"18.8%",babip:".333"}}},
    { name:"Matt Olson", pos:"1B", pa:357, avg:".276", obp:".345", slg:".530", ops:".874", hr:20, rbi:52, r:53, h:85, doubles:20, triples:0, sb:2, bbpct:"9.5%", kpct:"23.0%", war:3.2, war2:2.5, wrc:135, woba:".369", xwoba:".362", oaa:5, frv:5, batSpeed:75.0, squaredUp:"23.7%", fastSwing:"52.0%", laSwSp:"31.6%", idealAttack:"53.1%", armValue:null, armStrength:82.8, abs:{netOvr:0.8, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.8%", xChalRate:"3.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:162,r:24,h:41,hr:8,rbi:21,avg:".281",obp:".346",slg:".514",ops:".859",wrc:136,woba:".371",iso:".233",bbpct:"8.6%",kpct:"21.6%",babip:".317"}, vsR:{pa:195,r:30,h:47,hr:12,rbi:31,avg:".272",obp:".344",slg:".543",ops:".887",wrc:140,woba:".376",iso:".272",bbpct:"10.3%",kpct:"24.1%",babip:".302"}, risp:{pa:87,r:2,h:15,hr:2,rbi:26,avg:".214",obp:".333",slg:".386",ops:".719",wrc:95,woba:".310",iso:".171",bbpct:"16.1%",kpct:"24.1%",babip:".260"}, highLeverage:{pa:34,r:16,h:7,hr:3,rbi:9,avg:".241",obp:".324",slg:".552",ops:".875",wrc:128,woba:".358",iso:".310",bbpct:"11.8%",kpct:"29.4%",babip:".235"}}},
    { name:"Ozzie Albies", pos:"2B", pa:351, avg:".274", obp:".325", slg:".433", ops:".758", hr:12, rbi:44, r:51, h:86, doubles:14, triples:0, sb:1, bbpct:"6.8%", kpct:"11.4%", war:2.1, war2:1.7, wrc:110, woba:".332", xwoba:".304", oaa:2, frv:0, batSpeed:69.0, squaredUp:"30.7%", fastSwing:"5.7%", laSwSp:"34.9%", idealAttack:"57.5%", armValue:null, armStrength:70.8, abs:{netOvr:-0.3, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.2%", xChalRate:"5.6%", rateVsExp:"-0.5%"}, splits:{vsL:{pa:152,r:16,h:43,hr:6,rbi:20,avg:".301",obp:".322",slg:".503",ops:".826",wrc:123,woba:".351",iso:".203",bbpct:"2.6%",kpct:"5.9%",babip:".282"}, vsR:{pa:199,r:35,h:43,hr:6,rbi:24,avg:".251",obp:".327",slg:".374",ops:".701",wrc:96,woba:".311",iso:".123",bbpct:"10.1%",kpct:"15.6%",babip:".264"}, risp:{pa:82,r:3,h:22,hr:3,rbi:33,avg:".344",obp:".378",slg:".531",ops:".909",wrc:135,woba:".369",iso:".188",bbpct:"9.8%",kpct:"6.1%",babip:".292"}, highLeverage:{pa:35,r:17,h:8,hr:2,rbi:10,avg:".267",obp:".343",slg:".533",ops:".876",wrc:137,woba:".372",iso:".267",bbpct:"8.6%",kpct:"11.4%",babip:".240"}}},
    { name:"Michael Harris II", pos:"CF", pa:292, avg:".297", obp:".329", slg:".496", ops:".825", hr:14, rbi:42, r:37, h:82, doubles:13, triples:0, sb:5, bbpct:"4.5%", kpct:"20.2%", war:2.6, war2:2.2, wrc:129, woba:".361", xwoba:".377", oaa:6, frv:5, batSpeed:74.9, squaredUp:"23.6%", fastSwing:"48.7%", laSwSp:"32.1%", idealAttack:"46.7%", armValue:null, armStrength:85.4, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.4%", xChalRate:"2.5%", rateVsExp:"+1.9%"}, splits:{vsL:{pa:114,r:12,h:30,hr:4,rbi:15,avg:".280",obp:".316",slg:".458",ops:".774",wrc:112,woba:".335",iso:".178",bbpct:"4.4%",kpct:"21.1%",babip:".325"}, vsR:{pa:178,r:25,h:52,hr:10,rbi:28,avg:".308",obp:".337",slg:".521",ops:".858",wrc:136,woba:".370",iso:".213",bbpct:"4.5%",kpct:"19.7%",babip:".336"}, risp:{pa:57,r:0,h:14,hr:0,rbi:20,avg:".280",obp:".333",slg:".400",ops:".733",wrc:102,woba:".320",iso:".120",bbpct:"7.0%",kpct:"14.0%",babip:".318"}, highLeverage:{pa:30,r:10,h:6,hr:1,rbi:10,avg:".240",obp:".300",slg:".480",ops:".780",wrc:105,woba:".325",iso:".240",bbpct:"6.7%",kpct:"23.3%",babip:".263"}}},
    { name:"Austin Riley", pos:"3B", pa:332, avg:".209", obp:".289", slg:".338", ops:".627", hr:8, rbi:36, r:33, h:62, doubles:12, triples:1, sb:4, bbpct:"8.4%", kpct:"28.6%", war:0.3, war2:0.1, wrc:78, woba:".286", xwoba:".298", oaa:-4, frv:-3, batSpeed:75.6, squaredUp:"21.1%", fastSwing:"56.6%", laSwSp:"30.4%", idealAttack:"47.5%", armValue:null, armStrength:83.8, abs:{netOvr:-0.3, netRuns:-0.1, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.1%", xChalRate:"5.1%", rateVsExp:"-3.0%"}, splits:{vsL:{pa:118,r:10,h:24,hr:1,rbi:13,avg:".231",obp:".314",slg:".327",ops:".640",wrc:81,woba:".290",iso:".096",bbpct:"11.0%",kpct:"30.5%",babip:".338"}, vsR:{pa:214,r:23,h:38,hr:7,rbi:24,avg:".198",obp:".276",slg:".344",ops:".619",wrc:73,woba:".278",iso:".146",bbpct:"7.0%",kpct:"27.6%",babip:".244"}, risp:{pa:91,r:4,h:19,hr:4,rbi:33,avg:".229",obp:".275",slg:".446",ops:".721",wrc:94,woba:".308",iso:".217",bbpct:"6.6%",kpct:"31.9%",babip:".288"}, highLeverage:{pa:36,r:4,h:7,hr:1,rbi:14,avg:".219",obp:".250",slg:".344",ops:".594",wrc:57,woba:".255",iso:".125",bbpct:"5.6%",kpct:"19.4%",babip:".231"}}},
    { name:"Mauricio Dubón", pos:"SS", pa:314, avg:".267", obp:".316", slg:".421", ops:".738", hr:8, rbi:43, r:34, h:77, doubles:16, triples:2, sb:2, bbpct:"6.1%", kpct:"14.3%", war:1.9, war2:1.7, wrc:104, woba:".324", xwoba:".320", oaa:7, frv:5, batSpeed:69.0, squaredUp:"27.2%", fastSwing:"3.1%", laSwSp:"38.1%", idealAttack:"37.8%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.4%", xChalRate:"4.2%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:126,r:12,h:28,hr:3,rbi:19,avg:".239",obp:".294",slg:".393",ops:".687",wrc:90,woba:".303",iso:".154",bbpct:"6.3%",kpct:"11.1%",babip:".250"}, vsR:{pa:188,r:22,h:50,hr:5,rbi:24,avg:".286",obp:".332",slg:".440",ops:".772",wrc:114,woba:".338",iso:".154",bbpct:"5.9%",kpct:"16.5%",babip:".324"}, risp:{pa:72,r:3,h:23,hr:3,rbi:37,avg:".348",obp:".394",slg:".606",ops:"1.000",wrc:175,woba:".429",iso:".258",bbpct:"6.9%",kpct:"11.1%",babip:".364"}, highLeverage:{pa:33,r:7,h:12,hr:1,rbi:21,avg:".400",obp:".455",slg:".667",ops:"1.121",wrc:209,woba:".478",iso:".267",bbpct:"9.1%",kpct:"9.1%",babip:".423"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.2, wrc:-29, woba:".127", xwoba:".209", oaa:-3, frv:-3, batSpeed:71.9, squaredUp:"16.3%", fastSwing:"22.0%", laSwSp:"19.1%", idealAttack:"58.4%", armValue:null, armStrength:84.2, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-42,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:80,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
    { name:"Mike Yastrzemski", pos:"LF", pa:225, avg:".220", obp:".307", slg:".335", ops:".642", hr:4, rbi:19, r:27, h:44, doubles:9, triples:1, sb:1, bbpct:"9.3%", kpct:"24.4%", war:0.3, war2:0.0, wrc:83, woba:".293", xwoba:".289", oaa:-2, frv:-1, batSpeed:71.1, squaredUp:"29.0%", fastSwing:"7.1%", laSwSp:"30.9%", idealAttack:"60.8%", armValue:null, armStrength:83.4, abs:{netOvr:2.3, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:32,r:4,h:3,hr:0,rbi:1,avg:".111",obp:".250",slg:".148",ops:".398",wrc:25,woba:".207",iso:".037",bbpct:"9.4%",kpct:"40.6%",babip:".214"}, vsR:{pa:193,r:23,h:41,hr:4,rbi:18,avg:".237",obp:".316",slg:".364",ops:".680",wrc:92,woba:".305",iso:".127",bbpct:"9.3%",kpct:"21.8%",babip:".291"}, risp:{pa:55,r:0,h:13,hr:0,rbi:13,avg:".265",obp:".345",slg:".347",ops:".692",wrc:98,woba:".314",iso:".082",bbpct:"10.9%",kpct:"38.2%",babip:".464"}, highLeverage:{pa:24,r:5,h:6,hr:0,rbi:6,avg:".273",obp:".333",slg:".364",ops:".697",wrc:96,woba:".312",iso:".091",bbpct:"8.3%",kpct:"29.2%",babip:".400"}}},
    { name:"Dominic Smith", pos:"DH", pa:198, avg:".279", obp:".320", slg:".419", ops:".739", hr:6, rbi:32, r:26, h:49, doubles:5, triples:1, sb:0, bbpct:"6.1%", kpct:"13.1%", war:0.5, war2:0.0, wrc:100, woba:".318", xwoba:".327", oaa:null, frv:0, batSpeed:68.7, squaredUp:"30.1%", fastSwing:"5.2%", laSwSp:"35.3%", idealAttack:"53.2%", armValue:null, armStrength:null, abs:{netOvr:-1.0, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.2%", xChalRate:"4.6%", rateVsExp:"+0.6%"}, splits:{vsL:{pa:30,r:3,h:4,hr:0,rbi:2,avg:".160",obp:".276",slg:".200",ops:".476",wrc:42,woba:".232",iso:".040",bbpct:"13.3%",kpct:"10.0%",babip:".182"}, vsR:{pa:168,r:23,h:46,hr:6,rbi:30,avg:".299",obp:".327",slg:".455",ops:".782",wrc:113,woba:".336",iso:".156",bbpct:"4.8%",kpct:"13.7%",babip:".308"}, risp:{pa:55,r:3,h:14,hr:3,rbi:28,avg:".304",obp:".315",slg:".522",ops:".837",wrc:116,woba:".342",iso:".217",bbpct:"5.5%",kpct:"9.1%",babip:".256"}, highLeverage:{pa:27,r:6,h:3,hr:1,rbi:11,avg:".150",obp:".231",slg:".350",ops:".581",wrc:49,woba:".243",iso:".200",bbpct:"11.1%",kpct:"22.2%",babip:".125"}}},
    { name:"Jorge Mateo", pos:"SS", pa:113, avg:".262", obp:".301", slg:".421", ops:".721", hr:4, rbi:11, r:25, h:28, doubles:5, triples:0, sb:7, bbpct:"5.3%", kpct:"29.2%", war:0.7, war2:0.7, wrc:99, woba:".316", xwoba:".332", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.4%", fastSwing:"35.5%", laSwSp:"48.6%", idealAttack:"40.3%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:45,r:8,h:11,hr:2,rbi:3,avg:".256",obp:".289",slg:".419",ops:".707",wrc:94,woba:".309",iso:".163",bbpct:"4.4%",kpct:"35.6%",babip:".360"}, vsR:{pa:68,r:17,h:17,hr:2,rbi:8,avg:".266",obp:".309",slg:".422",ops:".731",wrc:102,woba:".320",iso:".156",bbpct:"5.9%",kpct:"25.0%",babip:".333"}, risp:{pa:27,r:0,h:6,hr:0,rbi:6,avg:".240",obp:".296",slg:".240",ops:".536",wrc:54,woba:".250",iso:".000",bbpct:"7.4%",kpct:"33.3%",babip:".375"}, highLeverage:{pa:12,r:8,h:2,hr:0,rbi:1,avg:".200",obp:".333",slg:".200",ops:".533",wrc:65,woba:".265",iso:".000",bbpct:"16.7%",kpct:"25.0%",babip:".286"}}},
    { name:"Eli White", pos:"OF", pa:113, avg:".219", obp:".265", slg:".362", ops:".627", hr:3, rbi:14, r:12, h:22, doubles:4, triples:1, sb:3, bbpct:"5.3%", kpct:"20.4%", war:0.8, war2:0.2, wrc:71, woba:".275", xwoba:".284", oaa:1, frv:2, batSpeed:73.1, squaredUp:"21.4%", fastSwing:"32.6%", laSwSp:"32.5%", idealAttack:"53.5%", armValue:null, armStrength:89.5, abs:{netOvr:-0.9, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.8%", xChalRate:"5.1%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:68,r:6,h:15,hr:2,rbi:9,avg:".250",obp:".324",slg:".417",ops:".740",wrc:105,woba:".325",iso:".167",bbpct:"8.8%",kpct:"20.6%",babip:".289"}, vsR:{pa:45,r:7,h:8,hr:1,rbi:5,avg:".178",obp:".178",slg:".289",ops:".467",wrc:21,woba:".201",iso:".111",bbpct:"0.0%",kpct:"20.0%",babip:".200"}, risp:{pa:31,r:1,h:7,hr:1,rbi:11,avg:".259",obp:".323",slg:".407",ops:".730",wrc:101,woba:".319",iso:".148",bbpct:"9.7%",kpct:"16.1%",babip:".273"}, highLeverage:{pa:17,r:4,h:2,hr:0,rbi:4,avg:".133",obp:".235",slg:".133",ops:".369",wrc:12,woba:".187",iso:".000",bbpct:"11.8%",kpct:"11.8%",babip:".154"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-55,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-65,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:187,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.2, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:490,woba:".892",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
    { name:"Joey Bart", pos:"C", pa:14, avg:".143", obp:".143", slg:".357", ops:".500", hr:1, rbi:3, r:1, h:2, doubles:0, triples:0, sb:0, bbpct:"2.6%", kpct:"27.6%", war:0.0, war2:0.0, wrc:66, woba:".268", xwoba:".363", oaa:null, frv:1, batSpeed:75.6, squaredUp:"18.8%", fastSwing:"62.5%", laSwSp:"36.7%", idealAttack:"25.0%", avgPop:1.93, armValue:null, armStrength:84.1, absCatch:{netOvr:1.4, netRuns:0.1, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.5%", xChalRate:"2.1%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:10,r:1,h:2,hr:1,rbi:3,avg:".200",obp:".200",slg:".500",ops:".700",wrc:84,woba:".295",iso:".300",bbpct:"0.0%",kpct:"0.0%",babip:".111"}, vsR:{pa:4,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, risp:{pa:2,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
    { name:"Rowdy Tellez", pos:"1B", pa:10, avg:".200", obp:".200", slg:".500", ops:".700", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"30.0%", war:0.0, war2:0.0, wrc:84, woba:".294", xwoba:".487", oaa:null, frv:null, batSpeed:76.4, squaredUp:"15.8%", fastSwing:"47.4%", laSwSp:"57.1%", idealAttack:"68.4%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:8,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".250",slg:".625",ops:".875",wrc:134,woba:".368",iso:".375",bbpct:"0.0%",kpct:"37.5%",babip:".250"}, risp:{pa:5,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".200",slg:".200",ops:".400",wrc:6,woba:".178",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".333"}, highLeverage:{pa:3,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".333",slg:".333",ops:".667",wrc:86,woba:".297",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".500"}}},
  ];

export const starters = [
    // Updated June 29, 2026 — vsL and vsR splits refreshed from FanGraphs
    // All other fields (season totals, ratios, bat tracking, plate discipline) preserved at prior values
    { name:"Chris Sale", wl:"8-6", era:"2.10", ip:"90.0", kpct:"29.6%", bbpct:"6.0%", whip:"1.078", war:2.8, war2:2.8, fip:"2.54", xfip:"3.06", siera:"3.09", batSpeed:70.8, fastSwing:"19.3%", swstr:"13.6%", cstr:"17.6%", csw:"31.1%", laSwSp:"36.2%", idealAttack:"45.7%", splits:{vsL:{ip:"22.2",era:"1.59",fip:"1.73",xfip:"1.68",whip:"0.97",avg:".224",obp:".275",slg:".306",woba:".262",kpct:"33.7%",bbpct:"3.3%",kbb:"30.4%"}, vsR:{ip:"67.1",era:"2.27",fip:"2.82",xfip:"3.36",whip:"1.11",avg:".224",obp:".290",slg:".308",woba:".272",kpct:"28.3%",bbpct:"6.9%",kbb:"21.4%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.35", xfip:"4.35", siera:"4.13", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.7%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.54",xfip:"4.58",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".343",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.00",xfip:"3.89",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Martín Pérez", wl:"6-4", era:"3.00", ip:"72.0", kpct:"20.7%", bbpct:"9.3%", whip:"1.125", fip:"3.90", war:1.7, war2:0.9, xfip:"3.95", siera:"4.25", batSpeed:73.2, fastSwing:"33.3%", swstr:"9.1%", cstr:"18.9%", csw:"28.0%", laSwSp:"34.3%", idealAttack:"50.2%", splits:{vsL:{ip:"20.2",era:"2.61",fip:"3.44",xfip:"3.26",whip:"1.02",avg:".211",obp:".277",slg:".355",woba:".282",kpct:"24.1%",bbpct:"6.0%",kbb:"18.1%"}, vsR:{ip:"51.1",era:"3.16",fip:"4.09",xfip:"4.22",whip:"1.17",avg:".211",obp:".291",slg:".367",woba:".289",kpct:"19.3%",bbpct:"10.6%",kbb:"8.7%"}}},
    { name:"Bryce Elder", wl:"5-6", era:"4.01", ip:"98.2", kpct:"20.0%", bbpct:"7.2%", whip:"1.226", fip:"3.97", war:0.7, war2:1.4, xfip:"4.03", siera:"4.23", batSpeed:72.4, fastSwing:"27.3%", swstr:"9.2%", cstr:"16.7%", csw:"26.0%", laSwSp:"31.7%", idealAttack:"50.1%", splits:{vsL:{ip:"65.2",era:"3.70",fip:"3.97",xfip:"4.35",whip:"1.10",avg:".206",obp:".275",slg:".336",woba:".273",kpct:"19.9%",bbpct:"8.6%",kbb:"11.2%"}, vsR:{ip:"33.0",era:"4.64",fip:"3.98",xfip:"3.36",whip:"1.48",avg:".300",obp:".338",slg:".443",woba:".343",kpct:"20.3%",bbpct:"4.7%",kbb:"15.5%"}}},
    { name:"Grant Holmes", wl:"4-4", era:"3.96", ip:"77.1", kpct:"20.7%", bbpct:"11.1%", whip:"1.358", fip:"5.18", war:0.8, war2:0.0, xfip:"4.54", siera:"4.65", batSpeed:72.7, fastSwing:"28.2%", swstr:"12.3%", cstr:"14.9%", csw:"27.2%", laSwSp:"34.5%", idealAttack:"49.2%", splits:{vsL:{ip:"44.1",era:"3.65",fip:"5.24",xfip:"4.48",whip:"1.40",avg:".230",obp:".328",slg:".412",woba:".328",kpct:"21.9%",bbpct:"12.5%",kbb:"9.4%"}, vsR:{ip:"33.0",era:"4.36",fip:"5.10",xfip:"4.59",whip:"1.30",avg:".236",obp:".310",slg:".417",woba:".320",kpct:"19.0%",bbpct:"9.2%",kbb:"9.9%"}}},
    { name:"Reynaldo López", wl:"3-1", era:"3.47", ip:"46.2", sv:0, kpct:"19.9%", bbpct:"10.4%", whip:"1.371", fip:"4.47", war:0.3, war2:0.2, xfip:"4.64", siera:"4.53", batSpeed:71.4, fastSwing:"22.2%", swstr:"8.4%", cstr:"17.3%", csw:"25.7%", laSwSp:"38.4%", idealAttack:"45.5%", splits:{vsL:{ip:"23.2",era:"4.18",fip:"4.79",xfip:"5.33",whip:"1.77",avg:".244",obp:".382",slg:".400",woba:".354",kpct:"20.7%",bbpct:"18.0%",kbb:"2.7%"}, vsR:{ip:"23.0",era:"2.74",fip:"4.14",xfip:"3.95",whip:"0.96",avg:".241",obp:".256",slg:".414",woba:".288",kpct:"18.9%",bbpct:"1.1%",kbb:"17.8%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.87", ip:"40.2", kpct:"20.8%", bbpct:"14.0%", whip:"1.426", fip:"5.59", war:-0.2, war2:-0.2, xfip:"4.82", siera:"4.98", batSpeed:72.4, fastSwing:"27.5%", swstr:"8.7%", cstr:"16.2%", csw:"24.9%", laSwSp:"31.0%", idealAttack:"53.6%", splits:{vsL:{ip:"24.1",era:"6.29",fip:"6.76",xfip:"5.20",whip:"1.60",avg:".247",obp:".375",slg:".484",woba:".375",kpct:"20.5%",bbpct:"14.3%",kbb:"6.3%"}, vsR:{ip:"16.1",era:"2.76",fip:"3.83",xfip:"4.22",whip:"1.16",avg:".179",obp:".288",slg:".250",woba:".254",kpct:"21.2%",bbpct:"13.6%",kbb:"7.6%"}}},
    { name:"Hurston Waldrep", wl:"0-0", era:"0.00", ip:"2.0", kpct:"25.0%", bbpct:"33.3%", whip:"3.000", war:0.1, war2:0.0, fip:"6.10", xfip:"6.84", siera:"7.80", batSpeed:73.9, fastSwing:"52.9%", swstr:"10.9%", cstr:"14.5%", csw:"25.5%", laSwSp:"20.0%", idealAttack:"58.8%", splits:{vsL:{ip:"1.0",era:"0.00",fip:"7.10",xfip:"8.59",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"16.7%",bbpct:"33.3%",kbb:"-16.7%"}, vsR:{ip:"1.0",era:"0.00",fip:"5.10",xfip:"5.10",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"33.3%",bbpct:"33.3%",kbb:"0.0%"}}},
  ];

  export const bullpen = [
    // Updated June 29, 2026 — vsL and vsR splits refreshed from FanGraphs
    // All other fields (season totals, ratios, bat tracking, plate discipline) preserved at prior values; Carrasco hidden — held
    { name:"Raisel Iglesias", role:"CL", era:"1.37", ip:"26.1", sv:16, kpct:"28.4%", bbpct:"5.9%", whip:"1.063", fip:"2.07", war:1.1, war2:0.9, xfip:"3.12", siera:"2.78", batSpeed:71.3, fastSwing:"24.6%", swstr:"14.5%", cstr:"17.3%", csw:"31.8%", laSwSp:"29.9%", idealAttack:"49.2%", splits:{vsL:{ip:"16.0",era:"1.13",fip:"3.47",xfip:"4.62",whip:"1.00",avg:".204",obp:".271",slg:".315",woba:".264",kpct:"18.6%",bbpct:"8.5%",kbb:"10.2%"}, vsR:{ip:"10.1",era:"1.74",fip:"-0.10",xfip:"0.77",whip:"1.16",avg:".262",obp:".279",slg:".310",woba:".262",kpct:"41.9%",bbpct:"2.3%",kbb:"39.5%"}}},
    { name:"Dylan Lee", role:"RP", era:"0.97", ip:"37.0", sv:0, kpct:"32.8%", bbpct:"3.7%", whip:"0.622", fip:"1.48", war:1.7, war2:1.4, xfip:"2.66", siera:"2.19", batSpeed:72.3, fastSwing:"26.2%", swstr:"19.5%", cstr:"15.2%", csw:"34.7%", laSwSp:"32.9%", idealAttack:"49.6%", splits:{vsL:{ip:"14.0",era:"1.93",fip:"0.95",xfip:"2.34",whip:"0.57",avg:".130",obp:".163",slg:".283",woba:".189",kpct:"36.0%",bbpct:"4.0%",kbb:"32.0%"}, vsR:{ip:"23.0",era:"0.39",fip:"1.79",xfip:"2.98",whip:"0.65",avg:".148",obp:".179",slg:".210",woba:".175",kpct:"31.0%",bbpct:"3.6%",kbb:"27.4%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.44", war:1.7, war2:0.8, xfip:"3.40", siera:"3.34", batSpeed:71.4, fastSwing:"22.7%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.7%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.68",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.97",xfip:"2.98",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.59", ip:"31.1", sv:1, kpct:"27.9%", bbpct:"8.5%", whip:"1.117", fip:"2.46", war:0.9, war2:0.8, xfip:"3.31", siera:"3.08", batSpeed:71.9, fastSwing:"25.3%", swstr:"11.8%", cstr:"15.1%", csw:"27.0%", laSwSp:"27.5%", idealAttack:"41.9%", splits:{vsL:{ip:"17.0",era:"3.71",fip:"2.22",xfip:"2.59",whip:"1.12",avg:".222",obp:".282",slg:".317",woba:".268",kpct:"32.4%",bbpct:"7.0%",kbb:"25.4%"}, vsR:{ip:"14.1",era:"1.26",fip:"2.75",xfip:"4.31",whip:"1.12",avg:".200",obp:".293",slg:".240",woba:".252",kpct:"22.4%",bbpct:"10.3%",kbb:"12.1%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.00", ip:"30.0", sv:0, kpct:"25.8%", bbpct:"8.1%", whip:"1.167", fip:"4.23", war:0.5, war2:0.2, xfip:"3.89", siera:"3.39", batSpeed:70.6, fastSwing:"16.4%", swstr:"12.1%", cstr:"18.0%", csw:"30.1%", laSwSp:"32.1%", idealAttack:"55.9%", splits:{vsL:{ip:"16.2",era:"5.40",fip:"5.80",xfip:"3.87",whip:"1.08",avg:".197",obp:".269",slg:".475",woba:".314",kpct:"28.4%",bbpct:"9.0%",kbb:"19.4%"}, vsR:{ip:"13.1",era:"0.00",fip:"2.27",xfip:"4.06",whip:"1.28",avg:".250",obp:".316",slg:".288",woba:".278",kpct:"22.8%",bbpct:"7.0%",kbb:"15.8%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.70", ip:"20.0", sv:1, kpct:"28.2%", bbpct:"10.3%", whip:"0.950", fip:"4.05", war:0.4, war2:0.1, xfip:"3.70", siera:"3.37", batSpeed:72.8, fastSwing:"31.6%", swstr:"12.7%", cstr:"12.1%", csw:"24.8%", laSwSp:"35.4%", idealAttack:"55.9%", splits:{vsL:{ip:"8.0",era:"3.38",fip:"5.72",xfip:"4.34",whip:"1.38",avg:".200",obp:".314",slg:".433",woba:".319",kpct:"28.6%",bbpct:"14.3%",kbb:"14.3%"}, vsR:{ip:"12.0",era:"2.25",fip:"2.93",xfip:"3.59",whip:"0.67",avg:".128",obp:".190",slg:".256",woba:".202",kpct:"27.9%",bbpct:"7.0%",kbb:"20.9%"}}},
    { name:"James Karinchak", role:"RP", era:"0.00", ip:"6.2", sv:0, kpct:"26.1%", bbpct:"8.7%", whip:"0.600", fip:"2.20", war:0.3, war2:0.1, xfip:"4.45", siera:"3.73", batSpeed:72.2, fastSwing:"27.6%", swstr:"10.0%", cstr:"23.0%", csw:"33.0%", laSwSp:"20.0%", idealAttack:"62.1", splits:{vsL:{ip:"2.0",era:"0.00",fip:"5.10",xfip:"7.33",whip:"1.50",avg:".167",obp:".375",slg:".333",woba:".333",kpct:"12.5%",bbpct:"25.0%",kbb:"-12.5%"}, vsR:{ip:"4.2",era:"0.00",fip:"0.95",xfip:"3.19",whip:"0.21",avg:".067",obp:".067",slg:".067",woba:".059",kpct:"33.3%",bbpct:"0.0%",kbb:"33.3%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"3.68", ip:"14.2", sv:0, kpct:"9.8%", bbpct:"1.6%", whip:"1.159", fip:"4.67", war:0.1, war2:0.0, xfip:"4.33", siera:"4.39", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.9%", cstr:"12.4%", csw:"21.3%", laSwSp:"42.3%", idealAttack:"57.4", splits:{vsL:{ip:"8.2",era:"5.19",fip:"4.49",xfip:"4.54",whip:"1.27",avg:".314",obp:".333",slg:".429",woba:".335",kpct:"5.4%",bbpct:"0.0%",kbb:"5.4%"}, vsR:{ip:"6.0",era:"1.50",fip:"4.94",xfip:"4.02",whip:"1.00",avg:".238",obp:".304",slg:".381",woba:".307",kpct:"16.7%",bbpct:"4.2%",kbb:"12.5%"}}},
    { name:"Ian Hamilton", role:"RP", era:"13.50", ip:"2.0", sv:0, kpct:"30.0%", bbpct:"20.0%", whip:"2.000", fip:"3.10", war:-0.1, war2:0.0, xfip:"3.85", siera:"4.45", batSpeed:72.4, fastSwing:"37.5%", swstr:"20.0%", cstr:"15.6%", csw:"35.6%", laSwSp:"40.0", idealAttack:"37.5%", splits:{vsL:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"1.1",era:"6.75",fip:"0.85",xfip:"0.85",whip:"0.75",avg:".000",obp:".200",slg:".000",woba:".140",kpct:"60.0%",bbpct:"20.0%",kbb:"40.0%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:49,l:34,pct:".590",gb:"—", home:"24-15",away:"25-19", rs:393, ra:307, diff:+86, strk:"L3", l10:"3-7", highlight:true,  srs:1.1 },
     { team:"PHI", full:"Philadelphia Phillies", w:48,l:38,pct:".558",gb:"2.5", home:"24-20",away:"24-18", rs:383, ra:377, diff:+6, strk:"W1", l10:"7-3", highlight:false, srs:0.0 },
     { team:"MIA", full:"Miami Marlins",        w:46,l:40,pct:".535",gb:"4.5", home:"28-17",away:"18-23", rs:383, ra:359, diff:+24, strk:"W2", l10:"8-2", highlight:false, srs:0.2 },
     { team:"WSN", full:"Washington Nationals", w:44,l:43,pct:".506",gb:"7.0", home:"17-25",away:"27-18", rs:460, ra:451, diff:+9, strk:"W1", l10:"4-6", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:36,l:50,pct:".419",gb:"14.5", home:"19-24",away:"17-26", rs:343, ra:386, diff:-43, strk:"W1", l10:"2-8", highlight:false, srs:-0.6 },
   ];
   
export const statcastHitters = [
  // Updated June 29, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Acuña, León, Tromp, Murphy hidden — held
  { name:"Michael Harris II", ev:"91.9",hardHit:"50.7%",xwoba:".375",xba:".306",xslg:".534",barrel:"14.7%",chase:"45.3%",whiff:"26.2%",kpct:"20.2%",bbpct:"4.5%", gbpct:"43.8%",fbpct:"23.7%",ldpct:"26.0%",pupct:"6.4%",pullAir:"17.4%"},
  { name:"Matt Olson", ev:"92.8",hardHit:"51.2%",xwoba:".362",xba:".258",xslg:".516",barrel:"13.4%",chase:"27.7%",whiff:"24.3%",kpct:"23.0%",bbpct:"9.5%", gbpct:"36.7%",fbpct:"33.8%",ldpct:"20.8%",pupct:"8.8%",pullAir:"19.2%"},
  { name:"Dominic Smith", ev:"87.9",hardHit:"35.8%",xwoba:".329",xba:".274",xslg:".428",barrel:"7.0%",chase:"32.9%",whiff:"20.3%",kpct:"13.1%",bbpct:"6.1%", gbpct:"38.4%",fbpct:"30.8%",ldpct:"25.2%",pupct:"5.7%",pullAir:"16.4%"},
  { name:"Drake Baldwin", ev:"91.5",hardHit:"50.6%",xwoba:".375",xba:".272",xslg:".519",barrel:"16.7%",chase:"36.2%",whiff:"25.7%",kpct:"24.5%",bbpct:"9.6%", gbpct:"47.6%",fbpct:"22.0%",ldpct:"25.0%",pupct:"5.4%",pullAir:"13.7%"},
  { name:"Mauricio Dubón", ev:"86.6",hardHit:"30.4%",xwoba:".321",xba:".276",xslg:".406",barrel:"5.3%",chase:"37.2%",whiff:"16.4%",kpct:"14.3%",bbpct:"6.1%", gbpct:"38.9%",fbpct:"24.7%",ldpct:"28.3%",pupct:"8.1%",pullAir:"13.8%"},
  { name:"Jorge Mateo", ev:"90.4",hardHit:"48.6%",xwoba:".332",xba:".272",xslg:".458",barrel:"9.5%",chase:"41.5%",whiff:"29.8%",kpct:"29.2%",bbpct:"5.3%", gbpct:"37.8%",fbpct:"32.4%",ldpct:"28.4%",pupct:"1.4%",pullAir:"20.3%"},
  { name:"Austin Riley", ev:"90.9",hardHit:"44.3%",xwoba:".294",xba:".206",xslg:".376",barrel:"9.9%",chase:"32.7%",whiff:"32.5%",kpct:"28.6%",bbpct:"8.4%", gbpct:"38.4%",fbpct:"31.5%",ldpct:"20.7%",pupct:"9.4%",pullAir:"17.7%"},
  { name:"Ozzie Albies", ev:"87.1",hardHit:"27.9%",xwoba:".302",xba:".255",xslg:".381",barrel:"3.9%",chase:"36.2%",whiff:"19.5%",kpct:"11.4%",bbpct:"6.8%", gbpct:"35.7%",fbpct:"31.8%",ldpct:"25.8%",pupct:"6.7%",pullAir:"24.4%"},
  { name:"Mike Yastrzemski", ev:"90.7",hardHit:"43.4%",xwoba:".288",xba:".224",xslg:".325",barrel:"4.1%",chase:"26.3%",whiff:"24.2%",kpct:"24.4%",bbpct:"9.3%", gbpct:"41.4%",fbpct:"29.7%",ldpct:"24.1%",pupct:"4.8%",pullAir:"18.6%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.0",hardHit:"32.5%",xwoba:".286",xba:".246",xslg:".354",barrel:"6.1%",chase:"29.4%",whiff:"28.6%",kpct:"20.4%",bbpct:"5.3%", gbpct:"56.6%",fbpct:"21.7%",ldpct:"19.3%",pupct:"2.4%",pullAir:"9.6%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.3",hardHit:"34.6%",xwoba:".268",xba:".212",xslg:".383",barrel:"7.7%",chase:"32.0%",whiff:"26.4%",kpct:"27.6%",bbpct:"2.6%", gbpct:"36.5%",fbpct:"40.4%",ldpct:"17.3%",pupct:"5.8%",pullAir:"21.4%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".487",xba:".339",xslg:".828",barrel:"28.6%",chase:"33.3%",whiff:"28.6%",kpct:"30.0%",bbpct:"0.0%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
];

export const statcastPitchers = [
  // Updated June 29, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez not in screenshots — held; Strider/Ritchie/Carrasco hidden — held; Waldrep added (small sample, 5 BBE)
  { name:"Raisel Iglesias", ev:"87.7",hardHit:"31.3%",xwoba:".250",xba:".215",xslg:".298",kpct:"28.4%",bbpct:"5.9%", barrel:"4.5%", chase:"37.7%",whiff:"31.3%",gbpct:"35.8%",fbpct:"25.4%",ldpct:"28.4%",pupct:"10.4%", pullAir:"17.9%"},
  { name:"Dylan Lee", ev:"87.1",hardHit:"30.6%",xwoba:".210",xba:".175",xslg:".259",kpct:"32.8%",bbpct:"3.7%", barrel:"4.7%", chase:"38.3%",whiff:"38.2%",gbpct:"34.1%",fbpct:"31.8%",ldpct:"23.5%",pupct:"10.6%", pullAir:"25.9%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.3%",xwoba:".296",xba:".244",xslg:".369",kpct:"20.0%",bbpct:"7.2%", barrel:"4.7%", chase:"29.3%",whiff:"22.4%",gbpct:"43.7%",fbpct:"26.3%",ldpct:"23.3%",pupct:"6.7%", pullAir:"18.0%"},
  { name:"Chris Sale", ev:"86.8",hardHit:"31.0%",xwoba:".280",xba:".227",xslg:".332",kpct:"29.6%",bbpct:"6.0%", barrel:"5.2%", chase:"35.8%",whiff:"29.8%",gbpct:"45.4%",fbpct:"23.6%",ldpct:"25.8%",pupct:"5.2%", pullAir:"17.0%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.2",hardHit:"36.3%",xwoba:".278",xba:".224",xslg:".314",kpct:"27.9%",bbpct:"8.5%", barrel:"3.8%", chase:"29.7%",whiff:"26.0%",gbpct:"41.3%",fbpct:"25.0%",ldpct:"23.8%",pupct:"10.0%", pullAir:"11.2%"},
  { name:"Hurston Waldrep", ev:"83.7",hardHit:"40.0%",xwoba:".373",xba:".227",xslg:".244",kpct:"25.0%",bbpct:"33.3%", barrel:"0.0%", chase:"25.7%",whiff:"30.0%",gbpct:"80.0%",fbpct:"0.0%",ldpct:"0.0%",pupct:"20.0%", pullAir:"0.0%"},
  { name:"Tyler Kinley", ev:"84.4",hardHit:"25.9%",xwoba:".267",xba:".196",xslg:".343",kpct:"25.8%",bbpct:"8.1%", barrel:"6.3%", chase:"25.9%",whiff:"27.6%",gbpct:"30.9%",fbpct:"30.9%",ldpct:"24.7%",pupct:"13.6%", pullAir:"34.6%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"37.3%",xwoba:".313",xba:".246",xslg:".378",kpct:"20.7%",bbpct:"9.3%", barrel:"6.5%", chase:"26.3%",whiff:"22.7%",gbpct:"49.3%",fbpct:"21.4%",ldpct:"24.9%",pupct:"4.5%", pullAir:"21.4%"},
  { name:"Grant Holmes", ev:"91.1",hardHit:"44.7%",xwoba:".336",xba:".247",xslg:".427",kpct:"20.7%",bbpct:"11.1%", barrel:"9.3%", chase:"32.2%",whiff:"28.1%",gbpct:"42.5%",fbpct:"26.5%",ldpct:"24.8%",pupct:"6.2%", pullAir:"20.8%"},
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
