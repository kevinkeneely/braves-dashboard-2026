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
 
   export const lastUpdated = "August 3, 2026";
 
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
      //   - Lane Thomas
   
      STARTERS (9):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Reynaldo López
      //   - Martín Pérez
      //   - Grant Holmes
      //   - AJ Smith-Shawver
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
     { date:"Wed, Jul 22", opp:"Padres",    home:true, result:"W", score:"7-6", record:"59-42"},
     { date:"Thu, Jul 23", opp:"Padres",    home:true, result:"W", score:"6-5", record:"60-42"},
     { date:"Fri, Jul 24", opp:"Orioles",    home:false, result:"W", score:"7-6", record:"61-42"},
     { date:"Sat, Jul 25", opp:"Orioles",    home:false, result:"L", score:"2-3", record:"61-43"},
     { date:"Sun, Jul 26", opp:"Orioles",    home:false, result:"W", score:"3-2 F/11", record:"62-43"},
     { date:"Mon, Jul 27", opp:"Mets",    home:false, result:"L", score:"3-14", record:"62-44"},
     { date:"Wed, Jul 29", opp:"Mets/GM 1",    home:false, result:"L", score:"2-3", record:"62-45"},
     { date:"Wed, Jul 29", opp:"Mets/GM 2",    home:false, result:"W", score:"1-0", record:"63-45"},
     { date:"Thu, Jul 30", opp:"Nationals",    home:true, result:"W", score:"5-4", record:"64-45"},
     { date:"Fri, Jul 31", opp:"Nationals",    home:true, result:"W", score:"6-2", record:"65-45"},
      // August
     { date:"Sat, Aug 1", opp:"Nationals",    home:true, result:"W", score:"8-3", record:"66-45"},
     { date:"Sun, Aug 2", opp:"Nationals",    home:true, result:"W", score:"4-2", record:"67-45"},
      // Upcoming
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
     { date:"Tue, Aug 25", opp:"Dodgers",    home:true,},
     { date:"Wed, Aug 26", opp:"Dodgers",    home:true,},
     { date:"Thu, Aug 27", opp:"Dodgers",    home:true,},
     { date:"Fri, Aug 28", opp:"Rockies",    home:true,},
     { date:"Sat, Aug 29", opp:"Rockies",    home:true,},
     { date:"Sun, Aug 30", opp:"Rockies",    home:true,},
     { date:"Mon, Aug 31", opp:"Giants",    home:true,},
      // September
     { date:"Tue, Sep 1", opp:"Nationals",    home:false,},
     { date:"Wed, Sep 2", opp:"Nationals",    home:false,},
     { date:"Fri, Sep 4", opp:"Phillies",    home:false,},
     { date:"Sat, Sep 5", opp:"Phillies",    home:false,},
     { date:"Sun, Sep 6", opp:"Phillies",    home:false,},
     { date:"Mon, Sep 7", opp:"Phillies",    home:false,},
     { date:"Tue, Sep 8", opp:"Rays",    home:true,},
     { date:"Wed, Sep 9", opp:"Rays",    home:true,},
     { date:"Thu, Sep 10", opp:"Rays",    home:true,},
     { date:"Fri, Sep 11", opp:"Phillies",    home:true,},
     { date:"Sat, Sep 12", opp:"Phillies",    home:true,},
     { date:"Sun, Sep 13", opp:"Phillies",    home:true,},
     { date:"Mon, Sep 14", opp:"Cubs",    home:false,},
     { date:"Tue, Sep 15", opp:"Cubs",    home:false,},
     { date:"Wed, Sep 16", opp:"Cubs",    home:false,},
     { date:"Fri, Sep 18", opp:"Astros",    home:false,},
     { date:"Sat, Sep 19", opp:"Astros",    home:false,},
     { date:"Sun, Sep 20", opp:"Astros",    home:false,},
     { date:"Tue, Sep 22", opp:"Reds",    home:true,},
     { date:"Wed, Sep 23", opp:"Reds",    home:true,},
     { date:"Thu, Sep 24", opp:"Reds",    home:true,},
     { date:"Fri, Sep 25", opp:"Marlins",    home:false,},
     { date:"Sat, Sep 26", opp:"Marlins",    home:false,},
     { date:"Sun, Sep 27", opp:"Marlins",    home:false,},
      // End of Season
   ];
   
   export const TEAM_HEADER = {
     record: "67-45",
     runs: 549,
     era: "3.67",
     avg: ".249",
     obp: ".315",
     slg: ".418",
     ops: ".733",
     wrc: 101,
     iso: ".169",
     battingK: "21.2%",
     battingBB: "8.0%",
     woba: ".320",
     xwoba: ".320",
     fip: "4.14",
     xera: "4.00",
     xfip: "4.11",
     whip: "1.24",
     gb: "41.6%",
     siera: "4.02",
     pitchingK: "23.0%",
     pitchingBB: "9.2%",
     pitchingKBB: "13.8%",
     swstr: "11.4%",
     cstr: "16.0%",
     csw: "27.4%",
     fastSwing: "27.1%",
     sqUpSw: "24.3%",
     blastSw: "10.3%",
     idealAtk: "50.0%",
     batFastSwing: "32.1%",
     batSqUpSw: "24.3%",
     batBlastSw: "11.0%",
     batIdealAtk: "49.6%",
     batSwStr: "11.0%",
     batCStr: "14.8%",
     batCSW: "25.8%",
     batChase: "33.5%",
     batWhiff: "24.6%",
     chase: "30.3%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.2",
// Plate Discipline additions
     batZoneSwing: "68.6",
     batZoneContact: "84.0%",
     batChaseContact: "60.0%",
     zoneSwing: "67.0%",
     zoneContact: "83.7%",
     chaseContact: "53.9%",
// Statcast (hitters)
     batBarrel: "8.9%",
     batHardHit: "39.9%",
     batExitVelo: "89.2",
     batXBA: ".246",
     batXSLG: ".417",
     batXwOBAcon: ".370",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "7.5%",
     hardHit: "38.2%",
     exitVelo: "88.9",
     xBA: ".237",
     xSLG: ".385",
     pXwOBA: ".309",
     xwOBAcon: ".358",
 };
   
