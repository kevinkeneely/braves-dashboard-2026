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
 
   export const lastUpdated = "July 22, 2026";
 
   /* ═══════════════════════════════════════════════════════════════════════════
      ROSTER CHECKLIST — exact spellings (for Ctrl+F). Update when adding/removing
      a player. This is just a reference comment; it does not affect the dashboard.
      ───────────────────────────────────────────────────────────────────────────
      HITTERS (18):
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
      //   - Jim Jarvis
      //   - Brewer Hicklen
   
      STARTERS (9):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Reynaldo López
      //   - Martín Pérez
      //   - Grant Holmes
      //   - Hurston Waldrep
      //   - JR Ritchie
      //   - Owen Murphy
   
      BULLPEN (11):
      //   - Raisel Iglesias
      //   - Dylan Lee
      //   - Robert Suarez
      //   - Tyler Kinley
      //   - Didier Fuentes
      //   - Dylan Dodd
      //   - James Karinchak
      //   - Carlos Carrasco
      //   - Ian Hamilton
      //   - Danny Young
      //   - Víctor Mederos
      ───────────────────────────────────────────────────────────────────────────
      QUICK CHECK before saving:
      • Did you keep quotes on rate stats?   avg:".271"   kpct:"11.8%"
      • Did you leave counting stats bare?    hr:9   pa:241   war:1.8
      • Every line still ends in a comma, every block still closes with ] or } ?
      • If the screen goes blank: press Ctrl+Z until it returns, then re-do slowly.
      ═══════════════════════════════════════════════════════════════════════════ */
   
   
   
   export const SCHEDULE = [
     // March
     { date:"Fri, Mar 27", opp:"Royals", home:true,  result:"W", score:"6-0",  record:"1-0"  },
     { date:"Sat, Mar 28", opp:"Royals", home:true,  result:"W", score:"6-2",  record:"2-0"  },
     { date:"Sun, Mar 29", opp:"Royals", home:true,  result:"L", score:"4-1",  record:"2-1"  },
     { date:"Mon, Mar 30", opp:"Athletics",   home:true,  result:"W", score:"4-0",  record:"3-1"  },
     { date:"Tue, Mar 31", opp:"Athletics",   home:true,  result:"L", score:"5-2",  record:"3-2"  },
     // April
     { date:"Wed, Apr 1",  opp:"Athletics",   home:true,  result:"W", score:"5-1",  record:"4-2"  },
     { date:"Thu, Apr 2",  opp:"Diamondbacks",     home:false, result:"W", score:"17-2", record:"5-2"  },
     { date:"Fri, Apr 3",  opp:"Diamondbacks",     home:false, result:"W", score:"2-0",  record:"6-2"  },
     { date:"Sat, Apr 4",  opp:"Diamondbacks",     home:false, result:"L", score:"2-1",  record:"6-3"  },
     { date:"Sun, Apr 5",  opp:"Diamondbacks",     home:false, result:"L", score:"6-5 F/10", record:"6-4" },
     { date:"Mon, Apr 6",  opp:"Angels", home:false, result:"L", score:"6-2",  record:"6-5"  },
     { date:"Tue, Apr 7",  opp:"Angels", home:false, result:"W", score:"7-2",  record:"7-5"  },
     { date:"Wed, Apr 8",  opp:"Angels", home:false, result:"W", score:"8-2",  record:"8-5"  },
     { date:"Fri, Apr 10", opp:"Guardians",   home:true,  result:"W", score:"11-5", record:"9-5"  },
     { date:"Sat, Apr 11", opp:"Guardians",   home:true,  result:"L", score:"6-0",  record:"9-6"  },
     { date:"Sun, Apr 12", opp:"Guardians",   home:true,  result:"W", score:"13-1", record:"10-6" },
     { date:"Mon, Apr 13", opp:"Marlins",       home:true,  result:"L", score:"10-4", record:"10-7" },
     { date:"Tue, Apr 14", opp:"Marlins",       home:true,  result:"W", score:"6-5",  record:"11-7" },
     { date:"Wed, Apr 15", opp:"Marlins",       home:true,  result:"W", score:"6-3",  record:"12-7" },
     { date:"Fri, Apr 17", opp:"Phillies",home:false, result:"W", score:"9-0",  record:"13-7" },
     { date:"Sat, Apr 18", opp:"Phillies",home:false, result:"W", score:"3-1",  record:"14-7" },
     { date:"Sun, Apr 19", opp:"Phillies",home:false, result:"W", score:"4-2",  record:"15-7" },
     { date:"Mon, Apr 20", opp:"Nationals",  home:false, result:"W", score:"9-4",  record:"16-7" },
     { date:"Tue, Apr 21", opp:"Nationals",  home:false, result:"L", score:"11-4", record:"16-8" },
     { date:"Wed, Apr 22", opp:"Nationals",  home:false, result:"W", score:"8-6",  record:"17-8" },
     { date:"Thu, Apr 23", opp:"Nationals",  home:false, result:"W", score:"7-2",  record:"18-8" },
     { date:"Fri, Apr 24", opp:"Phillies",home:true,  result:"W", score:"5-3",  record:"19-8" },
     { date:"Sat, Apr 25", opp:"Phillies",home:true,  result:"L", score:"8-5 F/10", record:"19-9" },
     { date:"Sun, Apr 26", opp:"Phillies",home:true,  result:"W", score:"6-2",  record:"20-9" },
     { date:"Tue, Apr 28", opp:"Tigers",     home:true,  result:"W", score:"5-2",  record:"21-9" },
     { date:"Wed, Apr 29", opp:"Tigers",     home:true,  result:"W", score:"4-3",  record:"22-9" },
     { date:"Thu, Apr 30", opp:"Tigers",     home:true,  result:"L", score:"5-2",  record:"22-10"},
     // May
     { date:"Fri, May 1",  opp:"Rockies",    home:false, result:"W", score:"8-6",  record:"23-10"},
     { date:"Sat, May 2",  opp:"Rockies",    home:false, result:"W", score:"9-1",  record:"24-10"},
     { date:"Sun, May 3",  opp:"Rockies",    home:false, result:"W", score:"11-6", record:"25-10"},
     { date:"Mon, May 4",  opp:"Mariners",     home:false, result:"L", score:"5-4",  record:"25-11"},
     { date:"Tue, May 5",  opp:"Mariners",     home:false, result:"W", score:"3-2",  record:"26-11"},
     { date:"Wed, May 6",  opp:"Mariners",     home:false, result:"L", score:"3-1",  record:"26-12"},
     { date:"Fri, May 8",  opp:"Dodgers", home:false, result:"L", score:"3-1",  record:"26-13"},
     { date:"Sat, May 9",  opp:"Dodgers", home:false, result:"W", score:"7-2",  record:"27-13"},
     { date:"Sun, May 10", opp:"Dodgers", home:false, result:"W", score:"7-2",  record:"28-13"},
     { date:"Tue, May 12", opp:"Cubs",     home:true,  result:"W", score:"5-2",  record:"29-13"},
     { date:"Wed, May 13", opp:"Cubs",     home:true,  result:"W", score:"4-1",  record:"30-13"},
     { date:"Thu, May 14", opp:"Cubs",     home:true,  result:"L", score:"2-0",  record:"30-14"},
     { date:"Fri, May 15", opp:"Red Sox",      home:true,  result:"W", score:"3-2",  record:"31-14"},
     { date:"Sat, May 16", opp:"Red Sox",      home:true,  result:"L", score:"2-3",  record:"31-15"},
     { date:"Sun, May 17", opp:"Red Sox",      home:true,  result:"W", score:"8-1",  record:"32-15"},
     { date:"Mon, May 18", opp:"Marlins",       home:false, result:"L", score:"0-12", record:"32-16"},
     { date:"Tue, May 19", opp:"Marlins",       home:false, result:"W", score:"8-4",  record:"33-16"},
     { date:"Wed, May 20", opp:"Marlins",       home:false, result:"W", score:"9-1",  record:"34-16"},
     { date:"Thu, May 21", opp:"Marlins",       home:false, result:"W", score:"9-3",  record:"35-16"},
     { date:"Fri, May 22", opp:"Nationals",  home:true,  result:"W", score:"5-4",  record:"36-16"},
     { date:"Sat, May 23", opp:"Nationals",  home:true,  result:"L", score:"0-2",  record:"36-17"},
     { date:"Sun, May 24", opp:"Nationals",  home:true,  result:"L", score:"1-2",  record:"36-18"},
     { date:"Tue, May 26", opp:"Red Sox",      home:false, result:"W", score:"7-6",  record:"37-18"},
     { date:"Wed, May 27", opp:"Red Sox",      home:false, result:"L", score:"0-8",  record:"37-19"},
     { date:"Thu, May 28", opp:"Red Sox",      home:false, result:"W", score:"10-2", record:"38-19"},
     { date:"Fri, May 29", opp:"Reds",  home:false, result:"W", score:"8-3", record:"39-19" },
     { date:"Sat, May 30", opp:"Reds",  home:false, result:"W", score:"5-2", record:"40-19" },
     { date:"Sun, May 31", opp:"Reds",  home:false, result:"L", score:"4-6", record:"40-20" },
     // June
     { date:"Tue, Jun 2",  opp:"Blue Jays",     home:true,  result:"W", score:"4-3", record:"41-20" },
     { date:"Wed, Jun 3",  opp:"Blue Jays",     home:true,  result:"W", score:"7-3", record:"42-20" },
     { date:"Thu, Jun 4",  opp:"Blue Jays",     home:true,  result:"L", score:"2-7", record:"42-21" },
     { date:"Fri, Jun 5",  opp:"Pirates",  home:true,  result:"W", score:"6-3", record:"43-21" },
     { date:"Sat, Jun 6",  opp:"Pirates",  home:true,  result:"W", score:"6-3", record:"44-21" },
     { date:"Sun, Jun 7",  opp:"Pirates",  home:true,  result:"W", score:"3-2", record:"45-21"},
     { date:"Tue, Jun 9",  opp:"White Sox",   home:false, result:"L", score:"5-6", record:"45-22"},
     { date:"Wed, Jun 10", opp:"White Sox",   home:false, result:"L", score:"1-2", record:"45-23"},
     { date:"Fri, Jun 12", opp:"Mets",        home:false, result:"L", score:"5-7", record:"45-24"},
     { date:"Sat, Jun 13", opp:"Mets",        home:false, result:"W", score:"3-1", record:"46-24"},
     { date:"Sun, Jun 14", opp:"Mets",        home:false, result:"L", score:"1-8", record:"46-25"},
     { date:"Tue, Jun 16", opp:"Giants",   home:true, result:"L", score:"2-7", record:"46-26"},
     { date:"Wed, Jun 17", opp:"Giants",   home:true, result:"L", score:"5-7", record:"46-27"},
     { date:"Fri, Jun 19", opp:"Brewers",   home:true, result:"W", score:"3-2", record:"47-27"},
     { date:"Sat, Jun 20", opp:"Brewers",   home:true, result:"W", score:"4-3", record:"48-27"},
     { date:"Sun, Jun 21", opp:"Brewers",   home:true, result:"L", score:"4-9", record:"48-28"},
     { date:"Mon, Jun 22", opp:"Padres",   home:false, result:"L", score:"0-1", record:"48-29"},
     { date:"Tue, Jun 23", opp:"Padres",   home:false, result:"L", score:"6-7 F/10", record:"48-30"},
     { date:"Wed, Jun 24", opp:"Padres",   home:false, result:"L", score:"2-5", record:"48-31"},
     { date:"Fri, Jun 26", opp:"Giants",   home:false, result:"W", score:"3-1", record:"49-31"},
     { date:"Sat, Jun 27", opp:"Giants",   home:false, result:"L", score:"0-5", record:"49-32"},
     { date:"Sun, Jun 28", opp:"Giants",   home:false, result:"L", score:"2-3", record:"49-33"},
     { date:"Tue, Jun 30", opp:"Cardinals",   home:true, result:"L", score:"3-5", record:"49-34"},
      // July
     { date:"Wed, Jul 1", opp:"Cardinals",   home:true, result:"W", score:"5-1", record:"50-34"},
     { date:"Thu, Jul 2", opp:"Cardinals",   home:true, result:"L", score:"5-11", record:"50-35"},
     { date:"Fri, Jul 3", opp:"Mets",   home:true, result:"W", score:"5-3", record:"51-35"},
     { date:"Sat, Jul 4", opp:"Mets",   home:true, result:"W", score:"14-3", record:"52-35"},
     { date:"Sun, Jul 5", opp:"Mets",   home:true, result:"L", score:"9-10", record:"52-36"},
     { date:"Mon, Jul 6", opp:"Mets",   home:true, result:"L", score:"6-7 F/10", record:"52-37"},
     { date:"Tue, Jul 7", opp:"Pirates",   home:false, result:"L", score:"4-12", record:"52-38"},
     { date:"Wed, Jul 8", opp:"Pirates",   home:false, result:"W", score:"3-0", record:"53-38"},
     { date:"Thu, Jul 9", opp:"Pirates",   home:false, result:"W", score:"10-5", record:"54-38"},
     { date:"Fri, Jul 10", opp:"Cardinals",   home:false, result:"L", score:"1-2", record:"54-39"},
     { date:"Sat, Jul 11", opp:"Cardinals",   home:false, result:"L", score:"1-4", record:"54-40"},
     { date:"Sun, Jul 12", opp:"Cardinals",   home:false, result:"W", score:"4-3", record:"55-40"},
      // End of First Half
      // All-Star Break
      // Second Half
     { date:"Fri, Jul 17", opp:"Rangers",    home:true, result:"W", score:"15-1", record:"56-40"},
     { date:"Sat, Jul 18", opp:"Rangers",    home:true, result:"L", score:"6-7", record:"56-41"},
     { date:"Sun, Jul 19", opp:"Rangers",    home:true, result:"W", score:"8-5", record:"57-41"},
     { date:"Mon, Jul 20", opp:"Padres",    home:true, result:"W", score:"3-2", record:"58-41"},
     { date:"Tue, Jul 21", opp:"Padres",    home:true, result:"L", score:"3-8", record:"58-42"},
      // Upcoming
     { date:"Wed, Jul 22", opp:"Padres",    home:true,},
     { date:"Thu, Jul 23", opp:"Padres",    home:true,},
     { date:"Fri, Jul 24", opp:"Orioles",    home:false,},
     { date:"Sat, Jul 25", opp:"Orioles",    home:false,},
     { date:"Sun, Jul 26", opp:"Orioles",    home:false,},
     { date:"Mon, Jul 27", opp:"Mets",    home:false,},
     { date:"Tue, Jul 28", opp:"Mets",    home:false,},
     { date:"Wed, Jul 29", opp:"Mets",    home:false,},
     { date:"Thu, Jul 30", opp:"Nationals",    home:true,},
     { date:"Fri, Jul 31", opp:"Nationals",    home:true,},
      // August
     { date:"Sat, Aug 1", opp:"Nationals",    home:true,},
     { date:"Sun, Aug 2", opp:"Nationals",    home:true,},
     { date:"Tue, Aug 4", opp:"Marlins",    home:true,},
     { date:"Wed, Aug 5", opp:"Marlins",    home:true,},
     { date:"Thu, Aug 6", opp:"Marlins",    home:true,},
     { date:"Fri, Aug 7", opp:"Yankees",    home:false,},
     { date:"Sat, Aug 8", opp:"Yankees",    home:false,},
     { date:"Sun, Aug 9", opp:"Yankees",    home:false,},
     { date:"Mon, Aug 10", opp:"Mets",    home:true,},
     { date:"Tue, Aug 11", opp:"Mets",    home:true,},
     { date:"Wed, Aug 12", opp:"Mets",    home:true,},
     { date:"Fri, Aug 14", opp:"Diamondbacks",    home:true,},
     { date:"Sat, Aug 15", opp:"Diamondbacks",    home:true,},
     { date:"Sun, Aug 16", opp:"Diamondbacks",    home:true,},
     { date:"Mon, Aug 17", opp:"Twins",    home:false,},
     { date:"Tue, Aug 18", opp:"Twins",    home:false,},
     { date:"Wed, Aug 19", opp:"Twins",    home:false,},
     { date:"Thu, Aug 20", opp:"White Sox",    home:false,},
     { date:"Fri, Aug 21", opp:"Brewers",    home:false,},
     { date:"Sat, Aug 22", opp:"Brewers",    home:false,},
     { date:"Sun, Aug 23", opp:"Brewers",    home:false,},
   ];
   
   export const TEAM_HEADER = {
     record: "58-42",
     runs: 495,
     era: "3.64",
     avg: ".248",
     obp: ".316",
     slg: ".416",
     ops: ".732",
     wrc: 100,
     iso: ".168",
     battingK: "21.3%",
     battingBB: "8.1%",
     woba: ".320",
     xwoba: ".322",
     fip: "4.13",
     xera: "3.91",
     xfip: "4.12",
     whip: "1.23",
     gb: "41.7%",
     siera: "4.05",
     pitchingK: "22.7%",
     pitchingBB: "8.9%",
     pitchingKBB: "13.8%",
     swstr: "11.4%",
     cstr: "15.9%",
     csw: "27.4%",
     fastSwing: "26.4%",
     sqUpSw: "24.4%",
     blastSw: "10.0%",
     idealAtk: "49.9%",
     batFastSwing: "32.0%",
     batSqUpSw: "24.2%",
     batBlastSw: "10.9%",
     batIdealAtk: "49.8%",
     batSwStr: "10.9%",
     batCStr: "15.0%",
     batCSW: "25.9%",
     batChase: "33.5%",
     batWhiff: "24.6%",
     chase: "30.5%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.1",
// Plate Discipline additions
     batZoneSwing: "68.1%",
     batZoneContact: "84.2%",
     batChaseContact: "60.1%",
     zoneSwing: "67.2%",
     zoneContact: "83.7%",
     chaseContact: "54.0%",
// Statcast (hitters)
     batBarrel: "9.0%",
     batHardHit: "39.8%",
     batExitVelo: "89.2",
     batXBA: ".247",
     batXSLG: ".418",
     batXwOBAcon: ".371",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "7.1%",
     hardHit: "37.6%",
     exitVelo: "88.7",
     xBA: ".238",
     xSLG: ".382",
     pXwOBA: ".308",
     xwOBAcon: ".355",
 };
   
