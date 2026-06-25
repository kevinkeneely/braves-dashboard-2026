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
 
   export const lastUpdated = "June 25, 2026";
 
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
      // Upcoming
     { date:"Fri, Jun 26", opp:"San Francisco",   home:false,},
     { date:"Sat, Jun 27", opp:"San Francisco",   home:false,},
     { date:"Sun, Jun 28", opp:"San Francisco",   home:false,},
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
     record: "48-31",
     runs: 385,
     era: "3.42",
     avg: ".251",
     obp: ".314",
     slg: ".416",
     ops: ".730",
     wrc: 101,
     battingK: "21.3%",
     battingBB: "7.8%",
     woba: ".320",
     xwoba: ".326",
     fip: "3.96",
     xera: "3.78",
     xfip: "3.98",
     whip: "1.21",
     gb: "41.9%",
     siera: "3.93",
     pitchingK: "23.3%",
     pitchingBB: "9.0%",
     pitchingKBB: "14.3%",
     swstr: "11.4%",
     cstr: "16.2%",
     csw: "27.6%",
     fastSwing: "26.1%",
     sqUpSw: "24.2%",
     blastSw: "10.0%",
     idealAtk: "49.2%",
     batFastSwing: "32.0%",
     batSqUpSw: "24.5%",
     batBlastSw: "11.1%",
     batIdealAtk: "50.3%",
     batSwStr: "11.1%",
     batCStr: "14.9%",
     batCSW: "26.1%",
     batChase: "33.8%",
     batWhiff: "25.0%",
     chase: "30.7%",
     whiff: "26.3%",
     batBatSpeed: "72.6",
     batSpeed: "72.1",
 };
   
