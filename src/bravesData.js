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
 
   export const lastUpdated = "June 23, 2026";
 
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
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true, result:"L", score:"2-7", record:"46-26"},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true, result:"L", score:"5-7", record:"46-27"},
     { date:"Fri, Jun 19", opp:"Milwaukee",   home:true, result:"W", score:"3-2", record:"47-27"},
     { date:"Sat, Jun 20", opp:"Milwaukee",   home:true, result:"W", score:"4-3", record:"48-27"},
     { date:"Sun, Jun 21", opp:"Milwaukee",   home:true, result:"L", score:"4-9", record:"48-28"},
     { date:"Mon, Jun 22", opp:"San Diego",   home:false, result:"L", score:"0-1", record:"48-29"},
      // Upcoming
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
     record: "48-29",
     runs: 377,
     era: "3.38",
     avg: ".252",
     obp: ".316",
     slg: ".418",
     ops: ".734",
     wrc: 103,
     battingK: "21.2%",
     battingBB: "7.8%",
     woba: ".322",
     xwoba: ".327",
     fip: "3.95",
     xera: "3.76",
     xfip: "3.96",
     whip: "1.20",
     gb: "41.7%",
     siera: "3.91",
     pitchingK: "23.4%",
     pitchingBB: "8.9%",
     pitchingKBB: "14.4%",
     swstr: "11.5%",
     cstr: "16.1%",
     csw: "27.6%",
     fastSwing: "26.0%",
     sqUpSw: "24.2%",
     blastSw: "10.1%",
     idealAtk: "49.2%",
     batFastSwing: "31.9%",
     batSqUpSw: "24.7%",
     batBlastSw: "11.1%",
     batIdealAtk: "50.4%",
     batSwStr: "11.0%",
     batCStr: "15.0%",
     batCSW: "26.0%",
     batChase: "33.8%",
     batWhiff: "24.9%",
     chase: "30.8%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.0",
 };
   
