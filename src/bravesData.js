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
 
   export const lastUpdated = "September 1, 2026";
 
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
     { date:"Tue, Aug 25", opp:"Dodgers",    home:true, result:"W", score:"4-3", record:"77-55"},
     { date:"Wed, Aug 26", opp:"Dodgers",    home:true, result:"W", score:"6-5", record:"78-55"},
     { date:"Thu, Aug 27", opp:"Dodgers",    home:true, result:"W", score:"1-0", record:"79-55"},
     { date:"Fri, Aug 28", opp:"Rockies",    home:true, result:"W", score:"6-4", record:"80-55"},
     { date:"Sat, Aug 29", opp:"Rockies",    home:true, result:"W", score:"2-1", record:"81-55"},
     { date:"Sun, Aug 30", opp:"Rockies",    home:true, result:"W", score:"3-2 F/10", record:"82-55"},
     { date:"Mon, Aug 31", opp:"Giants",    home:true, result:"L", score:"3-7", record:"82-56"},
      // September
      // Upcoming
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
     record: "82-56",
     runs: 639,
     era: "3.58",
     avg: ".248",
     obp: ".312",
     slg: ".411",
     ops: ".724",
     wrc: 99,
     iso: ".163",
     battingK: "21.7%",
     battingBB: "7.7%",
     woba: ".317",
     xwoba: ".317",
     fip: "4.04",
     xera: "4.04",
     xfip: "4.07",
     whip: "1.25",
     gb: "41.3%",
     siera: "4.00",
     pitchingK: "22.7%",
     pitchingBB: "9.0%",
     pitchingKBB: "13.7%",
     swstr: "11.4%",
     cstr: "16.0%",
     csw: "27.4%",
     fastSwing: "27.5%",
     sqUpSw: "24.6%",
     blastSw: "10.4%",
     idealAtk: "50.0%",
     batFastSwing: "33.4%",
     batSqUpSw: "24.2%",
     batBlastSw: "11.0%",
     batIdealAtk: "49.4%",
     batSwStr: "11.2%",
     batCStr: "14.6%",
     batCSW: "25.8%",
     batChase: "33.6%",
     batWhiff: "24.7%",
     chase: "30.5%",
     whiff: "26.4%",
     batBatSpeed: "72.8",
     batSpeed: "72.2",
// Plate Discipline additions
     batZoneSwing: "69.1",
     batZoneContact: "84.0%",
     batChaseContact: "59.9%",
     zoneSwing: "66.9%",
     zoneContact: "83.7%",
     chaseContact: "54.1%",
// Statcast (hitters)
     batBarrel: "8.7%",
     batHardHit: "40.1%",
     batExitVelo: "89.4",
     batXBA: ".246",
     batXSLG: ".414",
     batXwOBAcon: ".370",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "7.2%",
     hardHit: "38.3%",
     exitVelo: "88.9",
     xBA: ".240",
     xSLG: ".385",
     pXwOBA: ".310",
     xwOBAcon: ".358",
 };
   