export const hitters = [
    // Updated June 25, 2026 PM — vsL + vsR + ABS refreshed from FanGraphs/Baseball Savant; RISP + High Leverage + season totals + Savant held from earlier June 25
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".352", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:81,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:145,woba:".384",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:130,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:1,h:2,hr:0,rbi:4,avg:".222",obp:".500",slg:".222",ops:".722",wrc:142,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
    { name:"Drake Baldwin", pos:"C", pa:249, avg:".268", obp:".349", slg:".486", ops:".836", hr:14, rbi:39, r:42, h:59, doubles:6, triples:0, sb:1, bbpct:"9.6%", kpct:"25.3%", war:1.8, war2:1.6, wrc:131, woba:".363", xwoba:".381", oaa:null, frv:0, batSpeed:75.0, squaredUp:"24.5%", fastSwing:"52.0%", laSwSp:"39.9%", idealAttack:"47.8%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:9.4, netRuns:0.5, chal:28, won:21, lost:7, wonPct:"75%", chalRate:"1.9%", xChalRate:"2.1%", rateVsExp:"-0.2%"}, splits:{vsL:{pa:102,r:18,h:26,hr:7,rbi:16,avg:".286",obp:".363",slg:".538",ops:".901",wrc:149,woba:".390",iso:".253",bbpct:"8.8%",kpct:"22.5%",babip:".311"}, vsR:{pa:147,r:24,h:33,hr:7,rbi:23,avg:".256",obp:".340",slg:".450",ops:".790",wrc:118,woba:".345",iso:".194",bbpct:"10.2%",kpct:"27.2%",babip:".313"}, risp:{pa:58,r:0,h:16,hr:0,rbi:24,avg:".333",obp:".431",slg:".438",ops:".869",wrc:143,woba:".382",iso:".104",bbpct:"13.8%",kpct:"15.5%",babip:".400"}, highLeverage:{pa:14,r:11,h:4,hr:0,rbi:7,avg:".308",obp:".357",slg:".385",ops:".742",wrc:109,woba:".331",iso:".077",bbpct:"7.1%",kpct:"21.4%",babip:".400"}}},
    { name:"Matt Olson", pos:"1B", pa:345, avg:".270", obp:".342", slg:".528", ops:".870", hr:20, rbi:52, r:53, h:83, doubles:19, triples:0, sb:2, bbpct:"9.9", kpct:"22.9%", war:3.0, war2:2.6, wrc:136, woba:".371", xwoba:".363", oaa:6, frv:5, batSpeed:75.0, squaredUp:"23.7%", fastSwing:"51.8%", laSwSp:"31.6%", idealAttack:"53.1%", armValue:null, armStrength:84.3, abs:{netOvr:0.5, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.9%", xChalRate:"3.0%", rateVsExp:"+1.0%"}, splits:{vsL:{pa:157,r:24,h:38,hr:8,rbi:21,avg:".270",obp:".338",slg:".511",ops:".848",wrc:132,woba:".366",iso:".241",bbpct:"8.9%",kpct:"21.7%",babip:".300"}, vsR:{pa:188,r:29,h:45,hr:12,rbi:31,avg:".271",obp:".346",slg:".542",ops:".888",wrc:140,woba:".376",iso:".271",bbpct:"10.6%",kpct:"23.9%",babip:".297"}, risp:{pa:85,r:2,h:15,hr:2,rbi:26,avg:".221",obp:".341",slg:".397",ops:".738",wrc:99,woba:".317",iso:".176",bbpct:"16.5%",kpct:"23.5%",babip:".265"}, highLeverage:{pa:34,r:15,h:7,hr:3,rbi:9,avg:".241",obp:".324",slg:".552",ops:".875",wrc:127,woba:".358",iso:".310",bbpct:"11.8%",kpct:"29.4%",babip:".235"}}},
    { name:"Ozzie Albies", pos:"2B", pa:339, avg:".281", obp:".333", slg:".446", ops:".779", hr:12, rbi:42, r:51, h:85, doubles:14, triples:0, sb:1, bbpct:"7.1%", kpct:"11.5%", war:2.4, war2:1.8, wrc:113, woba:".337", xwoba:".305", oaa:2, frv:0, batSpeed:69.0, squaredUp:"30.3%", fastSwing:"5.7%", laSwSp:"34.9%", idealAttack:"57.5%", armValue:null, armStrength:70.9, abs:{netOvr:-0.4, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.4%", xChalRate:"5.8%", rateVsExp:"-0.4%"}, splits:{vsL:{pa:147,r:16,h:43,hr:6,rbi:20,avg:".312",obp:".333",slg:".522",ops:".855",wrc:130,woba:".363",iso:".210",bbpct:"2.7%",kpct:"5.4%",babip:".291"}, vsR:{pa:192,r:35,h:42,hr:6,rbi:22,avg:".255",obp:".333",slg:".382",ops:".715",wrc:100,woba:".318",iso:".127",bbpct:"10.4%",kpct:"16.1%",babip:".271"}, risp:{pa:77,r:3,h:21,hr:3,rbi:31,avg:".350",obp:".390",slg:".550",ops:".940",wrc:143,woba:".381",iso:".200",bbpct:"10.4%",kpct:"6.5%",babip:".300"}, highLeverage:{pa:34,r:17,h:8,hr:2,rbi:10,avg:".276",obp:".353",slg:".552",ops:".905",wrc:144,woba:".383",iso:".276",bbpct:"8.8%",kpct:"11.8%",babip:".250"}}},
    { name:"Michael Harris II", pos:"CF", pa:279, avg:".306", obp:".337", slg:".513", ops:".850", hr:14, rbi:42, r:37, h:81, doubles:13, triples:0, sb:4, bbpct:"4.3%", kpct:"20.4%", war:2.7, war2:2.3, wrc:133, woba:".367", xwoba:".382", oaa:6, frv:5, batSpeed:74.9, squaredUp:"23.8", fastSwing:"49.0%", laSwSp:"32.1%", idealAttack:"46.7%", armValue:null, armStrength:85.4, abs:{netOvr:-1.1, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.7%", xChalRate:"2.5%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:109,r:12,h:30,hr:4,rbi:14,avg:".291",obp:".330",slg:".476",ops:".806",wrc:122,woba:".351",iso:".184",bbpct:"4.6%",kpct:"21.1%",babip:".342"}, vsR:{pa:170,r:25,h:51,hr:10,rbi:28,avg:".315",obp:".341",slg:".537",ops:".878",wrc:141,woba:".378",iso:".222",bbpct:"4.1%",kpct:"20.0%",babip:".345"}, risp:{pa:55,r:0,h:14,hr:0,rbi:19,avg:".286",obp:".345",slg:".408",ops:".754",wrc:109,woba:".332",iso:".122",bbpct:"7.3%",kpct:"14.5%",babip:".333"}, highLeverage:{pa:28,r:10,h:6,hr:1,rbi:9,avg:".250",obp:".321",slg:".500",ops:".821",wrc:121,woba:".348",iso:".250",bbpct:"7.1%",kpct:"25.0%",babip:".294"}}},
    { name:"Austin Riley", pos:"3B", pa:321, avg:".214", obp:".296", slg:".347", ops:".643", hr:8, rbi:36, r:32, h:61, doubles:12, triples:1, sb:4, bbpct:"8.7%", kpct:"29.0%", war:0.4, war2:0.1, wrc:80, woba:".289", xwoba:".301", oaa:-6, frv:-4, batSpeed:75.6, squaredUp:"21.0%", fastSwing:"56.7%", laSwSp:"30.4%", idealAttack:"47.5%", armValue:null, armStrength:83.6, abs:{netOvr:-0.6, netRuns:-0.2, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.2%", xChalRate:"5.0%", rateVsExp:"-2.8%"}, splits:{vsL:{pa:115,r:10,h:24,hr:1,rbi:13,avg:".238",obp:".322",slg:".337",ops:".658",wrc:86,woba:".298",iso:".099",bbpct:"11.3%",kpct:"31.3%",babip:".354"}, vsR:{pa:206,r:22,h:37,hr:7,rbi:23,avg:".201",obp:".282",slg:".353",ops:".635",wrc:77,woba:".284",iso:".152",bbpct:"7.3%",kpct:"27.7%",babip:".248"}, risp:{pa:88,r:4,h:19,hr:4,rbi:32,avg:".238",obp:".284",slg:".463",ops:".747",wrc:100,woba:".318",iso:".225",bbpct:"6.8%",kpct:"31.8%",babip:".300"}, highLeverage:{pa:35,r:4,h:7,hr:1,rbi:13,avg:".226",obp:".257",slg:".355",ops:".612",wrc:62,woba:".262",iso:".129",bbpct:"5.7%",kpct:"20.0%",babip:".240"}}},
    { name:"Mauricio Dubón", pos:"SS", pa:302, avg:".264", obp:".316", slg:".418", ops:".733", hr:8, rbi:43, r:32, h:74, doubles:15, triples:2, sb:1, bbpct:"6.3%", kpct:"14.6%", war:1.8, war2:1.7, wrc:103, woba:".322", xwoba:".321", oaa:8, frv:6, batSpeed:69.1, squaredUp:"27.3%", fastSwing:"3.1%", laSwSp:"38.1%", idealAttack:"37.8%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.6%", xChalRate:"4.3%", rateVsExp:"+2.3%"}, splits:{vsL:{pa:121,r:12,h:27,hr:3,rbi:19,avg:".241",obp:".298",slg:".393",ops:".690",wrc:91,woba:".305",iso:".152",bbpct:"6.6%",kpct:"11.6%",babip:".253"}, vsR:{pa:181,r:20,h:47,hr:5,rbi:24,avg:".280",obp:".328",slg:".435",ops:".762",wrc:111,woba:".334",iso:".155",bbpct:"6.1%",kpct:"16.6%",babip:".316"}, risp:{pa:71,r:3,h:23,hr:3,rbi:37,avg:".354",obp:".400",slg:".615",ops:"1.015",wrc:179,woba:".435",iso:".262",bbpct:"7.0%",kpct:"11.3%",babip:".370"}, highLeverage:{pa:32,r:7,h:12,hr:1,rbi:21,avg:".414",obp:".469",slg:".690",ops:"1.158",wrc:219,woba:".493",iso:".276",bbpct:"9.4%",kpct:"9.4%",babip:".440"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:72, avg:".077", obp:".167", slg:".077", ops:".244", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"9.7%", kpct:"25.0%", war:-0.8, war2:-1.1, wrc:-28, woba:".130", xwoba:".213", oaa:-4, frv:-4, batSpeed:72.0, squaredUp:"17.7%", fastSwing:"23.0%", laSwSp:"19.1%", idealAttack:"58.4%", armValue:null, armStrength:84.1, abs:{netOvr:0.7, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.6%", xChalRate:"4.2%", rateVsExp:"-2.6%"}, splits:{vsL:{pa:38,r:1,h:2,hr:0,rbi:2,avg:".057",obp:".132",slg:".057",ops:".189",wrc:-47,woba:".102",iso:".000",bbpct:"7.9%",kpct:"28.9%",babip:".083"}, vsR:{pa:34,r:3,h:3,hr:0,rbi:1,avg:".100",obp:".206",slg:".100",ops:".306",wrc:-7,woba:".161",iso:".000",bbpct:"11.8%",kpct:"20.6%",babip:".130"}, risp:{pa:17,r:0,h:3,hr:0,rbi:3,avg:".214",obp:".353",slg:".214",ops:".567",wrc:75,woba:".281",iso:".000",bbpct:"17.6%",kpct:"17.6%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:124,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
    { name:"Mike Yastrzemski", pos:"LF", pa:217, avg:".228", obp:".313", slg:".347", ops:".661", hr:4, rbi:19, r:27, h:44, doubles:9, triples:1, sb:1, bbpct:"9.2%", kpct:"24.9%", war:0.4, war2:0.2, wrc:87, woba:".299", xwoba:".287", oaa:0, frv:0, batSpeed:71.2, squaredUp:"28.4%", fastSwing:"7.2%", laSwSp:"30.9%", idealAttack:"60.8%", armValue:null, armStrength:82.9, abs:{netOvr:2.2, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:31,r:4,h:3,hr:0,rbi:1,avg:".115",obp:".258",slg:".154",ops:".412",wrc:29,woba:".213",iso:".038",bbpct:"9.7%",kpct:"41.9%",babip:".231"}, vsR:{pa:186,r:23,h:41,hr:4,rbi:18,avg:".246",obp:".323",slg:".377",ops:".700",wrc:97,woba:".313",iso:".132",bbpct:"9.1%",kpct:"22.0%",babip:".303"}, risp:{pa:53,r:0,h:13,hr:0,rbi:13,avg:".271",obp:".340",slg:".354",ops:".694",wrc:96,woba:".313",iso:".083",bbpct:"9.4%",kpct:"37.7%",babip:".464"}, highLeverage:{pa:23,r:5,h:6,hr:0,rbi:6,avg:".286",obp:".348",slg:".381",ops:".729",wrc:105,woba:".326",iso:".095",bbpct:"8.7%",kpct:"26.1%",babip:".400"}}},
    { name:"Dominic Smith", pos:"DH", pa:190, avg:".279", obp:".317", slg:".424", ops:".742", hr:6, rbi:31, r:26, h:48, doubles:5, triples:1, sb:0, bbpct:"5.8%", kpct:"13.2%", war:0.5, war2:0.1, wrc:102, woba:".321", xwoba:".331", oaa:null, frv:null, batSpeed:68.7, squaredUp:"29.5%", fastSwing:"5.2%", laSwSp:"35.3%", idealAttack:"53.2%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.6%", xChalRate:"4.9%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:29,r:3,h:4,hr:0,rbi:2,avg:".160",obp:".250",slg:".200",ops:".450",wrc:30,woba:".216",iso:".040",bbpct:"10.3%",kpct:"10.3%",babip:".182"}, vsR:{pa:161,r:23,h:44,hr:6,rbi:29,avg:".299",obp:".329",slg:".463",ops:".792",wrc:115,woba:".340",iso:".163",bbpct:"5.0%",kpct:"13.7%",babip:".306"}, risp:{pa:54,r:3,h:13,hr:3,rbi:27,avg:".289",obp:".302",slg:".511",ops:".813",wrc:109,woba:".331",iso:".222",bbpct:"5.6%",kpct:"9.3%",babip:".238"}, highLeverage:{pa:27,r:6,h:3,hr:1,rbi:11,avg:".150",obp:".231",slg:".350",ops:".581",wrc:49,woba:".243",iso:".200",bbpct:"11.1%",kpct:"22.2%",babip:".125"}}},
    { name:"Jorge Mateo", pos:"SS", pa:113, avg:".262", obp:".301", slg:".421", ops:".721", hr:4, rbi:11, r:25, h:28, doubles:5, triples:0, sb:7, bbpct:"5.3%", kpct:"29.2%", war:0.7, war2:0.7, wrc:98, woba:".316", xwoba:".332", oaa:2, frv:2, batSpeed:73.7, squaredUp:"20.4%", fastSwing:"35.5%", laSwSp:"48.6%", idealAttack:"40.3%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:45,r:8,h:11,hr:2,rbi:3,avg:".256",obp:".289",slg:".419",ops:".707",wrc:94,woba:".309",iso:".163",bbpct:"4.4%",kpct:"35.6%",babip:".360"}, vsR:{pa:68,r:17,h:17,hr:2,rbi:8,avg:".266",obp:".309",slg:".422",ops:".731",wrc:101,woba:".320",iso:".156",bbpct:"5.9%",kpct:"25.0%",babip:".333"}, risp:{pa:27,r:0,h:6,hr:0,rbi:6,avg:".240",obp:".296",slg:".240",ops:".536",wrc:54,woba:".250",iso:".000",bbpct:"7.4%",kpct:"33.3%",babip:".375"}, highLeverage:{pa:12,r:8,h:2,hr:0,rbi:1,avg:".200",obp:".333",slg:".200",ops:".533",wrc:64,woba:".265",iso:".000",bbpct:"16.7%",kpct:"25.0%",babip:".286"}}},
    { name:"Eli White", pos:"OF", pa:110, avg:".216", obp:".264", slg:".363", ops:".626", hr:3, rbi:14, r:12, h:22, doubles:4, triples:1, sb:3, bbpct:"5.5%", kpct:"20.9%", war:0.7, war2:0.2, wrc:71, woba:".275", xwoba:".284", oaa:2, frv:3, batSpeed:73.1, squaredUp:"21.4%", fastSwing:"32.6", laSwSp:"32.5%", idealAttack:"53.5%", armValue:null, armStrength:89.5, abs:{netOvr:-1.0, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.9%", xChalRate:"5.2%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:65,r:5,h:14,hr:2,rbi:9,avg:".246",obp:".323",slg:".421",ops:".744",wrc:105,woba:".326",iso:".175",bbpct:"9.2%",kpct:"21.5%",babip:".286"}, vsR:{pa:45,r:7,h:8,hr:1,rbi:5,avg:".178",obp:".178",slg:".289",ops:".467",wrc:20,woba:".201",iso:".111",bbpct:"0.0%",kpct:"20.0%",babip:".200"}, risp:{pa:31,r:1,h:7,hr:1,rbi:11,avg:".259",obp:".323",slg:".407",ops:".730",wrc:100,woba:".319",iso:".148",bbpct:"9.7%",kpct:"16.1%",babip:".273"}, highLeverage:{pa:17,r:3,h:2,hr:0,rbi:4,avg:".133",obp:".235",slg:".133",ops:".369",wrc:11,woba:".187",iso:".000",bbpct:"11.8%",kpct:"11.8%",babip:".154"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".140", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-55,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-65,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:187,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:490,woba:".892",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
    { name:"Joey Bart", pos:"C", pa:11, avg:".182", obp:".182", slg:".455", ops:".636", hr:1, rbi:3, r:1, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"0.0%", war:0.1, war2:0.0, wrc:66, woba:".268", xwoba:".363", oaa:null, frv:null, batSpeed:75.6, squaredUp:"18.8%", fastSwing:"62.5%", laSwSp:"36.7%", idealAttack:"25.0%", avgPop:1.93, armValue:null, armStrength:84.1, splits:{vsL:{pa:7,r:1,h:2,hr:1,rbi:3,avg:".286",obp:".286",slg:".714",ops:"1.000",wrc:170,woba:".421",iso:".429",bbpct:"0.0%",kpct:"0.0%",babip:".167"}, vsR:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:2,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}}},
    { name:"Rowdy Tellez", pos:"1B", pa:10, avg:".200", obp:".200", slg:".500", ops:".700", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"30.0%", war:0.0, war2:0.0, wrc:84, woba:".294", xwoba:".487", oaa:null, frv:null, batSpeed:76.4, squaredUp:"15.8%", fastSwing:"47.4%", laSwSp:"57.1%", idealAttack:"68.4%", armValue:null, armStrength:null, splits:{vsL:{pa:0,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:0,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:8,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".250",slg:".625",ops:".875",wrc:134,woba:".368",iso:".375",bbpct:"0.0%",kpct:"37.5%",babip:".250"}, risp:{pa:5,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".200",slg:".400",ops:".600",wrc:5,woba:".178",iso:".200",bbpct:"0.0%",kpct:"40.0%",babip:".333"}, highLeverage:{pa:3,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".333",slg:".333",ops:".667",wrc:86,woba:".297",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".500"}}},
  ];
   
export const starters = [
    // Updated June 24, 2026 PM — vsL/vsR splits refreshed from FanGraphs; season totals + Savant from June 23
    { name:"Chris Sale", wl:"8-5", era:"2.14", ip:"84.0", kpct:"28.9%", bbpct:"6.1%", whip:"1.048", war:2.6, war2:2.4, fip:"2.71", xfip:"3.06", siera:"3.09", batSpeed:70.8, fastSwing:"19.5%", swstr:"13.3%", cstr:"18.0%", csw:"31.3%", laSwSp:"37.4%", idealAttack:"46.1%", splits:{vsL:{ip:"20.2",era:"1.31",fip:"1.70",xfip:"1.58",whip:"0.87",avg:".197",obp:".256",slg:".289",woba:".248",kpct:"36.1%",bbpct:"3.6%",kbb:"32.5%"}, vsR:{ip:"63.1",era:"2.42",fip:"3.04",xfip:"3.55",whip:"1.11",avg:".222",obp:".290",slg:".312",woba:".273",kpct:"26.6%",bbpct:"6.9%",kbb:"19.7%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.36", xfip:"4.35", siera:"4.13", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.7%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.60",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".343",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.90",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Martín Pérez", wl:"6-4", era:"3.00", ip:"72.0", kpct:"20.7%", bbpct:"9.3%", whip:"1.125", fip:"3.91", war:1.6, war2:1.0, xfip:"3.95", siera:"4.25", batSpeed:73.2, fastSwing:"33.3%", swstr:"9.1%", cstr:"18.9%", csw:"28.0%", laSwSp:"34.3%", idealAttack:"50.3%", splits:{vsL:{ip:"20.0",era:"2.70",fip:"3.65",xfip:"3.47",whip:"1.05",avg:".216",obp:".284",slg:".365",woba:".289",kpct:"22.2%",bbpct:"6.2%",kbb:"16.0%"}, vsR:{ip:"48.0",era:"2.81",fip:"3.73",xfip:"4.01",whip:"1.08",avg:".204",obp:".277",slg:".347",woba:".274",kpct:"20.1%",bbpct:"9.5%",kbb:"10.6%"}}},
    { name:"Bryce Elder", wl:"5-5", era:"3.71", ip:"94.2", kpct:"19.8%", bbpct:"7.3%", whip:"1.215", fip:"3.79", war:0.9, war2:1.6, xfip:"4.01", siera:"4.22", batSpeed:72.4, fastSwing:"27.5%", swstr:"9.3%", cstr:"16.6%", csw:"26.0%", laSwSp:"31.3%", idealAttack:"50.3%", splits:{vsL:{ip:"63.0",era:"3.14",fip:"3.69",xfip:"4.39",whip:"1.08",avg:".197",obp:".272",slg:".303",woba:".260",kpct:"19.5%",bbpct:"9.0%",kbb:"10.5%"}, vsR:{ip:"31.2",era:"4.83",fip:"3.99",xfip:"3.26",whip:"1.48",avg:".304",obp:".338",slg:".452",woba:".346",kpct:"20.4%",bbpct:"4.2%",kbb:"16.2%"}}},
    { name:"Grant Holmes", wl:"4-4", era:"4.17", ip:"73.1", kpct:"20.2%", bbpct:"11.5%", whip:"1.418", fip:"5.40", war:0.6, war2:-0.1, xfip:"4.61", siera:"4.76", batSpeed:72.8, fastSwing:"28.7%", swstr:"12.5%", cstr:"14.7%", csw:"27.1%", laSwSp:"33.6%", idealAttack:"49.1%", splits:{vsL:{ip:"41.1",era:"3.92",fip:"5.50",xfip:"4.54",whip:"1.50",avg:".244",obp:".344",slg:".436",woba:".344",kpct:"21.9%",bbpct:"13.1%",kbb:"8.7%"}, vsR:{ip:"32.0",era:"4.50",fip:"5.29",xfip:"4.72",whip:"1.31",avg:".236",obp:".312",slg:".423",woba:".323",kpct:"18.1%",bbpct:"9.4%",kbb:"8.7%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.87", ip:"40.2", kpct:"20.8%", bbpct:"14.0%", whip:"1.426", fip:"5.59", war:-0.2, war2:-0.2, xfip:"4.82", siera:"4.97", batSpeed:72.4, fastSwing:"27.5%", swstr:"8.7%", cstr:"16.2%", csw:"24.9%", laSwSp:"31.0%", idealAttack:"53.6%", splits:{vsL:{ip:"24.1",era:"6.29",fip:"6.76",xfip:"5.21",whip:"1.60",avg:".247",obp:".375",slg:".484",woba:".375",kpct:"20.5%",bbpct:"14.3%",kbb:"6.3%"}, vsR:{ip:"16.1",era:"2.76",fip:"3.84",xfip:"4.23",whip:"1.16",avg:".179",obp:".288",slg:".250",woba:".254",kpct:"21.2%",bbpct:"13.6%",kbb:"7.6%"}}},
  ];

  export const bullpen = [
    // Updated June 24, 2026 PM — vsL/vsR splits refreshed from FanGraphs; season totals + Savant from June 23
    { name:"Raisel Iglesias", role:"CL", era:"1.42", ip:"25.1", sv:15, kpct:"29.3%", bbpct:"6.1%", whip:"1.105", fip:"2.04", war:1.0, war2:0.9, xfip:"3.12", siera:"2.78", batSpeed:71.3, fastSwing:"25.1%", swstr:"14.9%", cstr:"17.2%", csw:"32.1%", laSwSp:"29.7%", idealAttack:"49.2%", splits:{vsL:{ip:"15.0",era:"1.20",fip:"3.50",xfip:"4.73",whip:"1.07",avg:".216",obp:".286",slg:".333",woba:".278",kpct:"19.6%",bbpct:"8.9%",kbb:"10.7%"}, vsR:{ip:"10.1",era:"1.74",fip:"-0.09",xfip:"0.78",whip:"1.16",avg:".262",obp:".279",slg:".310",woba:".262",kpct:"41.9%",bbpct:"2.3%",kbb:"39.5%"}}},
    { name:"Dylan Lee", role:"RP", era:"1.04", ip:"34.2", sv:0, kpct:"33.3%", bbpct:"4.0%", whip:"0.635", fip:"1.49", war:1.5, war2:1.2, xfip:"2.66", siera:"2.19", batSpeed:72.5, fastSwing:"27.1%", swstr:"19.1%", cstr:"15.2%", csw:"34.3%", laSwSp:"34.2%", idealAttack:"50.0%", splits:{vsL:{ip:"12.1",era:"2.19",fip:"0.83",xfip:"2.17",whip:"0.65",avg:".143",obp:".178",slg:".310",woba:".205",kpct:"37.8%",bbpct:"4.4%",kbb:"33.3%"}, vsR:{ip:"22.1",era:"0.40",fip:"1.85",xfip:"2.94",whip:"0.63",avg:".141",obp:".173",slg:".192",woba:".166",kpct:"30.9%",bbpct:"3.7%",kbb:"27.2%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.40", siera:"3.34", batSpeed:71.4, fastSwing:"22.6%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.9%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.69",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.98",xfip:"2.99",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.35", ip:"30.2", sv:1, kpct:"28.2%", bbpct:"8.1%", whip:"1.043", fip:"2.42", war:1.0, war2:0.9, xfip:"3.31", siera:"3.08", batSpeed:71.9, fastSwing:"25.4%", swstr:"12.3%", cstr:"15.1%", csw:"27.4%", laSwSp:"27.3%", idealAttack:"41.7%", splits:{vsL:{ip:"16.2",era:"3.24",fip:"2.20",xfip:"2.50",whip:"1.08",avg:".213",obp:".279",slg:".311",woba:".266",kpct:"33.8%",bbpct:"7.4%",kbb:"26.5%"}, vsR:{ip:"13.0",era:"1.38",fip:"2.41",xfip:"4.14",whip:"1.00",avg:".196",obp:".269",slg:".217",woba:".229",kpct:"23.1%",bbpct:"7.7%",kbb:"15.4%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.10", ip:"29.0", sv:0, kpct:"26.4%", bbpct:"8.3%", whip:"1.207", fip:"4.27", war:0.5, war2:0.1, xfip:"3.89", siera:"3.39", batSpeed:70.6, fastSwing:"16.9%", swstr:"11.7%", cstr:"18.2%", csw:"30.0%", laSwSp:"32.1%", idealAttack:"55.6%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.86",xfip:"3.80",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".319",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.22",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".283",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
    { name:"Reynaldo López", role:"RP", era:"3.50", ip:"43.2", sv:0, kpct:"20.6%", bbpct:"11.1%", whip:"1.374", fip:"4.62", war:0.3, war2:0.1, xfip:"4.64", siera:"4.53", batSpeed:71.4, fastSwing:"21.6%", swstr:"8.5%", cstr:"17.3%", csw:"25.8%", laSwSp:"37.8%", idealAttack:"45.5%", splits:{vsL:{ip:"22.1",era:"4.03",fip:"4.98",xfip:"5.36",whip:"1.75",avg:".229",obp:".379",slg:".361",woba:".341",kpct:"21.2%",bbpct:"19.2%",kbb:"1.9%"}, vsR:{ip:"21.1",era:"2.95",fip:"4.23",xfip:"3.89",whip:"0.98",avg:".244",obp:".259",slg:".427",woba:".295",kpct:"20.0%",bbpct:"1.2%",kbb:"18.8%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.84", ip:"19.0", sv:1, kpct:"29.3%", bbpct:"10.7%", whip:"1.000", fip:"4.10", war:0.3, war2:0.1, xfip:"3.70", siera:"3.37", batSpeed:72.8, fastSwing:"32.0%", swstr:"12.8%", cstr:"11.8%", csw:"24.6%", laSwSp:"35.6%", idealAttack:"54.4%", splits:{vsL:{ip:"7.1",era:"3.68",fip:"5.97",xfip:"4.05",whip:"1.50",avg:".214",obp:".333",slg:".464",woba:".339",kpct:"30.3%",bbpct:"15.2%",kbb:"15.2%"}, vsR:{ip:"11.1",era:"0.79",fip:"2.66",xfip:"3.10",whip:"0.53",avg:".108",obp:".154",slg:".216",woba:".167",kpct:"30.8%",bbpct:"5.1%",kbb:"25.6%"}}},
    { name:"James Karinchak", role:"RP", era:"0.00", ip:"6.2", sv:0, kpct:"26.1%", bbpct:"8.7%", whip:"0.600", fip:"2.20", war:0.3, war2:0.1, xfip:"4.45", siera:"3.73", batSpeed:72.2, fastSwing:"27.6%", swstr:"10.0%", cstr:"23.0%", csw:"33.0%", laSwSp:"20.0%", idealAttack:"62.1", splits:{vsL:{ip:"1.2",era:"0.00",fip:"5.50",xfip:"8.19",whip:"1.80",avg:".200",obp:".429",slg:".400",woba:".381",kpct:"14.3%",bbpct:"28.6%",kbb:"-14.3%"}, vsR:{ip:"4.0",era:"0.00",fip:"1.10",xfip:"3.34",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"33.3%",bbpct:"0.0%",kbb:"33.3%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"3.68", ip:"14.2", sv:0, kpct:"9.8%", bbpct:"1.6%", whip:"1.159", fip:"4.67", war:0.1, war2:0.0, xfip:"4.33", siera:"4.39", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.9%", cstr:"12.4%", csw:"21.3%", laSwSp:"42.3%", idealAttack:"57.4", splits:{vsL:{ip:"8.2",era:"5.19",fip:"4.49",xfip:"4.54",whip:"1.27",avg:".314",obp:".333",slg:".429",woba:".335",kpct:"5.4%",bbpct:"0.0%",kbb:"5.4%"}, vsR:{ip:"6.0",era:"1.50",fip:"4.94",xfip:"4.02",whip:"1.00",avg:".238",obp:".304",slg:".381",woba:".307",kpct:"16.7%",bbpct:"4.2%",kbb:"12.5%"}}},
    { name:"Ian Hamilton", role:"RP", era:"13.50", ip:"2.0", sv:0, kpct:"30.0%", bbpct:"20.0%", whip:"2.000", fip:"3.10", war:-0.1, war2:0.0, xfip:"3.85", siera:"4.45", batSpeed:72.4, fastSwing:"37.5%", swstr:"20.0%", cstr:"15.6%", csw:"35.6%", laSwSp:"40.0", idealAttack:"37.5%", splits:{vsL:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}, vsR:{ip:"0.0",era:"0.00",fip:"0.00",xfip:"0.00",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"0.0%",bbpct:"0.0%",kbb:"0.0%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:48,l:31,pct:".608",gb:"—", home:"24-14",away:"24-17", rs:385, ra:293, diff:+92, strk:"L4", l10:"3-7", highlight:true,  srs:1.2 },
     { team:"PHI", full:"Philadelphia Phillies", w:44,l:36,pct:".550",gb:"4.5", home:"23-19",away:"21-17", rs:349, ra:350, diff:-1, strk:"W2", l10:"6-4", highlight:false, srs:0.0 },
     { team:"MIA", full:"Miami Marlins",        w:42,l:39,pct:".519",gb:"7.0", home:"28-17",away:"14-22", rs:349, ra:346, diff:+3, strk:"W2", l10:"7-3", highlight:false, srs:0.1 },
     { team:"WSN", full:"Washington Nationals", w:41,l:40,pct:".506",gb:"8.0", home:"17-24",away:"24-16", rs:433, ra:424, diff:+9, strk:"L2", l10:"5-5", highlight:false, srs:0.3 },
     { team:"NYM", full:"New York Mets",        w:34,l:46,pct:".425",gb:"14.5", home:"18-21",away:"16-25", rs:325, ra:371, diff:-46, strk:"L5", l10:"3-7", highlight:false, srs:-0.6 },
   ];
   
export const statcastHitters = [
  { name:"Michael Harris II", ev:"92.0",hardHit:"50.7%",xwoba:".382",xba:".309",xslg:".545",barrel:"15.4%",chase:"45.6%",whiff:"26.4%",kpct:"20.4%",bbpct:"4.3%", gbpct:"42.6%",fbpct:"24.4%",ldpct:"26.8%",pupct:"6.2%",pullAir:"17.7%"},
  { name:"Matt Olson", ev:"92.8",hardHit:"51.1%",xwoba:".363",xba:".257",xslg:".515",barrel:"13.5%",chase:"28.1%",whiff:"24.4%",kpct:"22.9%",bbpct:"9.9%", gbpct:"36.8%",fbpct:"33.3%",ldpct:"20.8%",pupct:"9.1%",pullAir:"19.5%"},
  { name:"Dominic Smith", ev:"87.7",hardHit:"34.6%",xwoba:".331",xba:".276",xslg:".435",barrel:"7.3%",chase:"33.7%",whiff:"20.5%",kpct:"13.2%",bbpct:"5.8%", gbpct:"36.6%",fbpct:"31.4%",ldpct:"26.1%",pupct:"5.9%",pullAir:"16.3%"},
  { name:"Drake Baldwin", ev:"92.1",hardHit:"51.3%",xwoba:".381",xba:".273",xslg:".531",barrel:"17.7%",chase:"36.3%",whiff:"26.0%",kpct:"25.3%",bbpct:"9.6%", gbpct:"46.2%",fbpct:"23.4%",ldpct:"24.7%",pupct:"5.7%",pullAir:"14.6%"},
  { name:"Mauricio Dubón", ev:"86.4",hardHit:"29.7%",xwoba:".321",xba:".273",xslg:".407",barrel:"5.5%",chase:"37.2%",whiff:"16.6%",kpct:"14.6%",bbpct:"6.3%", gbpct:"37.7%",fbpct:"25.8%",ldpct:"28.4%",pupct:"8.1%",pullAir:"14.4%"},
  { name:"Jorge Mateo", ev:"90.4",hardHit:"48.6%",xwoba:".332",xba:".272",xslg:".458",barrel:"9.5%",chase:"41.5%",whiff:"29.8%",kpct:"29.2%",bbpct:"5.3%", gbpct:"37.8%",fbpct:"32.4%",ldpct:"28.4%",pupct:"1.4%",pullAir:"20.3%"},
  { name:"Austin Riley", ev:"91.0",hardHit:"45.4%",xwoba:".301",xba:".211",xslg:".384",barrel:"10.3%",chase:"32.2%",whiff:"32.5%",kpct:"29.0%",bbpct:"8.7%", gbpct:"38.7%",fbpct:"30.9%",ldpct:"21.1%",pupct:"9.3%",pullAir:"18.6%"},
  { name:"Ozzie Albies", ev:"87.2",hardHit:"28.3%",xwoba:".305",xba:".256",xslg:".385",barrel:"4.1%",chase:"35.6%",whiff:"19.9%",kpct:"11.5%",bbpct:"7.1%", gbpct:"35.3%",fbpct:"32.0%",ldpct:"25.7%",pupct:"7.0%",pullAir:"25.4%"},
  { name:"Mike Yastrzemski", ev:"90.6",hardHit:"43.2%",xwoba:".287",xba:".226",xslg:".320",barrel:"3.6%",chase:"26.8%",whiff:"24.5%",kpct:"24.9%",bbpct:"9.2%", gbpct:"41.7%",fbpct:"28.8%",ldpct:"24.5%",pupct:"5.0%",pullAir:"19.4%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.1",hardHit:"32.5%",xwoba:".284",xba:".242",xslg:".352",barrel:"6.3%",chase:"29.6%",whiff:"28.8%",kpct:"20.9%",bbpct:"5.5%", gbpct:"55.0%",fbpct:"22.5%",ldpct:"20.0%",pupct:"2.5%",pullAir:"10.0%"},
  { name:"Ha-Seong Kim", ev:"84.9",hardHit:"21.3%",xwoba:".213",xba:".154",xslg:".214",barrel:"4.4%",chase:"25.7%",whiff:"21.1%",kpct:"25.0%",bbpct:"9.7%", gbpct:"46.8%",fbpct:"34.0%",ldpct:"8.5%",pupct:"10.6%",pullAir:"17.0%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.0",hardHit:"34.7%",xwoba:".272",xba:".217",xslg:".386",barrel:"8.2%",chase:"32.2%",whiff:"26.7%",kpct:"28.8%",bbpct:"2.7%", gbpct:"38.8%",fbpct:"36.7%",ldpct:"18.4%",pupct:"6.1%",pullAir:"27.3%"},
  { name:"Rowdy Tellez", ev:"0.0",hardHit:"0.0%",xwoba:".000",xba:".000",xslg:".000",barrel:"0.0%",chase:"0.0%",whiff:"0.0%",kpct:"0.0%",bbpct:"0.0%", gbpct:"0.0%",fbpct:"0.0%",ldpct:"0.0%",pupct:"0.0%",pullAir:"14.3%"},
];

export const statcastPitchers = [
  { name:"Raisel Iglesias", ev:"88.0",hardHit:"32.8%",xwoba:".252",xba:".216",xslg:".300",kpct:"29.3%",bbpct:"6.1%", barrel:"4.8%", chase:"38.2%",whiff:"32.0%",gbpct:"34.4%",fbpct:"26.6%",ldpct:"28.1%",pupct:"10.9%", pullAir:"16.7%"},
  { name:"Dylan Lee", ev:"86.9",hardHit:"31.6%",xwoba:".214",xba:".179",xslg:".260",kpct:"33.3%",bbpct:"4.0%", barrel:"3.8%", chase:"37.3%",whiff:"38.0%",gbpct:"34.2%",fbpct:"30.4%",ldpct:"25.3%",pupct:"10.1%", pullAir:"28.0%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"89.9",hardHit:"39.6%",xwoba:".292",xba:".241",xslg:".360",kpct:"19.8%",bbpct:"7.3%", barrel:"4.2%", chase:"29.4%",whiff:"22.5%",gbpct:"45.1%",fbpct:"25.3%",ldpct:"22.9%",pupct:"6.6%", pullAir:"17.4%"},
  { name:"Chris Sale", ev:"87.2",hardHit:"32.2%",xwoba:".291",xba:".236",xslg:".348",kpct:"28.9%",bbpct:"6.1%", barrel:"5.6%", chase:"35.5%",whiff:"29.5%",gbpct:"44.4%",fbpct:"23.8%",ldpct:"26.6%",pupct:"5.1%", pullAir:"18.2%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.0",hardHit:"35.1%",xwoba:".272",xba:".217",xslg:".309",kpct:"28.2%",bbpct:"8.1%", barrel:"3.9%", chase:"30.7%",whiff:"26.7%",gbpct:"41.6%",fbpct:"24.7%",ldpct:"23.4%",pupct:"10.4%", pullAir:"10.8%"},
  { name:"Tyler Kinley", ev:"84.7",hardHit:"26.9%",xwoba:".270",xba:".196",xslg:".347",kpct:"26.4%",bbpct:"8.3%", barrel:"6.5%", chase:"24.8%",whiff:"27.1%",gbpct:"32.1%",fbpct:"30.8%",ldpct:"24.4%",pupct:"12.8%", pullAir:"35.1%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"37.3%",xwoba:".313",xba:".246",xslg:".379",kpct:"20.7%",bbpct:"9.3%", barrel:"6.5%", chase:"26.3%",whiff:"22.7%",gbpct:"49.3%",fbpct:"21.4%",ldpct:"24.9%",pupct:"4.5%", pullAir:"22.2%"},
  { name:"Grant Holmes", ev:"90.9",hardHit:"43.8%",xwoba:".340",xba:".249",xslg:".430",kpct:"20.2%",bbpct:"11.5%", barrel:"9.7%", chase:"32.0%",whiff:"28.5%",gbpct:"42.9%",fbpct:"26.3%",ldpct:"24.4%",pupct:"6.5%", pullAir:"21.7%"},
  { name:"Reynaldo López", ev:"87.2",hardHit:"35.4%",xwoba:".334",xba:".257",xslg:".410",kpct:"20.6%",bbpct:"11.1%", barrel:"5.6%", chase:"24.6%",whiff:"20.2%",gbpct:"37.0%",fbpct:"27.6%",ldpct:"28.3%",pupct:"7.1%", pullAir:"22.0%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.0%"},
  { name:"Dylan Dodd", ev:"89.9",hardHit:"37.8%",xwoba:".285",xba:".212",xslg:".355",kpct:"29.3%",bbpct:"10.7%", barrel:"8.9%", chase:"31.5%",whiff:"27.8%",gbpct:"28.9%",fbpct:"22.2%",ldpct:"28.9%",pupct:"20.0%", pullAir:"41.9%"},
  { name:"James Karinchak", ev:"85.4",hardHit:"20.0%",xwoba:".192",xba:".112",xslg:".228",kpct:"26.1%",bbpct:"8.7%", barrel:"6.7%", chase:"28.1%",whiff:"29.7%",gbpct:"33.3%",fbpct:"40.0%",ldpct:"13.3%",pupct:"13.3%", pullAir:"8.3%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.7%"},
  { name:"Ian Hamilton", ev:"96.3",hardHit:"60.0%",xwoba:".351",xba:".278",xslg:".328",kpct:"30.0%",bbpct:"20.0%", barrel:"0.0%", chase:"26.9%",whiff:"45.0%",gbpct:"60.0%",fbpct:"0.0%",ldpct:"40.0%",pupct:"0.0%", pullAir:"0.0%"},
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
     { week:"G6",  "Elder":0.2,"Sale":0.1,"D.Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"D.Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"D.Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"D.Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"D.Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"D.Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"D.Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"D.Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"D.Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"D.Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"D.Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0 },
   ];

// ════════════════════════════════════════════════════════════════════════════
// TrackerHit+ / TrackerArm+ — Composite performance metrics
// Updated June 25, 2026
//   Hitters:  wRC+ (26) · xwOBA (21) · Hard Hit% (15) · Chase% inv (10) ·
//             Whiff% inv (12) · EV (07) · LA SwSp% (09)
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
  xwoba:   { mean: 0.319, sd: 0.030 },
  hardHit: { mean: 39.2,  sd: 6.0   },
  chase:   { mean: 30.0,  sd: 4.0   },   // inverted (lower = better)
  whiff:   { mean: 25.0,  sd: 4.0   },   // inverted (lower = better)
  ev:      { mean: 88.7,  sd: 2.0   },
  laSwSp:  { mean: 33.7,  sd: 4.0   },
};
const W_HIT = {
  wrc: 0.26, xwoba: 0.21, hardHit: 0.15, whiff: 0.12, chase: 0.10, laSwSp: 0.09, ev: 0.07,
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
