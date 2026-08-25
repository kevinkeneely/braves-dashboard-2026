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
 
   export const lastUpdated = "August 24, 2026";
 
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
      //   - Tyler Mahle
   
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
      //   - Brent Suter
      //   - Ray Kerr
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
     { date:"Tue, Aug 4", opp:"Marlins",    home:true, result:"W", score:"4-2", record:"68-45"},
     { date:"Wed, Aug 5", opp:"Marlins",    home:true, result:"W", score:"4-1", record:"69-45"},
     { date:"Thu, Aug 6", opp:"Marlins",    home:true, result:"W", score:"11-3", record:"70-45"},
     { date:"Fri, Aug 7", opp:"Yankees",    home:false, result:"L", score:"2-3 F/10", record:"70-46"},
     { date:"Sat, Aug 8", opp:"Yankees",    home:false, result:"L", score:"4-5", record:"70-47"},
     { date:"Sun, Aug 9", opp:"Yankees",    home:false, result:"W", score:"2-1 F/10", record:"71-47"},
     { date:"Mon, Aug 10", opp:"Mets",    home:true, result:"L", score:"5-8", record:"71-48"},
     { date:"Tue, Aug 11", opp:"Mets",    home:true, result:"W", score:"4-0", record:"72-48"},
     { date:"Wed, Aug 12", opp:"Mets",    home:true, result:"W", score:"6-3", record:"73-48"},
     { date:"Fri, Aug 14", opp:"Diamondbacks",    home:true, result:"L", score:"0-2", record:"73-49"},
     { date:"Sat, Aug 15", opp:"Diamondbacks",    home:true, result:"L", score:"3-10", record:"73-50"},
     { date:"Sun, Aug 16", opp:"Diamondbacks",    home:true, result:"W", score:"5-3", record:"74-50"},
     { date:"Mon, Aug 17", opp:"Twins",    home:false, result:"L", score:"2-4", record:"74-51"},
     { date:"Tue, Aug 18", opp:"Twins",    home:false, result:"L", score:"1-4", record:"74-52"},
     { date:"Wed, Aug 19", opp:"Twins",    home:false, result:"L", score:"4-6", record:"74-53"},
     { date:"Thu, Aug 20", opp:"White Sox",    home:false, result:"W", score:"2-0", record:"75-53"},
     { date:"Fri, Aug 21", opp:"Brewers",    home:false, result:"L", score:"1-2", record:"75-54"},
     { date:"Sat, Aug 22", opp:"Brewers",    home:false, result:"L", score:"1-4", record:"75-55"},
     { date:"Sun, Aug 23", opp:"Brewers",    home:false, result:"W", score:"4-2", record:"76-55"},
      // Upcoming
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
     record: "76-55",
     runs: 614,
     era: "3.60",
     avg: ".246",
     obp: ".311",
     slg: ".411",
     ops: ".722",
     wrc: 98,
     iso: ".165",
     battingK: "21.6%",
     battingBB: "7.8%",
     woba: ".317",
     xwoba: ".318",
     fip: "4.07",
     xera: "4.04",
     xfip: "4.08",
     whip: "1.25",
     gb: "41.5%",
     siera: "4.01",
     pitchingK: "22.8%",
     pitchingBB: "9.1%",
     pitchingKBB: "13.7%",
     swstr: "11.4%",
     cstr: "16.1%",
     csw: "27.5%",
     fastSwing: "27.8%",
     sqUpSw: "24.6%",
     blastSw: "10.4%",
     idealAtk: "50.0%",
     batFastSwing: "33.1%",
     batSqUpSw: "24.4%",
     batBlastSw: "11.0%",
     batIdealAtk: "49.4%",
     batSwStr: "11.1%",
     batCStr: "14.7%",
     batCSW: "25.8%",
     batChase: "33.5%",
     batWhiff: "24.7%",
     chase: "30.4%",
     whiff: "26.4%",
     batBatSpeed: "72.7",
     batSpeed: "72.3",
// Plate Discipline additions
     batZoneSwing: "69.0",
     batZoneContact: "84.0%",
     batChaseContact: "59.8%",
     zoneSwing: "66.9%",
     zoneContact: "83.6%",
     chaseContact: "54.0%",
// Statcast (hitters)
     batBarrel: "8.7%",
     batHardHit: "40.1%",
     batExitVelo: "89.4",
     batXBA: ".245",
     batXSLG: ".412",
     batXwOBAcon: ".368",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "7.4%",
     hardHit: "38.7%",
     exitVelo: "89.0",
     xBA: ".240",
     xSLG: ".387",
     pXwOBA: ".311",
     xwOBAcon: ".359",
 };
   