export const hitters = [
    // Updated August 25, 2026 — vsL, vsR, risp, highLeverage splits refreshed from FanGraphs splits leaderboards (twoOuts unchanged)
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, ABS)
    { name:"Drake Baldwin", pos:"C", bats:"L", throws:"R", dob:"2001-03-28", draftYear:2022, draftRound:3, draftPick:96, draftType:"MLB", pa:509, avg:".279", obp:".358", slg:".456", ops:".813", hr:22, rbi:67, r:72, h:121, doubles:13, triples:0, sb:3, bbpct:"9.6%", kpct:"21.4", war:3.2, war2:2.7, wrc:126, woba:".357", xwoba:".368", oaa:null, frv:-1, batSpeed:75.3, squaredUp:"25.4%", fastSwing:"56.3%", laSwSp:"35.5%", idealAttack:"46.3%", avgPop:1.93, armValue:null, armStrength:79.7, abs:{netOvr:1.4, netRuns:0.5, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.6%", xChalRate:"4.1%", rateVsExp:"-3.5%"}, absCatch:{netOvr:11.6, netRuns:0.4, chal:43, won:30, lost:13, wonPct:"70%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:184,r:25,h:41,hr:7,rbi:25,avg:".246",obp:".315",slg:".401",ops:".716",wrc:99,woba:".317",iso:".156",bbpct:"7.6%",kpct:"20.1%",babip:".276"}, vsR:{pa:294,r:45,h:72,hr:14,rbi:45,avg:".282",obp:".374",slg:".471",ops:".845",wrc:133,woba:".369",iso:".188",bbpct:"11.6%",kpct:"21.1%",babip:".322"}, risp:{pa:118,r:2,h:30,hr:2,rbi:43,avg:".309",obp:".424",slg:".423",ops:".846",wrc:138,woba:".375",iso:".113",bbpct:"14.4%",kpct:"16.9%",babip:".368"}, highLeverage:{pa:36,r:18,h:7,hr:0,rbi:9,avg:".212",obp:".278",slg:".242",ops:".520",wrc:48,woba:".241",iso:".030",bbpct:"8.3%",kpct:"19.4%",babip:".269"}, twoOuts:{pa:136,r:22,h:36,hr:3,rbi:19,avg:".293",obp:".360",slg:".374",ops:".734",wrc:106,woba:".328",iso:".081",bbpct:"9.6%",kpct:"18.4%",babip:".347"}}},
    { name:"Ronald Acuña Jr.", pos:"RF", bats:"R", throws:"R", dob:"1997-12-18", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", pa:374, avg:".241", obp:".345", slg:".409", ops:".754", hr:13, rbi:35, r:47, h:73, doubles:13, triples:1, sb:18, bbpct:"12.6%", kpct:"23.3%", war:0.9, war2:1.0, wrc:111, woba:".334", xwoba:".361", oaa:-8, frv:-5, batSpeed:76.0, squaredUp:"20.1%", fastSwing:"61.2%", laSwSp:"32.6%", idealAttack:"54.3%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:117,r:19,h:21,hr:4,rbi:5,avg:".214",obp:".342",slg:".398",ops:".740",wrc:106,woba:".329",iso:".184",bbpct:"15.4%",kpct:"24.8%",babip:".262"}, vsR:{pa:231,r:25,h:48,hr:9,rbi:30,avg:".240",obp:".333",slg:".415",ops:".748",wrc:107,woba:".329",iso:".175",bbpct:"10.8%",kpct:"22.9%",babip:".279"}, risp:{pa:68,r:1,h:12,hr:1,rbi:20,avg:".222",obp:".353",slg:".315",ops:".668",wrc:85,woba:".297",iso:".093",bbpct:"14.7%",kpct:"22.1%",babip:".275"}, highLeverage:{pa:26,r:2,h:3,hr:0,rbi:2,avg:".143",obp:".308",slg:".143",ops:".451",wrc:46,woba:".238",iso:".000",bbpct:"15.4%",kpct:"23.1%",babip:".200"}, twoOuts:{pa:96,r:9,h:18,hr:3,rbi:10,avg:".228",obp:".365",slg:".430",ops:".795",wrc:121,woba:".350",iso:".203",bbpct:"15.6%",kpct:"21.9%",babip:".273"}}},
    { name:"Matt Olson", pos:"1B", bats:"L", throws:"R", dob:"1994-03-29", draftYear:2012, draftRound:1, draftPick:47, draftType:"MLB", pa:600, avg:".256", obp:".332", slg:".523", ops:".855", hr:37, rbi:78, r:92, h:135, doubles:32, triples:0, sb:4, bbpct:"9.8%", kpct:"25.2%", war:4.1, war2:3.9, wrc:131, woba:".364", xwoba:".360", oaa:7, frv:6, batSpeed:74.8, squaredUp:"23.3%", fastSwing:"50.5%", laSwSp:"32.9%", idealAttack:"50.2%", armValue:null, armStrength:82.6, abs:{netOvr:-0.2, netRuns:-0.2, chal:14, won:4, lost:10, wonPct:"29%", chalRate:"4.9%", xChalRate:"3.3%", rateVsExp:"+1.7%"}, splits:{vsL:{pa:243,r:37,h:57,hr:14,rbi:30,avg:".257",obp:".317",slg:".505",ops:".821",wrc:123,woba:".353",iso:".248",bbpct:"7.4%",kpct:"25.9%",babip:".295"}, vsR:{pa:327,r:52,h:74,hr:22,rbi:47,avg:".259",obp:".346",slg:".552",ops:".898",wrc:140,woba:".379",iso:".294",bbpct:"11.6%",kpct:"25.4%",babip:".284"}, risp:{pa:131,r:6,h:24,hr:6,rbi:38,avg:".229",obp:".359",slg:".457",ops:".816",wrc:117,woba:".345",iso:".229",bbpct:"17.6%",kpct:"24.4%",babip:".257"}, highLeverage:{pa:46,r:22,h:11,hr:5,rbi:15,avg:".282",obp:".370",slg:".667",ops:"1.036",wrc:166,woba:".418",iso:".385",bbpct:"13.0%",kpct:"28.3%",babip:".273"}, twoOuts:{pa:193,r:39,h:42,hr:13,rbi:31,avg:".250",obp:".347",slg:".530",ops:".877",wrc:135,woba:".371",iso:".280",bbpct:"11.9%",kpct:"25.4%",babip:".274"}}},
    { name:"Michael Harris II", pos:"CF", bats:"L", throws:"L", dob:"2001-03-07", draftYear:2019, draftRound:3, draftPick:98, draftType:"MLB", pa:528, avg:".297", obp:".323", slg:".502", ops:".825", hr:22, rbi:75, r:64, h:144, doubles:31, triples:1, sb:9, bbpct:"3.6%", kpct:"19.9%", war:4.6, war2:4.0, wrc:125, woba:".355", xwoba:".343", oaa:10, frv:10, batSpeed:74.9, squaredUp:"24.0%", fastSwing:"50.1%", laSwSp:"29.6%", idealAttack:"46.8%", armValue:null, armStrength:84.4, abs:{netOvr:-3.2, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"5.6%", xChalRate:"3.1%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:187,r:21,h:49,hr:8,rbi:25,avg:".278",obp:".316",slg:".477",ops:".793",wrc:115,woba:".342",iso:".199",bbpct:"4.3%",kpct:"18.2%",babip:".304"}, vsR:{pa:313,r:41,h:91,hr:13,rbi:46,avg:".302",obp:".323",slg:".502",ops:".824",wrc:123,woba:".354",iso:".199",bbpct:"3.2%",kpct:"20.4%",babip:".345"}, risp:{pa:102,r:1,h:26,hr:1,rbi:40,avg:".283",obp:".324",slg:".413",ops:".737",wrc:100,woba:".319",iso:".130",bbpct:"4.9%",kpct:"12.7%",babip:".309"}, highLeverage:{pa:48,r:12,h:10,hr:1,rbi:15,avg:".238",obp:".292",slg:".405",ops:".696",wrc:87,woba:".300",iso:".167",bbpct:"4.2%",kpct:"20.8%",babip:".273"}, twoOuts:{pa:145,r:20,h:38,hr:4,rbi:20,avg:".279",obp:".324",slg:".412",ops:".736",wrc:103,woba:".324",iso:".132",bbpct:"5.5%",kpct:"20.0%",babip:".330"}}},
    { name:"Ozzie Albies", pos:"2B", bats:"S", throws:"R", dob:"1997-01-07", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:588, avg:".254", obp:".310", slg:".412", ops:".721", hr:20, rbi:67, r:74, h:132, doubles:23, triples:0, sb:3, bbpct:"7.0%", kpct:"14.3%", war:2.1, war2:1.6, wrc:97, woba:".314", xwoba:".286", oaa:0, frv:-2, batSpeed:68.8, squaredUp:"26.8%", fastSwing:"5.3%", laSwSp:"33.3%", idealAttack:"57.6%", armValue:null, armStrength:71.6, abs:{netOvr:-0.2, netRuns:0.4, chal:9, won:4, lost:5, wonPct:"44%", chalRate:"5.8%", xChalRate:"5.7%", rateVsExp:"+0.1%"}, splits:{vsL:{pa:224,r:22,h:60,hr:8,rbi:30,avg:".288",obp:".313",slg:".466",ops:".779",wrc:108,woba:".331",iso:".178",bbpct:"3.6%",kpct:"8.5%",babip:".278"}, vsR:{pa:335,r:51,h:67,hr:12,rbi:35,avg:".228",obp:".304",slg:".384",ops:".689",wrc:90,woba:".304",iso:".156",bbpct:"9.3%",kpct:"17.9%",babip:".241"}, risp:{pa:136,r:3,h:31,hr:3,rbi:44,avg:".282",obp:".331",slg:".400",ops:".731",wrc:93,woba:".309",iso:".118",bbpct:"8.8%",kpct:"13.2%",babip:".277"}, highLeverage:{pa:47,r:23,h:10,hr:3,rbi:14,avg:".250",obp:".319",slg:".525",ops:".844",wrc:123,woba:".354",iso:".275",bbpct:"8.5%",kpct:"14.9%",babip:".219"}, twoOuts:{pa:176,r:26,h:37,hr:3,rbi:19,avg:".222",obp:".261",slg:".311",ops:".573",wrc:57,woba:".256",iso:".090",bbpct:"3.4%",kpct:"14.8%",babip:".246"}}},
    { name:"Mauricio Dubón", pos:"SS", bats:"R", throws:"R", dob:"1994-07-19", draftYear:2013, draftRound:26, draftPick:773, draftType:"MLB", pa:528, avg:".268", obp:".313", slg:".387", ops:".699", hr:10, rbi:64, r:57, h:129, doubles:24, triples:2, sb:7, bbpct:"5.9%", kpct:"11.9%", war:2.5, war2:1.8, wrc:93, woba:".309", xwoba:".305", oaa:5, frv:5, batSpeed:69.1, squaredUp:"28.8%", fastSwing:"3.8%", laSwSp:"37.2%", idealAttack:"38.6%", armValue:null, armStrength:88.3, abs:{netOvr:-5.2, netRuns:-1.2, chal:11, won:3, lost:8, wonPct:"27%", chalRate:"5.5%", xChalRate:"3.9%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:180,r:19,h:42,hr:4,rbi:24,avg:".251",obp:".291",slg:".395",ops:".686",wrc:86,woba:".299",iso:".144",bbpct:"5.0%",kpct:"10.6%",babip:".260"}, vsR:{pa:320,r:37,h:82,hr:6,rbi:38,avg:".278",obp:".328",slg:".393",ops:".721",wrc:100,woba:".319",iso:".115",bbpct:"5.0%",kpct:"13.4%",babip:".309"}, risp:{pa:120,r:3,h:36,hr:3,rbi:52,avg:".327",obp:".356",slg:".491",ops:".847",wrc:130,woba:".364",iso:".164",bbpct:"5.0%",kpct:"9.2%",babip:".337"}, highLeverage:{pa:49,r:12,h:17,hr:1,rbi:25,avg:".378",obp:".408",slg:".578",ops:".986",wrc:167,woba:".420",iso:".200",bbpct:"6.1%",kpct:"8.2%",babip:".390"}, twoOuts:{pa:152,r:20,h:33,hr:2,rbi:31,avg:".232",obp:".283",slg:".345",ops:".628",wrc:73,woba:".279",iso:".113",bbpct:"6.6%",kpct:"10.5%",babip:".250"}}},
    { name:"Austin Riley", pos:"3B", bats:"R", throws:"R", dob:"1997-04-02", draftYear:2015, draftRound:1, draftPick:41, draftType:"MLB", pa:542, avg:".222", obp:".295", slg:".362", ops:".657", hr:15, rbi:61, r:54, h:105, doubles:20, triples:1, sb:8, bbpct:"7.7%", kpct:"31.5%", war:0.9, war2:1.0, wrc:82, woba:".292", xwoba:".299", oaa:-1, frv:-1, batSpeed:75.7, squaredUp:"19.3%", fastSwing:"57.9%", laSwSp:"32.7%", idealAttack:"46.0%", armValue:null, armStrength:83.6, abs:{netOvr:-1.8, netRuns:-0.3, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"2.1%", xChalRate:"5.4%", rateVsExp:"-3.3%"}, splits:{vsL:{pa:160,r:15,h:33,hr:2,rbi:17,avg:".237",obp:".331",slg:".345",ops:".677",wrc:91,woba:".306",iso:".108",bbpct:"10.6%",kpct:"31.9%",babip:".356"}, vsR:{pa:360,r:39,h:71,hr:13,rbi:43,avg:".216",obp:".281",slg:".375",ops:".656",wrc:80,woba:".290",iso:".159",bbpct:"6.4%",kpct:"31.4%",babip:".284"}, risp:{pa:140,r:5,h:32,hr:5,rbi:48,avg:".248",obp:".286",slg:".434",ops:".720",wrc:93,woba:".309",iso:".186",bbpct:"5.0%",kpct:"35.7%",babip:".351"}, highLeverage:{pa:52,r:7,h:8,hr:1,rbi:15,avg:".167",obp:".192",slg:".271",ops:".463",wrc:20,woba:".200",iso:".104",bbpct:"3.8%",kpct:"28.8%",babip:".206"}, twoOuts:{pa:163,r:19,h:29,hr:3,rbi:20,avg:".196",obp:".270",slg:".304",ops:".574",wrc:60,woba:".260",iso:".108",bbpct:"7.4%",kpct:"32.5%",babip:".283"}}},
    { name:"Lane Thomas", pos:"LF/DH", bats:"R", throws:"R", dob:"1995-08-23", draftYear:2014, draftRound:5, draftPick:147, draftType:"MLB", pa:368, avg:".227", obp:".321", slg:".389", ops:".710", hr:11, rbi:40, r:36, h:73, doubles:19, triples:0, sb:9, bbpct:"11.7%", kpct:"24.5%", war:0.6, war2:0.7, wrc:99, woba:".316", xwoba:".314", oaa:-7, frv:-4, batSpeed:72.6, squaredUp:"25.3%", fastSwing:"25.5%", laSwSp:"37.1%", idealAttack:"59.7%", armValue:3, armStrength:92.2, abs:{netOvr:0, netRuns:0, chal:0, won:0, lost:0, wonPct:"0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:153,r:16,h:36,hr:5,rbi:17,avg:".277",obp:".379",slg:".462",ops:"841",wrc:135,woba:".369",iso:".185",bbpct:"14.4%",kpct:"22.9%",babip:".341"}, vsR:{pa:203,r:19,h:36,hr:6,rbi:23,avg:".200",obp:".286",slg:".350",ops:".636",wrc:77,woba:".284",iso:".150",bbpct:"9.9%",kpct:"26.1%",babip:".246"}, risp:{pa:94,r:2,h:18,hr:2,rbi:27,avg:".240",obp:".372",slg:".387",ops:".759",wrc:116,woba:".341",iso:".147",bbpct:"17.0%",kpct:"24.5%",babip:".308"}, highLeverage:{pa:38,r:12,h:11,hr:2,rbi:17,avg:".333",obp:".395",slg:".576",ops:".970",wrc:165,woba:".412",iso:".242",bbpct:"10.5%",kpct:"26.3%",babip:".409"}, twoOuts:{pa:116,r:12,h:24,hr:4,rbi:18,avg:".242",obp:".353",slg:".424",ops:".778",wrc:119,woba:".346",iso:".182",bbpct:"13.8%",kpct:"28.4%",babip:".323"}}},
    { name:"Mike Yastrzemski", pos:"LF/DH", bats:"L", throws:"L", dob:"1990-08-23", draftYear:2013, draftRound:14, draftPick:429, draftType:"MLB", pa:346, avg:".222", obp:".306", slg:".369", ops:".676", hr:9, rbi:34, r:41, h:68, doubles:16, triples:1, sb:1, bbpct:"9.8%", kpct:"24.6%", war:0.6, war2:0.3, wrc:89, woba:".301", xwoba:".308", oaa:-3, frv:-2, batSpeed:71.4, squaredUp:"28.4%", fastSwing:"7.6%", laSwSp:"33.6%", idealAttack:"63.5%", armValue:null, armStrength:84.9, abs:{netOvr:2.8, netRuns:0.7, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.4%", xChalRate:"3.4%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".265",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:293,r:36,h:60,hr:9,rbi:33,avg:".233",obp:".317",slg:".403",ops:".721",wrc:99,woba:".318",iso:".171",bbpct:"10.6%",kpct:"22.5%",babip:".276"}, risp:{pa:76,r:2,h:17,hr:2,rbi:24,avg:".254",obp:".316",slg:".418",ops:".734",wrc:99,woba:".318",iso:".164",bbpct:"9.2%",kpct:"39.5%",babip:".405"}, highLeverage:{pa:27,r:7,h:7,hr:1,rbi:10,avg:".280",obp:".333",slg:".480",ops:".813",wrc:123,woba:".353",iso:".200",bbpct:"7.4%",kpct:"33.3%",babip:".400"}, twoOuts:{pa:95,r:16,h:14,hr:3,rbi:12,avg:".165",obp:".253",slg:".329",ops:".582",wrc:61,woba:".261",iso:".165",bbpct:"9.5%",kpct:"35.8%",babip:".229"}}},
    { name:"Dominic Smith", pos:"DH", bats:"L", throws:"L", dob:"1995-06-15", draftYear:2013, draftRound:1, draftPick:11, draftType:"MLB", pa:287, avg:".260", obp:".315", slg:".384", ops:".698", hr:8, rbi:44, r:39, h:67, doubles:6, triples:1, sb:0, bbpct:"7.3%", kpct:"15.7%", war:0.1, war2:-0.3, wrc:92, woba:".306", xwoba:".298", oaa:0, frv:0, batSpeed:68.8, squaredUp:"29.7%", fastSwing:"6.5%", laSwSp:"33.5%", idealAttack:"49.4%", armValue:null, armStrength:null, abs:{netOvr:0.3, netRuns:-0.1, chal:8, won:4, lost:4, wonPct:"50%", chalRate:"5.9%", xChalRate:"4.3%", rateVsExp:"+1.6%"}, splits:{vsL:{pa:36,r:3,h:5,hr:0,rbi:2,avg:".161",obp:".257",slg:".194",ops:".451",wrc:32,woba:".217",iso:".032",bbpct:"11.1%",kpct:"13.9%",babip:".192"}, vsR:{pa:250,r:36,h:62,hr:8,rbi:42,avg:".274",obp:".324",slg:".412",ops:".736",wrc:100,woba:".320",iso:".137",bbpct:"6.8%",kpct:"16.0%",babip:".295"}, risp:{pa:79,r:4,h:21,hr:4,rbi:39,avg:".318",obp:".359",slg:".530",ops:".889",wrc:132,woba:".367",iso:".212",bbpct:"7.6%",kpct:"10.1%",babip:".288"}, highLeverage:{pa:38,r:10,h:5,hr:2,rbi:17,avg:".167",obp:".243",slg:".433",ops:".677",wrc:73,woba:".278",iso:".267",bbpct:"10.5%",kpct:"23.7%",babip:".136"}, twoOuts:{pa:96,r:15,h:27,hr:2,rbi:17,avg:".310",obp:".375",slg:".402",ops:".777",wrc:119,woba:".348",iso:".092",bbpct:"7.3%",kpct:"16.7%",babip:".362"}}},
    { name:"Ha-Seong Kim", pos:"SS", bats:"R", throws:"R", dob:"1995-10-17", draftYear:2020, draftRound:null, draftPick:null, draftType:"IFA", pa:96, avg:".081", obp:".177", slg:".081", ops:".258", hr:0, rbi:5, r:5, h:7, doubles:0, triples:0, sb:2, bbpct:"9.4%", kpct:"27.1%", war:-0.9, war2:-1.2, wrc:-21, woba:".138", xwoba:".209", oaa:-3, frv:-3, batSpeed:71.9, squaredUp:"17.9%", fastSwing:"19.2%", laSwSp:"18.9%", idealAttack:"56.3%", armValue:null, armStrength:85.3, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:45,r:1,h:2,hr:0,rbi:3,avg:".049",obp:".133",slg:".049",ops:".182",wrc:-46,woba:".102",iso:".000",bbpct:"8.9%",kpct:"28.9%",babip:".071"}, vsR:{pa:40,r:4,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:21,r:0,h:3,hr:0,rbi:4,avg:".176",obp:".333",slg:".176",ops:".510",wrc:60,woba:".260",iso:".000",bbpct:"19.0%",kpct:"19.0%",babip:".231"}, highLeverage:{pa:8,r:4,h:2,hr:0,rbi:1,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:36,r:1,h:2,hr:0,rbi:2,avg:".065",obp:".194",slg:".065",ops:".259",wrc:-1,woba:".146",iso:".000",bbpct:"13.9%",kpct:"27.8%",babip:".095"}}},
    { name:"Sean Murphy", pos:"C", bats:"R", throws:"R", dob:"1994-10-04", draftYear:2016, draftRound:3, draftPick:83, draftType:"MLB", pa:61, avg:".224", obp:".262", slg:".379", ops:".642", hr:1, rbi:3, r:4, h:11, doubles:3, triples:0, sb:0, bbpct:"4.9%", kpct:"36.1%", war:-0.1, war2:0.1, wrc:75, woba:".280", xwoba:".252", oaa:null, frv:-1, batSpeed:71.7, squaredUp:"22.6%", fastSwing:"22.6%", laSwSp:"26.9%", idealAttack:"40.4%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:16,r:1,h:2,hr:0,rbi:1,avg:".125",obp:".125",slg:".125",ops:".250",wrc:-39,woba:".111",iso:".000",bbpct:"0.0%",kpct:"31.3%",babip:".182"}, vsR:{pa:26,r:0,h:4,hr:0,rbi:0,avg:".154",obp:".154",slg:".192",ops:".346",wrc:-13,woba:".151",iso:".038",bbpct:"0.0%",kpct:"42.3%",babip:".267"}, risp:{pa:13,r:0,h:2,hr:0,rbi:1,avg:".154",obp:".154",slg:".154",ops:".308",wrc:-22,woba:".137",iso:".000",bbpct:"0.0%",kpct:"30.8%",babip:".222"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:1,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".500"}, twoOuts:{pa:8,r:1,h:1,hr:0,rbi:0,avg:".125",obp:".125",slg:".125",ops:".250",wrc:0,woba:".111",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".167"}}},
    { name:"Jim Jarvis", pos:"SS", bats:"L", throws:"R", dob:"2000-11-06", draftYear:2023, draftRound:11, draftPick:320, draftType:"MLB", pa:124, avg:".207", obp:".267", slg:".297", ops:".564", hr:1, rbi:11, r:10, h:23, doubles:5, triples:1, sb:0, bbpct:"6.5%", kpct:"18.5%", war:0.5, war2:-0.1, wrc:56, woba:".254", xwoba:".268", oaa:-1, frv:0, batSpeed:71.0, squaredUp:"30.6%", fastSwing:"12.1%", laSwSp:"27.2%", idealAttack:"46.1%", armValue:null, armStrength:89.8, abs:{netOvr:null, netRuns:null, chal:0, won:0, lost:0, wonPct:"0.0%", chalRate:"0.0%", xChalRate:"0.0%", rateVsExp:"0.0%"}, splits:{vsL:{pa:23,r:3,h:3,hr:0,rbi:2,avg:".158",obp:".304",slg:".263",ops:".568",wrc:68,woba:".271",iso:".105",bbpct:"13.0%",kpct:"17.4%",babip:".200"}, vsR:{pa:94,r:7,h:20,hr:1,rbi:9,avg:".230",obp:".256",slg:".322",ops:".577",wrc:56,woba:".254",iso:".092",bbpct:"3.2%",kpct:"18.1%",babip:".275"}, risp:{pa:29,r:0,h:6,hr:0,rbi:8,avg:".231",obp:".231",slg:".346",ops:".577",wrc:51,woba:".247",iso:".115",bbpct:"0.0%",kpct:"17.2%",babip:".286"}, highLeverage:{pa:7,r:1,h:1,hr:0,rbi:2,avg:".167",obp:".167",slg:".333",ops:".500",wrc:27,woba:".210",iso:".167",bbpct:"0.0%",kpct:"14.3%",babip:".200"}, twoOuts:{pa:31,r:5,h:10,hr:0,rbi:3,avg:".357",obp:".419",slg:".500",ops:".919",wrc:156,woba:".402",iso:".143",bbpct:"6.5%",kpct:"25.8%",babip:".500"}}},
    { name:"Jorge Mateo", pos:"SS", bats:"R", throws:"R", dob:"1995-06-23", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", pa:137, avg:".240", obp:".285", slg:".380", ops:".665", hr:4, rbi:11, r:29, h:31, doubles:6, triples:0, sb:10, bbpct:"5.8%", kpct:"29.9%", war:0.7, war2:0.5, wrc:82, woba:".292", xwoba:".322", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.2%", fastSwing:"35.3%", laSwSp:"45.5%", idealAttack:"42.9%", armValue:null, armStrength:88.3, abs:{netOvr:-6.2, netRuns:-1.1, chal:8, won:1, lost:7, wonPct:"13%", chalRate:"11.4%", xChalRate:"4.8%", rateVsExp:"+6.6%"}, splits:{vsL:{pa:54,r:10,h:12,hr:2,rbi:3,avg:".231",obp:".259",slg:".365",ops:".625",wrc:69,woba:".273",iso:".135",bbpct:"3.7%",kpct:"33.3%",babip:".313"}, vsR:{pa:83,r:19,h:19,hr:2,rbi:8,avg:".247",obp:".301",slg:".390",ops:".691",wrc:89,woba:".304",iso:".143",bbpct:"7.2%",kpct:"27.7%",babip:".327"}, risp:{pa:32,r:23,h:7,hr:0,rbi:6,avg:".241",obp:".313",slg:".241",ops:".554",wrc:60,woba:".260",iso:".000",bbpct:"9.4%",kpct:"31.3%",babip:".368"}, highLeverage:{pa:14,r:9,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:71,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:45,r:12,h:9,hr:1,rbi:5,avg:".214",obp:".267",slg:".333",ops:".600",wrc:64,woba:".266",iso:".119",bbpct:"6.7%",kpct:"26.7%",babip:".276"}}},
    { name:"Eli White", pos:"OF", bats:"R", throws:"R", dob:"1994-06-26", draftYear:2016, draftRound:11, draftPick:322, draftType:"MLB", pa:144, avg:".233", obp:".285", slg:".406", ops:".691", hr:5, rbi:17, r:17, h:31, doubles:6, triples:1, sb:4, bbpct:"6.3%", kpct:"21.5%", war:1.1, war2:0.6, wrc:87, woba:".301", xwoba:".269", oaa:2, frv:3, batSpeed:73.0, squaredUp:"20.6%", fastSwing:"29.4%", laSwSp:"31.6%", idealAttack:"53.8%", armValue:null, armStrength:88.7, abs:{netOvr:-0.8, netRuns:0.5, chal:3, won:2, lost:1, wonPct:"67%", chalRate:"4.3%", xChalRate:"6.3%", rateVsExp:"-2.0%"}, splits:{vsL:{pa:89,r:8,h:18,hr:4,rbi:12,avg:".228",obp:".303",slg:".443",ops:".746",wrc:102,woba:".323",iso:".215",bbpct:"9.0%",kpct:"24.7%",babip:".259"}, vsR:{pa:50,r:9,h:10,hr:1,rbi:5,avg:".204",obp:".220",slg:".327",ops:".547",wrc:45,woba:".237",iso:".122",bbpct:"2.0%",kpct:"18.0%",babip:".231"}, risp:{pa:38,r:12,h:7,hr:1,rbi:11,avg:".219",obp:".316",slg:".344",ops:".660",wrc:84,woba:".296",iso:".125",bbpct:"13.2%",kpct:"18.4%",babip:".240"}, highLeverage:{pa:20,r:4,h:2,hr:0,rbi:4,avg:".111",obp:".200",slg:".111",ops:".311",wrc:-7,woba:".159",iso:".000",bbpct:"10.0%",kpct:"15.0%",babip:".133"}, twoOuts:{pa:40,r:7,h:7,hr:2,rbi:4,avg:".194",obp:".275",slg:".389",ops:".664",wrc:82,woba:".292",iso:".194",bbpct:"10.0%",kpct:"20.0%",babip:".192"}}},
    { name:"Sandy León", pos:"C", bats:"S", throws:"R", dob:"1989-03-13", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-6,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", bats:"R", throws:"R", dob:"1995-03-21", draftYear:2013, draftRound:null, draftPick:null, draftType:"IFA", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".185", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Joey Bart", pos:"C", bats:"R", throws:"R", dob:"1996-12-15", draftYear:2018, draftRound:1, draftPick:2, draftType:"MLB", pa:119, avg:".226", obp:".303", slg:".377", ops:".680", hr:4, rbi:13, r:13, h:24, doubles:4, triples:0, sb:0, bbpct:"4.3%", kpct:"27.0%", war:0.4, war2:0.3, wrc:91, woba:".307", xwoba:".292", oaa:null, frv:0, batSpeed:75.5, squaredUp:"17.0%", fastSwing:"52.8%", laSwSp:"36.2%", idealAttack:"46.6%", avgPop:1.98, armValue:null, armStrength:83.9, abs:{netOvr:-4.2, netRuns:-2.8, chal:3, won:0, lost:3, wonPct:"0%", chalRate:"4.3%", xChalRate:"4.5%", rateVsExp:"-0.1%"}, absCatch:{netOvr:0.5, netRuns:-0.4, chal:25, won:15, lost:10, wonPct:"60%", chalRate:"1.8%", xChalRate:"2.5%", rateVsExp:"-0.7%"}, splits:{vsL:{pa:55,r:5,h:7,hr:1,rbi:5,avg:".143",obp:".236",slg:".265",ops:".502",wrc:41,woba:".232",iso:".122",bbpct:"5.5%",kpct:"30.9%",babip:".194"}, vsR:{pa:54,r:8,h:15,hr:3,rbi:8,avg:".306",obp:".352",slg:".510",ops:".862",wrc:133,woba:".371",iso:".204",bbpct:"3.7%",kpct:"24.1%",babip:".353"}, risp:{pa:30,r:9,h:5,hr:1,rbi:7,avg:".192",obp:".267",slg:".308",ops:".574",wrc:57,woba:".256",iso:".115",bbpct:"10.0%",kpct:"33.3%",babip:".250"}, highLeverage:{pa:14,r:4,h:2,hr:1,rbi:2,avg:".167",obp:".286",slg:".417",ops:".702",wrc:92,woba:".309",iso:".250",bbpct:"14.3%",kpct:"35.7%",babip:".167"}, twoOuts:{pa:34,r:6,h:5,hr:3,rbi:6,avg:".167",obp:".265",slg:".467",ops:".731",wrc:98,woba:".317",iso:".300",bbpct:"2.9%",kpct:"20.6%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"DH", bats:"L", throws:"L", dob:"1995-03-16", draftYear:2013, draftRound:30, draftPick:895, draftType:"MLB", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:156,woba:".403",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Brewer Hicklen", pos:"OF", bats:"R", throws:"R", dob:"1996-02-09", draftYear:2017, draftRound:7, draftPick:210, draftType:"MLB", pa:23, avg:".368", obp:".478", slg:".579", ops:"1.057", hr:0, rbi:3, r:5, h:7, doubles:4, triples:0, sb:0, bbpct:"17.4%", kpct:"34.8%", war:0.2, war2:0.3, wrc:192, woba:".457", xwoba:".354", oaa:-1, frv:-1, batSpeed:73.0, squaredUp:"20.0%", fastSwing:"32.5%", laSwSp:"45.5%", idealAttack:"57.5%", armValue:null, armStrength:null, splits:{vsL:{pa:3,r:0,h:2,hr:0,rbi:2,avg:".667",obp:".667",slg:"1.333",ops:"2.000",wrc:450,woba:".841",iso:".667",bbpct:"0.0%",kpct:"33.3%",babip:"1.000"}, vsR:{pa:20,r:5,h:5,hr:0,rbi:1,avg:".313",obp:".450",slg:".438",ops:".888",wrc:154,woba:".399",iso:".125",bbpct:"20.0%",kpct:"35.0%",babip:".556"}, risp:{pa:9,r:0,h:4,hr:0,rbi:3,avg:".500",obp:".556",slg:".875",ops:"1.431",wrc:286,woba:".597",iso:".375",bbpct:"11.1%",kpct:"22.2%",babip:".667"}, highLeverage:{pa:1,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"100.0%",babip:".000"}, twoOuts:{pa:12,r:2,h:4,hr:0,rbi:2,avg:".400",obp:".500",slg:".600",ops:"1.100",wrc:204,woba:".474",iso:".200",bbpct:"16.7%",kpct:"41.7%",babip:".800"}}},
  ];

export const starters = [
    // Updated August 25, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards; added swstr/cstr/csw discipline fields
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    // Tyler Mahle & Brent Suter splits NOT updated per user instruction (trade-adjusted context)
    // Ray Kerr vsL not on FanGraphs leaderboard (0 LHH faced) — vsL block held as-is, no new fields added
    { name:"Chris Sale", throws:"L", dob:"1989-03-30", draftYear:2010, draftRound:1, draftPick:13, draftType:"MLB", wl:"13-9", era:"2.06", ip:"144.0", kpct:"30.7%", bbpct:"4.9%", kbb:"25.9%", whip:"1.000", war:5.2, war2:5.4, fip:"2.18", xfip:"2.76", siera:"2.78", batSpeed:71.0, fastSwing:"20.4%", swstr:"13.7%", cstr:"17.6%", csw:"31.3%", laSwSp:"34.6%", idealAttack:"44.6%", splits:{vsL:{ip:"31.2",era:"1.99",fip:"1.70",xfip:"1.95",whip:"1.11",avg:".244",obp:".295",slg:".350",woba:".287",kpct:"31.6%",bbpct:"3.8%",kbb:"27.8%",swstr:"12.3%",cstr:"21.4%",csw:"33.7%"}, vsR:{ip:"103.1",era:"2.26",fip:"2.41",xfip:"2.97",whip:"1.01",avg:".214",obp:".269",slg:".291",woba:".253",kpct:"30.3%",bbpct:"5.6%",kbb:"24.7%",swstr:"14.1%",cstr:"16.3%",csw:"30.4%"}}},
    { name:"Tyler Mahle", throws:"R", dob:"1994-09-29", draftYear:2013, draftRound:7, draftPick:226, draftType:"MLB", wl:"5-10", era:"4.25", ip:"125.0", kpct:"23.2%", bbpct:"8.1%", kbb:"15.2%", whip:"1.288", war:1.2, war2:1.7, fip:"4.00", xfip:"3.79", siera:"3.95", batSpeed:72.3, fastSwing:"27.5%", swstr:"9.8%", cstr:"17.4%", csw:"27.3%", laSwSp:"34.1%", idealAttack:"53.1%", splits:{vsL:{ip:"68.0",era:"3.97",fip:"3.44",xfip:"3.62",whip:"1.07",avg:".225",obp:".281",slg:".385",woba:".291",kpct:"26.1%",bbpct:"6.7%",kbb:"19.4%"}, vsR:{ip:"50.1",era:"5.01",fip:"4.97",xfip:"4.38",whip:"1.65",avg:".294",obp:".370",slg:".448",woba:".361",kpct:"18.3%",bbpct:"10.5%",kbb:"7.9%"}}},
    { name:"Reynaldo López", throws:"R", dob:"1994-01-04", draftYear:2012, draftRound:null, draftPick:null, draftType:"IFA", wl:"4-3", era:"3.64", ip:"71.2", kpct:"21.6%", bbpct:"9.5%", kbb:"12.1%", whip:"1.340", fip:"4.33", war:0.8, war2:0.5, xfip:"4.42", siera:"4.32", batSpeed:71.7, fastSwing:"23.6%", swstr:"9.2%", cstr:"16.6%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"43.2%", splits:{vsL:{ip:"37.2",era:"4.06",fip:"5.09",xfip:"5.23",whip:"1.57",avg:".218",obp:".347",slg:".394",woba:".333",kpct:"21.6%",bbpct:"16.4%",kbb:"5.3%"}, vsR:{ip:"34.0",era:"3.18",fip:"3.48",xfip:"3.54",whip:"1.09",avg:".273",obp:".281",slg:".432",woba:".307",kpct:"21.5%",bbpct:"0.7%",kbb:"20.7%"}}},
    { name:"Martín Pérez", throws:"L", dob:"1991-04-04", draftYear:2007, draftRound:null, draftPick:null, draftType:"IFA", wl:"8-8", era:"3.05", ip:"121.0", kpct:"18.2%", bbpct:"10.0%", kbb:"8.2%", whip:"1.214", fip:"4.18", war:2.5, war2:1.1, xfip:"4.25", siera:"4.64", batSpeed:73.5, fastSwing:"37.3%", swstr:"8.6%", cstr:"18.4%", csw:"27.0%", laSwSp:"34.1%", idealAttack:"52.1%", splits:{vsL:{ip:"32.2",era:"3.58",fip:"4.06",xfip:"3.18",whip:"1.16",avg:".246",obp:".296",slg:".413",woba:".311",kpct:"22.2%",bbpct:"5.2%",kbb:"17.0%",swstr:"9.0%",cstr:"16.6%",csw:"25.7%"}, vsR:{ip:"82.2",era:"2.94",fip:"4.34",xfip:"4.76",whip:"1.23",avg:".208",obp:".301",slg:".341",woba:".287",kpct:"16.2%",bbpct:"12.1%",kbb:"4.1%",swstr:"8.4%",cstr:"19.2%",csw:"27.6%"}}},
    { name:"Bryce Elder", throws:"R", dob:"1999-05-19", draftYear:2020, draftRound:5, draftPick:156, draftType:"MLB", wl:"8-8", era:"4.11", ip:"149.0", kpct:"19.1%", bbpct:"7.7%", kbb:"11.4%", whip:"1.268", fip:"4.60", war:1.3, war2:1.1, xfip:"4.16", siera:"4.39", batSpeed:72.6, fastSwing:"28.6%", swstr:"8.8%", cstr:"16.6%", csw:"25.4%", laSwSp:"32.1%", idealAttack:"52.3%", splits:{vsL:{ip:"88.1",era:"3.87",fip:"4.50",xfip:"4.33",whip:"1.12",avg:".206",obp:".279",slg:".371",woba:".287",kpct:"20.2%",bbpct:"9.1%",kbb:"11.1%",swstr:"8.8%",cstr:"15.0%",csw:"23.8%"}, vsR:{ip:"49.1",era:"4.01",fip:"4.69",xfip:"3.85",whip:"1.44",avg:".286",obp:".332",slg:".448",woba:".341",kpct:"18.3%",bbpct:"6.0%",kbb:"12.4%",swstr:"9.2%",cstr:"18.9%",csw:"28.1%"}}},
    { name:"Grant Holmes", throws:"R", dob:"1996-03-22", draftYear:2014, draftRound:1, draftPick:22, draftType:"MLB", wl:"9-5", era:"3.71", ip:"128.2", kpct:"18.7%", bbpct:"10.0%", kbb:"8.7%", whip:"1.337", fip:"4.75", war:2.0, war2:0.7, xfip:"4.52", siera:"4.72", batSpeed:72.9, fastSwing:"31.4%", swstr:"12.1%", cstr:"14.4%", csw:"26.5%", laSwSp:"34.4%", idealAttack:"51.5%", splits:{vsL:{ip:"75.0",era:"2.76",fip:"5.09",xfip:"4.58",whip:"1.29",avg:".220",obp:".312",slg:".392",woba:".312",kpct:"19.0%",bbpct:"11.7%",kbb:"7.3%",swstr:"11.9%",cstr:"14.4%",csw:"26.3%"}, vsR:{ip:"48.2",era:"4.99",fip:"4.48",xfip:"4.57",whip:"1.36",avg:".254",obp:".318",slg:".415",woba:".321",kpct:"18.7%",bbpct:"7.9%",kbb:"10.7%",swstr:"12.5%",cstr:"15.0%",csw:"27.5%"}}},
    { name:"JR Ritchie", throws:"R", dob:"2003-06-26", draftYear:2022, draftRound:1, draftPick:35, draftType:"MLB", wl:"1-2", era:"4.50", ip:"58.0", kpct:"20.7%", bbpct:"14.1%", whip:"1.431", fip:"5.41", war:0.1, war2:-0.2, xfip:"4.91", siera:"4.96", batSpeed:72.4, fastSwing:"28.6%", swstr:"8.4%", cstr:"16.9%", csw:"25.3%", laSwSp:"30.0%", idealAttack:"56.6%", splits:{vsL:{ip:"33.2",era:"5.08",fip:"6.04",xfip:"5.35",whip:"1.63",avg:".236",obp:".376",slg:".417",woba:".353",kpct:"21.0%",bbpct:"15.9%",kbb:"5.1%"}, vsR:{ip:"24.1",era:"3.70",fip:"4.54",xfip:"4.31",whip:"1.15",avg:".198",obp:".293",slg:".314",woba:".276",kpct:"20.2%",bbpct:"11.1%",kbb:"9.1%"}}},
    { name:"Spencer Strider", throws:"R", dob:"1998-10-28", draftYear:2020, draftRound:4, draftPick:126, draftType:"MLB", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.36", xfip:"4.40", siera:"4.17", batSpeed:72.3, fastSwing:"24.9%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.67",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".341",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.96",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".377",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"AJ Smith-Shawver", throws:"R", dob:"2002-11-20", draftYear:2021, draftRound:7, draftPick:217, draftType:"MLB", wl:"0-0", era:"5.93", ip:"13.2", kpct:"15.9%", bbpct:"12.7%", kbb:"3.2%", whip:"1.610", war:-0.1, war2:0.1, fip:"4.33", xfip:"5.58", siera:"5.60", batSpeed:71.5, fastSwing:"23.4%", swstr:"9.0%", cstr:"15.4%", csw:"24.4%", laSwSp:"32.1%", idealAttack:"48.9%", splits:{vsL:{ip:"6.0",era:"6.00",fip:"3.59",xfip:"5.10",whip:"1.00",avg:".150",obp:".250",slg:".150",woba:".198",kpct:"12.5%",bbpct:"12.5%",kbb:"0.0%",swstr:"8.1%",cstr:"16.3%",csw:"24.4%"}, vsR:{ip:"2.2",era:"6.75",fip:"2.34",xfip:"4.60",whip:"3.00",avg:".429",obp:".500",slg:".500",woba:".444",kpct:"25.0%",bbpct:"12.5%",kbb:"12.5%",swstr:"12.3%",cstr:"14.0%",csw:"26.3%"}}},
    { name:"Hurston Waldrep", throws:"R", dob:"2002-03-01", draftYear:2023, draftRound:1, draftPick:24, draftType:"MLB", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.44", xfip:"5.94", siera:"5.68", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"55.7%", splits:{vsL:{ip:"6.1",era:"9.95",fip:"8.47",xfip:"5.83",whip:"1.74",avg:".240",obp:".387",slg:".480",woba:".382",kpct:"16.1%",bbpct:"16.1%",kbb:"0.0%"}, vsR:{ip:"4.1",era:"6.23",fip:"8.41",xfip:"6.13",whip:"2.77",avg:".368",obp:".520",slg:".526",woba:".464",kpct:"16.0%",bbpct:"20.0%",kbb:"-4.0%"}}},
    { name:"Owen Murphy", throws:"R", dob:"2003-09-27", draftYear:2022, draftRound:1, draftPick:20, draftType:"MLB", wl:"0-1", era:"4.05", ip:"6.2", kpct:"20.7%", bbpct:"6.9%", whip:"1.200", war:-0.1, war2:0.1, fip:"4.60", xfip:"4.95", siera:"4.37", batSpeed:72.3, fastSwing:"29.7%", swstr:"9.5%", cstr:"12.1%", csw:"21.6%", laSwSp:"40.0%", idealAttack:"46.9%", splits:{vsL:{ip:"3.2",era:"4.91",fip:"6.11",xfip:"3.82",whip:"1.09",avg:".231",obp:".333",slg:".462",woba:".350",kpct:"26.7%",bbpct:"6.7%",kbb:"20.0%"}, vsR:{ip:"3.0",era:"3.00",fip:"2.77",xfip:"6.37",whip:"1.33",avg:".231",obp:".286",slg:".308",woba:".267",kpct:"14.3%",bbpct:"7.1%",kbb:"7.1%"}}},
  ];
 
  export const bullpen = [
    // Updated August 25, 2026 — vsL + vsR splits refreshed from FanGraphs L/R splits leaderboards; added swstr/cstr/csw discipline fields
    // ALL other fields preserved exactly as before (bio, top-level stats, bat tracking, plate discipline)
    // Tyler Mahle & Brent Suter splits NOT updated per user instruction (trade-adjusted context)
    // Ray Kerr vsL not on FanGraphs leaderboard (0 LHH faced) — vsL block held as-is, no new fields added
    { name:"Raisel Iglesias", role:"CL", throws:"R", dob:"1990-01-04", draftYear:2014, draftRound:null, draftPick:null, draftType:"IFA", era:"2.82", ip:"51.0", sv:29, kpct:"25.1%", bbpct:"7.7%", kbb:"17.4%", whip:"1.176", fip:"3.32", war:1.0, war2:0.8, xfip:"3.76", siera:"3.40", batSpeed:71.8, fastSwing:"27.0%", swstr:"13.5%", cstr:"17.7%", csw:"31.1%", laSwSp:"31.8%", idealAttack:"49.3%", splits:{vsL:{ip:"27.2",era:"2.60",fip:"3.81",xfip:"4.31",whip:"1.08",avg:".212",obp:".278",slg:".354",woba:".281",kpct:"21.3%",bbpct:"8.3%",kbb:"13.0%",swstr:"13.8%",cstr:"17.0%",csw:"30.8%"}, vsR:{ip:"20.1",era:"3.54",fip:"2.64",xfip:"2.85",whip:"1.33",avg:".259",obp:".318",slg:".370",woba:".307",kpct:"31.8%",bbpct:"6.8%",kbb:"25.0%",swstr:"14.1%",cstr:"18.2%",csw:"32.4%"}}},
    { name:"Dylan Lee", role:"RP", throws:"L", dob:"1994-08-01", draftYear:2016, draftRound:10, draftPick:293, draftType:"MLB", era:"2.66", ip:"61.0", sv:0, kpct:"31.4%", bbpct:"6.4%", kbb:"25.0%", whip:"0.902", fip:"2.04", war:1.6, war2:2.0, xfip:"3.05", siera:"2.63", batSpeed:72.6, fastSwing:"28.5%", swstr:"17.5%", cstr:"15.1%", csw:"32.6%", laSwSp:"33.1%", idealAttack:"49.9%", splits:{vsL:{ip:"21.1",era:"2.11",fip:"1.44",xfip:"2.72",whip:"0.80",avg:".139",obp:".213",slg:".250",woba:".208",kpct:"34.6%",bbpct:"8.6%",kbb:"25.9%",swstr:"17.9%",cstr:"13.9%",csw:"31.8%"}, vsR:{ip:"37.1",era:"2.17",fip:"2.28",xfip:"3.10",whip:"0.78",avg:".168",obp:".209",slg:".275",woba:".211",kpct:"32.4%",bbpct:"5.0%",kbb:"27.3%",swstr:"18.1%",cstr:"16.2%",csw:"34.3%"}}},
    { name:"Robert Suarez", role:"RP", throws:"R", dob:"1991-03-01", draftYear:2021, draftRound:null, draftPick:null, draftType:"IFA", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.40", siera:"3.35", batSpeed:71.4, fastSwing:"22.7%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"53.6%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.73",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".170",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.99",xfip:"3.02",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".243",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", throws:"R", dob:"2005-06-17", draftYear:2022, draftRound:null, draftPick:null, draftType:"IFA", era:"2.39", ip:"60.1", sv:3, kpct:"31.2%", bbpct:"7.7%", kbb:"23.5%", whip:"1.127", fip:"2.44", war:2.1, war2:1.9, xfip:"3.00", siera:"2.73", batSpeed:71.9, fastSwing:"24.6%", swstr:"14.4%", cstr:"14.2%", csw:"28.5%", laSwSp:"34.5%", idealAttack:"43.2%", splits:{vsL:{ip:"31.0",era:"3.19",fip:"2.57",xfip:"2.40",whip:"1.10",avg:".231",obp:".276",slg:".376",woba:".285",kpct:"36.2%",bbpct:"5.5%",kbb:"30.7%",swstr:"14.4%",cstr:"12.6%",csw:"27.0%"}, vsR:{ip:"26.1",era:"1.71",fip:"1.98",xfip:"3.36",whip:"1.06",avg:".211",obp:".276",slg:".242",woba:".236",kpct:"26.4%",bbpct:"7.5%",kbb:"18.9%",swstr:"15.1%",cstr:"16.6%",csw:"31.7%"}}},
    { name:"Dylan Dodd", role:"RP", throws:"L", dob:"1998-06-06", draftYear:2021, draftRound:3, draftPick:96, draftType:"MLB", era:"2.08", ip:"43.1", sv:1, kpct:"26.8%", bbpct:"7.7%", kbb:"19.0%", whip:"0.900", fip:"3.25", war:1.5, war2:0.7, xfip:"3.97", siera:"3.42", batSpeed:72.4, fastSwing:"29.2%", swstr:"13.2%", cstr:"10.9%", csw:"24.1%", laSwSp:"38.0%", idealAttack:"53.1%", splits:{vsL:{ip:"17.1",era:"2.08",fip:"3.66",xfip:"3.91",whip:"1.10",avg:".161",obp:".278",slg:".323",woba:".268",kpct:"31.9%",bbpct:"12.5%",kbb:"19.4%",swstr:"14.0%",cstr:"14.0%",csw:"28.1%"}, vsR:{ip:"23.1",era:"2.31",fip:"3.13",xfip:"3.76",whip:"0.77",avg:".175",obp:".224",slg:".288",woba:".228",kpct:"23.3%",bbpct:"4.7%",kbb:"18.6%",swstr:"11.9%",cstr:"9.1%",csw:"21.1%"}}},
    { name:"Brent Suter", role:"RP", throws:"L", dob:"1989-08-29", draftYear:2012, draftRound:31, draftPick:946, draftType:"MLB", era:"3.59", ip:"77.2", sv:0, kpct:"19.6%", bbpct:"6.5%", kbb:"13.0%", whip:"1.249", fip:"3.65", war:0.5, war2:0.5, xfip:"3.63", siera:"3.70", batSpeed:71.1, fastSwing:"20.3%", swstr:"9.0%", cstr:"18.5%", csw:"27.5%", laSwSp:"34.9%", idealAttack:"42.7%", splits:{vsL:{ip:"30.0",era:"4.80",fip:"4.12",xfip:"3.64",whip:"1.30",avg:".274",obp:".328",slg:".487",woba:".351",kpct:"19.7%",bbpct:"6.6%",kbb:"13.1%"}, vsR:{ip:"45.1",era:"2.98",fip:"3.42",xfip:"3.67",whip:"1.24",avg:".244",obp:".296",slg:".375",woba:".294",kpct:"19.8%",bbpct:"6.8%",kbb:"13.0%"}}},
    { name:"Víctor Mederos", role:"RP", throws:"R", dob:"2001-06-08", draftYear:2022, draftRound:6, draftPick:178, draftType:"MLB", era:"3.04", ip:"26.2", sv:1, kpct:"23.2%", bbpct:"8.9%", kbb:"14.3%", whip:"1.125", fip:"2.97", war:0.6, war2:0.5, xfip:"4.63", siera:"3.89", batSpeed:72.9, fastSwing:"33.7%", swstr:"12.9%", cstr:"13.1%", csw:"26.0%", laSwSp:"34.8%", idealAttack:"56.9%", splits:{vsL:{ip:"10.1",era:"5.23",fip:"2.60",xfip:"4.94",whip:"1.16",avg:".282",obp:".326",slg:".410",woba:".320",kpct:"15.9%",bbpct:"2.3%",kbb:"13.6%",swstr:"13.9%",cstr:"14.6%",csw:"28.5%"}, vsR:{ip:"12.2",era:"2.13",fip:"3.16",xfip:"4.17",whip:"1.11",avg:".170",obp:".264",slg:".319",woba:".263",kpct:"28.8%",bbpct:"11.5%",kbb:"17.3%",swstr:"13.5%",cstr:"13.1%",csw:"26.6%"}}},
    { name:"Tyler Kinley", role:"RP", throws:"R", dob:"1991-01-31", draftYear:2013, draftRound:16, draftPick:472, draftType:"MLB", era:"4.01", ip:"42.2", sv:0, kpct:"23.5%", bbpct:"11.2%", kbb:"12.3%", whip:"1.286", fip:"5.40", war:0.4, war2:-0.4, xfip:"4.73", siera:"4.17", batSpeed:70.9, fastSwing:"17.8%", swstr:"11.7%", cstr:"18.3%", csw:"30.1%", laSwSp:"34.8%", idealAttack:"56.4%", splits:{vsL:{ip:"21.0",era:"6.86",fip:"6.76",xfip:"4.37",whip:"1.14",avg:".194",obp:".289",slg:".514",woba:".327",kpct:"26.5%",bbpct:"12.0%",kbb:"14.5%"}, vsR:{ip:"20.0",era:"0.90",fip:"3.29",xfip:"4.76",whip:"1.35",avg:".247",obp:".326",slg:".338",woba:".301",kpct:"20.9%",bbpct:"9.3%",kbb:"11.6%"}}},
    { name:"Ray Kerr", role:"RP", throws:"R", dob:"1994-09-10", draftYear:2017, draftRound:null, draftPick:null, draftType:"UDFA", era:"2.70", ip:"6.2", sv:0, kpct:"18.5%", bbpct:"3.7%", kbb:"14.8%", whip:"0.600", fip:"4.88", war:0.1, war2:0.0, xfip:"4.74", siera:"3.83", batSpeed:73.2, fastSwing:"38.1%", swstr:"9.4%", cstr:"17.6%", csw:"27.1%", laSwSp:"22.2%", idealAttack:"50.0%", splits:{vsL:{ip:"0.1",era:"0.00",fip:"3.09",xfip:"3.09",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"2.0",era:"0.00",fip:"4.59",xfip:"6.85",whip:"0.50",avg:".143",obp:".250",slg:".143",woba:".202",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%",swstr:"10.0%",cstr:"6.7%",csw:"16.7%"}}},
    { name:"James Karinchak", role:"RP", throws:"R", dob:"1995-09-22", draftYear:2017, draftRound:9, draftPick:282, draftType:"MLB", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.34", war:0.3, war2:0.0, xfip:"5.38", siera:"4.93", batSpeed:71.9, fastSwing:"25.5%", swstr:"8.6%", cstr:"19.8%", csw:"28.4%", laSwSp:"32.4%", idealAttack:"61.8%", splits:{vsL:{ip:"3.1",era:"2.70",fip:"7.00",xfip:"5.39",whip:"1.50",avg:".250",obp:".357",slg:".583",woba:".399",kpct:"21.4%",bbpct:"14.3%",kbb:"7.1%"}, vsR:{ip:"6.1",era:"1.42",fip:"2.94",xfip:"5.35",whip:"0.63",avg:".053",obp:".174",slg:".053",woba:".130",kpct:"21.7%",bbpct:"13.0%",kbb:"8.7%"}}},
    { name:"Danny Young", role:"RP", throws:"L", dob:"1994-05-27", draftYear:2015, draftRound:8, draftPick:242, draftType:"MLB", era:"8.03", ip:"12.1", sv:0, kpct:"23.1%", bbpct:"20.0%", kbb:"3.1%", whip:"2.270", fip:"7.70", war:-0.5, war2:-0.5, xfip:"6.14", siera:"5.42", batSpeed:73.3, fastSwing:"27.0%", swstr:"7.9%", cstr:"20.8%", csw:"32.4%", laSwSp:"31.3%", idealAttack:"41.9%", splits:{vsL:{ip:"5.2",era:"9.53",fip:"9.09",xfip:"6.91",whip:"2.47",avg:".364",obp:".500",slg:".727",woba:".513",kpct:"17.2%",bbpct:"20.7%",kbb:"-3.4%"}, vsR:{ip:"5.2",era:"3.18",fip:"4.85",xfip:"5.66",whip:"1.76",avg:".238",obp:".448",slg:".286",woba:".337",kpct:"24.1%",bbpct:"17.2%",kbb:"6.9%"}}},
    { name:"Carlos Carrasco", role:"RP", throws:"R", dob:"1987-03-21", draftYear:2003, draftRound:null, draftPick:null, draftType:"IFA", era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.50", war:-0.2, war2:-0.2, xfip:"4.72", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"62.8%", splits:{vsL:{ip:"10.1",era:"6.10",fip:"4.65",xfip:"4.89",whip:"1.45",avg:".317",obp:".364",slg:".415",woba:".345",kpct:"6.7%",bbpct:"4.4%",kbb:"2.2%"}, vsR:{ip:"6.1",era:"5.68",fip:"6.90",xfip:"4.50",whip:"1.42",avg:".320",obp:".370",slg:".600",woba:".415",kpct:"14.3%",bbpct:"3.6%",kbb:"10.7%"}}},
    { name:"Ian Hamilton", role:"RP", throws:"R", dob:"1995-06-16", draftYear:2016, draftRound:11, draftPick:326, draftType:"MLB", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.31", war:-0.1, war2:0.0, xfip:"3.97", siera:"3.96", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"41.2%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.71",xfip:"4.63",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".499",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.11",xfip:"3.62",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".244",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:82,l:56,pct:".594",gb:"—", home:"48-24",away:"34-32", rs:639, ra:526, diff:+113, strk:"L1", l10:"7-3", highlight:true,  srs:0.9 },
     { team:"PHI", full:"Philadelphia Phillies", w:78,l:60,pct:".565",gb:"4.0", home:"38-30",away:"40-30", rs:624, ra:593, diff:+31, strk:"W5", l10:"8-2", highlight:false, srs:0.3 },
     { team:"MIA", full:"Miami Marlins",        w:69,l:69,pct:".500",gb:"13.0", home:"42-27",away:"27-42", rs:597, ra:585, diff:+12, strk:"L1", l10:"5-5", highlight:false, srs:0.1 },
     { team:"WSN", full:"Washington Nationals", w:66,l:74,pct:".471",gb:"17.0", home:"32-39",away:"34-35", rs:726, ra:707, diff:+19, strk:"W1", l10:"5-5", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:62,l:76,pct:".449",gb:"20.0", home:"32-39",away:"30-37", rs:565, ra:617, diff:-52, strk:"W1", l10:"4-6", highlight:false, srs:-0.2 },
   ];
   
export const statcastHitters = [
  // Updated September 1, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // Hidden players (Tromp, León, Tellez, White, Mateo, Bart, Jarvis) — all fields held per hiding protocol
  { name:"Michael Harris II", ev:"90.4",hardHit:"48.5%",xwoba:".343",xba:".288",xslg:".479",barrel:"10.7%",chase:"44.8%",whiff:"25.3%",kpct:"19.9%",bbpct:"3.6%", gbpct:"45.8%",fbpct:"22.6%",ldpct:"25.9%",pupct:"5.7%",pullAir:"17.8%"},
  { name:"Matt Olson", ev:"92.7",hardHit:"50.4%",xwoba:".360",xba:".250",xslg:".519",barrel:"15.3%",chase:"27.5%",whiff:"25.1%",kpct:"25.2%",bbpct:"9.8%", gbpct:"36.2%",fbpct:"35.4%",ldpct:"20.4%",pupct:"8.0%",pullAir:"21.4%"},
  { name:"Dominic Smith", ev:"87.7",hardHit:"32.4%",xwoba:".298",xba:".240",xslg:".373",barrel:"5.5%",chase:"31.6%",whiff:"21.3%",kpct:"15.7%",bbpct:"7.3%", gbpct:"41.1%",fbpct:"29.2%",ldpct:"24.2%",pupct:"5.5%",pullAir:"17.9%"},
  { name:"Drake Baldwin", ev:"91.8",hardHit:"51.5%",xwoba:".368",xba:".276",xslg:".495",barrel:"12.8%",chase:"33.5%",whiff:"24.5%",kpct:"21.4%",bbpct:"9.6%", gbpct:"45.1%",fbpct:"25.6%",ldpct:"24.7%",pupct:"4.7%",pullAir:"13.1%"},
  { name:"Mauricio Dubón", ev:"86.5",hardHit:"29.7%",xwoba:".305",xba:".269",xslg:".376",barrel:"3.7%",chase:"37.2%",whiff:"15.4%",kpct:"11.9%",bbpct:"5.8%", gbpct:"40.1%",fbpct:"25.2%",ldpct:"26.6%",pupct:"8.2%",pullAir:"15.8%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"46.6%",xwoba:".322",xba:".260",xslg:".440",barrel:"10.2%",chase:"41.8%",whiff:"30.8%",kpct:"29.9%",bbpct:"5.8%", gbpct:"38.6%",fbpct:"30.7%",ldpct:"27.3%",pupct:"3.4%",pullAir:"21.6%"},
  { name:"Austin Riley", ev:"91.3",hardHit:"44.8%",xwoba:".299",xba:".213",xslg:".393",barrel:"11.9%",chase:"32.6%",whiff:"32.6%",kpct:"31.5%",bbpct:"7.7%", gbpct:"36.4%",fbpct:"31.0%",ldpct:"23.5%",pupct:"9.1%",pullAir:"18.7%"},
  { name:"Ozzie Albies", ev:"86.9",hardHit:"27.6%",xwoba:".286",xba:".232",xslg:".356",barrel:"4.0%",chase:"38.2%",whiff:"20.4%",kpct:"14.3%",bbpct:"7.0%", gbpct:"33.8%",fbpct:"33.6%",ldpct:"24.3%",pupct:"8.3%",pullAir:"26.6%"},
  { name:"Mike Yastrzemski", ev:"90.7",hardHit:"43.9%",xwoba:".308",xba:".235",xslg:".366",barrel:"6.7%",chase:"26.0%",whiff:"23.6%",kpct:"24.6%",bbpct:"9.8%", gbpct:"39.9%",fbpct:"30.0%",ldpct:"23.8%",pupct:"6.3%",pullAir:"23.1%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"45.1%",xwoba:".361",xba:".254",xslg:".469",barrel:"12.8%",chase:"27.5%",whiff:"30.4%",kpct:"23.3%",bbpct:"12.6%", gbpct:"42.1%",fbpct:"26.4%",ldpct:"23.8%",pupct:"7.7%",pullAir:"17.6%"},
  { name:"Eli White", ev:"86.4",hardHit:"31.1%",xwoba:".269",xba:".224",xslg:".326",barrel:"5.9%",chase:"29.8%",whiff:"27.7%",kpct:"21.5%",bbpct:"6.3%", gbpct:"55.3%",fbpct:"26.2%",ldpct:"16.5%",pupct:"1.9%",pullAir:"9.7%"},
  { name:"Ha-Seong Kim", ev:"85.7",hardHit:"23.3%",xwoba:".209",xba:".148",xslg:".202",barrel:"3.4%",chase:"24.6%",whiff:"20.3%",kpct:"27.1%",bbpct:"9.4%", gbpct:"41.7%",fbpct:"35.0%",ldpct:"11.7%",pupct:"11.7%",pullAir:"19.0%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"85.2",hardHit:"36.1%",xwoba:".252",xba:".199",xslg:".336",barrel:"8.3%",chase:"37.0%",whiff:"34.5%",kpct:"36.1%",bbpct:"4.9%", gbpct:"52.8%",fbpct:"25.0%",ldpct:"19.4%",pupct:"2.8%",pullAir:"15.2%"},
  { name:"Joey Bart", ev:"86.2",hardHit:"34.2%",xwoba:".293",xba:".208",xslg:".375",barrel:"7.9%",chase:"31.4%",whiff:"27.4%",kpct:"26.1%",bbpct:"5.0%", gbpct:"40.8%",fbpct:"35.5%",ldpct:"15.8%",pupct:"7.9%",pullAir:"21.1%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".506",xba:".339",xslg:".828",barrel:"28.6%",chase:"29.6%",whiff:"30.4%",kpct:"27.3%",bbpct:"9.1%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"88.7",hardHit:"36.7%",xwoba:".272",xba:".237",xslg:".308",barrel:"3.3%",chase:"27.9%",whiff:"18.2%",kpct:"18.2%",bbpct:"6.6%", gbpct:"58.9%",fbpct:"18.9%",ldpct:"20.0%",pupct:"2.2%",pullAir:"9.8%"},
  { name:"Brewer Hicklen", ev:"94.9",hardHit:"54.5%",xwoba:".354",xba:".256",xslg:".405",barrel:"9.1%",chase:"28.8%",whiff:"44.4%",kpct:"34.8%",bbpct:"17.4%", gbpct:"45.5%",fbpct:"18.2%",ldpct:"36.4%",pupct:"0.0%",pullAir:"18.2%"},
  { name:"Lane Thomas", ev:"89.5",hardHit:"41.2%",xwoba:".314",xba:".241",xslg:".370",barrel:"6.4%",chase:"20.5%",whiff:"22.3%",kpct:"24.5%",bbpct:"11.7%", gbpct:"37.3%",fbpct:"24.5%",ldpct:"24.9%",pupct:"13.3%",pullAir:"25.4%"},
];
 
export const statcastPitchers = [
  // Updated September 1, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU%, pullAir refreshed from Baseball Savant
  // Hidden players (Strider, Waldrep, Carrasco, Hamilton, Owen Murphy, Robert Suarez, López, Ritchie, Karinchak, Danny Young, Tyler Kinley) — all fields held per hiding protocol
  { name:"Raisel Iglesias", ev:"88.1",hardHit:"37.7%",xwoba:".295",xba:".232",xslg:".379",kpct:"25.1%",bbpct:"7.7%", barrel:"10.2%", chase:"37.6%",whiff:"29.6%",gbpct:"37.0%",fbpct:"29.0%",ldpct:"24.6%",pupct:"9.4%", pullAir:"22.0%"},
  { name:"Dylan Lee", ev:"87.4",hardHit:"32.0%",xwoba:".248",xba:".195",xslg:".309",kpct:"31.4%",bbpct:"6.4%", barrel:"5.4%", chase:"35.6%",whiff:"36.3%",gbpct:"33.3%",fbpct:"33.3%",ldpct:"25.9%",pupct:"7.5%", pullAir:"27.9%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.9%",xwoba:".313",xba:".252",xslg:".401",kpct:"19.1%",bbpct:"7.7%", barrel:"6.8%", chase:"27.6%",whiff:"21.6%",gbpct:"44.2%",fbpct:"26.4%",ldpct:"23.5%",pupct:"5.9%", pullAir:"18.3%"},
  { name:"Chris Sale", ev:"87.7",hardHit:"34.0%",xwoba:".269",xba:".222",xslg:".326",kpct:"30.7%",bbpct:"4.9%", barrel:"5.3%", chase:"37.0%",whiff:"30.3%",gbpct:"44.6%",fbpct:"24.0%",ldpct:"25.6%",pupct:"5.8%", pullAir:"15.9%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"88.3",hardHit:"34.9%",xwoba:".269",xba:".215",xslg:".329",kpct:"31.2%",bbpct:"7.7%", barrel:"6.1%", chase:"32.1%",whiff:"30.3%",gbpct:"40.3%",fbpct:"25.5%",ldpct:"25.5%",pupct:"8.7%", pullAir:"10.9%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".359",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"11.4%"},
  { name:"Tyler Kinley", ev:"85.5",hardHit:"28.1%",xwoba:".285",xba:".206",xslg:".369",kpct:"23.4%",bbpct:"10.9%", barrel:"8.0%", chase:"26.7%",whiff:"27.3%",gbpct:"30.7%",fbpct:"33.3%",ldpct:"24.6%",pupct:"11.4%", pullAir:"34.2%"},
  { name:"Martín Pérez", ev:"88.0",hardHit:"38.0%",xwoba:".327",xba:".263",xslg:".393",kpct:"18.2%",bbpct:"10.0%", barrel:"5.1%", chase:"27.2%",whiff:"22.1%",gbpct:"48.2%",fbpct:"20.3%",ldpct:"26.5%",pupct:"5.1%", pullAir:"20.3%"},
  { name:"Grant Holmes", ev:"91.1",hardHit:"43.2%",xwoba:".333",xba:".254",xslg:".426",kpct:"18.7%",bbpct:"10.0%", barrel:"8.5%", chase:"31.2%",whiff:"27.0%",gbpct:"43.2%",fbpct:"26.1%",ldpct:"25.1%",pupct:"5.6%", pullAir:"20.5%"},
  { name:"Reynaldo López", ev:"87.7",hardHit:"36.4%",xwoba:".330",xba:".256",xslg:".426",kpct:"21.6%",bbpct:"9.5%", barrel:"7.7%", chase:"27.2%",whiff:"21.8%",gbpct:"36.8%",fbpct:"28.7%",ldpct:"26.8%",pupct:"7.7%", pullAir:"19.1%"},
  { name:"JR Ritchie", ev:"89.6",hardHit:"39.5%",xwoba:".343",xba:".240",xslg:".407",kpct:"20.7%",bbpct:"14.1%", barrel:"9.3%", chase:"25.5%",whiff:"23.3%",gbpct:"45.1%",fbpct:"29.6%",ldpct:"20.4%",pupct:"4.9%", pullAir:"20.4%"},
  { name:"Dylan Dodd", ev:"88.9",hardHit:"36.1%",xwoba:".264",xba:".197",xslg:".330",kpct:"26.8%",bbpct:"7.7%", barrel:"7.4%", chase:"34.0%",whiff:"28.6%",gbpct:"27.8%",fbpct:"31.5%",ldpct:"25.9%",pupct:"14.8%", pullAir:"32.4%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"12.5%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.2%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"95.6",hardHit:"59.4%",xwoba:".398",xba:".250",xslg:".489",kpct:"20.7%",bbpct:"19.0%", barrel:"15.6%", chase:"19.4%",whiff:"22.5%",gbpct:"46.9%",fbpct:"28.1%",ldpct:"21.9%",pupct:"3.1%", pullAir:"6.3%"},
  { name:"Owen Murphy", ev:"94.1",hardHit:"55.0%",xwoba:".353",xba:".280",xslg:".451",kpct:"20.7%",bbpct:"6.9%", barrel:"10.0%", chase:"38.0%",whiff:"17.1%",gbpct:"20.0%",fbpct:"25.0%",ldpct:"45.0%",pupct:"10.0%", pullAir:"30.0%"},
  { name:"Víctor Mederos", ev:"88.5",hardHit:"40.5%",xwoba:".289",xba:".228",xslg:".327",kpct:"23.2%",bbpct:"8.9%", barrel:"4.1%", chase:"33.5%",whiff:"30.7%",gbpct:"33.8%",fbpct:"25.7%",ldpct:"21.6%",pupct:"18.9%", pullAir:"13.2%"},
  { name:"AJ Smith-Shawver", ev:"88.9",hardHit:"37.8%",xwoba:".340",xba:".262",xslg:".408",kpct:"15.9%",bbpct:"12.7%", barrel:"6.7%", chase:"23.8%",whiff:"20.4%",gbpct:"33.3%",fbpct:"28.9%",ldpct:"26.7%",pupct:"11.1%", pullAir:"22.2%"},
  { name:"Tyler Mahle", ev:"90.0",hardHit:"38.6%",xwoba:".315",xba:".252",xslg:".401",kpct:"23.2%",bbpct:"8.1%", barrel:"7.1%", chase:"28.9%",whiff:"23.3%",gbpct:"43.4%",fbpct:"27.6%",ldpct:"22.8%",pupct:"6.2%", pullAir:"15.6%"},
  { name:"Brent Suter", ev:"86.5",hardHit:"30.9%",xwoba:".315",xba:".262",xslg:".405",kpct:"19.5%",bbpct:"6.8%", barrel:"6.0%", chase:"28.9%",whiff:"22.5%",gbpct:"48.7%",fbpct:"21.2%",ldpct:"25.0%",pupct:"5.1%", pullAir:"15.7%"},
  { name:"Ray Kerr", ev:"92.4",hardHit:"36.8%",xwoba:".289",xba:".218",xslg:".353",kpct:"18.5%",bbpct:"3.7%", barrel:"5.3%", chase:"37.2%",whiff:"21.4%",gbpct:"42.1%",fbpct:"26.3%",ldpct:"15.8%",pupct:"15.8%", pullAir:"8.3%"},
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
     { week:"G132", "Olson":4.0,"Albies":1.6,"Baldwin":2.3,"Harris":3.6,"Dubón":1.7,"Acuña":0.6,"Smith":-0.3,"Mateo":0.6,"Riley":0.9,"White":0.6,"Yaz":0.5,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.4,"Bart":0.2,"Tellez":0.0,"Jarvis":-0.1,"Hicklen":0.3,"Thomas":0.8 },
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
     { week:"G132", "Sale":4.9,"Lee":1.9,"Fuentes":1.9,"Elder":1.3,"Iglesias":0.8,"Suarez":0.8,"Pérez":1.1,"López":0.5,"Dodd":0.7,"Holmes":0.5,"Mederos":0.4,"Kinley":-0.4,"Strider":0.1,"O.Murphy":0.1,"Ritchie":-0.2,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":-0.5,"Smith-Shawver":0.2,"Mahle":1.4,"Suter":0.5,"Kerr":0.0 },
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