export const hitters = [
    // Updated July 29, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, ABS, risp, highLeverage, twoOuts)
    // FLAG: Joey Bart persistent PA mismatch (top-level 105, vsL+vsR = 43) — not auto-corrected
    { name:"Ronald Acuña Jr.", pos:"RF", bats:"R", throws:"R", dob:"1997-12-18", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", pa:266, avg:".240", obp:".361", slg:".416", ops:".777", hr:9, rbi:24, r:36, h:53, doubles:10, triples:1, sb:15, bbpct:"14.5%", kpct:"22.5%", war:0.7, war2:0.8, wrc:117, woba:".345", xwoba:".376", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"20.9%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.3%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:84,r:13,h:13,hr:1,rbi:1,avg:".186",obp:".321",slg:".314",ops:".636",wrc:80,woba:".289",iso:".129",bbpct:"15.5%",kpct:"29.8%",babip:".273"}, vsR:{pa:156,r:19,h:37,hr:6,rbi:21,avg:".287",obp:".397",slg:".473",ops:".870",wrc:140,woba:".380",iso:".186",bbpct:"14.1%",kpct:"18.6%",babip:".323"}, risp:{pa:41,r:23,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:128,woba:".361",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:4,avg:".222",obp:".500",slg:".222",ops:".722",wrc:139,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}, twoOuts:{pa:71,r:5,h:12,hr:1,rbi:5,avg:".214",obp:".380",slg:".375",ops:".755",wrc:114,woba:".340",iso:".161",bbpct:"19.7%",kpct:"21.1%",babip:".275"}}},
    { name:"Drake Baldwin", pos:"C", bats:"L", throws:"R", dob:"2001-03-28", draftYear:2022, draftRound:3, draftPick:96, draftType:"MLB", pa:397, avg:".272", obp:".365", slg:".467", ops:".832", hr:20, rbi:57, r:61, h:94, doubles:7, triples:0, sb:2, bbpct:"10.9%", kpct:"20.9%", war:2.5, war2:2.3, wrc:134, woba:".366", xwoba:".384", oaa:null, frv:-2, batSpeed:74.9, squaredUp:"25.0%", fastSwing:"51.9%", laSwSp:"37.3%", idealAttack:"45.9%", avgPop:1.93, armValue:null, armStrength:79.8, abs:{netOvr:1.4, netRuns:0.5, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.6%", xChalRate:"4.1%", rateVsExp:"-3.5%"}, absCatch:{netOvr:11.6, netRuns:0.4, chal:43, won:30, lost:13, wonPct:"70%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:148,r:20,h:33,hr:7,rbi:17,avg:".250",obp:".331",slg:".424",ops:".755",wrc:109,woba:".334",iso:".174",bbpct:"8.8%",kpct:"21.6%",babip:".280"}, vsR:{pa:223,r:38,h:56,hr:13,rbi:39,avg:".295",obp:".395",slg:".521",ops:".916",wrc:150,woba:".395",iso:".226",bbpct:"12.6%",kpct:"21.1%",babip:".328"}, risp:{pa:93,r:34,h:24,hr:2,rbi:37,avg:".329",obp:".462",slg:".479",ops:".942",wrc:161,woba:".412",iso:".151",bbpct:"17.2%",kpct:"14.0%",babip:".373"}, highLeverage:{pa:26,r:14,h:6,hr:0,rbi:8,avg:".250",obp:".308",slg:".292",ops:".599",wrc:69,woba:".273",iso:".042",bbpct:"7.7%",kpct:"15.4%",babip:".300"}, twoOuts:{pa:111,r:16,h:29,hr:3,rbi:15,avg:".293",obp:".369",slg:".394",ops:".763",wrc:113,woba:".339",iso:".101",bbpct:"10.8%",kpct:"19.8%",babip:".351"}}},
    { name:"Matt Olson", pos:"1B", bats:"L", throws:"R", dob:"1994-03-29", draftYear:2012, draftRound:1, draftPick:47, draftType:"MLB", pa:491, avg:".266", obp:".342", slg:".541", ops:".883", hr:31, rbi:69, r:78, h:116, doubles:27, triples:0, sb:2, bbpct:"10.3%", kpct:"24.8%", war:3.8, war2:3.3, wrc:131, woba:".372", xwoba:".359", oaa:4, frv:4, batSpeed:74.9, squaredUp:"23.1%", fastSwing:"51.2%", laSwSp:"30.9%", idealAttack:"51.7%", armValue:null, armStrength:82.6, abs:{netOvr:-0.2, netRuns:-0.2, chal:14, won:4, lost:10, wonPct:"29%", chalRate:"4.9%", xChalRate:"3.3%", rateVsExp:"+1.7%"}, splits:{vsL:{pa:201,r:27,h:48,hr:9,rbi:22,avg:".264",obp:".328",slg:".473",ops:".801",wrc:118,woba:".347",iso:".209",bbpct:"8.0%",kpct:"24.9%",babip:".315"}, vsR:{pa:266,r:45,h:61,hr:18,rbi:41,avg:".264",obp:".353",slg:".563",ops:".916",wrc:144,woba:".386",iso:".299",bbpct:"12.4%",kpct:"24.1%",babip:".285"}, risp:{pa:115,r:46,h:18,hr:4,rbi:32,avg:".198",obp:".339",slg:".396",ops:".735",wrc:98,woba:".316",iso:".198",bbpct:"18.3%",kpct:"23.5%",babip:".222"}, highLeverage:{pa:42,r:20,h:9,hr:4,rbi:11,avg:".257",obp:".357",slg:".600",ops:".957",wrc:144,woba:".385",iso:".343",bbpct:"14.3%",kpct:"31.0%",babip:".263"}, twoOuts:{pa:169,r:33,h:37,hr:10,rbi:25,avg:".252",obp:".349",slg:".503",ops:".853",wrc:129,woba:".363",iso:".252",bbpct:"11.8%",kpct:"23.7%",babip:".278"}}},
    { name:"Ozzie Albies", pos:"2B", bats:"S", throws:"R", dob:"1997-01-07", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:484, avg:".263", obp:".312", slg:".435", ops:".747", hr:18, rbi:62, r:69, h:115, doubles:21, triples:0, sb:2, bbpct:"6.4%", kpct:"14.6%", war:2.1, war2:1.6, wrc:102, woba:".322", xwoba:".286", oaa:3, frv:1, batSpeed:69.0, squaredUp:"27.2%", fastSwing:"5.7%", laSwSp:"33.8%", idealAttack:"57.6%", armValue:null, armStrength:71.6, abs:{netOvr:-0.2, netRuns:0.4, chal:9, won:4, lost:5, wonPct:"44%", chalRate:"5.8%", xChalRate:"5.7%", rateVsExp:"+0.1%"}, splits:{vsL:{pa:191,r:20,h:53,hr:8,rbi:27,avg:".296",obp:".314",slg:".503",ops:".817",wrc:116,woba:".344",iso:".207",bbpct:"2.6%",kpct:"7.3%",babip:".278"}, vsR:{pa:271,r:48,h:56,hr:10,rbi:33,avg:".236",obp:".310",slg:".397",ops:".707",wrc:93,woba:".310",iso:".160",bbpct:"9.2%",kpct:"19.9%",babip:".257"}, risp:{pa:111,r:46,h:28,hr:3,rbi:41,avg:".308",obp:".333",slg:".451",ops:".784",wrc:102,woba:".322",iso:".143",bbpct:"7.2%",kpct:"13.5%",babip:".298"}, highLeverage:{pa:40,r:22,h:9,hr:3,rbi:11,avg:".257",obp:".325",slg:".571",ops:".896",wrc:137,woba:".376",iso:".314",bbpct:"7.5%",kpct:"17.5%",babip:".231"}, twoOuts:{pa:151,r:26,h:33,hr:3,rbi:17,avg:".228",obp:".258",slg:".331",ops:".589",wrc:60,woba:".260",iso:".103",bbpct:"2.6%",kpct:"15.9%",babip:".254"}}},
    { name:"Michael Harris II", pos:"CF", bats:"L", throws:"L", dob:"2001-03-07", draftYear:2019, draftRound:3, draftPick:98, draftType:"MLB", pa:425, avg:".287", obp:".315", slg:".488", ops:".803", hr:20, rbi:64, r:54, h:116, doubles:21, triples:0, sb:6, bbpct:"3.8%", kpct:"19.4%", war:3.6, war2:2.9, wrc:119, woba:".348", xwoba:".353", oaa:9, frv:8, batSpeed:74.9, squaredUp:"24.0%", fastSwing:"50.2%", laSwSp:"28.9%", idealAttack:"47.6%", armValue:null, armStrength:84.4, abs:{netOvr:-3.2, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"5.6%", xChalRate:"3.1%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:153,r:17,h:41,hr:6,rbi:19,avg:".287",obp:".327",slg:".469",ops:".795",wrc:116,woba:".344",iso:".182",bbpct:"4.6%",kpct:"18.3%",babip:".318"}, vsR:{pa:249,r:36,h:73,hr:13,rbi:42,avg:".305",obp:".325",slg:".523",ops:".848",wrc:129,woba:".362",iso:".218",bbpct:"3.2%",kpct:"20.5%",babip:".339"}, risp:{pa:81,r:30,h:21,hr:0,rbi:32,avg:".292",obp:".333",slg:".403",ops:".736",wrc:100,woba:".319",iso:".111",bbpct:"4.9%",kpct:"13.6%",babip:".328"}, highLeverage:{pa:38,r:11,h:8,hr:1,rbi:12,avg:".250",obp:".316",slg:".469",ops:".785",wrc:108,woba:".332",iso:".219",bbpct:"5.3%",kpct:"23.7%",babip:".292"}, twoOuts:{pa:117,r:17,h:32,hr:4,rbi:19,avg:".296",obp:".350",slg:".463",ops:".813",wrc:124,woba:".355",iso:".167",bbpct:"6.8%",kpct:"17.1%",babip:".333"}}},
    { name:"Mauricio Dubón", pos:"LF", bats:"R", throws:"R", dob:"1994-07-19", draftYear:2013, draftRound:26, draftPick:773, draftType:"MLB", pa:434, avg:".260", obp:".309", slg:".398", ops:".707", hr:10, rbi:55, r:51, h:105, doubles:21, triples:2, sb:4, bbpct:"6.2%", kpct:"13.6%", war:2.4, war2:1.7, wrc:94, woba:".310", xwoba:".310", oaa:5, frv:5, batSpeed:69.1, squaredUp:"28.0%", fastSwing:"3.5%", laSwSp:"35.9%", idealAttack:"38.6%", armValue:null, armStrength:88.3, abs:{netOvr:-5.2, netRuns:-1.2, chal:11, won:3, lost:8, wonPct:"27%", chalRate:"5.5%", xChalRate:"3.9%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:156,r:16,h:34,hr:4,rbi:22,avg:".236",obp:".284",slg:".396",ops:".680",wrc:84,woba:".296",iso:".160",bbpct:"5.8%",kpct:"12.2%",babip:".246"}, vsR:{pa:263,r:32,h:66,hr:6,rbi:33,avg:".274",obp:".327",slg:".407",ops:".734",wrc:102,woba:".323",iso:".133",bbpct:"6.8%",kpct:"14.8%",babip:".306"}, risp:{pa:97,r:36,h:29,hr:3,rbi:46,avg:".326",obp:".358",slg:".517",ops:".875",wrc:137,woba:".375",iso:".191",bbpct:"5.2%",kpct:"9.3%",babip:".333"}, highLeverage:{pa:41,r:11,h:14,hr:1,rbi:24,avg:".378",obp:".415",slg:".595",ops:"1.009",wrc:172,woba:".427",iso:".216",bbpct:"7.3%",kpct:"7.3%",babip:".382"}, twoOuts:{pa:132,r:19,h:28,hr:2,rbi:27,avg:".228",obp:".280",slg:".350",ops:".630",wrc:73,woba:".279",iso:".122",bbpct:"6.8%",kpct:"11.4%",babip:".245"}}},
    { name:"Austin Riley", pos:"3B", bats:"R", throws:"R", dob:"1997-04-02", draftYear:2015, draftRound:1, draftPick:41, draftType:"MLB", pa:449, avg:".216", obp:".294", slg:".351", ops:".645", hr:12, rbi:52, r:44, h:87, doubles:16, triples:1, sb:7, bbpct:"7.8%", kpct:"30.7%", war:0.5, war2:0.4, wrc:79, woba:".288", xwoba:".293", oaa:-1, frv:-1, batSpeed:75.8, squaredUp:"19.7%", fastSwing:"58.7%", laSwSp:"31.1%", idealAttack:"46.0%", armValue:null, armStrength:83.6, abs:{netOvr:-1.8, netRuns:-0.3, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"2.1%", xChalRate:"5.4%", rateVsExp:"-3.3%"}, splits:{vsL:{pa:142,r:12,h:28,hr:1,rbi:14,avg:".224",obp:".310",slg:".304",ops:".614",wrc:74,woba:".280",iso:".080",bbpct:"9.9%",kpct:"30.3%",babip:".329"}, vsR:{pa:288,r:31,h:55,hr:11,rbi:36,avg:".212",obp:".285",slg:".373",ops:".658",wrc:81,woba:".291",iso:".162",bbpct:"6.9%",kpct:"29.9%",babip:".268"}, risp:{pa:116,r:34,h:28,hr:5,rbi:43,avg:".262",obp:".302",slg:".467",ops:".769",wrc:106,woba:".329",iso:".206",bbpct:"5.2%",kpct:"33.6%",babip:".354"}, highLeverage:{pa:45,r:5,h:8,hr:1,rbi:15,avg:".195",obp:".222",slg:".317",ops:".539",wrc:41,woba:".231",iso:".122",bbpct:"4.4%",kpct:"26.7%",babip:".233"}, twoOuts:{pa:142,r:15,h:25,hr:3,rbi:18,avg:".195",obp:".275",slg:".313",ops:".587",wrc:64,woba:".266",iso:".117",bbpct:"7.7%",kpct:"31.7%",babip:".275"}}},
    { name:"Lane Thomas", pos:"DH", bats:"R", throws:"R", dob:"1995-08-23", draftYear:2014, draftRound:5, draftPick:147, draftType:"MLB", pa:328, avg:".232", obp:".326", slg:".393", ops:".719", hr:10, rbi:37, r:31, h:66, doubles:16, triples:0, sb:7, bbpct:"11.9%", kpct:"23.8%", war:0.3, war2:0.8, wrc:101, woba:".320", xwoba:".318", oaa:-7, frv:-4, batSpeed:72.5, squaredUp:"25.9%", fastSwing:"24.3%", laSwSp:"36.8%", idealAttack:"60.7%", armValue:3, armStrength:92.2, abs:{netOvr:0, netRuns:0, chal:0, won:0, lost:0, wonPct:"0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:135,r:14,h:30,hr:4,rbi:14,avg:".263",obp:".370",slg:".430",ops:".800",wrc:125,woba:".354",iso:".167",bbpct:"14.8%",kpct:"21.5%",babip:".317"}, vsR:{pa:193,r:17,h:36,hr:6,rbi:23,avg:".211",obp:".295",slg:".368",ops:".664",wrc:84,woba:".295",iso:".158",bbpct:"9.8%",kpct:"25.4%",babip:".256"}, risp:{pa:84,r:2,h:15,hr:2,rbi:25,avg:".227",obp:".369",slg:".379",ops:".748",wrc:113,woba:".337",iso:".152",bbpct:"17.9%",kpct:"25.0%",babip:".289"}, highLeverage:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
    { name:"Jim Jarvis", pos:"SS", bats:"L", throws:"R", dob:"2000-11-06", draftYear:2023, draftRound:11, draftPick:320, draftType:"MLB", pa:89, avg:".263", obp:".314", slg:".388", ops:".701", hr:1, rbi:10, r:9, h:21, doubles:5, triples:1, sb:0, bbpct:"5.8%", kpct:"15.1%", war:0.7, war2:0.3, wrc:101, woba:".320", xwoba:".290", oaa:-2, frv:-1, batSpeed:70.8, squaredUp:"26.2%", fastSwing:"10.7%", laSwSp:"26.9%", idealAttack:"47.6%", armValue:null, armStrength:89.8, abs:{netOvr:null, netRuns:null, chal:0, won:0, lost:0, wonPct:"0.0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:16,r:3,h:2,hr:0,rbi:1,avg:".143",obp:".250",slg:".286",ops:".536",wrc:51,woba:".246",iso:".143",bbpct:"6.3%",kpct:"18.8%",babip:".182"}, vsR:{pa:55,r:5,h:14,hr:1,rbi:7,avg:".280",obp:".308",slg:".420",ops:".728",wrc:98,woba:".316",iso:".140",bbpct:"3.6%",kpct:"16.4%",babip:".325"}, risp:{pa:17,r:7,h:3,hr:0,rbi:5,avg:".200",obp:".200",slg:".400",ops:".600",wrc:53,woba:".249",iso:".200",bbpct:"0.0%",kpct:"23.5%",babip:".273"}, highLeverage:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".200",slg:".400",ops:".600",wrc:55,woba:".252",iso:".200",bbpct:"0.0%",kpct:"16.7%",babip:".250"}, twoOuts:{pa:19,r:4,h:8,hr:0,rbi:3,avg:".471",obp:".526",slg:".706",ops:"1.232",wrc:237,woba:".525",iso:".235",bbpct:"5.3%",kpct:"26.3%",babip:".667"}}},
    { name:"Mike Yastrzemski", pos:"OF", bats:"L", throws:"L", dob:"1990-08-23", draftYear:2013, draftRound:14, draftPick:429, draftType:"MLB", pa:288, avg:".232", obp:".316", slg:".386", ops:".702", hr:8, rbi:32, r:37, h:59, doubles:13, triples:1, sb:1, bbpct:"9.8%", kpct:"24.6%", war:1.0, war2:0.4, wrc:92, woba:".307", xwoba:".302", oaa:-1, frv:-1, batSpeed:71.3, squaredUp:"28.4%", fastSwing:"7.3%", laSwSp:"32.2%", idealAttack:"62.2%", armValue:null, armStrength:84.9, abs:{netOvr:2.8, netRuns:0.7, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.4%", xChalRate:"3.4%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".264",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:241,r:30,h:49,hr:6,rbi:27,avg:".230",obp:".315",slg:".371",ops:".686",wrc:91,woba:".306",iso:".141",bbpct:"10.4%",kpct:"22.4%",babip:".279"}, risp:{pa:67,r:26,h:15,hr:1,rbi:20,avg:".254",obp:".328",slg:".373",ops:".701",wrc:94,woba:".311",iso:".119",bbpct:"10.4%",kpct:"37.3%",babip:".412"}, highLeverage:{pa:25,r:7,h:7,hr:1,rbi:10,avg:".304",obp:".360",slg:".522",ops:".882",wrc:141,woba:".380",iso:".217",bbpct:"8.0%",kpct:"32.0%",babip:".429"}, twoOuts:{pa:84,r:13,h:11,hr:2,rbi:10,avg:".149",obp:".250",slg:".270",ops:".520",wrc:47,woba:".241",iso:".122",bbpct:"10.7%",kpct:"35.7%",babip:".214"}}},
    { name:"Dominic Smith", pos:"DH", bats:"L", throws:"L", dob:"1995-06-15", draftYear:2013, draftRound:1, draftPick:11, draftType:"MLB", pa:263, avg:".268", obp:".324", slg:".404", ops:".729", hr:8, rbi:43, r:38, h:63, doubles:6, triples:1, sb:0, bbpct:"7.6%", kpct:"13.7%", war:0.3, war2:0.0, wrc:99, woba:".318", xwoba:".312", oaa:null, frv:0, batSpeed:68.7, squaredUp:"30.0%", fastSwing:"5.6%", laSwSp:"33.5%", idealAttack:"49.5%", armValue:null, armStrength:null, abs:{netOvr:0.3, netRuns:-0.1, chal:8, won:4, lost:4, wonPct:"50%", chalRate:"5.9%", xChalRate:"4.3%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:34,r:3,h:5,hr:0,rbi:2,avg:".172",obp:".273",slg:".207",ops:".480",wrc:40,woba:".231",iso:".034",bbpct:"11.8%",kpct:"11.8%",babip:".200"}, vsR:{pa:222,r:32,h:56,hr:7,rbi:39,avg:".280",obp:".329",slg:".420",ops:".749",wrc:103,woba:".324",iso:".140",bbpct:"6.8%",kpct:"14.0%",babip:".293"}, risp:{pa:72,r:28,h:20,hr:4,rbi:37,avg:".333",obp:".366",slg:".567",ops:".933",wrc:141,woba:".381",iso:".233",bbpct:"6.9%",kpct:"9.7%",babip:".296"}, highLeverage:{pa:35,r:9,h:5,hr:2,rbi:17,avg:".185",obp:".265",slg:".481",ops:".746",wrc:88,woba:".302",iso:".296",bbpct:"11.4%",kpct:"22.9%",babip:".150"}, twoOuts:{pa:86,r:13,h:24,hr:2,rbi:15,avg:".308",obp:".372",slg:".410",ops:".782",wrc:120,woba:".349",iso:".103",bbpct:"7.0%",kpct:"14.0%",babip:".344"}}},
    { name:"Jorge Mateo", pos:"SS", bats:"R", throws:"R", dob:"1995-06-23", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", pa:137, avg:".240", obp:".285", slg:".380", ops:".665", hr:4, rbi:11, r:29, h:31, doubles:6, triples:0, sb:10, bbpct:"5.8%", kpct:"29.9%", war:0.7, war2:0.5, wrc:82, woba:".292", xwoba:".322", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.2%", fastSwing:"35.3%", laSwSp:"45.5%", idealAttack:"42.9%", armValue:null, armStrength:88.3, abs:{netOvr:-6.2, netRuns:-1.1, chal:8, won:1, lost:7, wonPct:"13%", chalRate:"11.4%", xChalRate:"4.8%", rateVsExp:"+6.6%"}, splits:{vsL:{pa:54,r:10,h:12,hr:2,rbi:3,avg:".231",obp:".259",slg:".365",ops:".625",wrc:69,woba:".273",iso:".135",bbpct:"3.7%",kpct:"33.3%",babip:".313"}, vsR:{pa:83,r:19,h:19,hr:2,rbi:8,avg:".247",obp:".301",slg:".390",ops:".691",wrc:89,woba:".304",iso:".143",bbpct:"7.2%",kpct:"27.7%",babip:".327"}, risp:{pa:32,r:23,h:7,hr:0,rbi:6,avg:".241",obp:".313",slg:".241",ops:".554",wrc:60,woba:".260",iso:".000",bbpct:"9.4%",kpct:"31.3%",babip:".368"}, highLeverage:{pa:14,r:9,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:71,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:45,r:12,h:9,hr:1,rbi:5,avg:".214",obp:".267",slg:".333",ops:".600",wrc:64,woba:".266",iso:".119",bbpct:"6.7%",kpct:"26.7%",babip:".276"}}},
    { name:"Eli White", pos:"OF", bats:"R", throws:"R", dob:"1994-06-26", draftYear:2016, draftRound:11, draftPick:322, draftType:"MLB", pa:144, avg:".233", obp:".285", slg:".406", ops:".691", hr:5, rbi:17, r:17, h:31, doubles:6, triples:1, sb:4, bbpct:"6.3%", kpct:"21.5%", war:1.1, war2:0.6, wrc:87, woba:".301", xwoba:".269", oaa:2, frv:3, batSpeed:73.0, squaredUp:"20.6%", fastSwing:"29.4%", laSwSp:"31.6%", idealAttack:"53.8%", armValue:null, armStrength:88.7, abs:{netOvr:-0.8, netRuns:0.5, chal:3, won:2, lost:1, wonPct:"67%", chalRate:"4.3%", xChalRate:"6.3%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:89,r:8,h:18,hr:4,rbi:12,avg:".228",obp:".303",slg:".443",ops:".746",wrc:102,woba:".323",iso:".215",bbpct:"9.0%",kpct:"24.7%",babip:".259"}, vsR:{pa:50,r:9,h:10,hr:1,rbi:5,avg:".204",obp:".220",slg:".327",ops:".547",wrc:45,woba:".237",iso:".122",bbpct:"2.0%",kpct:"18.0%",babip:".231"}, risp:{pa:38,r:12,h:7,hr:1,rbi:11,avg:".219",obp:".316",slg:".344",ops:".660",wrc:84,woba:".296",iso:".125",bbpct:"13.2%",kpct:"18.4%",babip:".240"}, highLeverage:{pa:20,r:4,h:2,hr:0,rbi:4,avg:".111",obp:".200",slg:".111",ops:".311",wrc:-7,woba:".159",iso:".000",bbpct:"10.0%",kpct:"15.0%",babip:".133"}, twoOuts:{pa:40,r:7,h:7,hr:2,rbi:4,avg:".194",obp:".275",slg:".389",ops:".664",wrc:82,woba:".292",iso:".194",bbpct:"10.0%",kpct:"20.0%",babip:".192"}}},
    { name:"Ha-Seong Kim", pos:"SS", bats:"R", throws:"R", dob:"1995-10-17", draftYear:2020, draftRound:null, draftPick:null, draftType:"IFA", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.1, wrc:-26, woba:".131", xwoba:".212", oaa:-2, frv:-3, batSpeed:71.9, squaredUp:"16.9%", fastSwing:"20.8%", laSwSp:"19.6%", idealAttack:"56.9%", armValue:null, armStrength:85.3, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-41,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:79,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:123,woba:".353",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}, twoOuts:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".069",obp:".206",slg:".069",ops:".275",wrc:-10,woba:".155",iso:".000",bbpct:"14.7%",kpct:"26.5%",babip:".100"}}},
    { name:"Sandy León", pos:"C", bats:"S", throws:"R", dob:"1989-03-13", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-6,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", bats:"R", throws:"R", dob:"1995-03-21", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".185", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Sean Murphy", pos:"C", bats:"R", throws:"R", dob:"1994-10-04", draftYear:2016, draftRound:3, draftPick:83, draftType:"MLB", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-48,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:483,woba:".890",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}, twoOuts:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}}},
    { name:"Joey Bart", pos:"C", bats:"R", throws:"R", dob:"1996-12-15", draftYear:2018, draftRound:1, draftPick:2, draftType:"MLB", pa:119, avg:".226", obp:".303", slg:".377", ops:".680", hr:4, rbi:13, r:13, h:24, doubles:4, triples:0, sb:0, bbpct:"4.3%", kpct:"27.0%", war:0.4, war2:0.3, wrc:91, woba:".307", xwoba:".292", oaa:null, frv:0, batSpeed:75.5, squaredUp:"17.0%", fastSwing:"52.8%", laSwSp:"36.2%", idealAttack:"46.6%", avgPop:1.98, armValue:null, armStrength:83.9, abs:{netOvr:-4.2, netRuns:-2.8, chal:3, won:0, lost:3, wonPct:"0%", chalRate:"4.3%", xChalRate:"4.5%", rateVsExp:"-0.1%"}, absCatch:{netOvr:0.5, netRuns:-0.4, chal:25, won:15, lost:10, wonPct:"60%", chalRate:"1.8%", xChalRate:"2.5%", rateVsExp:"-0.7%"}, splits:{vsL:{pa:55,r:5,h:7,hr:1,rbi:5,avg:".143",obp:".236",slg:".265",ops:".502",wrc:41,woba:".232",iso:".122",bbpct:"5.5%",kpct:"30.9%",babip:".194"}, vsR:{pa:54,r:8,h:15,hr:3,rbi:8,avg:".306",obp:".352",slg:".510",ops:".862",wrc:133,woba:".371",iso:".204",bbpct:"3.7%",kpct:"24.1%",babip:".353"}, risp:{pa:30,r:9,h:5,hr:1,rbi:7,avg:".192",obp:".267",slg:".308",ops:".574",wrc:57,woba:".256",iso:".115",bbpct:"10.0%",kpct:"33.3%",babip:".250"}, highLeverage:{pa:14,r:4,h:2,hr:1,rbi:2,avg:".167",obp:".286",slg:".417",ops:".702",wrc:92,woba:".309",iso:".250",bbpct:"14.3%",kpct:"35.7%",babip:".167"}, twoOuts:{pa:34,r:6,h:5,hr:3,rbi:6,avg:".167",obp:".265",slg:".467",ops:".731",wrc:98,woba:".317",iso:".300",bbpct:"2.9%",kpct:"20.6%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"DH", bats:"L", throws:"L", dob:"1995-03-16", draftYear:2013, draftRound:30, draftPick:895, draftType:"MLB", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:156,woba:".403",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Brewer Hicklen", pos:"OF", bats:"R", throws:"R", dob:"1996-02-09", draftYear:2017, draftRound:7, draftPick:210, draftType:"MLB", pa:23, avg:".368", obp:".478", slg:".579", ops:"1.057", hr:0, rbi:3, r:5, h:7, doubles:4, triples:0, sb:0, bbpct:"17.4%", kpct:"34.8%", war:0.2, war2:0.3, wrc:191, woba:".456", xwoba:".355", oaa:-1, frv:-1, batSpeed:73.0, squaredUp:"22.2%", fastSwing:"27.8%", laSwSp:"45.5%", idealAttack:"57.5%", armValue:null, armStrength:null, splits:{vsL:{pa:3,r:0,h:2,hr:0,rbi:2,avg:".667",obp:".667",slg:"1.333",ops:"2.000",wrc:447,woba:".839",iso:".667",bbpct:"0.0%",kpct:"33.3%",babip:"1.000"}, vsR:{pa:18,r:4,h:5,hr:0,rbi:1,avg:".333",obp:".444",slg:".467",ops:".911",wrc:157,woba:".404",iso:".133",bbpct:"16.7%",kpct:"33.3%",babip:".556"}, risp:{pa:8,r:0,h:4,hr:0,rbi:3,avg:".500",obp:".500",slg:".875",ops:"1.375",wrc:277,woba:".583",iso:".375",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, highLeverage:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:12,r:2,h:4,hr:0,rbi:2,avg:".400",obp:".500",slg:".600",ops:"1.100",wrc:204,woba:".474",iso:".200",bbpct:"16.7%",kpct:"41.7%",babip:".800"}}},
  ];

export const starters = [
    // Updated July 27, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    { name:"Chris Sale", throws:"L", dob:"1989-03-30", draftYear:2010, draftRound:1, draftPick:13, draftType:"MLB", wl:"12-6", era:"2.08", ip:"117.0", kpct:"30.4%", bbpct:"5.5%", whip:"1.017", war:4.0, war2:3.9, fip:"2.48", xfip:"2.93", siera:"2.94", batSpeed:71.0, fastSwing:"20.3%", swstr:"14.0%", cstr:"17.4%", csw:"31.4%", laSwSp:"34.5%", idealAttack:"45.4%", splits:{vsL:{ip:"27.0",era:"1.33",fip:"2.07",xfip:"2.33",whip:"1.00",avg:".216",obp:".279",slg:".294",woba:".261",kpct:"30.4%",bbpct:"4.5%",kbb:"25.9%"}, vsR:{ip:"84.0",era:"2.46",fip:"2.78",xfip:"3.26",whip:"1.07",avg:".223",obp:".283",slg:".313",woba:".269",kpct:"29.5%",bbpct:"6.2%",kbb:"23.3%"}}},
    { name:"Tyler Mahle", throws:"R", dob:"1994-09-29", draftYear:2013, draftRound:7, draftPick:226, draftType:"MLB", wl:"3-9", era:"5.13", ip:"94.2", kpct:"22.0%", bbpct:"9.2%", whip:"1.394", war:-0.2, war2:-0.2, fip:"4.38", xfip:"4.38", siera:"4.38", batSpeed:0, fastSwing:"0.0%", swstr:"0.0%", cstr:"0.0%", csw:"0.0%", laSwSp:"0.0%", idealAttack:"0.0%", splits:{vsL:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}}},
    { name:"Reynaldo López", throws:"R", dob:"1994-01-04", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", wl:"4-3", era:"3.64", ip:"71.2", sv:0, kpct:"21.6%", bbpct:"9.5%", whip:"1.340", fip:"4.34", war:0.7, war2:0.5, xfip:"4.44", siera:"4.33", batSpeed:71.7, fastSwing:"23.7%", swstr:"9.2%", cstr:"16.6%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"43.3%", splits:{vsL:{ip:"37.2",era:"4.06",fip:"5.10",xfip:"5.25",whip:"1.57",avg:".218",obp:".347",slg:".394",woba:".333",kpct:"21.6%",bbpct:"16.4%",kbb:"5.3%"}, vsR:{ip:"34.0",era:"3.18",fip:"3.49",xfip:"3.56",whip:"1.09",avg:".273",obp:".281",slg:".432",woba:".307",kpct:"21.5%",bbpct:"0.7%",kbb:"20.7%"}}},
    { name:"Martín Pérez", throws:"L", dob:"1991-04-04", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", wl:"7-6", era:"3.24", ip:"97.1", kpct:"18.5%", bbpct:"9.9%", whip:"1.171", fip:"4.29", war:2.1, war2:0.7, xfip:"4.30", siera:"4.68", batSpeed:73.3, fastSwing:"34.7%", swstr:"8.5%", cstr:"19.0%", csw:"27.6%", laSwSp:"35.0%", idealAttack:"52.8%", splits:{vsL:{ip:"26.0",era:"4.15",fip:"4.19",xfip:"3.43",whip:"1.19",avg:".250",obp:".306",slg:".430",woba:".321",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}, vsR:{ip:"64.1",era:"3.22",fip:"4.57",xfip:"4.66",whip:"1.24",avg:".214",obp:".303",slg:".371",woba:".297",kpct:"17.0%",bbpct:"11.7%",kbb:"5.3%"}}},
    { name:"Bryce Elder", throws:"R", dob:"1999-05-19", draftYear:2020, draftRound:5, draftPick:156, draftType:"MLB", wl:"7-6", era:"3.84", ip:"119.2", kpct:"20.0%", bbpct:"7.9%", whip:"1.249", fip:"4.52", war:0.9, war2:1.1, xfip:"4.05", siera:"4.28", batSpeed:72.4, fastSwing:"27.1%", swstr:"9.3%", cstr:"16.5%", csw:"25.8%", laSwSp:"33.4%", idealAttack:"51.1%", splits:{vsL:{ip:"73.1",era:"3.68",fip:"4.32",xfip:"4.33",whip:"1.10",avg:".207",obp:".277",slg:".361",woba:".282",kpct:"20.5%",bbpct:"8.7%",kbb:"11.7%"}, vsR:{ip:"40.1",era:"4.46",fip:"4.75",xfip:"3.57",whip:"1.51",avg:".298",obp:".344",slg:".470",woba:".355",kpct:"20.4%",bbpct:"6.1%",kbb:"14.4%"}}},
    { name:"Grant Holmes", throws:"R", dob:"1996-03-22", draftYear:2014, draftRound:1, draftPick:22, draftType:"MLB", wl:"6-4", era:"3.88", ip:"102.0", kpct:"19.7%", bbpct:"10.2%", whip:"1.363", fip:"5.10", war:1.4, war2:0.2, xfip:"4.63", siera:"4.69", batSpeed:72.6, fastSwing:"28.4%", swstr:"11.8%", cstr:"14.8%", csw:"26.5%", laSwSp:"34.1%", idealAttack:"50.6%", splits:{vsL:{ip:"55.2",era:"3.23",fip:"5.05",xfip:"4.66",whip:"1.37",avg:".233",obp:".324",slg:".398",woba:".319",kpct:"20.1%",bbpct:"11.7%",kbb:"8.4%"}, vsR:{ip:"41.2",era:"4.54",fip:"4.53",xfip:"4.60",whip:"1.34",avg:".250",obp:".317",slg:".409",woba:".318",kpct:"19.1%",bbpct:"8.2%",kbb:"10.9%"}}},
    { name:"JR Ritchie", throws:"R", dob:"2003-06-26", draftYear:2022, draftRound:1, draftPick:35, draftType:"MLB", wl:"1-2", era:"4.50", ip:"58.0", kpct:"20.8%", bbpct:"14.0%", whip:"1.431", fip:"5.41", war:0.2, war2:-0.3, xfip:"4.88", siera:"4.96", batSpeed:72.4, fastSwing:"27.7%", swstr:"8.6%", cstr:"17.0%", csw:"25.6%", laSwSp:"30.0%", idealAttack:"56.2%", splits:{vsL:{ip:"30.2",era:"5.28",fip:"6.30",xfip:"5.42",whip:"1.57",avg:".226",obp:".369",slg:".426",woba:".353",kpct:"20.6%",bbpct:"15.6%",kbb:"5.0%"}, vsR:{ip:"23.1",era:"3.47",fip:"4.48",xfip:"4.19",whip:"1.20",avg:".205",obp:".295",slg:".325",woba:".280",kpct:"21.1%",bbpct:"11.6%",kbb:"9.5%"}}},
    { name:"Spencer Strider", throws:"R", dob:"1998-10-28", draftYear:2020, draftRound:4, draftPick:126, draftType:"MLB", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.36", xfip:"4.40", siera:"4.17", batSpeed:72.3, fastSwing:"24.9%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.67",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".341",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.96",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".377",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"AJ Smith-Shawver", throws:"R", dob:"2002-11-20", draftYear:2021, draftRound:7, draftPick:217, draftType:"MLB", wl:"0-0", era:"4.15", ip:"4.1", kpct:"21.1%", bbpct:"10.5%", whip:"1.385", war:0.1, war2:0.1, fip:"2.65", xfip:"4.41", siera:"4.58", batSpeed:71.2, fastSwing:"18.9%", swstr:"2.9%", cstr:"20.3%", csw:"23.2%", laSwSp:"40.0%", idealAttack:"49.6%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"6.11",xfip:"3.82",whip:"1.09",avg:".231",obp:".333",slg:".462",woba:".350",kpct:"26.7%",bbpct:"6.7%",kbb:"20.0%"}, vsR:{ip:"3.0",era:"3.00",fip:"2.77",xfip:"6.37",whip:"1.33",avg:".231",obp:".286",slg:".308",woba:".267",kpct:"14.3%",bbpct:"7.1%",kbb:"7.1%"}}},
    { name:"Hurston Waldrep", throws:"R", dob:"2002-03-01", draftYear:2023, draftRound:1, draftPick:24, draftType:"MLB", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.44", xfip:"5.94", siera:"5.68", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"55.7%", splits:{vsL:{ip:"6.1",era:"9.95",fip:"8.47",xfip:"5.83",whip:"1.74",avg:".240",obp:".387",slg:".480",woba:".382",kpct:"16.1%",bbpct:"16.1%",kbb:"0.0%"}, vsR:{ip:"4.1",era:"6.23",fip:"8.41",xfip:"6.13",whip:"2.77",avg:".368",obp:".520",slg:".526",woba:".464",kpct:"16.0%",bbpct:"20.0%",kbb:"-4.0%"}}},
    { name:"Owen Murphy", throws:"R", dob:"2003-09-27", draftYear:2022, draftRound:1, draftPick:20, draftType:"MLB", wl:"0-1", era:"4.05", ip:"6.2", kpct:"20.7%", bbpct:"6.9%", whip:"1.200", war:-0.1, war2:0.1, fip:"4.60", xfip:"4.95", siera:"4.37", batSpeed:72.3, fastSwing:"29.7%", swstr:"9.5%", cstr:"12.1%", csw:"21.6%", laSwSp:"40.0%", idealAttack:"46.9%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"6.11",xfip:"3.82",whip:"1.09",avg:".231",obp:".333",slg:".462",woba:".350",kpct:"26.7%",bbpct:"6.7%",kbb:"20.0%"}, vsR:{ip:"3.0",era:"3.00",fip:"2.77",xfip:"6.37",whip:"1.33",avg:".231",obp:".286",slg:".308",woba:".267",kpct:"14.3%",bbpct:"7.1%",kbb:"7.1%"}}},
  ];

  export const bullpen = [
    // Updated July 27, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    { name:"Raisel Iglesias", role:"CL", throws:"R", dob:"1990-01-04", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", era:"2.31", ip:"39.0", sv:23, kpct:"27.9%", bbpct:"5.8%", whip:"1.051", fip:"2.92", war:1.1, war2:0.9, xfip:"3.27", siera:"2.92", batSpeed:71.4, fastSwing:"23.6%", swstr:"15.5%", cstr:"16.9%", csw:"32.3%", laSwSp:"30.2%", idealAttack:"48.6%", splits:{vsL:{ip:"22.0",era:"2.45",fip:"3.93",xfip:"4.18",whip:"0.95",avg:".205",obp:".253",slg:".359",woba:".268",kpct:"21.7%",bbpct:"6.0%",kbb:"15.7%"}, vsR:{ip:"15.0",era:"2.40",fip:"1.24",xfip:"1.40",whip:"1.27",avg:".262",obp:".297",slg:".344",woba:".285",kpct:"39.1%",bbpct:"4.7%",kbb:"34.4%"}}},
    { name:"Dylan Lee", role:"RP", throws:"L", dob:"1994-08-01", draftYear:2016, draftRound:10, draftPick:293, draftType:"MLB", era:"2.16", ip:"50.0", sv:0, kpct:"33.0%", bbpct:"4.3%", whip:"0.720", fip:"1.92", war:1.7, war2:1.7, xfip:"2.76", siera:"2.28", batSpeed:72.6, fastSwing:"28.7%", swstr:"19.6%", cstr:"14.8%", csw:"34.3%", laSwSp:"35.5%", idealAttack:"50.0%", splits:{vsL:{ip:"18.0",era:"2.50",fip:"1.22",xfip:"2.41",whip:"0.67",avg:".133",obp:".185",slg:".250",woba:".190",kpct:"34.8%",bbpct:"6.1%",kbb:"28.8%"}, vsR:{ip:"29.2",era:"2.12",fip:"2.34",xfip:"2.88",whip:"0.81",avg:".187",obp:".214",slg:".299",woba:".224",kpct:"33.0%",bbpct:"3.6%",kbb:"29.5%"}}},
    { name:"Robert Suarez", role:"RP", throws:"R", dob:"1991-03-01", draftYear:2021, draftRound:null, draftPick:null, draftType:"IFA", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.44", siera:"3.40", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"53.6%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.73",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".170",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.99",xfip:"3.02",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".243",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", throws:"R", dob:"2005-06-17", draftYear:2022, draftRound:null, draftPick:null, draftType:"IFA", era:"2.60", ip:"45.0", sv:1, kpct:"29.3%", bbpct:"8.0%", whip:"1.178", fip:"2.38", war:1.5, war2:1.4, xfip:"3.29", siera:"3.02", batSpeed:71.8, fastSwing:"23.2%", swstr:"13.1%", cstr:"14.6%", csw:"27.7%", laSwSp:"33.9%", idealAttack:"41.2%", splits:{vsL:{ip:"23.1",era:"3.47",fip:"2.47",xfip:"2.93",whip:"1.20",avg:".247",obp:".296",slg:".371",woba:".292",kpct:"31.6%",bbpct:"6.1%",kbb:"25.5%"}, vsR:{ip:"20.0",era:"1.80",fip:"2.31",xfip:"3.77",whip:"1.15",avg:".216",obp:".289",slg:".243",woba:".242",kpct:"24.1%",bbpct:"8.4%",kbb:"15.7%"}}},
    { name:"Dylan Dodd", role:"RP", throws:"L", dob:"1998-06-06", draftYear:2021, draftRound:3, draftPick:96, draftType:"MLB", era:"2.20", ip:"32.2", sv:1, kpct:"28.8%", bbpct:"8.8%", whip:"0.827", fip:"3.20", war:1.0, war2:0.5, xfip:"3.69", siera:"3.23", batSpeed:72.6, fastSwing:"30.8%", swstr:"12.5%", cstr:"11.5%", csw:"24.0%", laSwSp:"37.3%", idealAttack:"55.5%", splits:{vsL:{ip:"13.1",era:"2.03",fip:"3.71",xfip:"3.48",whip:"1.05",avg:".167",obp:".259",slg:".333",woba:".257",kpct:"33.3%",bbpct:"11.1%",kbb:"22.2%"}, vsR:{ip:"18.1",era:"1.96",fip:"2.57",xfip:"3.53",whip:"0.55",avg:".117",obp:".159",slg:".200",woba:".162",kpct:"25.0%",bbpct:"4.7%",kbb:"20.3%"}}},
    { name:"Brent Suter", role:"RP", throws:"L", dob:"1989-08-29", draftYear:2012, draftRound:31, draftPick:946, draftType:"MLB", era:"4.12", ip:"63.1", sv:0, kpct:"20.8%", bbpct:"6.4%", whip:"1.263", fip:"3.65", war:0.1, war2:0.1, xfip:"3.65", siera:"3.65", batSpeed:0, fastSwing:"0.0%", swstr:"0.0%", cstr:"0.0%", csw:"0.0%", laSwSp:"0.0%", idealAttack:"0.0%", splits:{vsL:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}}},
    { name:"Víctor Mederos", role:"RP", throws:"R", dob:"2001-06-08", draftYear:2022, draftRound:6, draftPick:178, draftType:"MLB", era:"4.05", ip:"13.1", sv:1, kpct:"20.0%", bbpct:"7.3%", whip:"1.125", fip:"2.35", war:0.1, war2:0.3, xfip:"4.52", siera:"4.02", batSpeed:72.9, fastSwing:"32.5%", swstr:"15.0%", cstr:"12.8%", csw:"27.8%", laSwSp:"35.3%", idealAttack:"55.0%", splits:{vsL:{ip:"5.0",era:"5.40",fip:"1.91",xfip:"4.36",whip:"1.20",avg:".300",obp:".300",slg:".350",woba:".285",kpct:"15.0%",bbpct:"0.0%",kbb:"15.0%"}, vsR:{ip:"6.2",era:"2.70",fip:"2.36",xfip:"4.43",whip:"0.90",avg:".125",obp:".222",slg:".250",woba:".216",kpct:"26.9%",bbpct:"11.5%",kbb:"15.4%"}}},
    { name:"Tyler Kinley", role:"RP", throws:"R", dob:"1991-01-31", draftYear:2013, draftRound:16, draftPick:472, draftType:"MLB", era:"4.23", ip:"38.1", sv:0, kpct:"24.1%", bbpct:"10.1%", whip:"1.252", fip:"5.17", war:0.3, war2:-0.3, xfip:"4.49", siera:"3.98", batSpeed:70.7, fastSwing:"15.2%", swstr:"11.8%", cstr:"18.7%", csw:"30.5%", laSwSp:"33.0%", idealAttack:"56.3%", splits:{vsL:{ip:"19.2",era:"7.32",fip:"6.97",xfip:"4.30",whip:"1.17",avg:".203",obp:".295",slg:".536",woba:".344",kpct:"26.9%",bbpct:"11.5%",kbb:"15.4%"}, vsR:{ip:"17.2",era:"1.02",fip:"3.28",xfip:"4.71",whip:"1.42",avg:".261",obp:".338",slg:".362",woba:".315",kpct:"22.1%",bbpct:"9.1%",kbb:"13.0%"}}},
    { name:"James Karinchak", role:"RP", throws:"R", dob:"1995-09-22", draftYear:2017, draftRound:9, draftPick:282, draftType:"MLB", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.34", war:0.3, war2:0.0, xfip:"5.38", siera:"4.93", batSpeed:71.9, fastSwing:"25.5%", swstr:"8.6%", cstr:"19.8%", csw:"28.4%", laSwSp:"20.8%", idealAttack:"61.8%", splits:{vsL:{ip:"3.1",era:"2.70",fip:"7.01",xfip:"5.42",whip:"1.50",avg:".250",obp:".357",slg:".583",woba:".399",kpct:"21.4%",bbpct:"14.3%",kbb:"7.1%"}, vsR:{ip:"6.1",era:"1.42",fip:"2.95",xfip:"5.38",whip:"0.63",avg:".053",obp:".174",slg:".053",woba:".130",kpct:"21.7%",bbpct:"13.0%",kbb:"8.7%"}}},
    { name:"Danny Young", role:"RP", throws:"L", dob:"1994-05-27", draftYear:2015, draftRound:8, draftPick:242, draftType:"MLB", era:"2.08", ip:"8.2", sv:0, kpct:"21.1%", bbpct:"21.1%", whip:"1.615", fip:"5.87", war:0.4, war2:-0.2, xfip:"5.78", siera:"5.87", batSpeed:72.7, fastSwing:"20.5%", swstr:"7.0%", cstr:"21.1%", csw:"28.2", laSwSp:"27.8%", idealAttack:"41.0%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"8.29",xfip:"6.42",whip:"2.18",avg:".333",obp:".500",slg:".667",woba:".492",kpct:"17.6%",bbpct:"23.5%",kbb:"-5.9%"}, vsR:{ip:"3.2",era:"0.00",fip:"5.57",xfip:"6.40",whip:"1.36",avg:".091",obp:".375",slg:".091",woba:".215",kpct:"18.8%",bbpct:"25.0%",kbb:"-6.2%"}}},
    { name:"Carlos Carrasco", role:"RP", throws:"R", dob:"1987-03-21", draftYear:2003, draftRound:null, draftPick:null, draftType:"IFA", era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.50", war:-0.2, war2:-0.2, xfip:"4.72", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"62.8%", splits:{vsL:{ip:"10.1",era:"6.10",fip:"4.65",xfip:"4.89",whip:"1.45",avg:".317",obp:".364",slg:".415",woba:".345",kpct:"6.7%",bbpct:"4.4%",kbb:"2.2%"}, vsR:{ip:"6.1",era:"5.68",fip:"6.90",xfip:"4.50",whip:"1.42",avg:".320",obp:".370",slg:".600",woba:".415",kpct:"14.3%",bbpct:"3.6%",kbb:"10.7%"}}},
    { name:"Ian Hamilton", role:"RP", throws:"R", dob:"1995-06-16", draftYear:2016, draftRound:11, draftPick:326, draftType:"MLB", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.31", war:-0.1, war2:0.0, xfip:"3.97", siera:"3.96", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"41.2%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.71",xfip:"4.63",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".499",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.11",xfip:"3.62",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".244",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:67,l:45,pct:".598",gb:"—", home:"36-20",away:"31-25", rs:549, ra:441, diff:+108, strk:"W5", l10:"7-3", highlight:true,  srs:0.9 },
     { team:"PHI", full:"Philadelphia Phillies", w:59,l:53,pct:".527",gb:"8.0", home:"28-27",away:"31-26", rs:490, ra:494, diff:-4, strk:"W2", l10:"3-7", highlight:false, srs:0.0 },
     { team:"MIA", full:"Miami Marlins",        w:58,l:55,pct:".513",gb:"9.5", home:"34-23",away:"24-32", rs:496, ra:483, diff:+13, strk:"W3", l10:"6-4", highlight:false, srs:0.1 },
     { team:"WSN", full:"Washington Nationals", w:55,l:58,pct:".487",gb:"12.5", home:"23-34",away:"32-24", rs:607, ra:591, diff:+16, strk:"L5", l10:"3-7", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:47,l:66,pct:".416",gb:"20.5", home:"25-34",away:"22-32", rs:457, ra:515, diff:-58, strk:"L3", l10:"4-6", highlight:false, srs:-0.4 },
   ];
   
export const statcastHitters = [
  // Updated August 3, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // MLB Trade Deadline — new player rows will appear in tomorrow's screenshots
  // Ha-Seong Kim not on main leaderboard (below qualifier); pullAir 17.6% confirmed on today's pull-air leaderboard — held
  // Lane Thomas — Kevin maintaining fields manually (not touched by refresh)
  // Hidden players (Tromp, León, S. Murphy, Tellez, Hicklen) — all fields held per hiding protocol
  { name:"Michael Harris II", ev:"90.9",hardHit:"49.2%",xwoba:".352",xba:".293",xslg:".496",barrel:"11.7%",chase:"44.9%",whiff:"24.9%",kpct:"19.3%",bbpct:"3.8%", gbpct:"44.6%",fbpct:"24.0%",ldpct:"24.6%",pupct:"6.8%",pullAir:"18.8%"},
  { name:"Matt Olson", ev:"92.6",hardHit:"50.0%",xwoba:".360",xba:".248",xslg:".515",barrel:"14.8%",chase:"27.0%",whiff:"24.8%",kpct:"24.6%",bbpct:"10.2%", gbpct:"36.8%",fbpct:"34.6%",ldpct:"19.5%",pupct:"9.1%",pullAir:"21.4%"},
  { name:"Dominic Smith", ev:"87.9",hardHit:"34.1%",xwoba:".312",xba:".251",xslg:".395",barrel:"5.9%",chase:"31.2%",whiff:"20.0%",kpct:"13.7%",bbpct:"7.6%", gbpct:"40.5%",fbpct:"28.8%",ldpct:"24.9%",pupct:"5.9%",pullAir:"18.0%"},
  { name:"Drake Baldwin", ev:"91.6",hardHit:"51.5%",xwoba:".386",xba:".283",xslg:".521",barrel:"14.8%",chase:"32.9%",whiff:"23.5%",kpct:"20.7%",bbpct:"11.1%", gbpct:"45.8%",fbpct:"24.6%",ldpct:"24.6%",pupct:"4.9%",pullAir:"12.1%"},
  { name:"Mauricio Dubón", ev:"86.7",hardHit:"30.3%",xwoba:".310",xba:".269",xslg:".384",barrel:"4.3%",chase:"37.2%",whiff:"16.5%",kpct:"13.5%",bbpct:"6.2%", gbpct:"41.0%",fbpct:"24.0%",ldpct:"26.3%",pupct:"8.7%",pullAir:"15.3%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"46.6%",xwoba:".322",xba:".260",xslg:".440",barrel:"10.2%",chase:"41.8%",whiff:"30.8%",kpct:"29.9%",bbpct:"5.8%", gbpct:"38.6%",fbpct:"30.7%",ldpct:"27.3%",pupct:"3.4%",pullAir:"21.6%"},
  { name:"Austin Riley", ev:"90.9",hardHit:"44.0%",xwoba:".293",xba:".206",xslg:".375",barrel:"10.9%",chase:"32.3%",whiff:"32.5%",kpct:"30.7%",bbpct:"7.8%", gbpct:"38.7%",fbpct:"30.5%",ldpct:"21.8%",pupct:"9.0%",pullAir:"16.9%"},
  { name:"Ozzie Albies", ev:"86.8",hardHit:"28.3%",xwoba:".285",xba:".236",xslg:".363",barrel:"4.3%",chase:"38.7%",whiff:"21.5%",kpct:"14.5%",bbpct:"6.4%", gbpct:"34.1%",fbpct:"33.1%",ldpct:"24.3%",pupct:"8.5%",pullAir:"26.7%"},
  { name:"Mike Yastrzemski", ev:"90.4",hardHit:"44.1%",xwoba:".305",xba:".230",xslg:".361",barrel:"7.0%",chase:"26.7%",whiff:"23.9%",kpct:"24.3%",bbpct:"9.7%", gbpct:"38.7%",fbpct:"31.7%",ldpct:"23.7%",pupct:"5.9%",pullAir:"23.1%"},
  { name:"Ronald Acuña Jr.", ev:"90.3",hardHit:"45.1%",xwoba:".376",xba:".252",xslg:".489",barrel:"14.2%",chase:"26.0%",whiff:"30.1%",kpct:"22.9%",bbpct:"14.3%", gbpct:"41.4%",fbpct:"29.0%",ldpct:"21.0%",pupct:"8.6%",pullAir:"17.9%"},
  { name:"Eli White", ev:"86.4",hardHit:"31.1%",xwoba:".269",xba:".224",xslg:".326",barrel:"5.9%",chase:"29.8%",whiff:"27.7%",kpct:"21.5%",bbpct:"6.3%", gbpct:"55.3%",fbpct:"26.2%",ldpct:"16.5%",pupct:"1.9%",pullAir:"9.7%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.2",hardHit:"34.2%",xwoba:".293",xba:".208",xslg:".375",barrel:"7.9%",chase:"31.4%",whiff:"27.4%",kpct:"26.1%",bbpct:"5.0%", gbpct:"40.8%",fbpct:"35.5%",ldpct:"15.8%",pupct:"7.9%",pullAir:"21.1%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".506",xba:".339",xslg:".828",barrel:"28.6%",chase:"29.6%",whiff:"30.4%",kpct:"27.3%",bbpct:"9.1%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"88.1",hardHit:"37.7%",xwoba:".284",xba:".252",xslg:".332",barrel:"4.3%",chase:"26.2%",whiff:"15.6%",kpct:"15.7%",bbpct:"5.6%", gbpct:"59.4%",fbpct:"18.8%",ldpct:"18.8%",pupct:"2.9%",pullAir:"11.6%"},
  { name:"Brewer Hicklen", ev:"94.9",hardHit:"54.5%",xwoba:".354",xba:".256",xslg:".405",barrel:"9.1%",chase:"28.8%",whiff:"44.4%",kpct:"34.8%",bbpct:"17.4%", gbpct:"45.5%",fbpct:"18.2%",ldpct:"36.4%",pupct:"0.0%",pullAir:"18.2%"},
  { name:"Lane Thomas", ev:"89.5",hardHit:"42.6%",xwoba:".318",xba:".245",xslg:".375",barrel:"6.7%",chase:"20.6%",whiff:"21.3%",kpct:"23.8%",bbpct:"11.9%", gbpct:"36.8%",fbpct:"23.9%",ldpct:"25.4%",pupct:"13.9%",pullAir:"26.3%"},
];

export const statcastPitchers = [
  // Updated August 3, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // MLB Trade Deadline — new player rows will appear in tomorrow's screenshots
  // Reynaldo López not on today's main pitcher leaderboard (still on pull-air leaderboard with unchanged 19.1%) — all main fields held; flag to verify if traded/DL'd
  // Elieser Hernández on today's pitcher pull-air leaderboard (27.8%) but not on main — still NOT auto-added per prior "release confirmed" note
  // Tyler Mahle — Kevin maintaining fields manually (not touched by refresh)
  // Hidden players (Strider, Waldrep, Carrasco, Hamilton, Owen Murphy, AJ Smith-Shawver, Robert Suarez) — all fields held per hiding protocol
  { name:"Raisel Iglesias", ev:"87.5",hardHit:"35.6%",xwoba:".267",xba:".216",xslg:".340",kpct:"27.8%",bbpct:"6.3%", barrel:"7.8%", chase:"40.4%",whiff:"29.7%",gbpct:"37.5%",fbpct:"28.8%",ldpct:"24.0%",pupct:"9.6%", pullAir:"22.1%"},
  { name:"Dylan Lee", ev:"86.7",hardHit:"30.8%",xwoba:".235",xba:".187",xslg:".301",kpct:"33.0%",bbpct:"4.8%", barrel:"6.0%", chase:"36.5%",whiff:"38.2%",gbpct:"36.8%",fbpct:"30.8%",ldpct:"23.1%",pupct:"9.4%", pullAir:"25.6%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.2",hardHit:"41.1%",xwoba:".309",xba:".247",xslg:".396",kpct:"20.0%",bbpct:"7.9%", barrel:"6.4%", chase:"28.1%",whiff:"22.4%",gbpct:"43.6%",fbpct:"26.4%",ldpct:"23.3%",pupct:"6.7%", pullAir:"18.6%"},
  { name:"Chris Sale", ev:"87.4",hardHit:"32.9%",xwoba:".272",xba:".221",xslg:".327",kpct:"30.4%",bbpct:"5.5%", barrel:"5.5%", chase:"35.8%",whiff:"30.7%",gbpct:"44.5%",fbpct:"24.7%",ldpct:"24.7%",pupct:"6.2%", pullAir:"16.1%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"88.7",hardHit:"35.6%",xwoba:".272",xba:".220",xslg:".326",kpct:"30.4%",bbpct:"7.7%", barrel:"5.1%", chase:"30.7%",whiff:"28.7%",gbpct:"39.0%",fbpct:"26.3%",ldpct:"24.6%",pupct:"10.2%", pullAir:"9.3%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".359",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"11.4%"},
  { name:"Tyler Kinley", ev:"85.6",hardHit:"28.2%",xwoba:".285",xba:".204",xslg:".365",kpct:"24.1%",bbpct:"10.1%", barrel:"7.8%", chase:"25.2%",whiff:"27.9%",gbpct:"31.1%",fbpct:"34.0%",ldpct:"24.3%",pupct:"10.7%", pullAir:"33.0%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"37.6%",xwoba:".324",xba:".256",xslg:".394",kpct:"18.8%",bbpct:"9.8%", barrel:"6.0%", chase:"26.0%",whiff:"22.1%",gbpct:"47.9%",fbpct:"21.6%",ldpct:"25.9%",pupct:"4.6%", pullAir:"21.6%"},
  { name:"Grant Holmes", ev:"90.7",hardHit:"42.9%",xwoba:".336",xba:".251",xslg:".435",kpct:"19.6%",bbpct:"10.2%", barrel:"9.8%", chase:"31.5%",whiff:"26.7%",gbpct:"42.2%",fbpct:"27.9%",ldpct:"23.7%",pupct:"6.2%", pullAir:"20.1%"},
  { name:"Reynaldo López", ev:"87.7",hardHit:"36.4%",xwoba:".330",xba:".256",xslg:".426",kpct:"21.6%",bbpct:"9.5%", barrel:"7.7%", chase:"27.2%",whiff:"21.8%",gbpct:"36.8%",fbpct:"28.7%",ldpct:"26.8%",pupct:"7.7%", pullAir:"19.1%"},
  { name:"JR Ritchie", ev:"89.6",hardHit:"39.5%",xwoba:".343",xba:".240",xslg:".407",kpct:"20.7%",bbpct:"14.1%", barrel:"9.3%", chase:"25.5%",whiff:"23.3%",gbpct:"45.1%",fbpct:"29.6%",ldpct:"20.4%",pupct:"4.9%", pullAir:"20.4%"},
  { name:"Dylan Dodd", ev:"89.0",hardHit:"38.0%",xwoba:".255",xba:".191",xslg:".309",kpct:"28.9%",bbpct:"8.6%", barrel:"6.3%", chase:"32.0%",whiff:"28.0%",gbpct:"30.4%",fbpct:"26.6%",ldpct:"25.3%",pupct:"17.7%", pullAir:"35.4%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"12.5%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.2%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"94.9",hardHit:"53.8%",xwoba:".361",xba:".214",xslg:".417",kpct:"17.8%",bbpct:"20.0%", barrel:"15.4%", chase:"22.1%",whiff:"21.9%",gbpct:"53.8%",fbpct:"26.9%",ldpct:"15.4%",pupct:"3.8%", pullAir:"7.7%"},
  { name:"Owen Murphy", ev:"94.1",hardHit:"55.0%",xwoba:".353",xba:".280",xslg:".451",kpct:"20.7%",bbpct:"6.9%", barrel:"10.0%", chase:"38.0%",whiff:"17.1%",gbpct:"20.0%",fbpct:"25.0%",ldpct:"45.0%",pupct:"10.0%", pullAir:"30.0%"},
  { name:"Víctor Mederos", ev:"89.6",hardHit:"40.9%",xwoba:".262",xba:".221",xslg:".314",kpct:"18.6%",bbpct:"6.8%", barrel:"4.5%", chase:"33.6%",whiff:"32.1%",gbpct:"38.6%",fbpct:"22.7%",ldpct:"18.2%",pupct:"20.5%", pullAir:"18.2%"},
  { name:"AJ Smith-Shawver", ev:"92.0",hardHit:"53.8%",xwoba:".387",xba:".299",xslg:".522",kpct:"21.1%",bbpct:"10.5%", barrel:"15.4%", chase:"18.2%",whiff:"6.9%",gbpct:"38.5%",fbpct:"30.8%",ldpct:"30.8%",pupct:"0.0%", pullAir:"23.1%"},
  { name:"Tyler Mahle", ev:"89.8",hardHit:"36.6%",xwoba:".312",xba:".244",xslg:".390",kpct:"22.0%",bbpct:"9.2%", barrel:"6.9%", chase:"28.3%",whiff:"21.6%",gbpct:"0.0%",fbpct:"0.0%",ldpct:"0.0%",pupct:"0.0%", pullAir:"14.9%"},
  { name:"Brent Suter", ev:"86.3",hardHit:"30.4%",xwoba:".319",xba:".264",xslg:".413",kpct:"20.7%",bbpct:"6.8%", barrel:"6.4%", chase:"0.0%",whiff:"0.0%",gbpct:"0.0%",fbpct:"0.0%",ldpct:"0.0%",pupct:"0.0%", pullAir:"0.0%"},
];
   
   export const hitterWarProgress = [
     { week:"G6",  "Olson":0.5,"Albies":0.3,"Baldwin":0.2,"Harris":0.1,"Dubón":0.1,"Acuña":0.0,"Smith":0.0,"Mateo":0.0,"Riley":0.0,"White":0.0,"Yaz":0.0,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G12", "Olson":1.0,"Albies":0.8,"Baldwin":0.6,"Harris":0.4,"Dubón":0.3,"Acuña":0.0,"Smith":0.1,"Mateo":0.0,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G18", "Olson":1.4,"Albies":1.0,"Baldwin":0.9,"Harris":0.7,"Dubón":0.4,"Acuña":0.1,"Smith":0.2,"Mateo":0.1,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G24", "Olson":1.7,"Albies":1.4,"Baldwin":1.2,"Harris":0.9,"Dubón":0.6,"Acuña":0.2,"Smith":0.3,"Mateo":0.2,"Riley":0.2,"White":0.0,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G30", "Olson":2.0,"Albies":1.6,"Baldwin":1.4,"Harris":1.1,"Dubón":0.7,"Acuña":0.3,"Smith":0.4,"Mateo":0.3,"Riley":0.2,"White":-0.1,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G36", "Olson":2.1,"Albies":1.7,"Baldwin":1.6,"Harris":1.2,"Dubón":0.8,"Acuña":0.5,"Smith":0.5,"Mateo":0.4,"Riley":0.2,"White":-0.2,"Yaz":-0.3,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":-0.1,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G42", "Olson":2.4,"Albies":1.5,"Baldwin":1.8,"Harris":1.2,"Dubón":1.0,"Acuña":0.6,"Smith":0.6,"Mateo":0.6,"Riley":0.3,"White":-0.1,"Yaz":0.1,"León":0.0,"Kim":0.1,"Tromp":0.0,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G54", "Olson":2.2,"Albies":1.4,"Baldwin":2.3,"Harris":1.5,"Dubón":0.9,"Acuña":0.5,"Smith":0.6,"Mateo":0.6,"Riley":0.5,"White":-0.1,"Yaz":0.3,"León":-0.2,"Kim":-0.6,"Tromp":0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G60", "Olson":2.2,"Albies":1.5,"Baldwin":2.2,"Harris":1.9,"Dubón":1.0,"Acuña":1.0,"Smith":0.6,"Mateo":0.9,"Riley":0.3,"White":-0.1,"Yaz":0.6,"León":-0.3,"Kim":-0.8,"Tromp":-0.1,"Murphy":-0.2,"Bart":0.1,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G66", "Olson":2.3,"Albies":1.7,"Baldwin":2.2,"Harris":2.1,"Dubón":1.5,"Acuña":1.0,"Smith":0.5,"Mateo":0.8,"Riley":0.2,"White":-0.1,"Yaz":0.5,"León":-0.4,"Kim":-0.9,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.1,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.2,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G81", "Olson":2.5,"Albies":1.7,"Baldwin":1.5,"Harris":2.2,"Dubón":1.7,"Acuña":0.9,"Smith":0.0,"Mateo":0.7,"Riley":0.1,"White":0.2,"Yaz":0.0,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G90", "Olson":2.9,"Albies":1.8,"Baldwin":1.4,"Harris":2.6,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.7,"Riley":0.0,"White":0.4,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":-0.1,"Hicklen":0.0,"Thomas":0.0 },
     { week:"All-Star", "Olson":2.8,"Albies":1.7,"Baldwin":1.4,"Harris":2.5,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.5,"Riley":0.1,"White":0.4,"Yaz":0.4,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.1,"Tellez":0.0,"Jarvis":0.2,"Hicklen":0.0,"Thomas":0.0 },
     { week:"G100", "Olson":2.9,"Albies":1.6,"Baldwin":2.0,"Harris":2.9,"Dubón":1.9,"Acuña":0.9,"Smith":-0.3,"Mateo":0.6,"Riley":0.5,"White":0.5,"Yaz":0.3,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.1,"Tellez":0.0,"Jarvis":0.2,"Hicklen":0.2,"Thomas":0.0 },
     { week:"G108", "Olson":3.0,"Albies":1.6,"Baldwin":2.4,"Harris":3.0,"Dubón":1.7,"Acuña":0.6,"Smith":-0.2,"Mateo":0.5,"Riley":0.4,"White":0.6,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.3,"Tellez":0.0,"Jarvis":0.1,"Hicklen":0.3,"Thomas":0.8 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G81", "Elder":1.4,"Sale":2.4,"Lee":1.3,"Iglesias":0.9,"Suarez":0.8,"Fuentes":0.9,"Pérez":0.9,"Holmes":0.0,"Kinley":0.1,"López":0.2,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.1,"Karinchak":0.1,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"G90", "Elder":1.5,"Sale":2.6,"Lee":1.5,"Iglesias":0.9,"Suarez":0.8,"Fuentes":1.0,"Pérez":0.6,"Holmes":0.0,"Kinley":0.0,"López":0.5,"Strider":0.1,"Ritchie":-0.1,"Dodd":0.3,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0 },
     { week:"All-Star", "Sale":2.7,"Lee":1.7,"Fuentes":1.2,"Elder":1.1,"Iglesias":1.0,"Suarez":0.8,"Pérez":0.6,"López":0.5,"Dodd":0.3,"Holmes":0.2,"Mederos":0.1,"Kinley":0.0,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.1,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.1,"Smith-Shawver":0.0 },
     { week:"G100", "Sale":3.1,"Lee":1.8,"Fuentes":1.4,"Elder":1.1,"Iglesias":0.9,"Suarez":0.8,"Pérez":0.6,"López":0.3,"Dodd":0.4,"Holmes":0.3,"Mederos":0.3,"Kinley":-0.1,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.2,"Smith-Shawver":0.0 },
     { week:"G108", "Sale":3.9,"Lee":1.6,"Fuentes":1.4,"Elder":1.1,"Iglesias":0.9,"Suarez":0.8,"Pérez":0.7,"López":0.5,"Dodd":0.5,"Holmes":0.5,"Mederos":0.3,"Kinley":-0.3,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.2,"Smith-Shawver":0.1 },
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
  woba: 0.26, ldpct: 0.14, whiff: 0.18, laSwSp: 0.12, hardHit: 0.11, ev: 0.11, chase: 0.08,
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