export const hitters = [
    // Updated August 18, 2026 — vsL, vsR, risp, highLeverage + twoOuts splits refreshed from FanGraphs splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, ABS)
    { name:"Drake Baldwin", pos:"C", bats:"L", throws:"R", dob:"2001-03-28", draftYear:2022, draftRound:3, draftPick:96, draftType:"MLB", pa:478, avg:".268", obp:".351", slg:".443", ops:".795", hr:21, rbi:63, r:70, h:113, doubles:11, triples:0, sb:3, bbpct:"10.0%", kpct:"20.7%", war:2.7, war2:2.2, wrc:120, woba:".349", xwoba:".371", oaa:null, frv:-1, batSpeed:75.2, squaredUp:"25.4%", fastSwing:"54.8%", laSwSp:"37.3%", idealAttack:"46.3%", avgPop:1.93, armValue:null, armStrength:79.7, abs:{netOvr:1.4, netRuns:0.5, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.6%", xChalRate:"4.1%", rateVsExp:"-3.5%"}, absCatch:{netOvr:11.6, netRuns:0.4, chal:43, won:30, lost:13, wonPct:"70%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:174,r:24,h:40,hr:7,rbi:18,avg:".255",obp:".328",slg:".414",ops:".742",wrc:106,woba:".328",iso:".159",bbpct:"8.0%",kpct:"20.1%",babip:".287"}, vsR:{pa:279,r:43,h:70,hr:13,rbi:44,avg:".289",obp:".380",slg:".475",ops:".855",wrc:136,woba:".373",iso:".186",bbpct:"11.5%",kpct:"20.4%",babip:".329"}, risp:{pa:112,r:2,h:30,hr:2,rbi:43,avg:".330",obp:".446",slg:".451",ops:".897",wrc:151,woba:".396",iso:".121",bbpct:"15.2%",kpct:"14.3%",babip:".378"}, highLeverage:{pa:32,r:17,h:7,hr:0,rbi:9,avg:".241",obp:".313",slg:".276",ops:".588",wrc:68,woba:".272",iso:".034",bbpct:"9.4%",kpct:"12.5%",babip:".280"}, twoOuts:{pa:136,r:22,h:36,hr:3,rbi:19,avg:".293",obp:".360",slg:".374",ops:".734",wrc:106,woba:".328",iso:".081",bbpct:"9.6%",kpct:"18.4%",babip:".347"}}},
    { name:"Ronald Acuña Jr.", pos:"RF", bats:"R", throws:"R", dob:"1997-12-18", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", pa:348, avg:".232", obp:".336", slg:".409", ops:".746", hr:13, rbi:35, r:44, h:69, doubles:12, triples:1, sb:17, bbpct:"12.4%", kpct:"23.6%", war:0.8, war2:0.6, wrc:107, woba:".329", xwoba:".360", oaa:-7, frv:-5, batSpeed:75.9, squaredUp:"19.9%", fastSwing:"60.8%", laSwSp:"32.4%", idealAttack:"54.3%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:107,r:19,h:20,hr:4,rbi:5,avg:".222",obp:".346",slg:".422",ops:".768",wrc:112,woba:".338",iso:".200",bbpct:"15.0%",kpct:"26.2%",babip:".276"}, vsR:{pa:214,r:24,h:47,hr:9,rbi:29,avg:".255",obp:".350",slg:".446",ops:".796",wrc:119,woba:".348",iso:".190",bbpct:"11.2%",kpct:"22.0%",babip:".292"}, risp:{pa:60,r:1,h:11,hr:1,rbi:19,avg:".239",obp:".383",slg:".348",ops:".731",wrc:102,woba:".323",iso:".109",bbpct:"16.7%",kpct:"21.7%",babip:".294"}, highLeverage:{pa:21,r:9,h:2,hr:0,rbi:1,avg:".125",obp:".333",slg:".125",ops:".458",wrc:55,woba:".252",iso:".000",bbpct:"19.0%",kpct:"23.8%",babip:".182"}, twoOuts:{pa:96,r:9,h:18,hr:3,rbi:10,avg:".228",obp:".365",slg:".430",ops:".795",wrc:121,woba:".350",iso:".203",bbpct:"15.6%",kpct:"21.9%",babip:".273"}}},
    { name:"Matt Olson", pos:"1B", bats:"L", throws:"R", dob:"1994-03-29", draftYear:2012, draftRound:1, draftPick:47, draftType:"MLB", pa:570, avg:".258", obp:".333", slg:".531", ops:".865", hr:36, rbi:77, r:89, h:130, doubles:31, triples:0, sb:4, bbpct:"9.8%", kpct:"25.6%", war:4.1, war2:3.8, wrc:133, woba:".368", xwoba:".360", oaa:6, frv:6, batSpeed:74.9, squaredUp:"23.1%", fastSwing:"50.8%", laSwSp:"30.9%", idealAttack:"50.2%", armValue:null, armStrength:82.6, abs:{netOvr:-0.2, netRuns:-0.2, chal:14, won:4, lost:10, wonPct:"29%", chalRate:"4.9%", xChalRate:"3.3%", rateVsExp:"+1.7%"}, splits:{vsL:{pa:230,r:36,h:56,hr:14,rbi:30,avg:".267",obp:".326",slg:".529",ops:".855",wrc:131,woba:".366",iso:".262",bbpct:"7.4%",kpct:"25.2%",babip:".302"}, vsR:{pa:315,r:52,h:72,hr:22,rbi:47,avg:".263",obp:".352",slg:".569",ops:".922",wrc:146,woba:".388",iso:".307",bbpct:"12.1%",kpct:"25.1%",babip:".286"}, risp:{pa:129,r:6,h:23,hr:6,rbi:38,avg:".223",obp:".357",slg:".456",ops:".813",wrc:116,woba:".343",iso:".233",bbpct:"17.8%",kpct:"24.0%",babip:".246"}, highLeverage:{pa:46,r:21,h:11,hr:5,rbi:15,avg:".282",obp:".370",slg:".667",ops:"1.036",wrc:166,woba:".417",iso:".385",bbpct:"13.0%",kpct:"28.3%",babip:".273"}, twoOuts:{pa:193,r:39,h:42,hr:13,rbi:31,avg:".250",obp:".347",slg:".530",ops:".877",wrc:135,woba:".371",iso:".280",bbpct:"11.9%",kpct:"25.4%",babip:".274"}}},
    { name:"Michael Harris II", pos:"CF", bats:"L", throws:"L", dob:"2001-03-07", draftYear:2019, draftRound:3, draftPick:98, draftType:"MLB", pa:500, avg:".294", obp:".320", slg:".493", ops:".813", hr:21, rbi:71, r:62, h:140, doubles:30, triples:1, sb:7, bbpct:"3.6%", kpct:"19.6%", war:4.0, war2:3.5, wrc:120, woba:".350", xwoba:".343", oaa:10, frv:11, batSpeed:75.0, squaredUp:"24.0%", fastSwing:"50.7%", laSwSp:"28.9%", idealAttack:"46.8%", armValue:null, armStrength:84.4, abs:{netOvr:-3.2, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"5.6%", xChalRate:"3.1%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:176,r:19,h:46,hr:7,rbi:24,avg:".279",obp:".318",slg:".467",ops:".785",wrc:114,woba:".340",iso:".188",bbpct:"4.5%",kpct:"17.6%",babip:".305"}, vsR:{pa:299,r:40,h:84,hr:13,rbi:44,avg:".293",obp:".314",slg:".488",ops:".802",wrc:117,woba:".345",iso:".195",bbpct:"3.3%",kpct:"21.1%",babip:".333"}, risp:{pa:96,r:1,h:24,hr:1,rbi:38,avg:".279",obp:".323",slg:".407",ops:".730",wrc:98,woba:".317",iso:".128",bbpct:"5.2%",kpct:"12.5%",babip:".303"}, highLeverage:{pa:44,r:11,h:9,hr:1,rbi:14,avg:".237",obp:".295",slg:".421",ops:".717",wrc:92,woba:".307",iso:".184",bbpct:"4.5%",kpct:"20.5%",babip:".267"}, twoOuts:{pa:145,r:20,h:38,hr:4,rbi:20,avg:".279",obp:".324",slg:".412",ops:".736",wrc:103,woba:".324",iso:".132",bbpct:"5.5%",kpct:"20.0%",babip:".330"}}},
    { name:"Ozzie Albies", pos:"2B", bats:"S", throws:"R", dob:"1997-01-07", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:559, avg:".253", obp:".308", slg:".418", ops:".726", hr:20, rbi:65, r:73, h:127, doubles:23, triples:0, sb:2, bbpct:"7.0%", kpct:"14.1%", war:2.0, war2:1.5, wrc:97, woba:".315", xwoba:".283", oaa:-3, frv:-4, batSpeed:68.8, squaredUp:"27.0%", fastSwing:"5.4%", laSwSp:"33.8%", idealAttack:"57.6%", armValue:null, armStrength:71.6, abs:{netOvr:-0.2, netRuns:0.4, chal:9, won:4, lost:5, wonPct:"44%", chalRate:"5.8%", xChalRate:"5.7%", rateVsExp:"+0.1%"}, splits:{vsL:{pa:213,r:21,h:56,hr:8,rbi:29,avg:".283",obp:".310",slg:".470",ops:".780",wrc:108,woba:".331",iso:".187",bbpct:"3.8%",kpct:"7.0%",babip:".267"}, vsR:{pa:321,r:51,h:64,hr:12,rbi:35,avg:".228",obp:".305",slg:".388",ops:".693",wrc:91,woba:".305",iso:".160",bbpct:"9.3%",kpct:"18.7%",babip:".242"}, risp:{pa:129,r:3,h:30,hr:3,rbi:43,avg:".286",obp:".333",slg:".410",ops:".743",wrc:96,woba:".313",iso:".124",bbpct:"8.5%",kpct:"14.0%",babip:".284"}, highLeverage:{pa:45,r:22,h:10,hr:3,rbi:13,avg:".250",obp:".311",slg:".525",ops:".836",wrc:123,woba:".354",iso:".275",bbpct:"6.7%",kpct:"15.6%",babip:".226"}, twoOuts:{pa:176,r:26,h:37,hr:3,rbi:19,avg:".222",obp:".261",slg:".311",ops:".573",wrc:57,woba:".256",iso:".090",bbpct:"3.4%",kpct:"14.8%",babip:".246"}}},
    { name:"Mauricio Dubón", pos:"SS", bats:"R", throws:"R", dob:"1994-07-19", draftYear:2013, draftRound:26, draftPick:773, draftType:"MLB", pa:500, avg:".268", obp:".315", slg:".394", ops:".708", hr:10, rbi:62, r:56, h:124, doubles:24, triples:2, sb:6, bbpct:"6.0%", kpct:"12.4%", war:2.3, war2:1.7, wrc:95, woba:".312", xwoba:".306", oaa:4, frv:4, batSpeed:69.0, squaredUp:"29.1%", fastSwing:"4.0%", laSwSp:"35.9%", idealAttack:"38.6%", armValue:null, armStrength:88.3, abs:{netOvr:-5.2, netRuns:-1.2, chal:11, won:3, lost:8, wonPct:"27%", chalRate:"5.5%", xChalRate:"3.9%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:175,r:17,h:38,hr:4,rbi:23,avg:".235",obp:".276",slg:".377",ops:".652",wrc:77,woba:".285",iso:".142",bbpct:"5.1%",kpct:"10.9%",babip:".241"}, vsR:{pa:304,r:37,h:77,hr:6,rbi:38,avg:".275",obp:".326",slg:".396",ops:".722",wrc:100,woba:".319",iso:".121",bbpct:"6.6%",kpct:"13.8%",babip:".306"}, risp:{pa:113,r:3,h:34,hr:3,rbi:51,avg:".330",obp:".360",slg:".495",ops:".856",wrc:133,woba:".368",iso:".165",bbpct:"5.3%",kpct:"8.8%",babip:".337"}, highLeverage:{pa:45,r:11,h:15,hr:1,rbi:24,avg:".366",obp:".400",slg:".561",ops:".961",wrc:160,woba:".409",iso:".195",bbpct:"6.7%",kpct:"6.7%",babip:".368"}, twoOuts:{pa:152,r:20,h:33,hr:2,rbi:31,avg:".232",obp:".283",slg:".345",ops:".628",wrc:73,woba:".279",iso:".113",bbpct:"6.6%",kpct:"10.5%",babip:".250"}}},
    { name:"Austin Riley", pos:"3B", bats:"R", throws:"R", dob:"1997-04-02", draftYear:2015, draftRound:1, draftPick:41, draftType:"MLB", pa:520, avg:".223", obp:".296", slg:".366", ops:".662", hr:15, rbi:60, r:54, h:104, doubles:20, triples:1, sb:8, bbpct:"7.7%", kpct:"31.5%", war:0.9, war2:0.9, wrc:84, woba:".295", xwoba:".301", oaa:-1, frv:-2, batSpeed:75.7, squaredUp:"19.6%", fastSwing:"58.2%", laSwSp:"31.1%", idealAttack:"46.0%", armValue:null, armStrength:83.6, abs:{netOvr:-1.8, netRuns:-0.3, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"2.1%", xChalRate:"5.4%", rateVsExp:"-3.3%"}, splits:{vsL:{pa:155,r:15,h:32,hr:2,rbi:16,avg:".237",obp:".329",slg:".341",ops:".670",wrc:90,woba:".304",iso:".104",bbpct:"10.3%",kpct:"31.6%",babip:".353"}, vsR:{pa:341,r:38,h:68,hr:13,rbi:42,avg:".219",obp:".282",slg:".386",ops:".667",wrc:83,woba:".294",iso:".167",bbpct:"6.2%",kpct:"31.1%",babip:".284"}, risp:{pa:131,r:5,h:31,hr:5,rbi:47,avg:".256",obp:".290",slg:".455",ops:".745",wrc:99,woba:".318",iso:".198",bbpct:"4.6%",kpct:"35.1%",babip:".356"}, highLeverage:{pa:49,r:6,h:8,hr:1,rbi:15,avg:".178",obp:".204",slg:".289",ops:".493",wrc:28,woba:".212",iso:".111",bbpct:"4.1%",kpct:"28.6%",babip:".219"}, twoOuts:{pa:163,r:19,h:29,hr:3,rbi:20,avg:".196",obp:".270",slg:".304",ops:".574",wrc:60,woba:".260",iso:".108",bbpct:"7.4%",kpct:"32.5%",babip:".283"}}},
    { name:"Lane Thomas", pos:"LF/DH", bats:"R", throws:"R", dob:"1995-08-23", draftYear:2014, draftRound:5, draftPick:147, draftType:"MLB", pa:356, avg:".232", obp:".326", slg:".397", ops:".723", hr:11, rbi:40, r:35, h:72, doubles:18, triples:0, sb:8, bbpct:"11.8%", kpct:"24.7%", war:0.7, war2:0.9, wrc:102, woba:".321", xwoba:".318", oaa:-6, frv:-3, batSpeed:72.5, squaredUp:"25.2%", fastSwing:"24.4%", laSwSp:"36.8%", idealAttack:"60.2%", armValue:3, armStrength:92.2, abs:{netOvr:0, netRuns:0, chal:0, won:0, lost:0, wonPct:"0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:144,r:16,h:33,hr:5,rbi:16,avg:".270",obp:".375",slg:".467",ops:".842",wrc:135,woba:".369",iso:".197",bbpct:"14.6%",kpct:"22.9%",babip:".329"}, vsR:{pa:200,r:18,h:36,hr:6,rbi:23,avg:".203",obp:".290",slg:".356",ops:".646",wrc:80,woba:".289",iso:".153",bbpct:"10.0%",kpct:"25.5%",babip:".248"}, risp:{pa:89,r:2,h:16,hr:2,rbi:26,avg:".229",obp:".371",slg:".386",ops:".757",wrc:115,woba:".340",iso:".157",bbpct:"18.0%",kpct:"23.6%",babip:".286"}, highLeverage:{pa:35,r:11,h:10,hr:2,rbi:11,avg:".333",obp:".400",slg:".600",ops:"1.000",wrc:172,woba:".421",iso:".267",bbpct:"11.4%",kpct:"25.7%",babip:".400"}, twoOuts:{pa:116,r:12,h:24,hr:4,rbi:18,avg:".242",obp:".353",slg:".424",ops:".778",wrc:119,woba:".346",iso:".182",bbpct:"13.8%",kpct:"28.4%",babip:".323"}}},
    { name:"Jim Jarvis", pos:"SS", bats:"L", throws:"R", dob:"2000-11-06", draftYear:2023, draftRound:11, draftPick:320, draftType:"MLB", pa:124, avg:".207", obp:".267", slg:".297", ops:".564", hr:1, rbi:11, r:10, h:23, doubles:5, triples:1, sb:0, bbpct:"6.5%", kpct:"18.5%", war:0.5, war2:-0.1, wrc:56, woba:".254", xwoba:".268", oaa:-1, frv:0, batSpeed:71.0, squaredUp:"30.6%", fastSwing:"12.1%", laSwSp:"26.9%", idealAttack:"46.1%", armValue:null, armStrength:89.8, abs:{netOvr:null, netRuns:null, chal:0, won:0, lost:0, wonPct:"0.0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:23,r:3,h:3,hr:0,rbi:2,avg:".158",obp:".304",slg:".263",ops:".568",wrc:68,woba:".271",iso:".105",bbpct:"13.0%",kpct:"17.4%",babip:".200"}, vsR:{pa:94,r:7,h:20,hr:1,rbi:9,avg:".230",obp:".256",slg:".322",ops:".577",wrc:56,woba:".254",iso:".092",bbpct:"3.2%",kpct:"18.1%",babip:".275"}, risp:{pa:29,r:0,h:6,hr:0,rbi:8,avg:".231",obp:".231",slg:".346",ops:".577",wrc:51,woba:".247",iso:".115",bbpct:"0.0%",kpct:"17.2%",babip:".286"}, highLeverage:{pa:7,r:1,h:1,hr:0,rbi:2,avg:".167",obp:".167",slg:".333",ops:".500",wrc:27,woba:".210",iso:".167",bbpct:"0.0%",kpct:"14.3%",babip:".200"}, twoOuts:{pa:31,r:5,h:10,hr:0,rbi:3,avg:".357",obp:".419",slg:".500",ops:".919",wrc:156,woba:".402",iso:".143",bbpct:"6.5%",kpct:"25.8%",babip:".500"}}},
    { name:"Mike Yastrzemski", pos:"LF/DH", bats:"L", throws:"L", dob:"1990-08-23", draftYear:2013, draftRound:14, draftPick:429, draftType:"MLB", pa:328, avg:".229", obp:".317", slg:".385", ops:".702", hr:9, rbi:34, r:40, h:66, doubles:16, triples:1, sb:1, bbpct:"10.4%", kpct:"24.1%", war:0.9, war2:0.5, wrc:95, woba:".312", xwoba:".312", oaa:-2, frv:-1, batSpeed:71.4, squaredUp:"28.8%", fastSwing:"7.9%", laSwSp:"32.2%", idealAttack:"63.5%", armValue:null, armStrength:84.9, abs:{netOvr:2.8, netRuns:0.7, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.4%", xChalRate:"3.4%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".265",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:281,r:36,h:57,hr:9,rbi:33,avg:".229",obp:".310",slg:".406",ops:".715",wrc:97,woba:".315",iso:".177",bbpct:"10.0%",kpct:"22.1%",babip:".267"}, risp:{pa:74,r:2,h:17,hr:2,rbi:24,avg:".262",obp:".324",slg:".431",ops:".755",wrc:105,woba:".327",iso:".169",bbpct:"9.5%",kpct:"39.2%",babip:".417"}, highLeverage:{pa:26,r:7,h:7,hr:1,rbi:10,avg:".292",obp:".346",slg:".500",ops:".846",wrc:131,woba:".366",iso:".208",bbpct:"7.7%",kpct:"34.6%",babip:".429"}, twoOuts:{pa:95,r:16,h:14,hr:3,rbi:12,avg:".165",obp:".253",slg:".329",ops:".582",wrc:61,woba:".261",iso:".165",bbpct:"9.5%",kpct:"35.8%",babip:".229"}}},
    { name:"Dominic Smith", pos:"DH", bats:"L", throws:"L", dob:"1995-06-15", draftYear:2013, draftRound:1, draftPick:11, draftType:"MLB", pa:286, avg:".261", obp:".316", slg:".385", ops:".701", hr:8, rbi:44, r:39, h:67, doubles:6, triples:1, sb:0, bbpct:"7.3%", kpct:"15.7%", war:0.1, war2:-0.3, wrc:92, woba:".307", xwoba:".299", oaa:0, frv:0, batSpeed:68.8, squaredUp:"29.7%", fastSwing:"6.5%", laSwSp:"33.5%", idealAttack:"49.4%", armValue:null, armStrength:null, abs:{netOvr:0.3, netRuns:-0.1, chal:8, won:4, lost:4, wonPct:"50%", chalRate:"5.9%", xChalRate:"4.3%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:36,r:3,h:5,hr:0,rbi:2,avg:".161",obp:".257",slg:".194",ops:".451",wrc:32,woba:".217",iso:".032",bbpct:"11.1%",kpct:"13.9%",babip:".192"}, vsR:{pa:244,r:36,h:61,hr:8,rbi:42,avg:".277",obp:".328",slg:".418",ops:".746",wrc:103,woba:".324",iso:".141",bbpct:"7.0%",kpct:"15.6%",babip:".296"}, risp:{pa:79,r:4,h:21,hr:4,rbi:39,avg:".318",obp:".359",slg:".530",ops:".889",wrc:132,woba:".367",iso:".212",bbpct:"7.6%",kpct:"10.1%",babip:".288"}, highLeverage:{pa:37,r:10,h:5,hr:2,rbi:17,avg:".172",obp:".250",slg:".448",ops:".698",wrc:78,woba:".286",iso:".276",bbpct:"10.8%",kpct:"24.3%",babip:".143"}, twoOuts:{pa:96,r:15,h:27,hr:2,rbi:17,avg:".310",obp:".375",slg:".402",ops:".777",wrc:119,woba:".348",iso:".092",bbpct:"7.3%",kpct:"16.7%",babip:".362"}}},
    { name:"Ha-Seong Kim", pos:"SS", bats:"R", throws:"R", dob:"1995-10-17", draftYear:2020, draftRound:null, draftPick:null, draftType:"IFA", pa:85, avg:".066", obp:".165", slg:".066", ops:".230", hr:0, rbi:4, r:5, h:5, doubles:0, triples:0, sb:1, bbpct:"10.6%", kpct:"27.1%", war:-1.0, war2:-1.2, wrc:-29, woba:".126", xwoba:".207", oaa:-3, frv:-3, batSpeed:71.8, squaredUp:"17.0%", fastSwing:"20.0%", laSwSp:"19.6%", idealAttack:"56.3%", armValue:null, armStrength:85.3, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:45,r:1,h:2,hr:0,rbi:3,avg:".049",obp:".133",slg:".049",ops:".182",wrc:-2,woba:".102",iso:".000",bbpct:"8.9%",kpct:"28.9%",babip:".071"}, vsR:{pa:40,r:4,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-1,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:21,r:0,h:3,hr:0,rbi:4,avg:".176",obp:".333",slg:".176",ops:".510",wrc:2,woba:".260",iso:".000",bbpct:"19.0%",kpct:"19.0%",babip:".231"}, highLeverage:{pa:8,r:4,h:2,hr:0,rbi:1,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:36,r:1,h:2,hr:0,rbi:2,avg:".065",obp:".194",slg:".065",ops:".259",wrc:-1,woba:".146",iso:".000",bbpct:"13.9%",kpct:"27.8%",babip:".095"}}},
    { name:"Sean Murphy", pos:"C", bats:"R", throws:"R", dob:"1994-10-04", draftYear:2016, draftRound:3, draftPick:83, draftType:"MLB", pa:42, avg:".143", obp:".143", slg:".167", ops:".310", hr:0, rbi:1, r:1, h:6, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"38.1%", war:-0.6, war2:-0.4, wrc:-23, woba:".136", xwoba:".159", oaa:null, frv:-1, batSpeed:70.9, squaredUp:"20.6%", fastSwing:"20.6%", laSwSp:"12.5%", idealAttack:"40.4%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:12,r:1,h:1,hr:0,rbi:1,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-1,woba:".074",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".125"}, vsR:{pa:19,r:0,h:3,hr:0,rbi:0,avg:".158",obp:".158",slg:".211",ops:".368",wrc:0,woba:".160",iso:".053",bbpct:"0.0%",kpct:"47.4%",babip:".300"}, risp:{pa:7,r:0,h:1,hr:0,rbi:0,avg:".143",obp:".143",slg:".143",ops:".286",wrc:0,woba:".127",iso:".000",bbpct:"0.0%",kpct:"28.6%",babip:".200"}, highLeverage:{pa:2,r:1,h:1,hr:0,rbi:0,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".500"}, twoOuts:{pa:8,r:1,h:1,hr:0,rbi:0,avg:".125",obp:".125",slg:".125",ops:".250",wrc:0,woba:".111",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".167"}}},
    { name:"Jorge Mateo", pos:"SS", bats:"R", throws:"R", dob:"1995-06-23", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", pa:137, avg:".240", obp:".285", slg:".380", ops:".665", hr:4, rbi:11, r:29, h:31, doubles:6, triples:0, sb:10, bbpct:"5.8%", kpct:"29.9%", war:0.7, war2:0.5, wrc:82, woba:".292", xwoba:".322", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.2%", fastSwing:"35.3%", laSwSp:"45.5%", idealAttack:"42.9%", armValue:null, armStrength:88.3, abs:{netOvr:-6.2, netRuns:-1.1, chal:8, won:1, lost:7, wonPct:"13%", chalRate:"11.4%", xChalRate:"4.8%", rateVsExp:"+6.6%"}, splits:{vsL:{pa:54,r:10,h:12,hr:2,rbi:3,avg:".231",obp:".259",slg:".365",ops:".625",wrc:69,woba:".273",iso:".135",bbpct:"3.7%",kpct:"33.3%",babip:".313"}, vsR:{pa:83,r:19,h:19,hr:2,rbi:8,avg:".247",obp:".301",slg:".390",ops:".691",wrc:89,woba:".304",iso:".143",bbpct:"7.2%",kpct:"27.7%",babip:".327"}, risp:{pa:32,r:23,h:7,hr:0,rbi:6,avg:".241",obp:".313",slg:".241",ops:".554",wrc:60,woba:".260",iso:".000",bbpct:"9.4%",kpct:"31.3%",babip:".368"}, highLeverage:{pa:14,r:9,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:71,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:45,r:12,h:9,hr:1,rbi:5,avg:".214",obp:".267",slg:".333",ops:".600",wrc:64,woba:".266",iso:".119",bbpct:"6.7%",kpct:"26.7%",babip:".276"}}},
    { name:"Eli White", pos:"OF", bats:"R", throws:"R", dob:"1994-06-26", draftYear:2016, draftRound:11, draftPick:322, draftType:"MLB", pa:144, avg:".233", obp:".285", slg:".406", ops:".691", hr:5, rbi:17, r:17, h:31, doubles:6, triples:1, sb:4, bbpct:"6.3%", kpct:"21.5%", war:1.1, war2:0.6, wrc:87, woba:".301", xwoba:".269", oaa:2, frv:3, batSpeed:73.0, squaredUp:"20.6%", fastSwing:"29.4%", laSwSp:"31.6%", idealAttack:"53.8%", armValue:null, armStrength:88.7, abs:{netOvr:-0.8, netRuns:0.5, chal:3, won:2, lost:1, wonPct:"67%", chalRate:"4.3%", xChalRate:"6.3%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:89,r:8,h:18,hr:4,rbi:12,avg:".228",obp:".303",slg:".443",ops:".746",wrc:102,woba:".323",iso:".215",bbpct:"9.0%",kpct:"24.7%",babip:".259"}, vsR:{pa:50,r:9,h:10,hr:1,rbi:5,avg:".204",obp:".220",slg:".327",ops:".547",wrc:45,woba:".237",iso:".122",bbpct:"2.0%",kpct:"18.0%",babip:".231"}, risp:{pa:38,r:12,h:7,hr:1,rbi:11,avg:".219",obp:".316",slg:".344",ops:".660",wrc:84,woba:".296",iso:".125",bbpct:"13.2%",kpct:"18.4%",babip:".240"}, highLeverage:{pa:20,r:4,h:2,hr:0,rbi:4,avg:".111",obp:".200",slg:".111",ops:".311",wrc:-7,woba:".159",iso:".000",bbpct:"10.0%",kpct:"15.0%",babip:".133"}, twoOuts:{pa:40,r:7,h:7,hr:2,rbi:4,avg:".194",obp:".275",slg:".389",ops:".664",wrc:82,woba:".292",iso:".194",bbpct:"10.0%",kpct:"20.0%",babip:".192"}}},
    { name:"Sandy León", pos:"C", bats:"S", throws:"R", dob:"1989-03-13", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-6,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", bats:"R", throws:"R", dob:"1995-03-21", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".185", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Joey Bart", pos:"C", bats:"R", throws:"R", dob:"1996-12-15", draftYear:2018, draftRound:1, draftPick:2, draftType:"MLB", pa:119, avg:".226", obp:".303", slg:".377", ops:".680", hr:4, rbi:13, r:13, h:24, doubles:4, triples:0, sb:0, bbpct:"4.3%", kpct:"27.0%", war:0.4, war2:0.3, wrc:91, woba:".307", xwoba:".292", oaa:null, frv:0, batSpeed:75.5, squaredUp:"17.0%", fastSwing:"52.8%", laSwSp:"36.2%", idealAttack:"46.6%", avgPop:1.98, armValue:null, armStrength:83.9, abs:{netOvr:-4.2, netRuns:-2.8, chal:3, won:0, lost:3, wonPct:"0%", chalRate:"4.3%", xChalRate:"4.5%", rateVsExp:"-0.1%"}, absCatch:{netOvr:0.5, netRuns:-0.4, chal:25, won:15, lost:10, wonPct:"60%", chalRate:"1.8%", xChalRate:"2.5%", rateVsExp:"-0.7%"}, splits:{vsL:{pa:55,r:5,h:7,hr:1,rbi:5,avg:".143",obp:".236",slg:".265",ops:".502",wrc:41,woba:".232",iso:".122",bbpct:"5.5%",kpct:"30.9%",babip:".194"}, vsR:{pa:54,r:8,h:15,hr:3,rbi:8,avg:".306",obp:".352",slg:".510",ops:".862",wrc:133,woba:".371",iso:".204",bbpct:"3.7%",kpct:"24.1%",babip:".353"}, risp:{pa:30,r:9,h:5,hr:1,rbi:7,avg:".192",obp:".267",slg:".308",ops:".574",wrc:57,woba:".256",iso:".115",bbpct:"10.0%",kpct:"33.3%",babip:".250"}, highLeverage:{pa:14,r:4,h:2,hr:1,rbi:2,avg:".167",obp:".286",slg:".417",ops:".702",wrc:92,woba:".309",iso:".250",bbpct:"14.3%",kpct:"35.7%",babip:".167"}, twoOuts:{pa:34,r:6,h:5,hr:3,rbi:6,avg:".167",obp:".265",slg:".467",ops:".731",wrc:98,woba:".317",iso:".300",bbpct:"2.9%",kpct:"20.6%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"DH", bats:"L", throws:"L", dob:"1995-03-16", draftYear:2013, draftRound:30, draftPick:895, draftType:"MLB", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:156,woba:".403",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Brewer Hicklen", pos:"OF", bats:"R", throws:"R", dob:"1996-02-09", draftYear:2017, draftRound:7, draftPick:210, draftType:"MLB", pa:23, avg:".368", obp:".478", slg:".579", ops:"1.057", hr:0, rbi:3, r:5, h:7, doubles:4, triples:0, sb:0, bbpct:"17.4%", kpct:"34.8%", war:0.2, war2:0.3, wrc:192, woba:".457", xwoba:".354", oaa:-1, frv:-1, batSpeed:73.0, squaredUp:"20.0%", fastSwing:"32.5%", laSwSp:"45.5%", idealAttack:"57.5%", armValue:null, armStrength:null, splits:{vsL:{pa:3,r:0,h:2,hr:0,rbi:2,avg:".667",obp:".667",slg:"1.333",ops:"2.000",wrc:447,woba:".839",iso:".667",bbpct:"0.0%",kpct:"33.3%",babip:"1.000"}, vsR:{pa:18,r:4,h:5,hr:0,rbi:1,avg:".333",obp:".444",slg:".467",ops:".911",wrc:157,woba:".404",iso:".133",bbpct:"16.7%",kpct:"33.3%",babip:".556"}, risp:{pa:8,r:0,h:4,hr:0,rbi:3,avg:".500",obp:".500",slg:".875",ops:"1.375",wrc:277,woba:".583",iso:".375",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, highLeverage:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:12,r:2,h:4,hr:0,rbi:2,avg:".400",obp:".500",slg:".600",ops:"1.100",wrc:204,woba:".474",iso:".200",bbpct:"16.7%",kpct:"41.7%",babip:".800"}}},
  ];

export const starters = [
    // Updated August 4, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    { name:"Chris Sale", throws:"L", dob:"1989-03-30", draftYear:2010, draftRound:1, draftPick:13, draftType:"MLB", wl:"12-9", era:"2.20", ip:"135.0", kpct:"30.6%", bbpct:"5.2%", kbb:"25.5%", whip:"1.026", war:4.5, war2:4.9, fip:"2.24", xfip:"2.74", siera:"2.82", batSpeed:71.0, fastSwing:"20.6%", swstr:"13.6%", cstr:"17.3%", csw:"30.9%", laSwSp:"34.8%", idealAttack:"44.6%", splits:{vsL:{ip:"30.0",era:"2.10",fip:"1.75",xfip:"2.02",whip:"1.13",avg:".248",obp:".302",slg:".359",woba:".294",kpct:"31.5%",bbpct:"3.9%",kbb:"27.6%"}, vsR:{ip:"99.0",era:"2.18",fip:"2.45",xfip:"3.01",whip:"0.98",avg:".206",obp:".264",slg:".287",woba:".250",kpct:"30.8%",bbpct:"5.9%",kbb:"24.9%"}}},
    { name:"Tyler Mahle", throws:"R", dob:"1994-09-29", draftYear:2013, draftRound:7, draftPick:226, draftType:"MLB", wl:"5-10", era:"4.41", ip:"118.1", kpct:"22.5%", bbpct:"8.5%", kbb:"14.0%", whip:"1.318", war:1.1, war2:1.4, fip:"4.09", xfip:"3.94", siera:"4.09", batSpeed:72.3, fastSwing:"27.5%", swstr:"9.5%", cstr:"17.7%", csw:"27.2%", laSwSp:"32.5%", idealAttack:"53.1%", splits:{vsL:{ip:"62.0",era:"3.92",fip:"3.24",xfip:"3.54",whip:"1.05",avg:".223",obp:".275",slg:".386",woba:".288",kpct:"27.4%",bbpct:"6.6%",kbb:"20.7%"}, vsR:{ip:"44.2",era:"5.64",fip:"5.27",xfip:"4.41",whip:"1.70",avg:".294",obp:".376",slg:".461",woba:".368",kpct:"18.8%",bbpct:"11.1%",kbb:"7.7%"}}},
    { name:"Reynaldo López", throws:"R", dob:"1994-01-04", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", wl:"4-3", era:"3.64", ip:"71.2", kpct:"21.6%", bbpct:"9.5%", kbb:"12.1%", whip:"1.340", fip:"4.33", war:0.8, war2:0.5, xfip:"4.42", siera:"4.32", batSpeed:71.7, fastSwing:"23.6%", swstr:"9.2%", cstr:"16.6%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"43.2%", splits:{vsL:{ip:"37.2",era:"4.06",fip:"5.09",xfip:"5.23",whip:"1.57",avg:".218",obp:".347",slg:".394",woba:".333",kpct:"21.6%",bbpct:"16.4%",kbb:"5.3%"}, vsR:{ip:"34.0",era:"3.18",fip:"3.48",xfip:"3.54",whip:"1.09",avg:".273",obp:".281",slg:".432",woba:".307",kpct:"21.5%",bbpct:"0.7%",kbb:"20.7%"}}},
    { name:"Martín Pérez", throws:"L", dob:"1991-04-04", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", wl:"8-7", era:"3.15", ip:"111.1", kpct:"18.2%", bbpct:"9.9%", kbb:"8.4%", whip:"1.195", fip:"4.15", war:2.4, war2:1.2, xfip:"4.24", siera:"4.64", batSpeed:73.5, fastSwing:"37.3%", swstr:"8.5%", cstr:"18.7%", csw:"27.2%", laSwSp:"33.4%", idealAttack:"52.1%", splits:{vsL:{ip:"30.1",era:"3.56",fip:"3.74",xfip:"3.18",whip:"1.09",avg:".235",obp:".285",slg:".391",woba:".297",kpct:"22.8%",bbpct:"4.9%",kbb:"17.9%"}, vsR:{ip:"76.0",era:"2.72",fip:"4.37",xfip:"4.63",whip:"1.17",avg:".196",obp:".291",slg:".332",woba:".278",kpct:"16.9%",bbpct:"12.1%",kbb:"4.9%"}}},
    { name:"Bryce Elder", throws:"R", dob:"1999-05-19", draftYear:2020, draftRound:5, draftPick:156, draftType:"MLB", wl:"8-7", era:"3.92", ip:"137.2", kpct:"19.5%", bbpct:"7.9%", kbb:"11.6%", whip:"1.235", fip:"4.57", war:1.4, war2:1.1, xfip:"4.16", siera:"4.38", batSpeed:72.7, fastSwing:"28.8%", swstr:"8.9%", cstr:"16.4%", csw:"25.3%", laSwSp:"32.5%", idealAttack:"52.3%", splits:{vsL:{ip:"88.1",era:"3.87",fip:"4.50",xfip:"4.34",whip:"1.12",avg:".206",obp:".279",slg:".371",woba:".287",kpct:"20.2%",bbpct:"9.1%",kbb:"11.1%"}, vsR:{ip:"49.1",era:"4.01",fip:"4.68",xfip:"3.85",whip:"1.44",avg:".286",obp:".332",slg:".448",woba:".341",kpct:"18.3%",bbpct:"6.0%",kbb:"12.4%"}}},
    { name:"Grant Holmes", throws:"R", dob:"1996-03-22", draftYear:2014, draftRound:1, draftPick:22, draftType:"MLB", wl:"8-5", era:"3.64", ip:"123.2", kpct:"18.9%", bbpct:"10.2%", kbb:"8.7%", whip:"1.318", fip:"4.85", war:2.0, war2:0.5, xfip:"4.58", siera:"4.75", batSpeed:72.9, fastSwing:"31.7%", swstr:"12.2%", cstr:"14.6%", csw:"26.7%", laSwSp:"33.9%", idealAttack:"51.5%", splits:{vsL:{ip:"67.2",era:"3.06",fip:"5.28",xfip:"4.61",whip:"1.33",avg:".230",obp:".319",slg:".411",woba:".322",kpct:"19.2%",bbpct:"11.5%",kbb:"7.7%"}, vsR:{ip:"46.1",era:"4.08",fip:"4.19",xfip:"4.37",whip:"1.29",avg:".247",obp:".308",slg:".396",woba:".310",kpct:"19.4%",bbpct:"7.5%",kbb:"11.9%"}}},
    { name:"JR Ritchie", throws:"R", dob:"2003-06-26", draftYear:2022, draftRound:1, draftPick:35, draftType:"MLB", wl:"1-2", era:"4.50", ip:"58.0", kpct:"20.7%", bbpct:"14.1%", whip:"1.431", fip:"5.41", war:0.1, war2:-0.2, xfip:"4.91", siera:"4.96", batSpeed:72.4, fastSwing:"28.6%", swstr:"8.4%", cstr:"16.9%", csw:"25.3%", laSwSp:"30.0%", idealAttack:"56.6%", splits:{vsL:{ip:"33.2",era:"5.08",fip:"6.04",xfip:"5.35",whip:"1.63",avg:".236",obp:".376",slg:".417",woba:".353",kpct:"21.0%",bbpct:"15.9%",kbb:"5.1%"}, vsR:{ip:"24.1",era:"3.70",fip:"4.54",xfip:"4.31",whip:"1.15",avg:".198",obp:".293",slg:".314",woba:".276",kpct:"20.2%",bbpct:"11.1%",kbb:"9.1%"}}},
    { name:"Spencer Strider", throws:"R", dob:"1998-10-28", draftYear:2020, draftRound:4, draftPick:126, draftType:"MLB", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.36", xfip:"4.40", siera:"4.17", batSpeed:72.3, fastSwing:"24.9%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.67",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".341",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.96",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".377",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"AJ Smith-Shawver", throws:"R", dob:"2002-11-20", draftYear:2021, draftRound:7, draftPick:217, draftType:"MLB", wl:"0-0", era:"6.23", ip:"8.2", kpct:"17.5%", bbpct:"12.5%", kbb:"5.0%", whip:"1.615", war:-0.1, war2:0.2, fip:"3.20", xfip:"4.95", siera:"5.23", batSpeed:72.1, fastSwing:"29.0%", swstr:"9.7%", cstr:"15.3%", csw:"25.0%", laSwSp:"32.1%", idealAttack:"51.6%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"6.11",xfip:"3.82",whip:"1.09",avg:".231",obp:".333",slg:".462",woba:".350",kpct:"26.7%",bbpct:"6.7%",kbb:"20.0%"}, vsR:{ip:"3.0",era:"3.00",fip:"2.77",xfip:"6.37",whip:"1.33",avg:".231",obp:".286",slg:".308",woba:".267",kpct:"14.3%",bbpct:"7.1%",kbb:"7.1%"}}},
    { name:"Hurston Waldrep", throws:"R", dob:"2002-03-01", draftYear:2023, draftRound:1, draftPick:24, draftType:"MLB", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.44", xfip:"5.94", siera:"5.68", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"55.7%", splits:{vsL:{ip:"6.1",era:"9.95",fip:"8.47",xfip:"5.83",whip:"1.74",avg:".240",obp:".387",slg:".480",woba:".382",kpct:"16.1%",bbpct:"16.1%",kbb:"0.0%"}, vsR:{ip:"4.1",era:"6.23",fip:"8.41",xfip:"6.13",whip:"2.77",avg:".368",obp:".520",slg:".526",woba:".464",kpct:"16.0%",bbpct:"20.0%",kbb:"-4.0%"}}},
    { name:"Owen Murphy", throws:"R", dob:"2003-09-27", draftYear:2022, draftRound:1, draftPick:20, draftType:"MLB", wl:"0-1", era:"4.05", ip:"6.2", kpct:"20.7%", bbpct:"6.9%", whip:"1.200", war:-0.1, war2:0.1, fip:"4.60", xfip:"4.95", siera:"4.37", batSpeed:72.3, fastSwing:"29.7%", swstr:"9.5%", cstr:"12.1%", csw:"21.6%", laSwSp:"40.0%", idealAttack:"46.9%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"6.11",xfip:"3.82",whip:"1.09",avg:".231",obp:".333",slg:".462",woba:".350",kpct:"26.7%",bbpct:"6.7%",kbb:"20.0%"}, vsR:{ip:"3.0",era:"3.00",fip:"2.77",xfip:"6.37",whip:"1.33",avg:".231",obp:".286",slg:".308",woba:".267",kpct:"14.3%",bbpct:"7.1%",kbb:"7.1%"}}},
  ];
 
  export const bullpen = [
    // Updated August 4, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    { name:"Raisel Iglesias", role:"CL", throws:"R", dob:"1990-01-04", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", era:"3.00", ip:"48.0", sv:27, kpct:"26.0%", bbpct:"7.7%", kbb:"18.4%", whip:"1.188", fip:"3.31", war:0.9, war2:0.8, xfip:"3.69", siera:"3.30", batSpeed:71.8, fastSwing:"27.3%", swstr:"13.9%", cstr:"17.8%", csw:"31.6%", laSwSp:"31.7%", idealAttack:"49.3%", splits:{vsL:{ip:"25.1",era:"2.84",fip:"3.72",xfip:"4.16",whip:"1.03",avg:".209",obp:".265",slg:".352",woba:".273",kpct:"22.4%",bbpct:"7.1%",kbb:"15.3%"}, vsR:{ip:"17.1",era:"3.12",fip:"1.88",xfip:"2.35",whip:"1.38",avg:".271",obp:".329",slg:".357",woba:".308",kpct:"34.2%",bbpct:"6.6%",kbb:"27.6%"}}},
    { name:"Dylan Lee", role:"RP", throws:"L", dob:"1994-08-01", draftYear:2016, draftRound:10, draftPick:293, draftType:"MLB", era:"2.15", ip:"58.2", sv:0, kpct:"33.2%", bbpct:"6.4%", kbb:"26.8%", whip:"0.759", fip:"1.98", war:1.9, war2:1.9, xfip:"2.96", siera:"2.45", batSpeed:72.6, fastSwing:"28.4%", swstr:"18.0%", cstr:"15.4%", csw:"33.4%", laSwSp:"33.9%", idealAttack:"49.9%", splits:{vsL:{ip:"20.1",era:"2.21",fip:"1.42",xfip:"2.61",whip:"0.69",avg:".119",obp:".189",slg:".224",woba:".186",kpct:"34.7%",bbpct:"8.0%",kbb:"26.7%"}, vsR:{ip:"33.0",era:"1.91",fip:"2.39",xfip:"3.00",whip:"0.79",avg:".172",obp:".211",slg:".276",woba:".216",kpct:"32.5%",bbpct:"4.9%",kbb:"27.6%"}}},
    { name:"Robert Suarez", role:"RP", throws:"R", dob:"1991-03-01", draftYear:2021, draftRound:null, draftPick:null, draftType:"IFA", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.40", siera:"3.35", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"53.6%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.73",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".170",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.99",xfip:"3.02",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".243",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", throws:"R", dob:"2005-06-17", draftYear:2022, draftRound:null, draftPick:null, draftType:"IFA", era:"2.51", ip:"57.1", sv:2, kpct:"31.8%", bbpct:"6.4%", kbb:"25.3%", whip:"1.081", fip:"2.30", war:1.8, war2:1.9, xfip:"2.84", siera:"2.55", batSpeed:71.9, fastSwing:"24.8%", swstr:"14.6%", cstr:"14.5%", csw:"29.1%", laSwSp:"35.4%", idealAttack:"43.2%", splits:{vsL:{ip:"27.2",era:"3.25",fip:"2.48",xfip:"2.60",whip:"1.12",avg:".231",obp:".281",slg:".365",woba:".283",kpct:"35.1%",bbpct:"6.1%",kbb:"28.9%"}, vsR:{ip:"23.0",era:"1.57",fip:"2.09",xfip:"3.54",whip:"1.04",avg:".193",obp:".269",slg:".217",woba:".224",kpct:"26.9%",bbpct:"8.6%",kbb:"18.3%"}}},
    { name:"Dylan Dodd", role:"RP", throws:"L", dob:"1998-06-06", draftYear:2021, draftRound:3, draftPick:96, draftType:"MLB", era:"2.21", ip:"40.2", sv:1, kpct:"27.2%", bbpct:"8.2%", kbb:"19.0%", whip:"0.912", fip:"3.36", war:1.3, war2:0.6, xfip:"3.82", siera:"3.32", batSpeed:72.4, fastSwing:"29.8%", swstr:"12.9%", cstr:"11.3%", csw:"24.2%", laSwSp:"37.2%", idealAttack:"53.1%", splits:{vsL:{ip:"15.1",era:"2.35",fip:"3.94",xfip:"3.92",whip:"1.11",avg:".164",obp:".281",slg:".327",woba:".271",kpct:"31.3%",bbpct:"12.5%",kbb:"18.8%"}, vsR:{ip:"21.0",era:"1.71",fip:"2.47",xfip:"3.51",whip:"0.62",avg:".130",obp:".178",slg:".203",woba:".174",kpct:"25.7%",bbpct:"5.4%",kbb:"20.3%"}}},
    { name:"Brent Suter", role:"RP", throws:"L", dob:"1989-08-29", draftYear:2012, draftRound:31, draftPick:946, draftType:"MLB", era:"3.70", ip:"75.1", sv:0, kpct:"19.7%", bbpct:"6.7%", kbb:"13.1%", whip:"1.261", fip:"3.70", war:0.4, war2:0.5, xfip:"3.66", siera:"3.72", batSpeed:71.1, fastSwing:"20.4%", swstr:"8.9%", cstr:"18.7%", csw:"27.5%", laSwSp:"35.1%", idealAttack:"42.9%", splits:{vsL:{ip:"28.2",era:"5.02",fip:"4.16",xfip:"3.62",whip:"1.33",avg:".278",obp:".333",slg:".500",woba:".358",kpct:"20.5%",bbpct:"6.8%",kbb:"13.7%"}, vsR:{ip:"42.2",era:"3.16",fip:"3.50",xfip:"3.74",whip:"1.27",avg:".250",obp:".300",slg:".387",woba:".300",kpct:"19.2%",bbpct:"6.6%",kbb:"12.6%"}}},
    { name:"Víctor Mederos", role:"RP", throws:"R", dob:"2001-06-08", draftYear:2022, draftRound:6, draftPick:178, draftType:"MLB", era:"3.68", ip:"22.0", sv:1, kpct:"21.7%", bbpct:"7.6%", kbb:"14.1%", whip:"1.145", fip:"3.08", war:0.3, war2:0.3, xfip:"4.66", siera:"3.81", batSpeed:73.0, fastSwing:"34.7%", swstr:"13.6%", cstr:"13.3%", csw:"26.8%", laSwSp:"34.6%", idealAttack:"56.9%", splits:{vsL:{ip:"8.0",era:"5.63",fip:"3.21",xfip:"6.06",whip:"1.38",avg:".323",obp:".371",slg:".452",woba:".357",kpct:"11.1%",bbpct:"2.8%",kbb:"8.3%"}, vsR:{ip:"10.1",era:"2.61",fip:"3.57",xfip:"4.23",whip:"0.97",avg:".111",obp:".238",slg:".278",woba:".238",kpct:"31.7%",bbpct:"14.6%",kbb:"17.1%"}}},
    { name:"Tyler Kinley", role:"RP", throws:"R", dob:"1991-01-31", draftYear:2013, draftRound:16, draftPick:472, draftType:"MLB", era:"4.01", ip:"42.2", sv:0, kpct:"23.5%", bbpct:"11.2%", kbb:"12.3%", whip:"1.286", fip:"5.40", war:0.4, war2:-0.4, xfip:"4.73", siera:"4.17", batSpeed:70.9, fastSwing:"17.8%", swstr:"11.7%", cstr:"18.3%", csw:"30.1%", laSwSp:"35.1%", idealAttack:"56.4%", splits:{vsL:{ip:"21.0",era:"6.86",fip:"6.76",xfip:"4.37",whip:"1.14",avg:".194",obp:".289",slg:".514",woba:".327",kpct:"26.5%",bbpct:"12.0%",kbb:"14.5%"}, vsR:{ip:"20.0",era:"0.90",fip:"3.29",xfip:"4.76",whip:"1.35",avg:".247",obp:".326",slg:".338",woba:".301",kpct:"20.9%",bbpct:"9.3%",kbb:"11.6%"}}},
    { name:"Ray Kerr", role:"RP", throws:"R", dob:"1994-09-10", draftYear:2017, draftRound:null, draftPick:null, draftType:"UDFA", era:"0.0", ip:"2.1", sv:0, kpct:"0.0%", bbpct:"0.0%", kbb:"0.0%", whip:"0.429", fip:"4.37", war:0.1, war2:0.0, xfip:"6.32", siera:"5.68", batSpeed:72.2, fastSwing:"28.6%", swstr:"8.8%", cstr:"5.9%", csw:"14.7%", laSwSp:"22.2%", idealAttack:"50.0%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.71",xfip:"4.63",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".499",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.11",xfip:"3.62",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".244",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
    { name:"James Karinchak", role:"RP", throws:"R", dob:"1995-09-22", draftYear:2017, draftRound:9, draftPick:282, draftType:"MLB", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.34", war:0.3, war2:0.0, xfip:"5.38", siera:"4.93", batSpeed:71.9, fastSwing:"25.5%", swstr:"8.6%", cstr:"19.8%", csw:"28.4%", laSwSp:"20.8%", idealAttack:"61.8%", splits:{vsL:{ip:"3.1",era:"2.70",fip:"7.00",xfip:"5.39",whip:"1.50",avg:".250",obp:".357",slg:".583",woba:".399",kpct:"21.4%",bbpct:"14.3%",kbb:"7.1%"}, vsR:{ip:"6.1",era:"1.42",fip:"2.94",xfip:"5.35",whip:"0.63",avg:".053",obp:".174",slg:".053",woba:".130",kpct:"21.7%",bbpct:"13.0%",kbb:"8.7%"}}},
    { name:"Danny Young", role:"RP", throws:"L", dob:"1994-05-27", draftYear:2015, draftRound:8, draftPick:242, draftType:"MLB", era:"8.03", ip:"12.1", sv:0, kpct:"23.1%", bbpct:"20.0%", kbb:"3.1%", whip:"2.270", fip:"7.70", war:-0.5, war2:-0.5, xfip:"6.14", siera:"5.42", batSpeed:73.3, fastSwing:"27.0%", swstr:"7.9%", cstr:"20.8%", csw:"28.7%", laSwSp:"31.3%", idealAttack:"41.9%", splits:{vsL:{ip:"5.2",era:"9.53",fip:"9.09",xfip:"6.91",whip:"2.47",avg:".364",obp:".500",slg:".727",woba:".513",kpct:"17.2%",bbpct:"20.7%",kbb:"-3.4%"}, vsR:{ip:"5.2",era:"3.18",fip:"4.85",xfip:"5.66",whip:"1.76",avg:".238",obp:".448",slg:".286",woba:".337",kpct:"24.1%",bbpct:"17.2%",kbb:"6.9%"}}},
    { name:"Carlos Carrasco", role:"RP", throws:"R", dob:"1987-03-21", draftYear:2003, draftRound:null, draftPick:null, draftType:"IFA", era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.50", war:-0.2, war2:-0.2, xfip:"4.72", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"62.8%", splits:{vsL:{ip:"10.1",era:"6.10",fip:"4.65",xfip:"4.89",whip:"1.45",avg:".317",obp:".364",slg:".415",woba:".345",kpct:"6.7%",bbpct:"4.4%",kbb:"2.2%"}, vsR:{ip:"6.1",era:"5.68",fip:"6.90",xfip:"4.50",whip:"1.42",avg:".320",obp:".370",slg:".600",woba:".415",kpct:"14.3%",bbpct:"3.6%",kbb:"10.7%"}}},
    { name:"Ian Hamilton", role:"RP", throws:"R", dob:"1995-06-16", draftYear:2016, draftRound:11, draftPick:326, draftType:"MLB", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.31", war:-0.1, war2:0.0, xfip:"3.97", siera:"3.96", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"41.2%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.71",xfip:"4.63",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".499",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.11",xfip:"3.62",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".244",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:76,l:55,pct:".580",gb:"—", home:"42-23",away:"34-32", rs:614, ra:504, diff:+110, strk:"W1", l10:"3-7", highlight:true,  srs:0.9 },
     { team:"PHI", full:"Philadelphia Phillies", w:73,l:58,pct:".557",gb:"3.0", home:"38-30",away:"35-28", rs:599, ra:572, diff:+27, strk:"W9", l10:"9-1", highlight:false, srs:0.3 },
     { team:"MIA", full:"Miami Marlins",        w:67,l:64,pct:".511",gb:"9.0", home:"41-25",away:"26-39", rs:573, ra:552, diff:+21, strk:"W3", l10:"5-5", highlight:false, srs:0.2 },
     { team:"WSN", full:"Washington Nationals", w:61,l:71,pct:".462",gb:"15.5", home:"27-36",away:"34-35", rs:682, ra:672, diff:+10, strk:"L4", l10:"2-8", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:59,l:72,pct:".450",gb:"17.0", home:"30-35",away:"29-37", rs:546, ra:586, diff:-40, strk:"L1", l10:"6-4", highlight:false, srs:-0.1 },
   ];
   
export const statcastHitters = [
  // Updated August 24, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // Hidden players (Tromp, León, Tellez, White, Mateo, Bart, Jarvis) — all fields held per hiding protocol
  { name:"Michael Harris II", ev:"90.6",hardHit:"48.8%",xwoba:".343",xba:".288",xslg:".478",barrel:"10.8%",chase:"44.1%",whiff:"25.2%",kpct:"19.7%",bbpct:"3.7%", gbpct:"45.3%",fbpct:"22.6%",ldpct:"25.9%",pupct:"6.2%",pullAir:"17.8%"},
  { name:"Matt Olson", ev:"92.5",hardHit:"49.6%",xwoba:".362",xba:".249",xslg:".520",barrel:"15.7%",chase:"26.8%",whiff:"24.6%",kpct:"25.3%",bbpct:"10.1%", gbpct:"35.9%",fbpct:"34.7%",ldpct:"20.7%",pupct:"8.7%",pullAir:"21.3%"},
  { name:"Dominic Smith", ev:"87.8",hardHit:"33.2%",xwoba:".302",xba:".243",xslg:".379",barrel:"5.7%",chase:"31.5%",whiff:"21.3%",kpct:"16.0%",bbpct:"7.4%", gbpct:"40.7%",fbpct:"29.0%",ldpct:"24.8%",pupct:"5.6%",pullAir:"18.2%"},
  { name:"Drake Baldwin", ev:"91.8",hardHit:"52.2%",xwoba:".375",xba:".281",xslg:".504",barrel:"13.2%",chase:"33.7%",whiff:"23.3%",kpct:"20.4%",bbpct:"9.9%", gbpct:"45.6%",fbpct:"24.5%",ldpct:"24.8%",pupct:"5.0%",pullAir:"12.9%"},
  { name:"Mauricio Dubón", ev:"86.9",hardHit:"30.6%",xwoba:".307",xba:".268",xslg:".380",barrel:"4.1%",chase:"37.0%",whiff:"15.9%",kpct:"12.7%",bbpct:"5.9%", gbpct:"40.8%",fbpct:"25.0%",ldpct:"26.3%",pupct:"7.9%",pullAir:"16.3%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"46.6%",xwoba:".322",xba:".260",xslg:".440",barrel:"10.2%",chase:"41.8%",whiff:"30.8%",kpct:"29.9%",bbpct:"5.8%", gbpct:"38.6%",fbpct:"30.7%",ldpct:"27.3%",pupct:"3.4%",pullAir:"21.6%"},
  { name:"Austin Riley", ev:"91.4",hardHit:"46.2%",xwoba:".302",xba:".214",xslg:".399",barrel:"12.4%",chase:"32.4%",whiff:"32.7%",kpct:"31.7%",bbpct:"7.5%", gbpct:"37.8%",fbpct:"30.1%",ldpct:"23.1%",pupct:"9.0%",pullAir:"18.1%"},
  { name:"Ozzie Albies", ev:"86.9",hardHit:"28.2%",xwoba:".285",xba:".231",xslg:".359",barrel:"4.3%",chase:"38.6%",whiff:"20.8%",kpct:"14.1%",bbpct:"7.0%", gbpct:"34.1%",fbpct:"33.9%",ldpct:"23.8%",pupct:"8.2%",pullAir:"26.1%"},
  { name:"Mike Yastrzemski", ev:"90.6",hardHit:"43.5%",xwoba:".309",xba:".233",xslg:".368",barrel:"7.2%",chase:"26.0%",whiff:"23.4%",kpct:"24.1%",bbpct:"10.0%", gbpct:"39.1%",fbpct:"30.4%",ldpct:"23.7%",pupct:"6.8%",pullAir:"23.2%"},
  { name:"Ronald Acuña Jr.", ev:"90.0",hardHit:"45.5%",xwoba:".365",xba:".256",xslg:".482",barrel:"12.8%",chase:"27.6%",whiff:"30.2%",kpct:"23.4%",bbpct:"12.0%", gbpct:"40.3%",fbpct:"28.0%",ldpct:"23.7%",pupct:"8.1%",pullAir:"18.0%"},
  { name:"Eli White", ev:"86.4",hardHit:"31.1%",xwoba:".269",xba:".224",xslg:".326",barrel:"5.9%",chase:"29.8%",whiff:"27.7%",kpct:"21.5%",bbpct:"6.3%", gbpct:"55.3%",fbpct:"26.2%",ldpct:"16.5%",pupct:"1.9%",pullAir:"9.7%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"22.6%",xwoba:".207",xba:".144",xslg:".199",barrel:"3.9%",chase:"24.5%",whiff:"20.9%",kpct:"27.1%",bbpct:"10.6%", gbpct:"43.4%",fbpct:"35.8%",ldpct:"9.4%",pupct:"11.3%",pullAir:"17.0%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"83.8",hardHit:"30.4%",xwoba:".154",xba:".161",xslg:".192",barrel:"0.0%",chase:"43.1%",whiff:"33.8%",kpct:"39.5%",bbpct:"0.0%", gbpct:"60.9%",fbpct:"21.7%",ldpct:"17.4%",pupct:"0.0%",pullAir:"13.0%"},
  { name:"Joey Bart", ev:"86.2",hardHit:"34.2%",xwoba:".293",xba:".208",xslg:".375",barrel:"7.9%",chase:"31.4%",whiff:"27.4%",kpct:"26.1%",bbpct:"5.0%", gbpct:"40.8%",fbpct:"35.5%",ldpct:"15.8%",pupct:"7.9%",pullAir:"21.1%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".506",xba:".339",xslg:".828",barrel:"28.6%",chase:"29.6%",whiff:"30.4%",kpct:"27.3%",bbpct:"9.1%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"88.7",hardHit:"36.7%",xwoba:".272",xba:".237",xslg:".308",barrel:"3.3%",chase:"27.9%",whiff:"18.2%",kpct:"18.2%",bbpct:"6.6%", gbpct:"58.9%",fbpct:"18.9%",ldpct:"20.0%",pupct:"2.2%",pullAir:"10.0%"},
  { name:"Brewer Hicklen", ev:"94.9",hardHit:"54.5%",xwoba:".354",xba:".256",xslg:".405",barrel:"9.1%",chase:"28.8%",whiff:"44.4%",kpct:"34.8%",bbpct:"17.4%", gbpct:"45.5%",fbpct:"18.2%",ldpct:"36.4%",pupct:"0.0%",pullAir:"18.2%"},
  { name:"Lane Thomas", ev:"89.6",hardHit:"42.3%",xwoba:".316",xba:".241",xslg:".373",barrel:"6.8%",chase:"20.8%",whiff:"22.7%",kpct:"25.0%",bbpct:"11.9%", gbpct:"36.8%",fbpct:"24.5%",ldpct:"25.0%",pupct:"13.6%",pullAir:"25.9%"},
];
 
export const statcastPitchers = [
  // Updated August 24, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // Hidden players (Strider, Waldrep, Carrasco, Hamilton, Owen Murphy, Robert Suarez, López, Ritchie, Karinchak, Danny Young, Tyler Kinley) — all fields held per hiding protocol
  { name:"Raisel Iglesias", ev:"88.2",hardHit:"36.8%",xwoba:".284",xba:".223",xslg:".359",kpct:"26.7%",bbpct:"7.3%", barrel:"9.7%", chase:"38.1%",whiff:"30.6%",gbpct:"36.8%",fbpct:"29.6%",ldpct:"24.8%",pupct:"8.8%", pullAir:"23.2%"},
  { name:"Dylan Lee", ev:"86.7",hardHit:"30.8%",xwoba:".233",xba:".177",xslg:".290",kpct:"33.3%",bbpct:"6.5%", barrel:"6.2%", chase:"35.1%",whiff:"37.6%",gbpct:"34.6%",fbpct:"34.6%",ldpct:"22.3%",pupct:"8.5%", pullAir:"28.5%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.2",hardHit:"40.8%",xwoba:".310",xba:".248",xslg:".396",kpct:"19.5%",bbpct:"7.9%", barrel:"6.5%", chase:"27.8%",whiff:"21.6%",gbpct:"44.1%",fbpct:"26.4%",ldpct:"23.0%",pupct:"6.5%", pullAir:"18.7%"},
  { name:"Chris Sale", ev:"87.8",hardHit:"34.5%",xwoba:".272",xba:".223",xslg:".330",kpct:"30.9%",bbpct:"5.4%", barrel:"5.6%", chase:"36.0%",whiff:"30.0%",gbpct:"44.5%",fbpct:"23.5%",ldpct:"25.7%",pupct:"6.3%", pullAir:"16.0%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.1",hardHit:"37.5%",xwoba:".270",xba:".218",xslg:".339",kpct:"32.3%",bbpct:"6.6%", barrel:"6.7%", chase:"32.2%",whiff:"30.9%",gbpct:"38.2%",fbpct:"26.5%",ldpct:"25.7%",pupct:"9.6%", pullAir:"11.8%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".359",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"11.4%"},
  { name:"Tyler Kinley", ev:"85.5",hardHit:"28.1%",xwoba:".285",xba:".206",xslg:".369",kpct:"23.4%",bbpct:"10.9%", barrel:"8.0%", chase:"26.7%",whiff:"27.3%",gbpct:"30.7%",fbpct:"33.3%",ldpct:"24.6%",pupct:"11.4%", pullAir:"34.2%"},
  { name:"Martín Pérez", ev:"88.1",hardHit:"37.2%",xwoba:".322",xba:".259",xslg:".385",kpct:"18.2%",bbpct:"9.9%", barrel:"5.2%", chase:"26.7%",whiff:"21.6%",gbpct:"48.0%",fbpct:"20.9%",ldpct:"26.2%",pupct:"4.9%", pullAir:"20.6%"},
  { name:"Grant Holmes", ev:"91.3",hardHit:"43.5%",xwoba:".337",xba:".256",xslg:".432",kpct:"18.9%",bbpct:"10.2%", barrel:"8.9%", chase:"30.7%",whiff:"27.4%",gbpct:"42.2%",fbpct:"26.9%",ldpct:"25.0%",pupct:"5.9%", pullAir:"21.0%"},
  { name:"Reynaldo López", ev:"87.7",hardHit:"36.4%",xwoba:".330",xba:".256",xslg:".426",kpct:"21.6%",bbpct:"9.5%", barrel:"7.7%", chase:"27.2%",whiff:"21.8%",gbpct:"36.8%",fbpct:"28.7%",ldpct:"26.8%",pupct:"7.7%", pullAir:"19.1%"},
  { name:"JR Ritchie", ev:"89.6",hardHit:"39.5%",xwoba:".343",xba:".240",xslg:".407",kpct:"20.7%",bbpct:"14.1%", barrel:"9.3%", chase:"25.5%",whiff:"23.3%",gbpct:"45.1%",fbpct:"29.6%",ldpct:"20.4%",pupct:"4.9%", pullAir:"20.4%"},
  { name:"Dylan Dodd", ev:"88.4",hardHit:"35.7%",xwoba:".267",xba:".197",xslg:".335",kpct:"27.3%",bbpct:"7.8%", barrel:"7.1%", chase:"33.5%",whiff:"28.1%",gbpct:"29.6%",fbpct:"28.6%",ldpct:"25.5%",pupct:"16.3%", pullAir:"33.7%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"12.5%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.2%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"95.6",hardHit:"59.4%",xwoba:".398",xba:".250",xslg:".489",kpct:"20.7%",bbpct:"19.0%", barrel:"15.6%", chase:"19.4%",whiff:"22.5%",gbpct:"46.9%",fbpct:"28.1%",ldpct:"21.9%",pupct:"3.1%", pullAir:"6.3%"},
  { name:"Owen Murphy", ev:"94.1",hardHit:"55.0%",xwoba:".353",xba:".280",xslg:".451",kpct:"20.7%",bbpct:"6.9%", barrel:"10.0%", chase:"38.0%",whiff:"17.1%",gbpct:"20.0%",fbpct:"25.0%",ldpct:"45.0%",pupct:"10.0%", pullAir:"30.0%"},
  { name:"Víctor Mederos", ev:"89.4",hardHit:"42.9%",xwoba:".291",xba:".233",xslg:".341",kpct:"21.7%",bbpct:"7.6%", barrel:"4.8%", chase:"35.1%",whiff:"32.0%",gbpct:"34.9%",fbpct:"27.0%",ldpct:"20.6%",pupct:"17.5%", pullAir:"14.3%"},
  { name:"AJ Smith-Shawver", ev:"88.7",hardHit:"35.7%",xwoba:".363",xba:".292",xslg:".441",kpct:"17.5%",bbpct:"12.5%", barrel:"7.1%", chase:"26.4%",whiff:"21.4%",gbpct:"39.3%",fbpct:"21.4%",ldpct:"28.6%",pupct:"10.7%", pullAir:"21.4%"},
  { name:"Tyler Mahle", ev:"90.0",hardHit:"37.8%",xwoba:".315",xba:".247",xslg:".405",kpct:"22.8%",bbpct:"8.5%", barrel:"7.5%", chase:"28.7%",whiff:"22.7%",gbpct:"41.8%",fbpct:"29.4%",ldpct:"22.3%",pupct:"6.5%", pullAir:"15.2%"},
  { name:"Brent Suter", ev:"86.6",hardHit:"32.1%",xwoba:".320",xba:".264",xslg:".414",kpct:"19.7%",bbpct:"6.7%", barrel:"6.5%", chase:"28.7%",whiff:"22.4%",gbpct:"48.2%",fbpct:"22.0%",ldpct:"24.3%",pupct:"5.5%", pullAir:"16.5%"},
  { name:"Ray Kerr", ev:"93.0",hardHit:"22.2%",xwoba:".283",xba:".225",xslg:".301",kpct:"0.0%",bbpct:"0.0%", barrel:"0.0%", chase:"40.0%",whiff:"20.0%",gbpct:"55.6%",fbpct:"11.1%",ldpct:"11.1%",pupct:"22.2%", pullAir:"11.1%"},
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
     { week:"G108", "Olson":3.0,"Albies":1.6,"Baldwin":2.4,"Harris":3.0,"Dubón":1.7,"Acuña":0.6,"Smith":-0.2,"Mateo":0.5,"Riley":0.4,"White":0.6,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.3,"Tellez":0.0,"Jarvis":0.1,"Hicklen":0.3,"Thomas":0.0 },
     { week:"G114", "Olson":3.5,"Albies":1.6,"Baldwin":2.2,"Harris":3.1,"Dubón":1.8,"Acuña":0.7,"Smith":-0.1,"Mateo":0.6,"Riley":0.8,"White":0.6,"Yaz":0.4,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.2,"Tellez":0.0,"Jarvis":0.1,"Hicklen":0.3,"Thomas":0.7 },
     { week:"G120", "Olson":3.9,"Albies":1.7,"Baldwin":2.1,"Harris":3.2,"Dubón":1.8,"Acuña":0.8,"Smith":-0.2,"Mateo":0.6,"Riley":0.7,"White":0.6,"Yaz":0.4,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.3,"Bart":0.2,"Tellez":0.0,"Jarvis":0.0,"Hicklen":0.3,"Thomas":0.7 },
     { week:"G126", "Olson":4.0,"Albies":1.3,"Baldwin":2.5,"Harris":3.4,"Dubón":1.4,"Acuña":0.8,"Smith":-0.2,"Mateo":0.5,"Riley":0.9,"White":0.6,"Yaz":0.5,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.4,"Bart":0.2,"Tellez":0.0,"Jarvis":-0.1,"Hicklen":0.3,"Thomas":0.8 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G81", "Elder":1.4,"Sale":2.4,"Lee":1.3,"Iglesias":0.9,"Suarez":0.8,"Fuentes":0.9,"Pérez":0.9,"Holmes":0.0,"Kinley":0.1,"López":0.2,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.1,"Karinchak":0.1,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G90", "Elder":1.5,"Sale":2.6,"Lee":1.5,"Iglesias":0.9,"Suarez":0.8,"Fuentes":1.0,"Pérez":0.6,"Holmes":0.0,"Kinley":0.0,"López":0.5,"Strider":0.1,"Ritchie":-0.1,"Dodd":0.3,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":0.0,"Mederos":0.0,"O.Murphy":0.0,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"All-Star", "Sale":2.7,"Lee":1.7,"Fuentes":1.2,"Elder":1.1,"Iglesias":1.0,"Suarez":0.8,"Pérez":0.6,"López":0.5,"Dodd":0.3,"Holmes":0.2,"Mederos":0.1,"Kinley":0.0,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.1,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.1,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G100", "Sale":3.1,"Lee":1.8,"Fuentes":1.4,"Elder":1.1,"Iglesias":0.9,"Suarez":0.8,"Pérez":0.6,"López":0.3,"Dodd":0.4,"Holmes":0.3,"Mederos":0.3,"Kinley":-0.1,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.2,"Smith-Shawver":0.0,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G108", "Sale":3.9,"Lee":1.6,"Fuentes":1.4,"Elder":1.1,"Iglesias":0.9,"Suarez":0.8,"Pérez":0.7,"López":0.5,"Dodd":0.5,"Holmes":0.5,"Mederos":0.3,"Kinley":-0.3,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.2,"Smith-Shawver":0.1,"Mahle":0.0,"Suter":0.0,"Kerr":0.0 },
     { week:"G114", "Sale":3.9,"Lee":1.7,"Fuentes":1.7,"Elder":1.3,"Iglesias":0.8,"Suarez":0.8,"Pérez":0.9,"López":0.5,"Dodd":0.6,"Holmes":0.4,"Mederos":0.4,"Kinley":-0.3,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.2,"Smith-Shawver":0.1,"Mahle":0.8,"Suter":0.5,"Kerr":0.0 },
     { week:"G120", "Sale":4.2,"Lee":1.8,"Fuentes":1.7,"Elder":1.1,"Iglesias":0.9,"Suarez":0.8,"Pérez":1.1,"López":0.5,"Dodd":0.7,"Holmes":0.5,"Mederos":0.3,"Kinley":-0.2,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.4,"Smith-Shawver":0.1,"Mahle":1.2,"Suter":0.6,"Kerr":0.0 },
     { week:"G126", "Sale":4.6,"Lee":1.8,"Fuentes":1.6,"Elder":1.2,"Iglesias":0.7,"Suarez":0.8,"Pérez":1.2,"López":0.5,"Dodd":0.6,"Holmes":0.4,"Mederos":0.4,"Kinley":-0.4,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.5,"Smith-Shawver":0.1,"Mahle":1.4,"Suter":0.5,"Kerr":0.0 },
   ];

// ════════════════════════════════════════════════════════════════════════════
// TrackerHit+ / TrackerArm+ — Composite performance metrics
// Updated August 11, 2026
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
  woba:    { mean: 0.316, sd: 0.030 },
  ldpct:   { mean: 23.6,  sd: 3.0   },
  whiff:   { mean: 25.1,  sd: 4.0   },   // inverted (lower = better)
  laSwSp:  { mean: 33.7,  sd: 4.0   },
  hardHit: { mean: 38.8,  sd: 6.0   },
  ev:      { mean: 88.8,  sd: 2.0   },
  chase:   { mean: 30.4,  sd: 4.0   },   // inverted (lower = better)
};
const W_HIT = {
  woba: 0.26, ldpct: 0.14, whiff: 0.18, laSwSp: 0.12, hardHit: 0.11, ev: 0.11, chase: 0.08,
};

const LG_PIT = {
  siera: { mean: 4.07,  sd: 0.50  },   // inverted (lower = better)
  kbb:   { mean: 13.2,  sd: 5.0   },
  whip:  { mean: 1.30,  sd: 0.15  },   // inverted (lower = better)
  xwoba: { mean: 0.315, sd: 0.030 },   // inverted (lower allowed = better)
  swstr: { mean: 10.9,  sd: 2.5   },
  ev:    { mean: 88.8,  sd: 2.0   },   // inverted (lower allowed = better)
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