export const hitters = [
     // Updated June 23, 2026 PM — vsL + vsR refreshed from FanGraphs; RISP + High Leverage + season totals + Savant from June 23
     { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".352", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:81,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:19,avg:".289",obp:".400",slg:".477",ops:".877",wrc:145,woba:".384",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:131,woba:".363",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:142,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:242, avg:".276", obp:".355", slg:".500", ops:".855", hr:14, rbi:39, r:41, h:59, doubles:6, triples:0, sb:1, bbpct:"9.9%", kpct:"24.4%", war:2.1, war2:1.7, wrc:137, woba:".371", xwoba:".388", oaa:null, frv:-1, batSpeed:74.9, squaredUp:"25.2%", fastSwing:"51.7%", laSwSp:"40.4%", idealAttack:"48.3%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.4, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.9%", xChalRate:"3.5%", rateVsExp:"-2.6%"}, absCatch:{netOvr:9.4, netRuns:0.5, chal:28, won:21, lost:7, wonPct:"75%", chalRate:"1.9%", xChalRate:"2.1%", rateVsExp:"-0.2%"}, splits:{vsL:{pa:100,r:18,h:26,hr:7,rbi:18,avg:".292",obp:".370",slg:".551",ops:".921",wrc:155,woba:".398",iso:".259",bbpct:"9.0%",kpct:"21.0%",babip:".311"}, vsR:{pa:142,r:23,h:33,hr:7,rbi:23,avg:".264",obp:".345",slg:".464",ops:".809",wrc:123,woba:".352",iso:".200",bbpct:"10.6%",kpct:"26.8%",babip:".321"}, risp:{pa:57,r:0,h:16,hr:0,rbi:24,avg:".333",obp:".421",slg:".438",ops:".859",wrc:140,woba:".376",iso:".104",bbpct:"14.0%",kpct:"15.8%",babip:".400"}, highLeverage:{pa:14,r:11,h:4,hr:0,rbi:7,avg:".308",obp:".357",slg:".385",ops:".742",wrc:110,woba:".332",iso:".077",bbpct:"7.1%",kpct:"21.4%",babip:".400"}}},
     { name:"Matt Olson", pos:"1B", pa:336, avg:".271", obp:".342", slg:".535", ops:".877", hr:20, rbi:51, r:53, h:81, doubles:19, triples:0, sb:2, bbpct:"9.8%", kpct:"22.3%", war:3.1, war2:2.6, wrc:139, woba:".374", xwoba:".365", oaa:6, frv:5, batSpeed:75.0, squaredUp:"24.0%", fastSwing:"51.9%", laSwSp:"31.3%", idealAttack:"53.4%", armValue:null, armStrength:84.3, abs:{netOvr:1.1, netRuns:0.2, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"3.6%", xChalRate:"2.8%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:148,r:24,h:36,hr:8,rbi:20,avg:".271",obp:".338",slg:".526",ops:".864",wrc:137,woba:".371",iso:".255",bbpct:"8.8%",kpct:"20.3%",babip:".292"}, vsR:{pa:188,r:29,h:45,hr:12,rbi:29,avg:".271",obp:".346",slg:".542",ops:".888",wrc:140,woba:".377",iso:".271",bbpct:"10.6%",kpct:"23.9%",babip:".297"}, risp:{pa:81,r:2,h:15,hr:2,rbi:25,avg:".231",obp:".346",slg:".415",ops:".761",wrc:105,woba:".325",iso:".185",bbpct:"16.0%",kpct:"22.2%",babip:".271"}, highLeverage:{pa:32,r:15,h:7,hr:3,rbi:9,avg:".259",obp:".344",slg:".593",ops:".936",wrc:144,woba:".382",iso:".333",bbpct:"12.5%",kpct:"28.1%",babip:".250"}}},
     { name:"Ozzie Albies", pos:"2B", pa:330, avg:".280", obp:".330", slg:".446", ops:".776", hr:12, rbi:41, r:51, h:83, doubles:13, triples:0, sb:1, bbpct:"6.7%", kpct:"11.5%", war:2.3, war2:1.8, wrc:113, woba:".337", xwoba:".308", oaa:2, frv:1, batSpeed:68.9, squaredUp:"30.3%", fastSwing:"5.7%", laSwSp:"35.0%", idealAttack:"57.6%", armValue:null, armStrength:70.9, abs:{netOvr:-0.4, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.4%", xChalRate:"5.8%", rateVsExp:"-0.4%"}, splits:{vsL:{pa:139,r:25,h:41,hr:6,rbi:16,avg:".313",obp:".331",slg:".527",ops:".858",wrc:133,woba:".366",iso:".214",bbpct:"2.2%",kpct:"5.0%",babip:".289"}, vsR:{pa:191,r:35,h:42,hr:6,rbi:16,avg:".255",obp:".330",slg:".382",ops:".712",wrc:99,woba:".316",iso:".127",bbpct:"9.9%",kpct:"16.2%",babip:".271"}, risp:{pa:72,r:3,h:20,hr:3,rbi:30,avg:".351",obp:".375",slg:".544",ops:".919",wrc:139,woba:".375",iso:".193",bbpct:"8.3%",kpct:"6.9%",babip:".298"}, highLeverage:{pa:33,r:17,h:8,hr:2,rbi:10,avg:".286",obp:".364",slg:".571",ops:".935",wrc:153,woba:".395",iso:".286",bbpct:"9.1%",kpct:"12.1%",babip:".261"}}},
     { name:"Michael Harris II", pos:"CF", pa:270, avg:".305", obp:".337", slg:".512", ops:".849", hr:14, rbi:41, r:36, h:78, doubles:11, triples:0, sb:4, bbpct:"4.4%", kpct:"20.4%", war:2.4, war2:2.3, wrc:134, woba:".367", xwoba:".385", oaa:6, frv:5, batSpeed:74.9, squaredUp:"24.5", fastSwing:"49.6%", laSwSp:"31.7%", idealAttack:"46.7%", armValue:null, armStrength:85.4, abs:{netOvr:-1.2, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.8%", xChalRate:"2.5%", rateVsExp:"+2.3%"}, splits:{vsL:{pa:102,r:11,h:28,hr:4,rbi:11,avg:".292",obp:".333",slg:".479",ops:".812",wrc:125,woba:".354",iso:".187",bbpct:"4.9%",kpct:"20.6%",babip:".338"}, vsR:{pa:168,r:25,h:50,hr:10,rbi:25,avg:".313",obp:".339",slg:".531",ops:".871",wrc:139,woba:".375",iso:".218",bbpct:"4.2%",kpct:"20.2%",babip:".342"}, risp:{pa:53,r:0,h:13,hr:0,rbi:18,avg:".277",obp:".340",slg:".383",ops:".723",wrc:102,woba:".321",iso:".106",bbpct:"7.5%",kpct:"15.1%",babip:".325"}, highLeverage:{pa:28,r:10,h:6,hr:1,rbi:9,avg:".250",obp:".321",slg:".500",ops:".821",wrc:121,woba:".349",iso:".250",bbpct:"7.1%",kpct:"25.0%",babip:".294"}}},
     { name:"Austin Riley", pos:"3B", pa:312, avg:".219", obp:".295", slg:".355", ops:".650", hr:8, rbi:36, r:31, h:61, doubles:12, triples:1, sb:4, bbpct:"8.0%", kpct:"28.8%", war:0.4, war2:0.2, wrc:82, woba:".291", xwoba:".298", oaa:-5, frv:-4, batSpeed:75.6, squaredUp:"21.2%", fastSwing:"56.3%", laSwSp:"30.9%", idealAttack:"47.5%", armValue:null, armStrength:83.6, abs:{netOvr:-0.7, netRuns:-0.2, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.2%", xChalRate:"5.1%", rateVsExp:"-2.8%"}, splits:{vsL:{pa:109,r:9,h:24,hr:1,rbi:9,avg:".247",obp:".321",slg:".351",ops:".672",wrc:89,woba:".301",iso:".104",bbpct:"10.1%",kpct:"31.2%",babip:".365"}, vsR:{pa:203,r:22,h:37,hr:7,rbi:22,avg:".203",obp:".281",slg:".357",ops:".638",wrc:78,woba:".285",iso:".154",bbpct:"6.9%",kpct:"27.6%",babip:".250"}, risp:{pa:86,r:4,h:19,hr:4,rbi:32,avg:".244",obp:".291",slg:".474",ops:".765",wrc:106,woba:".326",iso:".231",bbpct:"7.0%",kpct:"31.4%",babip:".306"}, highLeverage:{pa:33,r:4,h:7,hr:1,rbi:13,avg:".241",obp:".273",slg:".379",ops:".652",wrc:73,woba:".278",iso:".138",bbpct:"6.1%",kpct:"18.2%",babip:".250"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:292, avg:".262", obp:".315", slg:".406", ops:".721", hr:7, rbi:42, r:30, h:71, doubles:14, triples:2, sb:1, bbpct:"6.5%", kpct:"15.0%", war:1.7, war2:1.6, wrc:100, woba:".318", xwoba:".320", oaa:8, frv:6, batSpeed:69.0, squaredUp:"26.9%", fastSwing:"3.0%", laSwSp:"38.8%", idealAttack:"37.0%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.7%", xChalRate:"4.4%", rateVsExp:"+2.3%"}, splits:{vsL:{pa:116,r:16,h:25,hr:2,rbi:11,avg:".234",obp:".293",slg:".355",ops:".648",wrc:81,woba:".289",iso:".121",bbpct:"6.9%",kpct:"12.1%",babip:".253"}, vsR:{pa:177,r:19,h:46,hr:5,rbi:19,avg:".280",obp:".330",slg:".439",ops:".769",wrc:113,woba:".337",iso:".159",bbpct:"6.2%",kpct:"16.9%",babip:".318"}, risp:{pa:71,r:3,h:23,hr:3,rbi:37,avg:".354",obp:".400",slg:".615",ops:"1.015",wrc:180,woba:".435",iso:".262",bbpct:"7.0%",kpct:"11.3%",babip:".370"}, highLeverage:{pa:32,r:6,h:12,hr:1,rbi:21,avg:".414",obp:".469",slg:".690",ops:"1.158",wrc:220,woba:".494",iso:".276",bbpct:"9.4%",kpct:"9.4%",babip:".440"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:69, avg:".081", obp:".174", slg:".081", ops:".255", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"10.1%", kpct:"26.1%", war:-0.8, war2:-1.0, wrc:-24, woba:".136", xwoba:".204", oaa:-4, frv:-3, batSpeed:71.9, squaredUp:"16.5%", fastSwing:"22.9%", laSwSp:"15.9%", idealAttack:"58.7%", armValue:null, armStrength:84.1, abs:{netOvr:0.7, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.6%", xChalRate:"4.3%", rateVsExp:"-2.7%"}, splits:{vsL:{pa:36,r:1,h:2,hr:0,rbi:1,avg:".061",obp:".139",slg:".061",ops:".199",wrc:-43,woba:".108",iso:".000",bbpct:"8.3%",kpct:"30.6%",babip:".091"}, vsR:{pa:33,r:3,h:3,hr:0,rbi:1,avg:".103",obp:".212",slg:".103",ops:".316",wrc:-3,woba:".166",iso:".000",bbpct:"12.1%",kpct:"21.2%",babip:".136"}, risp:{pa:17,r:0,h:3,hr:0,rbi:3,avg:".214",obp:".353",slg:".214",ops:".567",wrc:75,woba:".281",iso:".000",bbpct:"17.6%",kpct:"17.6%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:125,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:215, avg:".230", obp:".316", slg:".351", ops:".667", hr:4, rbi:19, r:27, h:44, doubles:9, triples:1, sb:1, bbpct:"9.3%", kpct:"24.2%", war:0.6, war2:0.3, wrc:89, woba:".302", xwoba:".289", oaa:0, frv:0, batSpeed:71.1, squaredUp:"29.1%", fastSwing:"6.7%", laSwSp:"30.9%", idealAttack:"60.7%", armValue:null, armStrength:82.9, abs:{netOvr:2.1, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.8%", xChalRate:"3.4%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:30,r:4,h:3,hr:0,rbi:1,avg:".120",obp:".267",slg:".160",ops:".427",wrc:34,woba:".220",iso:".040",bbpct:"10.0%",kpct:"40.0%",babip:".231"}, vsR:{pa:185,r:23,h:41,hr:4,rbi:23,avg:".247",obp:".324",slg:".380",ops:".704",wrc:98,woba:".315",iso:".133",bbpct:"9.2%",kpct:"21.6%",babip:".303"}, risp:{pa:52,r:0,h:13,hr:0,rbi:13,avg:".277",obp:".346",slg:".362",ops:".708",wrc:101,woba:".319",iso:".085",bbpct:"9.6%",kpct:"36.5%",babip:".464"}, highLeverage:{pa:23,r:5,h:6,hr:0,rbi:6,avg:".286",obp:".348",slg:".381",ops:".729",wrc:106,woba:".326",iso:".095",bbpct:"8.7%",kpct:"26.1%",babip:".400"}}},
     { name:"Dominic Smith", pos:"DH", pa:185, avg:".281", obp:".321", slg:".431", ops:".752", hr:6, rbi:31, r:25, h:47, doubles:5, triples:1, sb:0, bbpct:"5.9%", kpct:"13.5%", war:0.6, war2:0.2, wrc:106, woba:".326", xwoba:".335", oaa:null, frv:null, batSpeed:68.8, squaredUp:"30.0%", fastSwing:"5.0%", laSwSp:"35.8%", idealAttack:"54.0%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.7%", xChalRate:"4.9%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:26,r:3,h:4,hr:0,rbi:2,avg:".182",obp:".280",slg:".227",ops:".507",wrc:48,woba:".242",iso:".045",bbpct:"11.5%",kpct:"11.5%",babip:".211"}, vsR:{pa:159,r:22,h:43,hr:6,rbi:22,avg:".297",obp:".327",slg:".462",ops:".789",wrc:115,woba:".339",iso:".165",bbpct:"5.0%",kpct:"13.8%",babip:".303"}, risp:{pa:52,r:3,h:13,hr:3,rbi:27,avg:".302",obp:".314",slg:".535",ops:".849",wrc:118,woba:".344",iso:".233",bbpct:"5.8%",kpct:"9.6%",babip:".250"}, highLeverage:{pa:26,r:5,h:3,hr:1,rbi:11,avg:".158",obp:".240",slg:".368",ops:".608",wrc:56,woba:".252",iso:".211",bbpct:"11.5%",kpct:"23.1%",babip:".133"}}},
     { name:"Jorge Mateo", pos:"SS", pa:110, avg:".269", obp:".309", slg:".433", ops:".742", hr:4, rbi:11, r:25, h:28, doubles:5, triples:0, sb:7, bbpct:"5.5%", kpct:"29.1%", war:0.8, war2:0.7, wrc:105, woba:".324", xwoba:".337", oaa:2, frv:2, batSpeed:73.7, squaredUp:"19.9%", fastSwing:"35.0%", laSwSp:"48.6%", idealAttack:"40.6%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:43,r:8,h:11,hr:2,rbi:3,avg:".268",obp:".302",slg:".439",ops:".741",wrc:104,woba:".324",iso:".171",bbpct:"4.7%",kpct:"37.2%",babip:".391"}, vsR:{pa:67,r:17,h:17,hr:2,rbi:8,avg:".270",obp:".313",slg:".429",ops:".742",wrc:105,woba:".325",iso:".159",bbpct:"6.0%",kpct:"23.9%",babip:".333"}, risp:{pa:25,r:0,h:6,hr:0,rbi:6,avg:".261",obp:".320",slg:".261",ops:".581",wrc:68,woba:".270",iso:".000",bbpct:"8.0%",kpct:"36.0%",babip:".429"}, highLeverage:{pa:10,r:8,h:2,hr:0,rbi:1,avg:".250",obp:".400",slg:".250",ops:".650",wrc:101,woba:".318",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".333"}}},
     { name:"Eli White", pos:"OF", pa:103, avg:".221", obp:".272", slg:".379", ops:".651", hr:3, rbi:14, r:12, h:21, doubles:4, triples:1, sb:2, bbpct:"5.8%", kpct:"20.4%", war:0.8, war2:0.3, wrc:78, woba:".285", xwoba:".287", oaa:2, frv:3, batSpeed:73.2, squaredUp:"22.3%", fastSwing:"33.7", laSwSp:"33.3%", idealAttack:"54.3%", armValue:null, armStrength:89.5, abs:{netOvr:-1.0, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"4.2%", xChalRate:"5.5%", rateVsExp:"-1.4%"}, splits:{vsL:{pa:59,r:5,h:13,hr:2,rbi:9,avg:".255",obp:".339",slg:".451",ops:".790",wrc:118,woba:".344",iso:".196",bbpct:"10.2%",kpct:"20.3%",babip:".289"}, vsR:{pa:44,r:7,h:8,hr:1,rbi:5,avg:".182",obp:".182",slg:".295",ops:".477",wrc:24,woba:".206",iso:".113",bbpct:"0.0%",kpct:"20.5%",babip:".206"}, risp:{pa:28,r:1,h:7,hr:1,rbi:11,avg:".292",obp:".357",slg:".458",ops:".815",wrc:124,woba:".353",iso:".167",bbpct:"10.7%",kpct:"17.9%",babip:".316"}, highLeverage:{pa:15,r:3,h:2,hr:0,rbi:4,avg:".154",obp:".267",slg:".154",ops:".421",wrc:28,woba:".212",iso:".000",bbpct:"13.3%",kpct:"13.3%",babip:".182"}}},
     { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".140", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-56,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-66,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:188,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:492,woba:".892",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
   ];
   
export const starters = [
     // Updated June 23, 2026 PM — vsL/vsR splits refreshed from FanGraphs; season totals + Savant from June 23
     { name:"Chris Sale", wl:"8-5", era:"2.14", ip:"84.0", kpct:"28.9%", bbpct:"6.1%", whip:"1.048", war:2.6, war2:2.4, fip:"2.71", xfip:"3.06", siera:"3.08", batSpeed:70.8, fastSwing:"19.5%", swstr:"13.3%", cstr:"18.0%", csw:"31.3%", laSwSp:"37.4%", idealAttack:"46.3%", splits:{vsL:{ip:"20.2",era:"1.31",fip:"1.70",xfip:"1.57",whip:"0.87",avg:".197",obp:".256",slg:".289",woba:".248",kpct:"36.1%",bbpct:"3.6%",kbb:"32.5%"}, vsR:{ip:"63.1",era:"2.42",fip:"3.04",xfip:"3.54",whip:"1.11",avg:".222",obp:".290",slg:".312",woba:".273",kpct:"26.6%",bbpct:"6.9%",kbb:"19.7%"}}},
     { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.36", xfip:"4.35", siera:"4.12", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"46.0%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.59",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".343",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.00",xfip:"3.90",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
     { name:"Martín Pérez", wl:"6-3", era:"2.78", ip:"68.0", kpct:"20.7%", bbpct:"8.5%", whip:"1.074", war:1.8, war2:1.0, fip:"3.70", xfip:"3.85", siera:"4.12", batSpeed:73.2, fastSwing:"33.2%", swstr:"9.4%", cstr:"18.8%", csw:"28.2%", laSwSp:"35.4%", idealAttack:"50.5%", splits:{vsL:{ip:"20.0",era:"2.70",fip:"3.65",xfip:"3.47",whip:"1.05",avg:".216",obp:".284",slg:".365",woba:".289",kpct:"22.2%",bbpct:"6.2%",kbb:"16.0%"}, vsR:{ip:"48.0",era:"2.81",fip:"3.72",xfip:"4.01",whip:"1.08",avg:".204",obp:".277",slg:".347",woba:".274",kpct:"20.1%",bbpct:"9.5%",kbb:"10.6%"}}},
     { name:"Bryce Elder", wl:"5-5", era:"3.71", ip:"94.2", kpct:"19.8%", bbpct:"7.3%", whip:"1.215", war:0.9, war2:1.6, fip:"3.79", xfip:"4.01", siera:"4.22", batSpeed:72.4, fastSwing:"27.5%", swstr:"9.3%", cstr:"16.6%", csw:"26.0%", laSwSp:"31.3%", idealAttack:"49.0%", splits:{vsL:{ip:"63.0",era:"3.14",fip:"3.69",xfip:"4.38",whip:"1.08",avg:".197",obp:".272",slg:".303",woba:".260",kpct:"19.5%",bbpct:"9.0%",kbb:"10.5%"}, vsR:{ip:"31.2",era:"4.83",fip:"3.98",xfip:"3.25",whip:"1.48",avg:".304",obp:".338",slg:".452",woba:".346",kpct:"20.4%",bbpct:"4.2%",kbb:"16.2%"}}},
     { name:"Grant Holmes", wl:"4-4", era:"4.17", ip:"73.1", kpct:"20.2%", bbpct:"11.5%", whip:"1.418", war:0.6, war2:-0.1, fip:"5.40", xfip:"4.61", siera:"4.76", batSpeed:72.8, fastSwing:"28.7%", swstr:"12.5%", cstr:"14.7%", csw:"27.1%", laSwSp:"33.6%", idealAttack:"49.1%", splits:{vsL:{ip:"41.1",era:"3.92",fip:"5.49",xfip:"4.53",whip:"1.50",avg:".244",obp:".344",slg:".436",woba:".344",kpct:"21.9%",bbpct:"13.1%",kbb:"8.7%"}, vsR:{ip:"32.0",era:"4.50",fip:"5.29",xfip:"4.72",whip:"1.31",avg:".236",obp:".312",slg:".423",woba:".323",kpct:"18.1%",bbpct:"9.4%",kbb:"8.7%"}}},
     { name:"JR Ritchie", wl:"1-2", era:"4.54", ip:"35.2", kpct:"19.5%", bbpct:"13.6%", whip:"1.374", war:0.0, war2:-0.4, fip:"5.99", xfip:"4.86", siera:"5.04", batSpeed:72.2, fastSwing:"26.8%", swstr:"8.7%", cstr:"15.2%", csw:"23.9%", laSwSp:"31.0%", idealAttack:"52.9%", splits:{vsL:{ip:"22.1",era:"6.45",fip:"7.08",xfip:"5.20",whip:"1.57",avg:".247",obp:".373",slg:".494",woba:".377",kpct:"19.6%",bbpct:"13.7%",kbb:"5.9%"}, vsR:{ip:"13.1",era:"1.35",fip:"4.15",xfip:"4.29",whip:"1.05",avg:".159",obp:".269",slg:".227",woba:".237",kpct:"19.2%",bbpct:"13.5%",kbb:"5.8%"}}},
   ];

   export const bullpen = [
     // Updated June 23, 2026 PM — vsL/vsR splits refreshed from FanGraphs; season totals + Savant from June 23
     { name:"Raisel Iglesias", role:"CL", era:"1.48", ip:"24.1", sv:15, kpct:"29.8%", bbpct:"6.4%", whip:"1.068", fip:"2.08", war:1.0, war2:0.8, xfip:"3.08", siera:"2.76", batSpeed:71.3, fastSwing:"26.0%", swstr:"14.8%", cstr:"17.0%", csw:"31.9%", laSwSp:"28.3%", idealAttack:"49.4%", splits:{vsL:{ip:"14.1",era:"1.26",fip:"3.52",xfip:"4.59",whip:"1.12",avg:".224",obp:".296",slg:".347",woba:".289",kpct:"20.4%",bbpct:"9.3%",kbb:"11.1%"}, vsR:{ip:"10.0",era:"1.80",fip:"0.00",xfip:"0.89",whip:"1.00",avg:".231",obp:".250",slg:".282",woba:".237",kpct:"42.5%",bbpct:"2.5%",kbb:"40.0%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.08", ip:"33.1", sv:0, kpct:"34.4%", bbpct:"4.1%", whip:"0.660", fip:"1.43", war:1.4, war2:1.2, xfip:"2.56", siera:"2.10", batSpeed:72.4, fastSwing:"27.9%", swstr:"18.9%", cstr:"15.5%", csw:"34.4%", laSwSp:"36.0%", idealAttack:"49.5%", splits:{vsL:{ip:"12.1",era:"2.19",fip:"0.83",xfip:"2.16",whip:"0.65",avg:".143",obp:".178",slg:".310",woba:".205",kpct:"37.8%",bbpct:"4.4%",kbb:"33.3%"}, vsR:{ip:"21.0",era:"0.43",fip:"1.77",xfip:"2.78",whip:"0.67",avg:".149",obp:".182",slg:".203",woba:".175",kpct:"32.5%",bbpct:"3.9%",kbb:"28.6%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.40", siera:"3.34", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"53.1%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.68",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.97",xfip:"2.98",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.37", war:0.4, war2:0.1, xfip:"3.97", siera:"3.44", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.2%", idealAttack:"56.0%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.85",xfip:"3.79",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".319",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.22",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".283",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.43", ip:"29.2", sv:1, kpct:"29.2%", bbpct:"7.5%", whip:"1.045", fip:"2.29", war:0.9, war2:0.9, xfip:"3.21", siera:"2.93", batSpeed:71.9, fastSwing:"26.2%", swstr:"12.6%", cstr:"15.0%", csw:"27.6%", laSwSp:"28.4%", idealAttack:"42.4%", splits:{vsL:{ip:"16.2",era:"3.24",fip:"2.20",xfip:"2.49",whip:"1.08",avg:".213",obp:".279",slg:".311",woba:".266",kpct:"33.8%",bbpct:"7.4%",kbb:"26.5%"}, vsR:{ip:"13.0",era:"1.38",fip:"2.41",xfip:"4.13",whip:"1.00",avg:".196",obp:".269",slg:".217",woba:".229",kpct:"23.1%",bbpct:"7.7%",kbb:"15.4%"}}},
     { name:"Reynaldo López", role:"RP", era:"3.50", ip:"43.2", sv:0, kpct:"20.6%", bbpct:"11.1%", whip:"1.374", fip:"4.62", war:0.3, war2:0.1, xfip:"4.65", siera:"4.53", batSpeed:71.4, fastSwing:"21.3%", swstr:"8.5%", cstr:"17.3%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"44.8%", splits:{vsL:{ip:"22.1",era:"4.03",fip:"4.98",xfip:"5.35",whip:"1.75",avg:".229",obp:".379",slg:".361",woba:".341",kpct:"21.2%",bbpct:"19.2%",kbb:"1.9%"}, vsR:{ip:"21.1",era:"2.95",fip:"4.22",xfip:"3.89",whip:"0.98",avg:".244",obp:".259",slg:".427",woba:".295",kpct:"20.0%",bbpct:"1.2%",kbb:"18.8%"}}},
     { name:"Dylan Dodd", role:"RP", era:"1.93", ip:"18.2", sv:1, kpct:"30.6%", bbpct:"9.7%", whip:"0.911", fip:"3.96", war:0.5, war2:0.1, xfip:"3.47", siera:"3.10", batSpeed:72.8, fastSwing:"32.2%", swstr:"12.9%", cstr:"12.2%", csw:"25.2%", laSwSp:"34.9%", idealAttack:"53.8%", splits:{vsL:{ip:"7.1",era:"3.68",fip:"5.96",xfip:"4.05",whip:"1.50",avg:".214",obp:".333",slg:".464",woba:".339",kpct:"30.3%",bbpct:"15.2%",kbb:"15.2%"}, vsR:{ip:"11.1",era:"0.79",fip:"2.66",xfip:"3.09",whip:"0.53",avg:".108",obp:".154",slg:".216",woba:".167",kpct:"30.8%",bbpct:"5.1%",kbb:"25.6%"}}},
     { name:"James Karinchak", role:"RP", era:"0.00", ip:"5.2", sv:0, kpct:"26.3%", bbpct:"10.5%", whip:"0.529", fip:"2.39", war:0.3, war2:0.1, xfip:"4.76", siera:"4.20", batSpeed:71.5, fastSwing:"18.2%", swstr:"10.8%", cstr:"24.1%", csw:"34.9%", laSwSp:"25.0%", idealAttack:"59.1", splits:{vsL:{ip:"1.2",era:"0.00",fip:"5.50",xfip:"8.19",whip:"1.80",avg:".200",obp:".429",slg:".400",woba:".381",kpct:"14.3%",bbpct:"28.6%",kbb:"-14.3%"}, vsR:{ip:"4.0",era:"0.00",fip:"1.10",xfip:"3.34",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"33.3%",bbpct:"0.0%",kbb:"33.3%"}}},
     { name:"Carlos Carrasco", role:"RP", era:"3.46", ip:"13.0", sv:0, kpct:"11.1%", bbpct:"1.9%", whip:"1.154", fip:"3.88", war:0.2, war2:0.1, xfip:"4.14", siera:"4.09", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.7%", cstr:"12.2%", csw:"20.9%", laSwSp:"40.0%", idealAttack:"59.6", splits:{vsL:{ip:"7.2",era:"5.87",fip:"4.66",xfip:"4.53",whip:"1.43",avg:".333",obp:".353",slg:".455",woba:".355",kpct:"5.9%",bbpct:"0.0%",kbb:"5.9%"}, vsR:{ip:"5.1",era:"0.00",fip:"2.72",xfip:"3.56",whip:"0.75",avg:".176",obp:".263",slg:".176",woba:".216",kpct:"20.0%",bbpct:"5.0%",kbb:"15.0%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:48,l:29,pct:".623",gb:"—", home:"24-14",away:"24-15", rs:377, ra:281, diff:+96, strk:"L2", l10:"3-7", highlight:true,  srs:1.2 },
     { team:"PHI", full:"Philadelphia Phillies", w:42,l:36,pct:".538",gb:"6.5", home:"23-19",away:"19-17", rs:330, ra:337, diff:-7, strk:"L1", l10:"5-5", highlight:false, srs:-0.1 },
     { team:"WSN", full:"Washington Nationals", w:41,l:38,pct:".519",gb:"8.0", home:"17-22",away:"24-16", rs:420, ra:405, diff:+15, strk:"W1", l10:"6-4", highlight:false, srs:0.4 },
     { team:"MIA", full:"Miami Marlins",        w:40,l:39,pct:".506",gb:"9.0", home:"26-17",away:"14-22", rs:339, ra:340, diff:-1, strk:"L1", l10:"6-4", highlight:false, srs:0.1 },
     { team:"NYM", full:"New York Mets",        w:34,l:43,pct:".442",gb:"14.0", home:"18-18",away:"16-25", rs:311, ra:342, diff:-31, strk:"L2", l10:"5-5", highlight:false, srs:-0.4 },
   ];
   
export const statcastHitters = [
  { name:"Michael Harris II", ev:"92.3",hardHit:"52.0%",xwoba:".385",xba:".310",xslg:".551",barrel:"15.4%",chase:"44.9%",whiff:"26.3%",kpct:"20.4%",bbpct:"4.4%", gbpct:"43.1%",fbpct:"24.3%",ldpct:"26.2%",pupct:"6.4%",pullAir:"16.3%"},
  { name:"Matt Olson", ev:"93.1",hardHit:"51.1%",xwoba:".365",xba:".258",xslg:".521",barrel:"13.7%",chase:"28.1%",whiff:"24.4%",kpct:"22.3%",bbpct:"9.8%", gbpct:"37.0%",fbpct:"33.9%",ldpct:"20.3%",pupct:"8.8%",pullAir:"19.4%"},
  { name:"Dominic Smith", ev:"88.2",hardHit:"35.1%",xwoba:".335",xba:".279",xslg:".440",barrel:"7.5%",chase:"34.4%",whiff:"20.6%",kpct:"13.5%",bbpct:"5.9%", gbpct:"36.5%",fbpct:"32.4%",ldpct:"26.4%",pupct:"4.7%",pullAir:"15.5%"},
  { name:"Drake Baldwin", ev:"92.2",hardHit:"51.9%",xwoba:".388",xba:".280",xslg:".545",barrel:"17.9%",chase:"36.1%",whiff:"24.8%",kpct:"24.4%",bbpct:"9.9%", gbpct:"46.2%",fbpct:"23.7%",ldpct:"25.0%",pupct:"5.1%",pullAir:"14.7%"},
  { name:"Mauricio Dubón", ev:"86.4",hardHit:"29.1%",xwoba:".320",xba:".271",xslg:".405",barrel:"5.8%",chase:"37.4%",whiff:"16.8%",kpct:"15.0%",bbpct:"6.5%", gbpct:"37.4%",fbpct:"26.0%",ldpct:"28.6%",pupct:"7.9%",pullAir:"14.5%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"47.2%",xwoba:".337",xba:".278",xslg:".463",barrel:"9.7%",chase:"41.1%",whiff:"29.5%",kpct:"29.1%",bbpct:"5.5%", gbpct:"38.9%",fbpct:"30.6%",ldpct:"29.2%",pupct:"1.4%",pullAir:"20.8%"},
  { name:"Austin Riley", ev:"91.1",hardHit:"45.0%",xwoba:".298",xba:".213",xslg:".384",barrel:"9.9%",chase:"32.3%",whiff:"32.5%",kpct:"28.8%",bbpct:"8.0%", gbpct:"38.7%",fbpct:"30.4%",ldpct:"21.5%",pupct:"9.4%",pullAir:"18.8%"},
  { name:"Ozzie Albies", ev:"87.3",hardHit:"28.6%",xwoba:".308",xba:".260",xslg:".391",barrel:"4.2%",chase:"35.6%",whiff:"20.1%",kpct:"11.5%",bbpct:"6.7%", gbpct:"35.3%",fbpct:"31.6%",ldpct:"25.9%",pupct:"7.1%",pullAir:"25.2%"},
  { name:"Mike Yastrzemski", ev:"90.6",hardHit:"43.2%",xwoba:".289",xba:".228",xslg:".323",barrel:"3.6%",chase:"26.5%",whiff:"24.5%",kpct:"24.2%",bbpct:"9.3%", gbpct:"41.7%",fbpct:"28.8%",ldpct:"24.5%",pupct:"5.0%",pullAir:"19.4%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.4",hardHit:"33.3%",xwoba:".287",xba:".241",xslg:".356",barrel:"6.7%",chase:"28.2%",whiff:"27.0%",kpct:"20.4%",bbpct:"5.8%", gbpct:"54.7%",fbpct:"22.7%",ldpct:"20.0%",pupct:"2.7%",pullAir:"10.7%"},
  { name:"Ha-Seong Kim", ev:"84.8",hardHit:"20.5%",xwoba:".204",xba:".147",xslg:".190",barrel:"2.4%",chase:"25.7%",whiff:"21.1%",kpct:"26.1%",bbpct:"10.1%", gbpct:"50.0%",fbpct:"31.8%",ldpct:"6.8%",pupct:"11.4%",pullAir:"15.9%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
];

export const statcastPitchers = [
  { name:"Raisel Iglesias", ev:"87.5",hardHit:"30.0%",xwoba:".246",xba:".206",xslg:".291",kpct:"29.8%",bbpct:"6.4%", barrel:"5.1%", chase:"38.3%",whiff:"32.0%",gbpct:"35.0%",fbpct:"26.7%",ldpct:"26.7%",pupct:"11.7%", pullAir:"16.7%"},
  { name:"Dylan Lee", ev:"86.9",hardHit:"33.3%",xwoba:".219",xba:".183",xslg:".266",kpct:"34.4%",bbpct:"4.1%", barrel:"4.0%", chase:"37.0%",whiff:"38.0%",gbpct:"33.3%",fbpct:"30.7%",ldpct:"26.7%",pupct:"9.3%", pullAir:"28.0%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"89.9",hardHit:"39.6%",xwoba:".292",xba:".241",xslg:".360",kpct:"19.8%",bbpct:"7.3%", barrel:"4.2%", chase:"29.4%",whiff:"22.5%",gbpct:"45.1%",fbpct:"25.3%",ldpct:"22.9%",pupct:"6.6%", pullAir:"17.4%"},
  { name:"Chris Sale", ev:"87.2",hardHit:"32.2%",xwoba:".291",xba:".236",xslg:".348",kpct:"28.9%",bbpct:"6.1%", barrel:"5.6%", chase:"35.5%",whiff:"29.5%",gbpct:"44.4%",fbpct:"23.8%",ldpct:"26.6%",pupct:"5.1%", pullAir:"18.2%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"88.8",hardHit:"33.8%",xwoba:".269",xba:".215",xslg:".308",kpct:"29.2%",bbpct:"7.5%", barrel:"4.1%", chase:"30.5%",whiff:"27.4%",gbpct:"39.2%",fbpct:"25.7%",ldpct:"24.3%",pupct:"10.8%", pullAir:"10.8%"},
  { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
  { name:"Martín Pérez", ev:"88.2",hardHit:"37.6%",xwoba:".309",xba:".247",xslg:".374",kpct:"20.7%",bbpct:"8.5%", barrel:"6.4%", chase:"27.4%",whiff:"23.1%",gbpct:"48.7%",fbpct:"21.2%",ldpct:"25.4%",pupct:"4.8%", pullAir:"22.2%"},
  { name:"Grant Holmes", ev:"90.9",hardHit:"43.8%",xwoba:".340",xba:".249",xslg:".430",kpct:"20.2%",bbpct:"11.5%", barrel:"9.7%", chase:"32.0%",whiff:"28.5%",gbpct:"42.9%",fbpct:"26.3%",ldpct:"24.4%",pupct:"6.5%", pullAir:"21.7%"},
  { name:"Reynaldo López", ev:"87.2",hardHit:"35.4%",xwoba:".334",xba:".257",xslg:".411",kpct:"20.6%",bbpct:"11.1%", barrel:"5.6%", chase:"24.6%",whiff:"20.2%",gbpct:"37.0%",fbpct:"27.6%",ldpct:"28.3%",pupct:"7.1%", pullAir:"22.0%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.0%"},
  { name:"Dylan Dodd", ev:"89.8",hardHit:"37.2%",xwoba:".279",xba:".212",xslg:".354",kpct:"30.6%",bbpct:"9.7%", barrel:"9.3%", chase:"31.9%",whiff:"28.1%",gbpct:"27.9%",fbpct:"23.3%",ldpct:"27.9%",pupct:"20.9%", pullAir:"41.9%"},
  { name:"James Karinchak", ev:"87.8",hardHit:"25.0%",xwoba:".204",xba:".105",xslg:".244",kpct:"26.3%",bbpct:"10.5%", barrel:"8.3%", chase:"26.1%",whiff:"31.0%",gbpct:"25.0%",fbpct:"41.7%",ldpct:"16.7%",pupct:"16.7%", pullAir:"8.3%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.7%"},
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
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2 },
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
     { week:"G73", "Elder":1.5,"Sale":2.2,"D.Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0 },
   ];

// ════════════════════════════════════════════════════════════════════════════
// TrackerHit+ / TrackerArm+ — Composite performance metrics
// Updated June 23, 2026
//   Hitters:  wRC+ (28) · xwOBA (22) · Hard Hit% (16) · Chase% inv (12) ·
//             Whiff% inv (10) · EV (08) · LA SwSp% (05)
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
  wrc:     { mean: 100,   sd: 20    },
  xwoba:   { mean: 0.320, sd: 0.030 },
  hardHit: { mean: 39.2,  sd: 6.0   },
  chase:   { mean: 30.0,  sd: 4.0   },   // inverted (lower = better)
  whiff:   { mean: 25.0,  sd: 4.0   },   // inverted (lower = better)
  ev:      { mean: 88.7,  sd: 2.0   },
  laSwSp:  { mean: 33.7,  sd: 4.0   },
};
const W_HIT = {
  wrc: 0.28, xwoba: 0.22, hardHit: 0.16, chase: 0.12, whiff: 0.10, ev: 0.07, laSwSp: 0.05,
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
  const wrc     = Number(h.wrc);
  const xwoba   = _num(h.xwoba ?? sc.xwoba);
  const hardHit = _pct(sc.hardHit);
  const chase   = _pct(sc.chase);
  const whiff   = _pct(sc.whiff);
  const ev      = _num(sc.ev);
  const laSwSp  = _pct(h.laSwSp);
  if ([wrc, xwoba, hardHit, chase, whiff, ev, laSwSp].some(v => !isFinite(v))) return null;
  const z =
      W_HIT.wrc     *  _z(wrc,     LG_HIT.wrc.mean,     LG_HIT.wrc.sd)
    + W_HIT.xwoba   *  _z(xwoba,   LG_HIT.xwoba.mean,   LG_HIT.xwoba.sd)
    + W_HIT.hardHit *  _z(hardHit, LG_HIT.hardHit.mean, LG_HIT.hardHit.sd)
    + W_HIT.chase   * -_z(chase,   LG_HIT.chase.mean,   LG_HIT.chase.sd)   // inverted
    + W_HIT.whiff   * -_z(whiff,   LG_HIT.whiff.mean,   LG_HIT.whiff.sd)   // inverted
    + W_HIT.ev      *  _z(ev,      LG_HIT.ev.mean,      LG_HIT.ev.sd)
    + W_HIT.laSwSp  *  _z(laSwSp,  LG_HIT.laSwSp.mean,  LG_HIT.laSwSp.sd);
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