export const hitters = [
    // Updated July 21, 2026 — vsL, vsR, risp splits refreshed from FanGraphs screenshots
    // All values initialized to null for bio fields — Kevin to fill in
    // All previous top-level stats, highLeverage, twoOuts, bat tracking, ABS challenge data preserved
    { name:"Ronald Acuña Jr.", pos:"RF", bats:"R", throws:"R", dob:"1997-12-18", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.8, war2:0.9, wrc:121, woba:".350", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:79,woba:".289",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:142,woba:".382",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:128,woba:".361",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:140,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}, twoOuts:{pa:70,r:4,h:12,hr:1,rbi:5,avg:".218",obp:".386",slg:".382",ops:".768",wrc:117,woba:".345",iso:".164",bbpct:"20.0%",kpct:"20.0%",babip:".275"}}},
    { name:"Drake Baldwin", pos:"C", bats:"L", throws:"R", dob:"2001-03-28", draftYear:2022, draftRound:3, draftPick:96, draftType:"MLB", pa:343, avg:".271", obp:".362", slg:".472", ops:".833", hr:18, rbi:54, r:54, h:81, doubles:6, triples:0, sb:2, bbpct:"10.5%", kpct:"21.3%", war:1.7, war2:2.0, wrc:130, woba:".364", xwoba:".373", oaa:null, frv:-2, batSpeed:75.0, squaredUp:"25.2%", fastSwing:"53.0%", laSwSp:"37.8%", idealAttack:"46.7%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:1.2, netRuns:0.4, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.6%", xChalRate:"4.0%", rateVsExp:"-3.3%"}, absCatch:{netOvr:10.5, netRuns:0.7, chal:40, won:29, lost:11, wonPct:"73%", chalRate:"1.9%", xChalRate:"2.1%", rateVsExp:"-0.2%"}, splits:{vsL:{pa:136,r:20,h:31,hr:7,rbi:17,avg:".256",obp:".338",slg:".446",ops:".785",wrc:117,woba:".345",iso:".190",bbpct:"8.8%",kpct:"21.3%",babip:".282"}, vsR:{pa:202,r:34,h:50,hr:11,rbi:37,avg:".284",obp:".371",slg:".494",ops:".866",wrc:137,woba:".375",iso:".210",bbpct:"10.4%",kpct:"21.8%",babip:".320"}, risp:{pa:84,r:2,h:24,hr:2,rbi:37,avg:".348",obp:".452",slg:".507",ops:".960",wrc:166,woba:".418",iso:".159",bbpct:"13.1%",kpct:"11.9%",babip:".379"}, highLeverage:{pa:23,r:14,h:6,hr:0,rbi:8,avg:".286",obp:".348",slg:".333",ops:".681",wrc:93,woba:".309",iso:".048",bbpct:"8.7%",kpct:"13.0%",babip:".333"}, twoOuts:{pa:98,r:16,h:25,hr:3,rbi:15,avg:".287",obp:".367",slg:".402",ops:".770",wrc:114,woba:".341",iso:".115",bbpct:"11.2%",kpct:"19.4%",babip:".338"}}},
    { name:"Matt Olson", pos:"1B", bats:"L", throws:"R", dob:"1994-03-29", draftYear:2012, draftRound:1, draftPick:47, draftType:"MLB", pa:439, avg:".267", obp:".342", slg:".531", ops:".872", hr:26, rbi:59, r:67, h:104, doubles:25, triples:0, sb:2, bbpct:"10.0%", kpct:"24.1%", war:3.4, war2:2.9, wrc:134, woba:".371", xwoba:".359", oaa:4, frv:4, batSpeed:75.0, squaredUp:"23.7%", fastSwing:"51.7%", laSwSp:"30.9%", idealAttack:"52.5%", armValue:null, armStrength:83.7, abs:{netOvr:-0.9, netRuns:-0.2, chal:10, won:2, lost:8, wonPct:"20%", chalRate:"4.0%", xChalRate:"3.2%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:191,r:26,h:46,hr:9,rbi:22,avg:".266",obp:".330",slg:".486",ops:".815",wrc:122,woba:".352",iso:".220",bbpct:"7.9%",kpct:"24.1%",babip:".311"}, vsR:{pa:243,r:41,h:57,hr:17,rbi:37,avg:".268",obp:".350",slg:".573",ops:".923",wrc:145,woba:".387",iso:".305",bbpct:"11.5%",kpct:"24.3%",babip:".288"}, risp:{pa:107,r:3,h:16,hr:3,rbi:28,avg:".188",obp:".327",slg:".365",ops:".692",wrc:86,woba:".299",iso:".176",bbpct:"17.8%",kpct:"23.4%",babip:".217"}, highLeverage:{pa:39,r:19,h:8,hr:4,rbi:11,avg:".242",obp:".333",slg:".606",ops:".939",wrc:137,woba:".374",iso:".364",bbpct:"12.8%",kpct:"30.8%",babip:".222"}, twoOuts:{pa:154,r:30,h:35,hr:9,rbi:22,avg:".265",obp:".370",slg:".523",ops:".893",wrc:141,woba:".380",iso:".258",bbpct:"13.0%",kpct:"22.1%",babip:".292"}}},
    { name:"Ozzie Albies", pos:"2B", bats:"S", throws:"R", dob:"1997-01-07", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:434, avg:".262", obp:".313", slg:".432", ops:".745", hr:15, rbi:54, r:63, h:102, doubles:21, triples:0, sb:1, bbpct:"6.7%", kpct:"14.1%", war:2.1, war2:1.6, wrc:101, woba:".321", xwoba:".291", oaa:1, frv:-1, batSpeed:69.1, squaredUp:"27.9%", fastSwing:"5.5%", laSwSp:"34.5%", idealAttack:"58.2%", armValue:null, armStrength:70.5, abs:{netOvr:0.4, netRuns:0.5, chal:8, won:4, lost:4, wonPct:"50%", chalRate:"5.8%", xChalRate:"5.9%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:181,r:18,h:49,hr:7,rbi:24,avg:".290",obp:".309",slg:".491",ops:".801",wrc:112,woba:".337",iso:".201",bbpct:"2.8%",kpct:"6.6%",babip:".271"}, vsR:{pa:248,r:45,h:53,hr:8,rbi:30,avg:".247",obp:".323",slg:".395",ops:".718",wrc:97,woba:".315",iso:".149",bbpct:"9.7%",kpct:"18.5%",babip:".269"}, risp:{pa:102,r:3,h:26,hr:3,rbi:39,avg:".317",obp:".343",slg:".476",ops:".819",wrc:109,woba:".333",iso:".159",bbpct:"7.8%",kpct:"9.8%",babip:".288"}, highLeverage:{pa:37,r:20,h:8,hr:2,rbi:10,avg:".250",obp:".324",slg:".500",ops:".824",wrc:121,woba:".351",iso:".250",bbpct:"8.1%",kpct:"16.2%",babip:".240"}, twoOuts:{pa:138,r:25,h:32,hr:3,rbi:16,avg:".242",obp:".275",slg:".356",ops:".631",wrc:73,woba:".278",iso:".114",bbpct:"2.9%",kpct:"14.5%",babip:".266"}}},
    { name:"Michael Harris II", pos:"CF", bats:"L", throws:"L", dob:"2001-03-07", draftYear:2019, draftRound:3, draftPick:98, draftType:"MLB", pa:376, avg:".301", obp:".330", slg:".506", ops:".835", hr:18, rbi:59, r:49, h:107, doubles:19, triples:0, sb:6, bbpct:"4.0%", kpct:"19.7%", war:2.9, war2:2.9, wrc:126, woba:".358", xwoba:".365", oaa:7, frv:7, batSpeed:74.8, squaredUp:"24.2%", fastSwing:"48.9%", laSwSp:"29.7%", idealAttack:"45.8%", armValue:null, armStrength:84.6, abs:{netOvr:-3.2, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.1%", xChalRate:"3.2%", rateVsExp:"+2.9%"}, splits:{vsL:{pa:143,r:16,h:38,hr:6,rbi:19,avg:".286",obp:".329",slg:".474",ops:".802",wrc:118,woba:".347",iso:".188",bbpct:"4.9%",kpct:"18.9%",babip:".317"}, vsR:{pa:229,r:33,h:68,hr:12,rbi:40,avg:".311",obp:".332",slg:".525",ops:".857",wrc:131,woba:".366",iso:".215",bbpct:"3.5%",kpct:"20.5%",babip:".346"}, risp:{pa:76,r:0,h:21,hr:0,rbi:31,avg:".313",obp:".355",slg:".433",ops:".788",wrc:114,woba:".340",iso:".119",bbpct:"5.3%",kpct:"13.2%",babip:".350"}, highLeverage:{pa:35,r:10,h:8,hr:1,rbi:12,avg:".276",obp:".343",slg:".517",ops:".860",wrc:127,woba:".360",iso:".241",bbpct:"5.7%",kpct:"22.9%",babip:".318"}, twoOuts:{pa:109,r:14,h:29,hr:4,rbi:19,avg:".290",obp:".349",slg:".470",ops:".819",wrc:125,woba:".357",iso:".180",bbpct:"7.3%",kpct:"17.4%",babip:".325"}}},
    { name:"Mauricio Dubón", pos:"LF", bats:"R", throws:"R", dob:"1994-07-19", draftYear:2013, draftRound:26, draftPick:773, draftType:"MLB", pa:391, avg:".262", obp:".315", slg:".412", ops:".727", hr:10, rbi:53, r:46, h:95, doubles:20, triples:2, sb:3, bbpct:"6.6%", kpct:"14.6%", war:2.7, war2:1.9, wrc:100, woba:".319", xwoba:".319", oaa:8, frv:7, batSpeed:68.9, squaredUp:"27.7%", fastSwing:"2.9%", laSwSp:"35.4%", idealAttack:"38.0%", armValue:null, armStrength:88.6, abs:{netOvr:-5.0, netRuns:-1.2, chal:11, won:3, lost:8, wonPct:"27%", chalRate:"5.9%", xChalRate:"4.0%", rateVsExp:"+1.8%"}, splits:{vsL:{pa:147,r:15,h:33,hr:4,rbi:21,avg:".243",obp:".295",slg:".412",ops:".706",wrc:92,woba:".308",iso:".169",bbpct:"6.1%",kpct:"12.9%",babip:".257"}, vsR:{pa:242,r:30,h:62,hr:6,rbi:32,avg:".278",obp:".329",slg:".417",ops:".746",wrc:105,woba:".328",iso:".139",bbpct:"6.6%",kpct:"15.7%",babip:".313"}, risp:{pa:90,r:3,h:29,hr:3,rbi:44,avg:".349",obp:".386",slg:".554",ops:".941",wrc:157,woba:".405",iso:".205",bbpct:"5.6%",kpct:"10.0%",babip:".366"}, highLeverage:{pa:38,r:9,h:14,hr:1,rbi:22,avg:".400",obp:".447",slg:".629",ops:"1.076",wrc:195,woba:".461",iso:".229",bbpct:"7.9%",kpct:"7.9%",babip:".419"}, twoOuts:{pa:122,r:17,h:27,hr:2,rbi:26,avg:".239",obp:".295",slg:".363",ops:".658",wrc:81,woba:".292",iso:".124",bbpct:"7.4%",kpct:"11.5%",babip:".258"}}},
    { name:"Austin Riley", pos:"3B", bats:"R", throws:"R", dob:"1997-04-02", draftYear:2015, draftRound:1, draftPick:41, draftType:"MLB", pa:405, avg:".213", obp:".294", slg:".355", ops:".648", hr:12, rbi:47, r:43, h:77, doubles:13, triples:1, sb:6, bbpct:"8.1%", kpct:"28.9%", war:0.3, war2:0.5, wrc:80, woba:".290", xwoba:".287", oaa:-4, frv:-3, batSpeed:75.7, squaredUp:"19.8%", fastSwing:"57.2%", laSwSp:"31.0%", idealAttack:"46.0%", armValue:null, armStrength:83.5, abs:{netOvr:-1.5, netRuns:-0.3, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"1.8%", xChalRate:"5.3%", rateVsExp:"-3.5%"}, splits:{vsL:{pa:135,r:12,h:26,hr:1,rbi:13,avg:".220",obp:".311",slg:".305",ops:".616",wrc:75,woba:".282",iso:".085",bbpct:"10.4%",kpct:"30.4%",babip:".325"}, vsR:{pa:266,r:31,h:51,hr:11,rbi:34,avg:".213",obp:".289",slg:".385",ops:".674",wrc:86,woba:".298",iso:".172",bbpct:"7.1%",kpct:"27.8%",babip:".258"}, risp:{pa:107,r:5,h:25,hr:5,rbi:40,avg:".255",obp:".299",slg:".469",ops:".768",wrc:106,woba:".328",iso:".214",bbpct:"5.6%",kpct:"30.8%",babip:".323"}, highLeverage:{pa:40,r:5,h:7,hr:1,rbi:14,avg:".194",obp:".225",slg:".306",ops:".531",wrc:39,woba:".229",iso:".111",bbpct:"5.0%",kpct:"22.5%",babip:".214"}, twoOuts:{pa:127,r:14,h:22,hr:3,rbi:16,avg:".190",obp:".260",slg:".319",ops:".579",wrc:60,woba:".260",iso:".129",bbpct:"7.1%",kpct:"31.5%",babip:".260"}}},
    { name:"Mike Yastrzemski", pos:"RF", bats:"L", throws:"L", dob:"1990-08-23", draftYear:2013, draftRound:14, draftPick:429, draftType:"MLB", pa:264, avg:".228", obp:".318", slg:".362", ops:".680", hr:6, rbi:28, r:34, h:53, doubles:11, triples:1, sb:1, bbpct:"10.2%", kpct:"23.1%", war:1.1, war2:0.3, wrc:90, woba:".305", xwoba:".305", oaa:-1, frv:-1, batSpeed:71.2, squaredUp:"29.0%", fastSwing:"7.2%", laSwSp:"32.9%", idealAttack:"61.8%", armValue:null, armStrength:85.2, abs:{netOvr:2.6, netRuns:0.6, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.5%", xChalRate:"3.4%", rateVsExp:"-1.9%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".264",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:227,r:30,h:47,hr:6,rbi:27,avg:".235",obp:".322",slg:".385",ops:".707",wrc:96,woba:".314",iso:".150",bbpct:"10.6%",kpct:"21.1%",babip:".279"}, risp:{pa:62,r:1,h:15,hr:1,rbi:20,avg:".278",obp:".355",slg:".407",ops:".762",wrc:111,woba:".336",iso:".130",bbpct:"11.3%",kpct:"35.5%",babip:".438"}, highLeverage:{pa:24,r:7,h:7,hr:1,rbi:10,avg:".318",obp:".375",slg:".545",ops:".920",wrc:152,woba:".397",iso:".227",bbpct:"8.3%",kpct:"29.2%",babip:".429"}, twoOuts:{pa:76,r:13,h:10,hr:2,rbi:10,avg:".152",obp:".263",slg:".288",ops:".551",wrc:56,woba:".254",iso:".136",bbpct:"11.8%",kpct:"32.9%",babip:".205"}}},
    { name:"Jim Jarvis", pos:"SS", bats:"L", throws:"R", dob:"2000-11-06", draftYear:2023, draftRound:11, draftPick:320, draftType:"MLB", pa:52, avg:".292", obp:".333", slg:".458", ops:".792", hr:1, rbi:6, r:6, h:14, doubles:3, triples:1, sb:0, bbpct:"3.8%", kpct:"19.2%", war:0.7, war2:0.2, wrc:116, woba:".344", xwoba:".262", oaa:0, frv:0, batSpeed:70.9, squaredUp:"11.3%", fastSwing:"13.2%", laSwSp:"29.2%", idealAttack:"50.9%", armValue:null, armStrength:null, splits:{vsL:{pa:10,r:2,h:1,hr:0,rbi:0,avg:".111",obp:".200",slg:".222",ops:".422",wrc:19,woba:".199",iso:".111",bbpct:"0.0%",kpct:"20.0%",babip:".143"}, vsR:{pa:38,r:3,h:11,hr:1,rbi:4,avg:".306",obp:".324",slg:".444",ops:".769",wrc:110,woba:".334",iso:".139",bbpct:"2.6%",kpct:"21.1%",babip:".370"}, risp:{pa:12,r:0,h:2,hr:0,rbi:2,avg:".182",obp:".273",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"33.3%",babip:".286"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:14,r:2,h:6,hr:0,rbi:1,avg:".462",obp:".500",slg:".615",ops:"1.115",wrc:210,woba:".484",iso:".154",bbpct:"7.1%",kpct:"28.6%",babip:".667"}}},
    { name:"Dominic Smith", pos:"DH", bats:"L", throws:"L", dob:"1995-06-15", draftYear:2013, draftRound:1, draftPick:11, draftType:"MLB", pa:242, avg:".259", obp:".315", slg:".380", ops:".695", hr:6, rbi:35, r:34, h:56, doubles:6, triples:1, sb:0, bbpct:"7.4%", kpct:"14.0%", war:0.2, war2:-0.3, wrc:89, woba:".304", xwoba:".313", oaa:null, frv:0, batSpeed:68.9, squaredUp:"29.8%", fastSwing:"5.7%", laSwSp:"32.8%", idealAttack:"50.4%", armValue:null, armStrength:null, abs:{netOvr:-0.7, netRuns:-0.3, chal:7, won:3, lost:4, wonPct:"43%", chalRate:"5.7%", xChalRate:"4.3%", rateVsExp:"+1.4%"}, splits:{vsL:{pa:33,r:3,h:4,hr:0,rbi:2,avg:".143",obp:".250",slg:".179",ops:".429",wrc:27,woba:".210",iso:".036",bbpct:"12.1%",kpct:"12.1%",babip:".167"}, vsR:{pa:209,r:31,h:52,hr:6,rbi:33,avg:".277",obp:".325",slg:".410",ops:".735",wrc:99,woba:".318",iso:".133",bbpct:"6.7%",kpct:"14.4%",babip:".293"}, risp:{pa:65,r:3,h:16,hr:3,rbi:31,avg:".302",obp:".344",slg:".509",ops:".853",wrc:119,woba:".348",iso:".208",bbpct:"7.7%",kpct:"10.8%",babip:".271"}, highLeverage:{pa:30,r:8,h:4,hr:1,rbi:14,avg:".182",obp:".276",slg:".409",ops:".685",wrc:77,woba:".284",iso:".227",bbpct:"13.3%",kpct:"23.3%",babip:".176"}, twoOuts:{pa:77,r:12,h:20,hr:1,rbi:10,avg:".290",obp:".364",slg:".362",ops:".726",wrc:107,woba:".329",iso:".072",bbpct:"7.8%",kpct:"14.3%",babip:".333"}}},
    { name:"Jorge Mateo", pos:"SS", bats:"R", throws:"R", dob:"1995-06-23", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", pa:135, avg:".244", obp:".289", slg:".386", ops:".675", hr:4, rbi:11, r:28, h:31, doubles:6, triples:0, sb:9, bbpct:"5.9%", kpct:"30.4%", war:0.7, war2:0.6, wrc:84, woba:".296", xwoba:".325", oaa:3, frv:2, batSpeed:73.7, squaredUp:"19.8%", fastSwing:"35.2%", laSwSp:"45.9%", idealAttack:"42.9%", armValue:null, armStrength:88.3, abs:{netOvr:-6.2, netRuns:-1.1, chal:8, won:1, lost:7, wonPct:"13%", chalRate:"11.6%", xChalRate:"4.8%", rateVsExp:"+6.8%"}, splits:{vsL:{pa:52,r:10,h:12,hr:2,rbi:3,avg:".240",obp:".269",slg:".380",ops:".649",wrc:76,woba:".283",iso:".140",bbpct:"3.8%",kpct:"34.6%",babip:".333"}, vsR:{pa:83,r:18,h:19,hr:2,rbi:8,avg:".247",obp:".301",slg:".390",ops:".691",wrc:90,woba:".304",iso:".143",bbpct:"7.2%",kpct:"27.7%",babip:".327"}, risp:{pa:31,r:0,h:7,hr:0,rbi:6,avg:".250",obp:".323",slg:".250",ops:".573",wrc:66,woba:".268",iso:".000",bbpct:"9.7%",kpct:"32.3%",babip:".389"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:72,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:45,r:12,h:9,hr:1,rbi:5,avg:".214",obp:".267",slg:".333",ops:".600",wrc:65,woba:".267",iso:".119",bbpct:"6.7%",kpct:"26.7%",babip:".276"}}},
    { name:"Eli White", pos:"OF", bats:"R", throws:"R", dob:"1994-06-26", draftYear:2016, draftRound:11, draftPick:322, draftType:"MLB", pa:133, avg:".221", obp:".278", slg:".402", ops:".680", hr:5, rbi:17, r:17, h:27, doubles:5, triples:1, sb:4, bbpct:"6.8%", kpct:"23.3%", war:1.1, war2:0.5, wrc:84, woba:".296", xwoba:".276", oaa:2, frv:3, batSpeed:73.1, squaredUp:"21.1%", fastSwing:"31.0%", laSwSp:"32.6%", idealAttack:"54.5%", armValue:null, armStrength:88.8, abs:{netOvr:-0.9, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.3%", xChalRate:"5.0%", rateVsExp:"-1.7%"}, splits:{vsL:{pa:84,r:8,h:17,hr:4,rbi:12,avg:".230",obp:".310",slg:".446",ops:".755",wrc:105,woba:".327",iso:".216",bbpct:"9.5%",kpct:"26.2%",babip:".265"}, vsR:{pa:49,r:9,h:10,hr:1,rbi:5,avg:".208",obp:".224",slg:".333",ops:".558",wrc:48,woba:".242",iso:".125",bbpct:"2.0%",kpct:"18.4%",babip:".237"}, risp:{pa:38,r:1,h:7,hr:1,rbi:11,avg:".219",obp:".316",slg:".344",ops:".660",wrc:84,woba:".296",iso:".125",bbpct:"13.2%",kpct:"18.4%",babip:".240"}, highLeverage:{pa:18,r:4,h:2,hr:0,rbi:4,avg:".125",obp:".222",slg:".125",ops:".347",wrc:4,woba:".176",iso:".000",bbpct:"11.1%",kpct:"16.7%",babip:".154"}, twoOuts:{pa:36,r:6,h:7,hr:2,rbi:4,avg:".219",obp:".306",slg:".438",ops:".743",wrc:104,woba:".325",iso:".219",bbpct:"11.1%",kpct:"16.7%",babip:".208"}}},
    { name:"Ha-Seong Kim", pos:"SS", bats:"R", throws:"R", dob:"1995-10-17", draftYear:2020, draftRound:null, draftPick:null, draftType:"IFA", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.1, wrc:-26, woba:".131", xwoba:".212", oaa:-2, frv:-3, batSpeed:71.9, squaredUp:"16.9%", fastSwing:"20.8%", laSwSp:"19.6%", idealAttack:"56.9%", armValue:null, armStrength:85.3, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-41,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:79,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:123,woba:".353",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}, twoOuts:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".069",obp:".206",slg:".069",ops:".275",wrc:-10,woba:".155",iso:".000",bbpct:"14.7%",kpct:"26.5%",babip:".100"}}},
    { name:"Sandy León", pos:"C", bats:null, throws:null, dob:null, draftYear:null, draftRound:null, draftPick:null, draftType:null, pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-6,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", bats:null, throws:null, dob:null, draftYear:null, draftRound:null, draftPick:null, draftType:null, pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".185", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:1,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Sean Murphy", pos:"C", bats:"R", throws:"R", dob:"1994-10-04", draftYear:2016, draftRound:3, draftPick:83, draftType:"MLB", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:1,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:483,woba:".890",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}, twoOuts:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}}},
    { name:"Joey Bart", pos:"C", bats:"R", throws:"R", dob:"1996-12-15", draftYear:2018, draftRound:1, draftPick:2, draftType:"MLB", pa:105, avg:".213", obp:".286", slg:".372", ops:".658", hr:4, rbi:13, r:12, h:20, doubles:3, triples:0, sb:0, bbpct:"4.8%", kpct:"27.6%", war:0.3, war2:0.1, wrc:80, woba:".292", xwoba:".291", oaa:null, frv:-2, batSpeed:75.9, squaredUp:"17.5%", fastSwing:"57.1%", laSwSp:"35.5%", idealAttack:"44.2%", avgPop:1.95, armValue:null, armStrength:84.1, abs:{netOvr:-4.4, netRuns:-2.9, chal:3, won:0, lost:3, wonPct:"0%", chalRate:"4.8%", xChalRate:"4.7%", rateVsExp:"+0.1%"}, absCatch:{netOvr:3.2, netRuns:-0.1, chal:18, won:11, lost:7, wonPct:"61%", chalRate:"1.5%", xChalRate:"2.3%", rateVsExp:"-0.8%"}, splits:{vsL:{pa:24,r:1,h:3,hr:1,rbi:4,avg:".150",obp:".292",slg:".350",ops:".642",wrc:83,woba:".295",iso:".200",bbpct:"4.2%",kpct:"20.8%",babip:".143"}, vsR:{pa:17,r:2,h:2,hr:1,rbi:3,avg:".133",obp:".235",slg:".400",ops:".635",wrc:72,woba:".278",iso:".267",bbpct:"5.9%",kpct:"17.6%",babip:".091"}, risp:{pa:10,r:1,h:1,hr:1,rbi:3,avg:".111",obp:".200",slg:".444",ops:".644",wrc:69,woba:".274",iso:".333",bbpct:"10.0%",kpct:"30.0%",babip:".000"}, highLeverage:{pa:4,r:1,h:1,hr:1,rbi:2,avg:".333",obp:".500",slg:"1.333",ops:"1.833",wrc:345,woba:".685",iso:"1.000",bbpct:"25.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:17,r:4,h:3,hr:2,rbi:4,avg:".200",obp:".294",slg:".600",ops:".894",wrc:140,woba:".378",iso:".400",bbpct:"0.0%",kpct:"17.6%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"DH", bats:"L", throws:"L", dob:"1995-03-16", draftYear:2013, draftRound:30, draftPick:895, draftType:"MLB", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:157,woba:".403",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Brewer Hicklen", pos:"OF", bats:"R", throws:"R", dob:"1996-02-09", draftYear:2017, draftRound:7, draftPick:210, draftType:"MLB", pa:17, avg:".357", obp:".471", slg:".571", ops:"1.042", hr:0, rbi:2, r:3, h:5, doubles:3, triples:0, sb:0, bbpct:"17.6%", kpct:"35.3%", war:0.3, war2:0.2, wrc:187, woba:".450", xwoba:".353", oaa:null, frv:null, batSpeed:72.8, squaredUp:"21.4%", fastSwing:"28.6%", laSwSp:null, idealAttack:null, armValue:null, armStrength:null, splits:{vsL:{pa:1,r:0,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"2.000",ops:"3.000",wrc:728,woba:"1.258",iso:"1.000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}, vsR:{pa:12,r:2,h:4,hr:0,rbi:1,avg:".400",obp:".500",slg:".600",ops:"1.100",wrc:204,woba:".474",iso:".200",bbpct:"16.7%",kpct:"25.0%",babip:".571"}, risp:{pa:5,r:0,h:2,hr:0,rbi:2,avg:".400",obp:".400",slg:".800",ops:"1.200",wrc:223,woba:".503",iso:".400",bbpct:"0.0%",kpct:"20.0%",babip:".500"}, highLeverage:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
  ];

  export const starters = [
    // Updated July 20, 2026 — bio fields (throws, dob, draftYear, draftRound, draftPick, draftType) added
    // All values initialized to null — Kevin to fill in
    // All previous stats, splits, bat tracking, plate discipline preserved
    { name:"Chris Sale", throws:"L", dob:"1989-03-30", draftYear:2010, draftRound:1, draftPick:13, draftType:"MLB", wl:"10-6", era:"2.06", ip:"105.0", kpct:"28.9%", bbpct:"5.9%", whip:"1.057", war:3.5, war2:3.1, fip:"2.72", xfip:"3.12", siera:"3.12", batSpeed:70.9, fastSwing:"20.5%", swstr:"13.5%", cstr:"17.2%", csw:"30.7%", laSwSp:"36.5%", idealAttack:"46.2%", splits:{vsL:{ip:"26.0",era:"1.38",fip:"1.98",xfip:"2.19",whip:"1.00",avg:".214",obp:".274",slg:".296",woba:".258",kpct:"30.8%",bbpct:"4.7%",kbb:"26.2%"}, vsR:{ip:"79.0",era:"2.28",fip:"2.96",xfip:"3.42",whip:"1.08",avg:".223",obp:".285",slg:".320",woba:".272",kpct:"28.2%",bbpct:"6.3%",kbb:"21.9%"}}},
    { name:"Spencer Strider", throws:"R", dob:"1998-10-28", draftYear:2020, draftRound:4, draftPick:126, draftType:"MLB", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.36", xfip:"4.40", siera:"4.17", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.65",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".342",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.00",xfip:"3.95",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".378",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Reynaldo López", throws:"R", dob:"1994-01-04", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", wl:"4-2", era:"3.95", ip:"66.0", sv:0, kpct:"21.2%", bbpct:"9.9%", whip:"1.265", fip:"4.57", war:0.6, war2:0.3, xfip:"4.45", siera:"4.41", batSpeed:71.6, fastSwing:"23.9%", swstr:"9.6%", cstr:"16.6%", csw:"26.2%", laSwSp:"37.4%", idealAttack:"44.1%", splits:{vsL:{ip:"33.2",era:"4.01",fip:"4.94",xfip:"5.17",whip:"1.49",avg:".210",obp:".338",slg:".387",woba:".325",kpct:"20.8%",bbpct:"16.1%",kbb:"4.7%"}, vsR:{ip:"28.0",era:"2.89",fip:"3.53",xfip:"3.64",whip:"1.00",avg:".250",obp:".261",slg:".398",woba:".284",kpct:"20.7%",bbpct:"0.9%",kbb:"19.8%"}}},
    { name:"Martín Pérez", throws:"L", dob:"1991-04-04", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", wl:"6-6", era:"3.54", ip:"81.1", kpct:"18.6%", bbpct:"9.6%", whip:"1.193", fip:"4.43", war:1.3, war2:0.6, xfip:"4.22", siera:"4.59", batSpeed:73.3, fastSwing:"34.1%", swstr:"8.8%", cstr:"18.6%", csw:"27.5%", laSwSp:"35.4%", idealAttack:"51.9%", splits:{vsL:{ip:"24.0",era:"4.50",fip:"4.52",xfip:"3.56",whip:"1.17",avg:".242",obp:".303",slg:".440",woba:".323",kpct:"21.2%",bbpct:"6.1%",kbb:"15.2%"}, vsR:{ip:"57.1",era:"3.14",fip:"4.39",xfip:"4.50",whip:"1.20",avg:".212",obp:".296",slg:".365",woba:".290",kpct:"17.5%",bbpct:"11.1%",kbb:"6.4%"}}},
    { name:"Bryce Elder", throws:"R", dob:"1999-05-19", draftYear:2020, draftRound:5, draftPick:156, draftType:"MLB", wl:"6-6", era:"4.06", ip:"108.2", kpct:"19.8%", bbpct:"7.4%", whip:"1.233", fip:"4.45", war:0.8, war2:1.1, xfip:"4.14", siera:"4.32", batSpeed:72.4, fastSwing:"27.2%", swstr:"9.2%", cstr:"16.5%", csw:"25.7%", laSwSp:"32.5%", idealAttack:"50.1%", splits:{vsL:{ip:"68.1",era:"3.82",fip:"4.26",xfip:"4.41",whip:"1.11",avg:".212",obp:".278",slg:".364",woba:".283",kpct:"19.7%",bbpct:"8.2%",kbb:"11.5%"}, vsR:{ip:"34.1",era:"4.72",fip:"4.44",xfip:"3.60",whip:"1.51",avg:".297",obp:".342",slg:".455",woba:".348",kpct:"19.9%",bbpct:"5.8%",kbb:"14.1%"}}},
    { name:"Grant Holmes", throws:"R", dob:"1996-03-22", draftYear:2014, draftRound:1, draftPick:22, draftType:"MLB", wl:"6-4", era:"3.70", ip:"92.1", kpct:"20.2%", bbpct:"10.4%", whip:"1.343", fip:"4.96", war:1.4, war2:0.2, xfip:"4.61", siera:"4.66", batSpeed:72.6, fastSwing:"28.7%", swstr:"11.8%", cstr:"14.6%", csw:"26.4%", laSwSp:"34.1%", idealAttack:"49.1%", splits:{vsL:{ip:"50.2",era:"3.38",fip:"5.15",xfip:"4.60",whip:"1.32",avg:".226",obp:".313",slg:".405",woba:".316",kpct:"20.3%",bbpct:"11.1%",kbb:"9.2%"}, vsR:{ip:"36.2",era:"3.93",fip:"4.87",xfip:"4.63",whip:"1.31",avg:".234",obp:".314",slg:".397",woba:".315",kpct:"20.1%",bbpct:"9.4%",kbb:"10.7%"}}},
    { name:"JR Ritchie", throws:"R", dob:"2003-06-26", draftYear:2022, draftRound:1, draftPick:35, draftType:"MLB", wl:"1-2", era:"4.50", ip:"54.0", kpct:"20.8%", bbpct:"14.0%", whip:"1.391", fip:"5.51", war:0.2, war2:-0.2, xfip:"4.89", siera:"4.96", batSpeed:72.5, fastSwing:"27.8%", swstr:"8.6%", cstr:"17.0%", csw:"25.6%", laSwSp:"25.6%", idealAttack:"54.2%", splits:{vsL:{ip:"29.0",era:"5.59",fip:"6.24",xfip:"5.24",whip:"1.55",avg:".236",obp:".368",slg:".445",woba:".359",kpct:"21.1%",bbpct:"14.3%",kbb:"6.8%"}, vsR:{ip:"20.1",era:"2.66",fip:"3.79",xfip:"4.36",whip:"1.18",avg:".183",obp:".289",slg:".239",woba:".250",kpct:"19.3%",bbpct:"13.3%",kbb:"6.0%"}}},
    { name:"Hurston Waldrep", throws:"R", dob:"2002-03-01", draftYear:2023, draftRound:1, draftPick:24, draftType:"MLB", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.44", xfip:"5.94", siera:"5.66", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"55.7%", splits:{vsL:{ip:"6.1",era:"9.95",fip:"8.47",xfip:"5.82",whip:"1.74",avg:".240",obp:".387",slg:".480",woba:".383",kpct:"16.1%",bbpct:"16.1%",kbb:"0.0%"}, vsR:{ip:"4.1",era:"6.23",fip:"8.41",xfip:"6.12",whip:"2.77",avg:".368",obp:".520",slg:".526",woba:".464",kpct:"16.0%",bbpct:"20.0%",kbb:"-4.0%"}}},
    { name:"Owen Murphy", throws:"R", dob:"2003-09-27", draftYear:2022, draftRound:1, draftPick:20, draftType:"MLB", wl:"0-1", era:"4.05", ip:"6.2", kpct:"28.6%", bbpct:"0.0%", whip:"1.200", war:-0.1, war2:0.1, fip:"4.60", xfip:"3.77", siera:"2.70", batSpeed:71.9, fastSwing:"25.5%", swstr:"9.5%", cstr:"12.1%", csw:"21.6%", laSwSp:"55.6%", idealAttack:"41.0%", splits:{vsL:{ip:"2.2",era:"0.00",fip:"1.97",xfip:"3.13",whip:"0.00",avg:".000",obp:".111",slg:".000",woba:".081",kpct:"33.3%",bbpct:"0.0%",kbb:"33.3%"}, vsR:{ip:"1.1",era:"6.75",fip:"1.60",xfip:"5.05",whip:"0.75",avg:".200",obp:".200",slg:".400",woba:".252",kpct:"20.0%",bbpct:"0.0%",kbb:"20.0%"}}},
  ];

  export const bullpen = [
    // Updated July 20, 2026 — bio fields (throws, dob, draftYear, draftRound, draftPick, draftType) added
    // All values initialized to null — Kevin to fill in
    // All previous stats, splits, bat tracking, plate discipline preserved
    { name:"Raisel Iglesias", role:"CL", throws:"R", dob:"1990-01-04", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", era:"2.36", ip:"34.1", sv:19, kpct:"28.3%", bbpct:"5.5%", whip:"1.049", fip:"2.64", war:1.0, war2:1.0, xfip:"3.09", siera:"2.83", batSpeed:71.3, fastSwing:"24.9%", swstr:"14.6%", cstr:"17.5%", csw:"32.1%", laSwSp:"28.6%", idealAttack:"48.2%", splits:{vsL:{ip:"19.2",era:"2.29",fip:"3.76",xfip:"4.47",whip:"0.97",avg:".206",obp:".260",slg:".338",woba:".265",kpct:"19.2%",bbpct:"6.8%",kbb:"12.3%"}, vsR:{ip:"12.2",era:"2.13",fip:"0.10",xfip:"0.95",whip:"1.26",avg:".269",obp:".296",slg:".308",woba:".270",kpct:"40.7%",bbpct:"3.7%",kbb:"37.0%"}}},
    { name:"Dylan Lee", role:"RP", throws:"L", dob:"1994-08-01", draftYear:2016, draftRound:10, draftPick:293, draftType:"MLB", era:"1.81", ip:"44.2", sv:0, kpct:"34.0%", bbpct:"4.5%", whip:"0.739", fip:"1.42", war:1.7, war2:1.7, xfip:"2.69", siera:"2.22", batSpeed:72.4, fastSwing:"27.0%", swstr:"19.8%", cstr:"14.5%", csw:"34.3%", laSwSp:"34.4%", idealAttack:"51.5%", splits:{vsL:{ip:"16.1",era:"2.20",fip:"1.02",xfip:"2.24",whip:"0.67",avg:".130",obp:".186",slg:".259",woba:".195",kpct:"38.3%",bbpct:"6.7%",kbb:"31.7%"}, vsR:{ip:"26.2",era:"1.01",fip:"1.67",xfip:"2.97",whip:"0.64",avg:".151",obp:".177",slg:".204",woba:".171",kpct:"31.3%",bbpct:"3.1%",kbb:"28.1%"}}},
    { name:"Robert Suarez", role:"RP", throws:"R", dob:"1991-03-01", draftYear:2021, draftRound:null, draftPick:null, draftType:"IFA", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.44", war:1.7, war2:0.8, xfip:"3.43", siera:"3.38", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"53.2%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.73",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.97",xfip:"3.01",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".243",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", throws:"R", dob:"2005-06-17", draftYear:2022, draftRound:null, draftPick:null, draftType:"IFA", era:"2.50", ip:"39.2", sv:1, kpct:"28.2%", bbpct:"7.7%", whip:"1.134", fip:"2.17", war:1.3, war2:1.2, xfip:"3.26", siera:"3.08", batSpeed:71.8, fastSwing:"23.8%", swstr:"12.2%", cstr:"15.0%", csw:"27.2%", laSwSp:"29.6%", idealAttack:"39.7%", splits:{vsL:{ip:"21.0",era:"3.00",fip:"1.96",xfip:"2.65",whip:"1.14",avg:".231",obp:".287",slg:".321",woba:".271",kpct:"33.3%",bbpct:"6.9%",kbb:"26.4%"}, vsR:{ip:"16.1",era:"2.20",fip:"2.55",xfip:"4.05",whip:"1.29",avg:".246",obp:".319",slg:".279",woba:".275",kpct:"21.7%",bbpct:"8.7%",kbb:"13.0%"}}},
    { name:"Dylan Dodd", role:"RP", throws:"L", dob:"1998-06-06", draftYear:2021, draftRound:3, draftPick:96, draftType:"MLB", era:"2.22", ip:"28.1", sv:1, kpct:"27.0%", bbpct:"9.0%", whip:"0.847", fip:"3.25", war:0.8, war2:0.3, xfip:"3.88", siera:"3.50", batSpeed:72.7, fastSwing:"32.0%", swstr:"12.6%", cstr:"11.7%", csw:"24.3%", laSwSp:"35.9%", idealAttack:"56.5%", splits:{vsL:{ip:"11.1",era:"2.38",fip:"4.51",xfip:"4.11",whip:"1.06",avg:".150",obp:".261",slg:".325",woba:".256",kpct:"30.4%",bbpct:"13.0%",kbb:"17.4%"}, vsR:{ip:"15.0",era:"2.40",fip:"2.83",xfip:"3.71",whip:"0.67",avg:".140",obp:".189",slg:".240",woba:".193",kpct:"24.1%",bbpct:"5.6%",kbb:"18.5%"}}},
    { name:"Tyler Kinley", role:"RP", throws:"R", dob:"1991-01-31", draftYear:2013, draftRound:16, draftPick:472, draftType:"MLB", era:"4.11", ip:"35.0", sv:0, kpct:"25.0%", bbpct:"9.7%", whip:"1.265", fip:"4.93", war:0.2, war2:-0.1, xfip:"4.36", siera:"3.84", batSpeed:70.6, fastSwing:"15.2%", swstr:"12.5%", cstr:"18.1%", csw:"30.6%", laSwSp:"30.7%", idealAttack:"55.6%", splits:{vsL:{ip:"18.1",era:"6.38",fip:"6.32",xfip:"3.99",whip:"1.09",avg:".200",obp:".278",slg:".508",woba:".330",kpct:"27.8%",bbpct:"9.7%",kbb:"18.1%"}, vsR:{ip:"15.1",era:"0.00",fip:"2.51",xfip:"4.41",whip:"1.30",avg:".241",obp:".323",slg:".276",woba:".279",kpct:"23.1%",bbpct:"9.2%",kbb:"13.8%"}}},
    { name:"James Karinchak", role:"RP", throws:"R", dob:"1995-09-22", draftYear:2017, draftRound:9, draftPick:282, draftType:"MLB", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.34", war:0.3, war2:0.0, xfip:"5.38", siera:"4.93", batSpeed:71.9, fastSwing:"25.5%", swstr:"8.6%", cstr:"19.8%", csw:"28.4%", laSwSp:"20.8%", idealAttack:"61.8%", splits:{vsL:{ip:"3.1",era:"2.70",fip:"7.00",xfip:"5.40",whip:"1.50",avg:".250",obp:".357",slg:".583",woba:".399",kpct:"21.4%",bbpct:"14.3%",kbb:"7.1%"}, vsR:{ip:"6.1",era:"1.42",fip:"2.94",xfip:"5.36",whip:"0.63",avg:".053",obp:".174",slg:".053",woba:".130",kpct:"21.7%",bbpct:"13.0%",kbb:"8.7%"}}},
    { name:"Danny Young", role:"RP", throws:"L", dob:"1994-05-27", draftYear:2015, draftRound:8, draftPick:242, draftType:"MLB", era:"3.18", ip:"5.2", sv:0, kpct:"23.5%", bbpct:"17.6%", whip:"1.588", fip:"6.63", war:0.1, war2:-0.1, xfip:"5.27", siera:"5.01", batSpeed:73.2, fastSwing:"26.7%", swstr:"9.7%", cstr:"19.4%", csw:"29.1", laSwSp:"40.0%", idealAttack:"40.0%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"12.10",xfip:"7.06",whip:"3.00",avg:".429",obp:".556",slg:"1.000",woba:".621",kpct:"22.2%",bbpct:"22.2%",kbb:"0.0%"}, vsR:{ip:"2.1",era:"0.00",fip:"2.67",xfip:"3.99",whip:"0.43",avg:".000",obp:".125",slg:".000",woba:".087",kpct:"25.0%",bbpct:"12.5%",kbb:"12.5%"}}},
    { name:"Víctor Mederos", role:"RP", throws:"R", dob:"2001-06-08", draftYear:2022, draftRound:6, draftPick:178, draftType:"MLB", era:"0.96", ip:"9.1", sv:1, kpct:"24.0%", bbpct:"4.0%", whip:"0.750", fip:"2.25", war:0.4, war2:0.1, xfip:"4.01", siera:"3.32", batSpeed:72.0, fastSwing:"25.9%", swstr:"12.1%", cstr:"14.4%", csw:"26.5%", laSwSp:"20.0%", idealAttack:"50.0%", splits:{vsL:{ip:"2.2",era:"3.38",fip:"2.35",xfip:"5.23",whip:"0.75",avg:".222",obp:".222",slg:".222",woba:".198",kpct:"11.1%",bbpct:"0.0%",kbb:"11.1%"}, vsR:{ip:"4.1",era:"0.00",fip:"1.48",xfip:"3.25",whip:"0.69",avg:".133",obp:".188",slg:".200",woba:".178",kpct:"33.3%",bbpct:"6.7%",kbb:"26.7%"}}},
    { name:"Carlos Carrasco", role:"RP", throws:null, dob:null, draftYear:null, draftRound:null, draftPick:null, draftType:null, era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.50", war:-0.2, war2:-0.2, xfip:"4.72", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"62.8%", splits:{vsL:{ip:"10.1",era:"6.10",fip:"4.65",xfip:"4.87",whip:"1.45",avg:".317",obp:".364",slg:".415",woba:".346",kpct:"6.7%",bbpct:"4.4%",kbb:"2.2%"}, vsR:{ip:"6.1",era:"5.68",fip:"6.89",xfip:"4.48",whip:"1.42",avg:".320",obp:".370",slg:".600",woba:".416",kpct:"14.3%",bbpct:"3.6%",kbb:"10.7%"}}},
    { name:"Ian Hamilton", role:"RP", throws:null, dob:null, draftYear:null, draftRound:null, draftPick:null, draftType:null, era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.31", war:-0.1, war2:0.0, xfip:"3.97", siera:"3.96", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"41.2%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.70",xfip:"4.62",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".500",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.10",xfip:"3.61",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".244",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:58,l:42,pct:".580",gb:"—", home:"30-20",away:"28-22", rs:495, ra:391, diff:+104, strk:"L1", l10:"6-4", highlight:true,  srs:1.0 },
     { team:"PHI", full:"Philadelphia Phillies", w:56,l:46,pct:".549",gb:"3.0", home:"27-24",away:"29-22", rs:443, ra:454, diff:-11, strk:"L1", l10:"5-5", highlight:false, srs:-0.1 },
     { team:"MIA", full:"Miami Marlins",        w:52,l:50,pct:".510",gb:"7.0", home:"31-20",away:"21-30", rs:455, ra:441, diff:+14, strk:"L8", l10:"2-8", highlight:false, srs:0.2 },
     { team:"WSN", full:"Washington Nationals", w:51,l:51,pct:".500",gb:"8.0", home:"20-31",away:"31-20", rs:559, ra:541, diff:+18, strk:"L1", l10:"4-6", highlight:false, srs:0.3 },
     { team:"NYM", full:"New York Mets",        w:43,l:59,pct:".422",gb:"16.0", home:"21-28",away:"22-31", rs:416, ra:479, diff:-63, strk:"W1", l10:"5-5", highlight:false, srs:-0.6 },
   ];
   
export const statcastHitters = [
  // Updated July 22, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard — pull next update); Acuña below Savant qualifier — all fields held
  // Hidden players (Kim, León, Tromp, S. Murphy, Tellez) — all fields held per hiding protocol
  { name:"Michael Harris II", ev:"91.4",hardHit:"50.5%",xwoba:".359",xba:".297",xslg:".507",barrel:"12.3%",chase:"45.1%",whiff:"25.4%",kpct:"19.7%",bbpct:"4.0%", gbpct:"43.5%",fbpct:"24.9%",ldpct:"25.6%",pupct:"6.0%",pullAir:"18.3%"},
  { name:"Matt Olson", ev:"92.6",hardHit:"50.5%",xwoba:".358",xba:".250",xslg:".509",barrel:"14.0%",chase:"27.3%",whiff:"24.6%",kpct:"24.1%",bbpct:"10.0%", gbpct:"36.9%",fbpct:"34.1%",ldpct:"20.9%",pupct:"8.0%",pullAir:"20.6%"},
  { name:"Dominic Smith", ev:"87.8",hardHit:"35.6%",xwoba:".313",xba:".256",xslg:".393",barrel:"5.9%",chase:"32.3%",whiff:"19.7%",kpct:"14.0%",bbpct:"7.4%", gbpct:"40.4%",fbpct:"28.7%",ldpct:"25.0%",pupct:"5.9%",pullAir:"17.6%"},
  { name:"Drake Baldwin", ev:"91.5",hardHit:"50.7%",xwoba:".387",xba:".283",xslg:".525",barrel:"15.4%",chase:"33.3%",whiff:"23.7%",kpct:"21.3%",bbpct:"10.5%", gbpct:"44.9%",fbpct:"24.2%",ldpct:"25.1%",pupct:"5.7%",pullAir:"12.6%"},
  { name:"Mauricio Dubón", ev:"86.4",hardHit:"30.7%",xwoba:".310",xba:".265",xslg:".386",barrel:"4.6%",chase:"37.5%",whiff:"16.7%",kpct:"14.5%",bbpct:"6.6%", gbpct:"41.2%",fbpct:"24.2%",ldpct:"25.5%",pupct:"9.2%",pullAir:"15.6%"},
  { name:"Jorge Mateo", ev:"90.4",hardHit:"47.7%",xwoba:".325",xba:".263",xslg:".445",barrel:"10.5%",chase:"41.6%",whiff:"30.5%",kpct:"30.4%",bbpct:"5.9%", gbpct:"38.4%",fbpct:"30.2%",ldpct:"27.9%",pupct:"3.5%",pullAir:"22.1%"},
  { name:"Austin Riley", ev:"90.6",hardHit:"43.5%",xwoba:".302",xba:".211",xslg:".391",barrel:"11.4%",chase:"32.3%",whiff:"32.3%",kpct:"28.9%",bbpct:"8.1%", gbpct:"36.6%",fbpct:"32.5%",ldpct:"22.0%",pupct:"8.9%",pullAir:"17.4%"},
  { name:"Ozzie Albies", ev:"86.8",hardHit:"27.4%",xwoba:".286",xba:".237",xslg:".362",barrel:"4.2%",chase:"37.3%",whiff:"20.8%",kpct:"14.1%",bbpct:"6.7%", gbpct:"34.8%",fbpct:"32.4%",ldpct:"24.8%",pupct:"8.0%",pullAir:"26.6%"},
  { name:"Mike Yastrzemski", ev:"90.3",hardHit:"43.0%",xwoba:".303",xba:".228",xslg:".351",barrel:"6.4%",chase:"26.2%",whiff:"23.4%",kpct:"23.1%",bbpct:"10.2%", gbpct:"39.5%",fbpct:"30.8%",ldpct:"23.8%",pupct:"5.8%",pullAir:"21.2%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"86.9",hardHit:"32.6%",xwoba:".276",xba:".228",xslg:".333",barrel:"6.6%",chase:"29.9%",whiff:"28.7%",kpct:"23.3%",bbpct:"6.8%", gbpct:"54.3%",fbpct:"25.0%",ldpct:"18.5%",pupct:"2.2%",pullAir:"10.9%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.2",hardHit:"33.3%",xwoba:".292",xba:".203",xslg:".385",barrel:"9.1%",chase:"31.2%",whiff:"27.7%",kpct:"27.6%",bbpct:"4.8%", gbpct:"40.9%",fbpct:"36.4%",ldpct:"18.2%",pupct:"4.5%",pullAir:"23.4%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".506",xba:".339",xslg:".828",barrel:"28.6%",chase:"29.6%",whiff:"30.4%",kpct:"27.3%",bbpct:"9.1%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"88.0",hardHit:"38.5%",xwoba:".279",xba:".241",xslg:".343",barrel:"7.7%",chase:"29.6%",whiff:"16.5%",kpct:"19.2%",bbpct:"3.8%", gbpct:"59.0%",fbpct:"20.5%",ldpct:"15.4%",pupct:"5.1%",pullAir:"18.2%"},
  { name:"Brewer Hicklen", ev:"95.3",hardHit:"50.0%",xwoba:".311",xba:".230",xslg:".298",barrel:"0.0%",chase:"27.8%",whiff:"45.2%",kpct:"35.3%",bbpct:"17.6%", gbpct:"50.0%",fbpct:"12.5%",ldpct:"37.5%",pupct:"0.0%",pullAir:"12.5%"},
];

export const statcastPitchers = [
  // Updated July 22, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez, JR Ritchie, O. Murphy not on today's leaderboard (below Savant qualifier) — all fields held
  // Strider, Waldrep, Karinchak, Carrasco, Hamilton hidden — all fields held per hiding protocol
  // FLAG: Elieser Hernández still on today's leaderboard (51 BBE, EV 91.9, HH 52.9%, .385 xwOBA, .281 xBA, .572 xSLG, K% 12.5, BB% 7.8, Barrel 15.7%) — NOT added pending Kevin's confirmation
  { name:"Raisel Iglesias", ev:"87.5",hardHit:"34.8%",xwoba:".261",xba:".216",xslg:".337",kpct:"28.4%",bbpct:"5.2%", barrel:"6.8%", chase:"40.1%",whiff:"30.8%",gbpct:"37.1%",fbpct:"28.1%",ldpct:"24.7%",pupct:"10.1%", pullAir:"21.3%"},
  { name:"Dylan Lee", ev:"86.7",hardHit:"29.4%",xwoba:".215",xba:".179",xslg:".255",kpct:"33.7%",bbpct:"4.8%", barrel:"3.9%", chase:"37.3%",whiff:"38.8%",gbpct:"36.3%",fbpct:"28.4%",ldpct:"25.5%",pupct:"9.8%", pullAir:"25.5%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.9%",xwoba:".304",xba:".246",xslg:".391",kpct:"19.7%",bbpct:"7.2%", barrel:"6.0%", chase:"29.4%",whiff:"22.5%",gbpct:"43.5%",fbpct:"26.9%",ldpct:"23.3%",pupct:"6.3%", pullAir:"18.8%"},
  { name:"Chris Sale", ev:"87.3",hardHit:"32.7%",xwoba:".283",xba:".228",xslg:".342",kpct:"28.9%",bbpct:"5.9%", barrel:"5.9%", chase:"35.2%",whiff:"29.6%",gbpct:"44.2%",fbpct:"24.5%",ldpct:"25.3%",pupct:"5.9%", pullAir:"16.7%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.1",hardHit:"36.5%",xwoba:".272",xba:".222",xslg:".320",kpct:"28.0%",bbpct:"7.3%", barrel:"4.9%", chase:"30.4%",whiff:"26.8%",gbpct:"40.4%",fbpct:"26.0%",ldpct:"24.0%",pupct:"9.6%", pullAir:"9.6%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".359",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"11.4%"},
  { name:"Tyler Kinley", ev:"84.8",hardHit:"26.9%",xwoba:".270",xba:".191",xslg:".336",kpct:"25.0%",bbpct:"9.7%", barrel:"6.5%", chase:"25.2%",whiff:"29.2%",gbpct:"30.1%",fbpct:"33.3%",ldpct:"24.7%",pupct:"11.8%", pullAir:"34.1%"},
  { name:"Martín Pérez", ev:"88.0",hardHit:"36.3%",xwoba:".330",xba:".261",xslg:".407",kpct:"18.6%",bbpct:"9.6%", barrel:"6.8%", chase:"26.2%",whiff:"22.0%",gbpct:"47.7%",fbpct:"21.9%",ldpct:"25.7%",pupct:"4.6%", pullAir:"22.4%"},
  { name:"Grant Holmes", ev:"90.8",hardHit:"42.8%",xwoba:".329",xba:".247",xslg:".413",kpct:"19.5%",bbpct:"10.3%", barrel:"8.3%", chase:"31.4%",whiff:"26.9%",gbpct:"41.4%",fbpct:"27.0%",ldpct:"25.2%",pupct:"6.5%", pullAir:"20.1%"},
  { name:"Reynaldo López", ev:"87.5",hardHit:"35.8%",xwoba:".338",xba:".262",xslg:".436",kpct:"21.2%",bbpct:"9.9%", barrel:"7.8%", chase:"27.6%",whiff:"22.6%",gbpct:"38.3%",fbpct:"26.4%",ldpct:"27.5%",pupct:"7.8%", pullAir:"20.7%"},
  { name:"JR Ritchie", ev:"89.4",hardHit:"38.0%",xwoba:".337",xba:".235",xslg:".402",kpct:"20.8%",bbpct:"14.0%", barrel:"8.7%", chase:"25.8%",whiff:"23.7%",gbpct:"45.4%",fbpct:"27.7%",ldpct:"21.3%",pupct:"5.7%", pullAir:"19.3%"},
  { name:"Dylan Dodd", ev:"89.7",hardHit:"39.7%",xwoba:".266",xba:".207",xslg:".335",kpct:"28.7%",bbpct:"8.3%", barrel:"7.4%", chase:"31.3%",whiff:"29.3%",gbpct:"29.4%",fbpct:"26.5%",ldpct:"25.0%",pupct:"19.1%", pullAir:"36.8%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"12.5%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.2%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"96.1",hardHit:"62.5%",xwoba:".375",xba:".220",xslg:".461",kpct:"16.0%",bbpct:"16.0%", barrel:"18.8%", chase:"22.6%",whiff:"27.0%",gbpct:"68.8%",fbpct:"25.0%",ldpct:"6.3%",pupct:"0.0%", pullAir:"7.7%"},
  { name:"Owen Murphy", ev:"94.1",hardHit:"55.0%",xwoba:".353",xba:".280",xslg:".451",kpct:"20.7%",bbpct:"6.9%", barrel:"10.0%", chase:"38.0%",whiff:"17.1%",gbpct:"20.0%",fbpct:"25.0%",ldpct:"45.0%",pupct:"10.0%", pullAir:"30.0%"},
  { name:"Víctor Mederos", ev:"88.0",hardHit:"36.0%",xwoba:".259",xba:".219",xslg:".320",kpct:"20.6%",bbpct:"5.9%", barrel:"0.0%", chase:"32.9%",whiff:"30.3%",gbpct:"40.0%",fbpct:"28.0%",ldpct:"16.0%",pupct:"16.0%", pullAir:"16.7%"},
];
   
   export const hitterWarProgress = [
     { week:"G6",  "Olson":0.5,"Albies":0.3,"Baldwin":0.2,"Harris":0.1,"Dubón":0.1,"Acuña":0.0,"Smith":0.0,"Mateo":0.0,"Riley":0.0,"White":0.0,"Yaz":0.0,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G12", "Olson":1.0,"Albies":0.8,"Baldwin":0.6,"Harris":0.4,"Dubón":0.3,"Acuña":0.0,"Smith":0.1,"Mateo":0.0,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G18", "Olson":1.4,"Albies":1.0,"Baldwin":0.9,"Harris":0.7,"Dubón":0.4,"Acuña":0.1,"Smith":0.2,"Mateo":0.1,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G24", "Olson":1.7,"Albies":1.4,"Baldwin":1.2,"Harris":0.9,"Dubón":0.6,"Acuña":0.2,"Smith":0.3,"Mateo":0.2,"Riley":0.2,"White":0.0,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G30", "Olson":2.0,"Albies":1.6,"Baldwin":1.4,"Harris":1.1,"Dubón":0.7,"Acuña":0.3,"Smith":0.4,"Mateo":0.3,"Riley":0.2,"White":-0.1,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G36", "Olson":2.1,"Albies":1.7,"Baldwin":1.6,"Harris":1.2,"Dubón":0.8,"Acuña":0.5,"Smith":0.5,"Mateo":0.4,"Riley":0.2,"White":-0.2,"Yaz":-0.3,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":-0.1,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G42", "Olson":2.4,"Albies":1.5,"Baldwin":1.8,"Harris":1.2,"Dubón":1.0,"Acuña":0.6,"Smith":0.6,"Mateo":0.6,"Riley":0.3,"White":-0.1,"Yaz":0.1,"León":0.0,"Kim":0.1,"Tromp":0.0,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G54", "Olson":2.2,"Albies":1.4,"Baldwin":2.3,"Harris":1.5,"Dubón":0.9,"Acuña":0.5,"Smith":0.6,"Mateo":0.6,"Riley":0.5,"White":-0.1,"Yaz":0.3,"León":-0.2,"Kim":-0.6,"Tromp":0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G60", "Olson":2.2,"Albies":1.5,"Baldwin":2.2,"Harris":1.9,"Dubón":1.0,"Acuña":1.0,"Smith":0.6,"Mateo":0.9,"Riley":0.3,"White":-0.1,"Yaz":0.6,"León":-0.3,"Kim":-0.8,"Tromp":-0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G66", "Olson":2.3,"Albies":1.7,"Baldwin":2.2,"Harris":2.1,"Dubón":1.5,"Acuña":1.0,"Smith":0.5,"Mateo":0.8,"Riley":0.2,"White":-0.1,"Yaz":0.5,"León":-0.4,"Kim":-0.9,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G81", "Olson":2.5,"Albies":1.7,"Baldwin":1.5,"Harris":2.2,"Dubón":1.7,"Acuña":0.9,"Smith":0.0,"Mateo":0.7,"Riley":0.1,"White":0.2,"Yaz":0.0,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0 },
     { week:"G90", "Olson":2.9,"Albies":1.8,"Baldwin":1.4,"Harris":2.6,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.7,"Riley":0.0,"White":0.4,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":-0.1,"Hicklen":0.0 },
     { week:"All-Star", "Olson":2.8,"Albies":1.7,"Baldwin":1.4,"Harris":2.5,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.5,"Riley":0.1,"White":0.4,"Yaz":0.4,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.2,"Hicklen":0.0 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G81", "Elder":1.4,"Sale":2.4,"Lee":1.3,"Iglesias":0.9,"Suarez":0.8,"Fuentes":0.9,"Pérez":0.9,"Holmes":0.0,"Kinley":0.1,"López":0.2,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.1,"Karinchak":0.1,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"G90", "Elder":1.5,"Sale":2.6,"Lee":1.5,"Iglesias":0.9,"Suarez":0.8,"Fuentes":1.0,"Pérez":0.6,"Holmes":0.0,"Kinley":0.0,"López":0.5,"Strider":0.1,"Ritchie":-0.1,"Dodd":0.3,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0 },
     { week:"All-Star", "Sale":2.7,"Lee":1.7,"Fuentes":1.2,"Elder":1.1,"Iglesias":1.0,"Suarez":0.8,"Pérez":0.6,"López":0.5,"Dodd":0.3,"Holmes":0.2,"Mederos":0.1,"Kinley":0.0,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.1,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.1 },
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
