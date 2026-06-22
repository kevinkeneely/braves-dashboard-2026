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
 
   export const lastUpdated = "June 22, 2026";
 
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
      // Upcoming
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
     record: "48-28",
     runs: 377,
     era: "3.40",
     avg: ".253",
     obp: ".317",
     slg: ".421",
     ops: ".738",
     wrc: 104,
     battingK: "21.0%",
     battingBB: "8.0%",
     woba: ".324",
     xwoba: ".328",
     fip: "3.94",
     xera: "3.75",
     xfip: "3.96",
     whip: "1.20",
     gb: "40.8%",
     siera: "3.90",
     pitchingK: "23.4%",
     pitchingBB: "8.8%",
     pitchingKBB: "14.6%",
     swstr: "11.5%",
     cstr: "16.0%",
     csw: "27.5%",
     fastSwing: "25.3%",
     sqUpSw: "24.1%",
     blastSw: "10.0%",
     idealAtk: "49.2%",
     batFastSwing: "31.9%",
     batSqUpSw: "24.8%",
     batBlastSw: "11.3%",
     batIdealAtk: "50.6%",
     batSwStr: "10.9%",
     batCStr: "14.9%",
     batCSW: "25.8%",
     batChase: "33.5%",
     batWhiff: "24.6%",
     chase: "30.9%",
     whiff: "26.4%",
   };
   
export const hitters = [
     // Updated June 20, 2026 — RISP, High Leverage refreshed from FanGraphs; vsL/vsR held from June 19; season totals + Savant held from June 19
     { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.9, war2:0.9, wrc:123, woba:".352", xwoba:".379", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.1, abs:{netOvr:-2.5, netRuns:-0.6, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.2%", rateVsExp:"+8.2%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:81,woba:".290",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:145,woba:".384",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:130,woba:".363",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:142,woba:".380",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}}},
     { name:"Drake Baldwin", pos:"C", pa:238, avg:".286", obp:".368", slg:".519", ops:".887", hr:14, rbi:39, r:41, h:59, doubles:6, triples:0, sb:1, bbpct:"10.6%", kpct:"21.7%", war:2.3, war2:2.1, wrc:145, woba:".398", xwoba:".418", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"26.3%", fastSwing:"52.7%", laSwSp:"42.1%", idealAttack:"49.1%", avgPop:1.93, armValue:null, armStrength:null, abs:{netOvr:0.5, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.0%", xChalRate:"3.8%", rateVsExp:"-2.8%"}, absCatch:{netOvr:12.6, netRuns:0.5, chal:27, won:20, lost:7, wonPct:"74%", chalRate:"2.0%", xChalRate:"2.1%", rateVsExp:"-0.1%"}, splits:{vsL:{pa:96,r:18,h:26,hr:7,rbi:16,avg:".306",obp:".385",slg:".576",ops:".962",wrc:166,woba:".415",iso:".271",bbpct:"9.4%",kpct:"19.8%",babip:".322"}, vsR:{pa:138,r:23,h:33,hr:7,rbi:23,avg:".273",obp:".355",slg:".479",ops:".834",wrc:130,woba:".362",iso:".207",bbpct:"10.9%",kpct:"25.4%",babip:".325"}, risp:{pa:56,r:0,h:16,hr:0,rbi:24,avg:".340",obp:".429",slg:".447",ops:".875",wrc:144,woba:".383",iso:".106",bbpct:"14.3%",kpct:"16.1%",babip:".410"}, highLeverage:{pa:14,r:11,h:4,hr:0,rbi:7,avg:".308",obp:".357",slg:".385",ops:".742",wrc:109,woba:".332",iso:".077",bbpct:"7.1%",kpct:"21.4%",babip:".400"}}},
     { name:"Matt Olson", pos:"1B", pa:332, avg:".273", obp:".343", slg:".543", ops:".886", hr:20, rbi:51, r:52, h:79, doubles:19, triples:0, sb:2, bbpct:"9.7%", kpct:"22.7%", war:3.2, war2:2.7, wrc:140, woba:".382", xwoba:".373", oaa:6, frv:5, batSpeed:74.9, squaredUp:"24.3%", fastSwing:"51.0%", laSwSp:"33.5%", idealAttack:"54.0%", armValue:null, armStrength:82.3, abs:{netOvr:1.3, netRuns:0.2, chal:7, won:2, lost:5, wonPct:"29%", chalRate:"3.9%", xChalRate:"3.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:144,r:24,h:36,hr:8,rbi:20,avg:".277",obp:".340",slg:".538",ops:".879",wrc:140,woba:".377",iso:".262",bbpct:"8.3%",kpct:"20.1%",babip:".298"}, vsR:{pa:185,r:29,h:44,hr:12,rbi:31,avg:".270",obp:".346",slg:".546",ops:".892",wrc:141,woba:".378",iso:".276",bbpct:"10.8%",kpct:"24.3%",babip:".296"}, risp:{pa:81,r:2,h:15,hr:2,rbi:25,avg:".231",obp:".346",slg:".415",ops:".761",wrc:104,woba:".325",iso:".185",bbpct:"16.0%",kpct:"22.2%",babip:".271"}, highLeverage:{pa:32,r:15,h:7,hr:3,rbi:9,avg:".259",obp:".344",slg:".593",ops:".936",wrc:143,woba:".382",iso:".333",bbpct:"12.5%",kpct:"28.1%",babip:".250"}}},
     { name:"Ozzie Albies", pos:"2B", pa:326, avg:".284", obp:".335", slg:".453", ops:".789", hr:12, rbi:40, r:46, h:78, doubles:13, triples:0, sb:1, bbpct:"7.0%", kpct:"12.1%", war:2.2, war2:1.7, wrc:117, woba:".333", xwoba:".313", oaa:5, frv:4, batSpeed:68.9, squaredUp:"29.2%", fastSwing:"5.6%", laSwSp:"34.7%", idealAttack:"56.7%", armValue:null, armStrength:71.5, abs:{netOvr:0.5, netRuns:0.3, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.8%", xChalRate:"5.6%", rateVsExp:"+0.2%"}, splits:{vsL:{pa:136,r:16,h:41,hr:6,rbi:18,avg:".318",obp:".338",slg:".535",ops:".873",wrc:138,woba:".374",iso:".217",bbpct:"2.2%",kpct:"5.1%",babip:".297"}, vsR:{pa:186,r:34,h:41,hr:6,rbi:22,avg:".256",obp:".333",slg:".388",ops:".721",wrc:101,woba:".320",iso:".131",bbpct:"10.2%",kpct:"16.7%",babip:".273"}, risp:{pa:71,r:3,h:20,hr:3,rbi:29,avg:".351",obp:".380",slg:".544",ops:".924",wrc:142,woba:".380",iso:".193",bbpct:"8.5%",kpct:"7.0%",babip:".304"}, highLeverage:{pa:32,r:17,h:8,hr:2,rbi:10,avg:".296",obp:".375",slg:".593",ops:".968",wrc:161,woba:".407",iso:".296",bbpct:"9.4%",kpct:"12.5%",babip:".273"}}},
     { name:"Michael Harris II", pos:"CF", pa:266, avg:".306", obp:".340", slg:".516", ops:".856", hr:14, rbi:41, r:35, h:75, doubles:9, triples:0, sb:3, bbpct:"4.6%", kpct:"20.1%", war:2.4, war2:2.2, wrc:135, woba:".370", xwoba:".381", oaa:6, frv:5, batSpeed:75.0, squaredUp:"24.6", fastSwing:"50.2%", laSwSp:"30.6%", idealAttack:"47.3%", armValue:null, armStrength:84.9, abs:{netOvr:-0.8, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"5.2%", xChalRate:"2.7%", rateVsExp:"+2.5%"}, splits:{vsL:{pa:99,r:10,h:27,hr:4,rbi:14,avg:".290",obp:".333",slg:".473",ops:".806",wrc:123,woba:".352",iso:".183",bbpct:"5.1%",kpct:"20.2%",babip:".333"}, vsR:{pa:163,r:25,h:49,hr:10,rbi:27,avg:".316",obp:".344",slg:".542",ops:".885",wrc:143,woba:".381",iso:".226",bbpct:"4.3%",kpct:"20.2%",babip:".345"}, risp:{pa:52,r:0,h:13,hr:0,rbi:18,avg:".283",obp:".346",slg:".391",ops:".737",wrc:106,woba:".327",iso:".109",bbpct:"7.7%",kpct:"15.4%",babip:".333"}, highLeverage:{pa:26,r:10,h:6,hr:1,rbi:9,avg:".273",obp:".346",slg:".545",ops:".892",wrc:139,woba:".375",iso:".273",bbpct:"7.7%",kpct:"23.1%",babip:".313"}}},
     { name:"Austin Riley", pos:"3B", pa:308, avg:".210", obp:".289", slg:".351", ops:".640", hr:8, rbi:36, r:31, h:56, doubles:12, triples:1, sb:4, bbpct:"8.4%", kpct:"28.5%", war:0.4, war2:0.1, wrc:79, woba:".290", xwoba:".303", oaa:-6, frv:-4, batSpeed:75.6, squaredUp:"21.5%", fastSwing:"55.8%", laSwSp:"30.1%", idealAttack:"47.3%", armValue:null, armStrength:84.2, abs:{netOvr:0.4, netRuns:0.0, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.9%", xChalRate:"5.2%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:107,r:9,h:23,hr:1,rbi:13,avg:".242",obp:".318",slg:".347",ops:".665",wrc:87,woba:".299",iso:".105",bbpct:"10.3%",kpct:"30.8%",babip:".355"}, vsR:{pa:197,r:22,h:34,hr:7,rbi:23,avg:".193",obp:".274",slg:".352",ops:".626",wrc:74,woba:".280",iso:".159",bbpct:"7.1%",kpct:"27.4%",babip:".233"}, risp:{pa:85,r:4,h:19,hr:4,rbi:32,avg:".247",obp:".294",slg:".481",ops:".775",wrc:108,woba:".330",iso:".234",bbpct:"7.1%",kpct:"30.6%",babip:".306"}, highLeverage:{pa:33,r:4,h:7,hr:1,rbi:13,avg:".241",obp:".273",slg:".379",ops:".652",wrc:73,woba:".278",iso:".138",bbpct:"6.1%",kpct:"18.2%",babip:".250"}}},
     { name:"Mauricio Dubón", pos:"SS", pa:289, avg:".255", obp:".310", slg:".399", ops:".709", hr:7, rbi:42, r:29, h:66, doubles:13, triples:2, sb:1, bbpct:"6.9%", kpct:"15.2%", war:1.6, war2:1.6, wrc:97, woba:".319", xwoba:".314", oaa:8, frv:6, batSpeed:69.0, squaredUp:"26.7%", fastSwing:"3.0%", laSwSp:"38.0%", idealAttack:"36.7%", armValue:null, armStrength:90.8, abs:{netOvr:-3.1, netRuns:-0.9, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"7.3%", xChalRate:"4.5%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:112,r:10,h:23,hr:2,rbi:18,avg:".223",obp:".286",slg:".340",ops:".626",wrc:74,woba:".280",iso:".117",bbpct:"7.1%",kpct:"11.6%",babip:".239"}, vsR:{pa:173,r:19,h:44,hr:5,rbi:24,avg:".275",obp:".326",slg:".438",ops:".763",wrc:111,woba:".334",iso:".163",bbpct:"6.4%",kpct:"17.3%",babip:".312"}, risp:{pa:71,r:3,h:23,hr:3,rbi:37,avg:".354",obp:".400",slg:".615",ops:"1.015",wrc:179,woba:".435",iso:".262",bbpct:"7.0%",kpct:"11.3%",babip:".370"}, highLeverage:{pa:31,r:6,h:12,hr:1,rbi:21,avg:".429",obp:".484",slg:".714",ops:"1.198",wrc:230,woba:".509",iso:".286",bbpct:"9.7%",kpct:"6.5%",babip:".440"}}},
     { name:"Ha-Seong Kim", pos:"SS", pa:69, avg:".085", obp:".182", slg:".085", ops:".267", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"10.6%", kpct:"24.2%", war:-0.8, war2:-1.0, wrc:-20, woba:".142", xwoba:".215", oaa:-4, frv:-3, batSpeed:72.0, squaredUp:"16.2%", fastSwing:"22.9%", laSwSp:"16.7%", idealAttack:"56.4%", armValue:null, armStrength:null, abs:{netOvr:0.9, netRuns:0.2, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"1.9%", xChalRate:"4.3%", rateVsExp:"-2.5%"}, splits:{vsL:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".065",obp:".147",slg:".065",ops:".212",wrc:-39,woba:".114",iso:".000",bbpct:"8.8%",kpct:"29.4%",babip:".095"}, vsR:{pa:32,r:3,h:3,hr:0,rbi:1,avg:".107",obp:".219",slg:".107",ops:".326",wrc:0,woba:".171",iso:".000",bbpct:"12.5%",kpct:"18.8%",babip:".136"}, risp:{pa:17,r:0,h:3,hr:0,rbi:3,avg:".214",obp:".353",slg:".214",ops:".567",wrc:75,woba:".281",iso:".000",bbpct:"17.6%",kpct:"17.6%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:124,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Mike Yastrzemski", pos:"LF", pa:211, avg:".230", obp:".318", slg:".353", ops:".670", hr:4, rbi:19, r:26, h:42, doubles:9, triples:1, sb:1, bbpct:"9.6%", kpct:"24.5%", war:0.3, war2:0.2, wrc:87, woba:".298", xwoba:".288", oaa:-1, frv:0, batSpeed:71.1, squaredUp:"28.1%", fastSwing:"6.9%", laSwSp:"29.2%", idealAttack:"61.2%", armValue:null, armStrength:83.0, abs:{netOvr:3.5, netRuns:0.8, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"1.3%", xChalRate:"3.6%", rateVsExp:"-2.3%"}, splits:{vsL:{pa:30,r:4,h:3,hr:0,rbi:1,avg:".120",obp:".267",slg:".160",ops:".427",wrc:34,woba:".220",iso:".040",bbpct:"10.0%",kpct:"40.0%",babip:".231"}, vsR:{pa:181,r:23,h:40,hr:4,rbi:18,avg:".247",obp:".326",slg:".383",ops:".709",wrc:99,woba:".317",iso:".136",bbpct:"9.4%",kpct:"21.5%",babip:".303"}, risp:{pa:50,r:0,h:13,hr:0,rbi:13,avg:".289",obp:".360",slg:".378",ops:".738",wrc:109,woba:".332",iso:".089",bbpct:"10.0%",kpct:"36.0%",babip:".481"}, highLeverage:{pa:20,r:5,h:6,hr:0,rbi:6,avg:".333",obp:".400",slg:".444",ops:".844",wrc:139,woba:".375",iso:".111",bbpct:"10.0%",kpct:"25.0%",babip:".462"}}},
     { name:"Dominic Smith", pos:"DH", pa:181, avg:".287", obp:".322", slg:".439", ops:".761", hr:6, rbi:31, r:25, h:45, doubles:4, triples:1, sb:0, bbpct:"5.7%", kpct:"13.1%", war:0.5, war2:0.2, wrc:106, woba:".326", xwoba:".346", oaa:null, frv:null, batSpeed:68.8, squaredUp:"30.2%", fastSwing:"5.2%", laSwSp:"36.7%", idealAttack:"54.2%", armValue:null, armStrength:null, abs:{netOvr:-1.1, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"6.5%", xChalRate:"5.1%", rateVsExp:"+1.4%"}, splits:{vsL:{pa:26,r:3,h:4,hr:0,rbi:2,avg:".182",obp:".280",slg:".227",ops:".507",wrc:48,woba:".242",iso:".045",bbpct:"11.5%",kpct:"11.5%",babip:".211"}, vsR:{pa:155,r:22,h:43,hr:6,rbi:29,avg:".303",obp:".329",slg:".472",ops:".801",wrc:117,woba:".343",iso:".169",bbpct:"4.5%",kpct:"14.2%",babip:".311"}, risp:{pa:50,r:3,h:13,hr:3,rbi:27,avg:".310",obp:".306",slg:".548",ops:".854",wrc:118,woba:".344",iso:".238",bbpct:"4.0%",kpct:"10.0%",babip:".256"}, highLeverage:{pa:23,r:5,h:3,hr:1,rbi:11,avg:".176",obp:".227",slg:".412",ops:".639",wrc:57,woba:".255",iso:".235",bbpct:"8.7%",kpct:"26.1%",babip:".154"}}},
     { name:"Jorge Mateo", pos:"SS", pa:107, avg:".277", obp:".318", slg:".446", ops:".763", hr:4, rbi:11, r:24, h:27, doubles:5, triples:0, sb:7, bbpct:"5.9%", kpct:"28.4%", war:0.8, war2:0.8, wrc:116, woba:".342", xwoba:".346", oaa:1, frv:1, batSpeed:73.6, squaredUp:"20.1%", fastSwing:"35.4%", laSwSp:"46.2%", idealAttack:"39.8%", armValue:null, armStrength:90.4, abs:{netOvr:-2.1, netRuns:-0.4, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"7.7%", xChalRate:"4.9%", rateVsExp:"+2.8%"}, splits:{vsL:{pa:43,r:8,h:11,hr:2,rbi:3,avg:".268",obp:".302",slg:".439",ops:".741",wrc:104,woba:".323",iso:".171",bbpct:"4.7%",kpct:"37.2%",babip:".391"}, vsR:{pa:64,r:17,h:17,hr:2,rbi:8,avg:".283",obp:".328",slg:".450",ops:".778",wrc:115,woba:".340",iso:".167",bbpct:"6.3%",kpct:"23.4%",babip:".349"}, risp:{pa:24,r:0,h:6,hr:0,rbi:6,avg:".273",obp:".333",slg:".273",ops:".606",wrc:75,woba:".282",iso:".000",bbpct:"8.3%",kpct:"37.5%",babip:".462"}, highLeverage:{pa:9,r:8,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:124,woba:".354",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}}},
     { name:"Eli White", pos:"OF", pa:103, avg:".228", obp:".280", slg:".391", ops:".671", hr:3, rbi:14, r:12, h:20, doubles:4, triples:1, sb:2, bbpct:"6.1%", kpct:"18.4%", war:0.6, war2:0.2, wrc:81, woba:".290", xwoba:".309", oaa:0, frv:-1, batSpeed:73.5, squaredUp:"23.9%", fastSwing:"36.5%", laSwSp:"33.3%", idealAttack:"54.7%", armValue:null, armStrength:null, abs:{netOvr:0.1, netRuns:0.7, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"2.4%", xChalRate:"4.5%", rateVsExp:"-2.1%"}, splits:{vsL:{pa:57,r:5,h:13,hr:2,rbi:9,avg:".265",obp:".351",slg:".469",ops:".820",wrc:126,woba:".356",iso:".204",bbpct:"10.5%",kpct:"17.5%",babip:".289"}, vsR:{pa:43,r:7,h:8,hr:1,rbi:5,avg:".186",obp:".186",slg:".302",ops:".488",wrc:27,woba:".210",iso:".116",bbpct:"0.0%",kpct:"20.9%",babip:".212"}, risp:{pa:28,r:1,h:7,hr:1,rbi:11,avg:".292",obp:".357",slg:".458",ops:".815",wrc:124,woba:".353",iso:".167",bbpct:"10.7%",kpct:"17.9%",babip:".316"}, highLeverage:{pa:15,r:3,h:2,hr:0,rbi:4,avg:".154",obp:".267",slg:".154",ops:".421",wrc:28,woba:".212",iso:".000",bbpct:"13.3%",kpct:"13.3%",babip:".182"}}},
     { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.5, war2:-0.5, wrc:-61, woba:".081", xwoba:".140", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"25.0%", idealAttack:"53.0%", armValue:null, armStrength:75.7, absCatch:{netOvr:9.0, netRuns:0.6, chal:20, won:15, lost:5, wonPct:"75%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-56,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-66,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}}},
     { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.5%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"50.0%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-1.4, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:18,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:6,woba:".179",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:187,woba:".446",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}}},
     { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-73, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.7, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.2%", rateVsExp:"+1.5%"}, splits:{vsL:{pa:5,r:1,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:0,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-49,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:1,h:1,hr:0,rbi:0,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:491,woba:".893",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}}},
   ];
   
export const starters = [
     // Updated June 20, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 18
     { name:"Chris Sale", wl:"8-5", era:"2.14", ip:"84.0", kpct:"28.8%", bbpct:"6.3%", whip:"1.048", war:2.6, war2:2.2, fip:"2.71", xfip:"3.10", siera:"3.10", batSpeed:70.7, fastSwing:"17.9%", swstr:"13.5%", cstr:"17.5%", csw:"31.0%", laSwSp:"38.2%", idealAttack:"46.3%", splits:{vsL:{ip:"19.1",era:"1.40",fip:"2.01",xfip:"1.88",whip:"0.93",avg:".211",obp:".273",slg:".310",woba:".264",kpct:"33.3%",bbpct:"3.8%",kbb:"29.5%"}, vsR:{ip:"59.0",era:"2.59",fip:"3.08",xfip:"3.50",whip:"1.08",avg:".216",obp:".286",slg:".312",woba:".272",kpct:"27.4%",bbpct:"7.1%",kbb:"20.3%"}}},
     { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.0, fip:"5.36", xfip:"4.35", siera:"4.13", batSpeed:72.4, fastSwing:"25.3%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"46.0%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.55",xfip:"4.59",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".343",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.00",xfip:"3.90",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
     { name:"Martín Pérez", wl:"6-3", era:"2.78", ip:"68.0", kpct:"20.7%", bbpct:"8.5%", whip:"1.074", war:1.8, war2:1.0, fip:"3.71", xfip:"3.85", siera:"4.12", batSpeed:73.1, fastSwing:"32.5%", swstr:"9.4%", cstr:"18.8%", csw:"28.2%", laSwSp:"36.3%", idealAttack:"50.5%", splits:{vsL:{ip:"20.0",era:"2.70",fip:"3.65",xfip:"3.47",whip:"1.05",avg:".216",obp:".284",slg:".365",woba:".289",kpct:"22.2%",bbpct:"6.2%",kbb:"16.0%"}, vsR:{ip:"48.0",era:"2.81",fip:"3.72",xfip:"4.01",whip:"1.08",avg:".204",obp:".277",slg:".347",woba:".274",kpct:"20.1%",bbpct:"9.5%",kbb:"10.6%"}}},
     { name:"Bryce Elder", wl:"5-5", era:"3.71", ip:"94.2", kpct:"19.9%", bbpct:"7.4%", whip:"1.215", war:0.9, war2:1.5, fip:"3.79", xfip:"4.04", siera:"4.23", batSpeed:72.3, fastSwing:"26.7%", swstr:"9.2%", cstr:"16.3%", csw:"25.6%", laSwSp:"30.7%", idealAttack:"49.0%", splits:{vsL:{ip:"58.2",era:"2.76",fip:"3.85",xfip:"4.52",whip:"1.02",avg:".183",obp:".262",slg:".288",woba:".251",kpct:"19.1%",bbpct:"9.4%",kbb:"9.8%"}, vsR:{ip:"30.0",era:"3.90",fip:"3.56",xfip:"3.08",whip:"1.37",avg:".288",obp:".321",slg:".424",woba:".327",kpct:"21.4%",bbpct:"3.8%",kbb:"17.6%"}}},
     { name:"Grant Holmes", wl:"4-3", era:"4.33", ip:"68.2", kpct:"20.3%", bbpct:"10.7%", whip:"1.398", war:0.4, war2:0.0, fip:"5.27", xfip:"4.57", siera:"4.65", batSpeed:72.7, fastSwing:"27.7%", swstr:"12.6%", cstr:"14.6%", csw:"27.2%", laSwSp:"33.5%", idealAttack:"49.9%", splits:{vsL:{ip:"40.0",era:"4.05",fip:"5.52",xfip:"4.53",whip:"1.48",avg:".245",obp:".341",slg:".444",woba:".345",kpct:"21.6%",bbpct:"12.5%",kbb:"9.1%"}, vsR:{ip:"28.2",era:"4.71",fip:"4.91",xfip:"4.63",whip:"1.29",avg:".241",obp:".306",slg:".420",woba:".318",kpct:"18.5%",bbpct:"8.1%",kbb:"10.5%"}}},
     { name:"JR Ritchie", wl:"1-2", era:"4.54", ip:"35.2", kpct:"19.5%", bbpct:"13.6%", whip:"1.374", war:0.0, war2:-0.4, fip:"5.99", xfip:"4.86", siera:"5.05", batSpeed:72.2, fastSwing:"26.8%", swstr:"8.7%", cstr:"15.2%", csw:"23.9%", laSwSp:"31.8%", idealAttack:"52.9%", splits:{vsL:{ip:"22.1",era:"6.45",fip:"7.08",xfip:"5.20",whip:"1.57",avg:".247",obp:".373",slg:".494",woba:".377",kpct:"19.6%",bbpct:"13.7%",kbb:"5.9%"}, vsR:{ip:"13.1",era:"1.35",fip:"4.15",xfip:"4.29",whip:"1.05",avg:".159",obp:".269",slg:".227",woba:".237",kpct:"19.2%",bbpct:"13.5%",kbb:"5.8%"}}},
   ];

   export const bullpen = [
     // Updated June 20, 2026 — vsL/vsR splits refreshed from FanGraphs; season totals + Savant held from June 18
     { name:"Raisel Iglesias", role:"CL", era:"1.48", ip:"24.1", sv:15, kpct:"29.8%", bbpct:"6.4%", whip:"1.068", fip:"2.08", war:1.0, war2:0.8, xfip:"3.07", siera:"2.75", batSpeed:71.3, fastSwing:"26.7%", swstr:"14.8%", cstr:"17.0%", csw:"31.9%", laSwSp:"26.3%", idealAttack:"49.4%", splits:{vsL:{ip:"14.1",era:"1.26",fip:"3.52",xfip:"4.59",whip:"1.12",avg:".224",obp:".296",slg:".347",woba:".289",kpct:"20.4%",bbpct:"9.3%",kbb:"11.1%"}, vsR:{ip:"10.0",era:"1.80",fip:"0.00",xfip:"0.90",whip:"1.00",avg:".231",obp:".250",slg:".282",woba:".237",kpct:"42.5%",bbpct:"2.5%",kbb:"40.0%"}}},
     { name:"Dylan Lee", role:"RP", era:"1.08", ip:"33.1", sv:0, kpct:"34.7%", bbpct:"4.2%", whip:"0.660", fip:"1.42", war:1.4, war2:1.2, xfip:"2.60", siera:"2.10", batSpeed:72.4, fastSwing:"27.9%", swstr:"19.0%", cstr:"15.4%", csw:"34.4%", laSwSp:"34.3%", idealAttack:"49.5%", splits:{vsL:{ip:"11.2",era:"2.31",fip:"0.87",xfip:"2.28",whip:"0.69",avg:".150",obp:".186",slg:".325",woba:".215",kpct:"37.2%",bbpct:"4.7%",kbb:"32.6%"}, vsR:{ip:"20.2",era:"0.44",fip:"1.74",xfip:"2.78",whip:"0.63",avg:".139",obp:".173",slg:".194",woba:".167",kpct:"33.3%",bbpct:"4.0%",kbb:"29.3%"}}},
     { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.45", war:1.7, war2:0.8, xfip:"3.39", siera:"3.33", batSpeed:71.3, fastSwing:"22.7%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"32.9%", idealAttack:"53.1%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.78",xfip:"3.68",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.97",xfip:"2.98",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
     { name:"Tyler Kinley", role:"RP", era:"3.18", ip:"28.1", sv:0, kpct:"26.1%", bbpct:"8.4%", whip:"1.200", fip:"4.37", war:0.4, war2:0.1, xfip:"3.97", siera:"3.44", batSpeed:70.6, fastSwing:"16.8%", swstr:"11.8%", cstr:"18.0%", csw:"29.8%", laSwSp:"31.2%", idealAttack:"56.0%", splits:{vsL:{ip:"16.1",era:"5.51",fip:"5.85",xfip:"3.80",whip:"1.10",avg:".200",obp:".273",slg:".483",woba:".319",kpct:"28.8%",bbpct:"9.1%",kbb:"19.7%"}, vsR:{ip:"12.0",era:"0.00",fip:"2.35",xfip:"4.22",whip:"1.33",avg:".250",obp:".321",slg:".292",woba:".283",kpct:"22.6%",bbpct:"7.5%",kbb:"15.1%"}}},
     { name:"Didier Fuentes", role:"RP", era:"2.45", ip:"29.1", sv:1, kpct:"29.2%", bbpct:"8.0%", whip:"1.057", fip:"2.35", war:0.9, war2:0.8, xfip:"3.36", siera:"2.99", batSpeed:71.7, fastSwing:"25.0%", swstr:"12.8%", cstr:"15.3%", csw:"28.2%", laSwSp:"26.1%", idealAttack:"42.1%", splits:{vsL:{ip:"15.1",era:"3.52",fip:"2.38",xfip:"2.70",whip:"1.17",avg:".228",obp:".297",slg:".333",woba:".283",kpct:"32.8%",bbpct:"7.8%",kbb:"25.0%"}, vsR:{ip:"12.2",era:"0.71",fip:"2.39",xfip:"4.16",whip:"0.87",avg:".163",obp:".245",slg:".186",woba:".207",kpct:"24.5%",bbpct:"8.2%",kbb:"16.3%"}}},
     { name:"Reynaldo López", role:"RP", era:"3.50", ip:"43.2", sv:0, kpct:"20.2%", bbpct:"11.2%", whip:"1.374", fip:"4.62", war:0.3, war2:0.0, xfip:"4.75", siera:"4.61", batSpeed:71.3, fastSwing:"19.6%", swstr:"8.5%", cstr:"17.3%", csw:"25.8%", laSwSp:"39.1%", idealAttack:"44.8%", splits:{vsL:{ip:"20.1",era:"4.43",fip:"5.31",xfip:"5.58",whip:"1.87",avg:".247",obp:".396",slg:".390",woba:".359",kpct:"19.8%",bbpct:"19.8%",kbb:"0.0%"}, vsR:{ip:"20.1",era:"3.10",fip:"4.28",xfip:"3.93",whip:"0.98",avg:".241",obp:".256",slg:".430",woba:".294",kpct:"20.7%",bbpct:"1.2%",kbb:"19.5%"}}},
     { name:"Dylan Dodd", role:"RP", era:"2.08", ip:"17.1", sv:1, kpct:"28.8%", bbpct:"9.1%", whip:"0.865", fip:"4.20", war:0.4, war2:0.0, xfip:"3.58", siera:"3.22", batSpeed:72.7, fastSwing:"30.6%", swstr:"13.3%", cstr:"12.5%", csw:"25.9%", laSwSp:"35.3%", idealAttack:"51.7%", splits:{vsL:{ip:"7.0",era:"3.86",fip:"6.38",xfip:"4.38",whip:"1.57",avg:".222",obp:".344",slg:".481",woba:".350",kpct:"28.1%",bbpct:"15.6%",kbb:"12.5%"}, vsR:{ip:"10.1",era:"0.87",fip:"2.71",xfip:"3.05",whip:"0.39",avg:".091",obp:".118",slg:".182",woba:".133",kpct:"29.4%",bbpct:"2.9%",kbb:"26.5%"}}},
     { name:"James Karinchak", role:"RP", era:"0.00", ip:"4.0", sv:0, kpct:"30.0%", bbpct:"10.0%", whip:"0.500", fip:"1.85", war:0.2, war2:0.1, xfip:"4.59", siera:"4.01", batSpeed:70.7, fastSwing:"12.5%", swstr:"13.7%", cstr:"19.6%", csw:"33.3%", laSwSp:"0.0%", idealAttack:"0.0", splits:{vsL:{ip:"1.1",era:"0.00",fip:"3.85",xfip:"7.21",whip:"1.50",avg:".250",obp:".400",slg:".500",woba:".393",kpct:"20.0%",bbpct:"20.0%",kbb:"0.0%"}, vsR:{ip:"1.2",era:"0.00",fip:"0.70",xfip:"2.49",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"40.0%",bbpct:"0.0%",kbb:"40.0%"}}},
     { name:"Carlos Carrasco", role:"RP", era:"3.46", ip:"13.0", sv:0, kpct:"11.1%", bbpct:"1.9%", whip:"1.154", fip:"3.87", war:0.2, war2:0.1, xfip:"4.13", siera:"4.08", batSpeed:72.3, fastSwing:"33.7%", swstr:"8.7%", cstr:"12.2%", csw:"20.9%", laSwSp:"0.0%", idealAttack:"0.0", splits:{vsL:{ip:"7.2",era:"5.87",fip:"4.66",xfip:"4.53",whip:"1.43",avg:".333",obp:".353",slg:".455",woba:".355",kpct:"5.9%",bbpct:"0.0%",kbb:"5.9%"}, vsR:{ip:"5.1",era:"0.00",fip:"2.72",xfip:"3.56",whip:"0.75",avg:".176",obp:".263",slg:".176",woba:".216",kpct:"20.0%",bbpct:"5.0%",kbb:"15.0%"}}},
   ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:48,l:28,pct:".632",gb:"—", home:"24-14",away:"24-14", rs:377, ra:280, diff:+97, strk:"L1", l10:"3-7", highlight:true,  srs:1.3 },
     { team:"PHI", full:"Philadelphia Phillies", w:42,l:35,pct:".545",gb:"6.5", home:"23-19",away:"19-16", rs:329, ra:333, diff:-4, strk:"W2", l10:"6-4", highlight:false, srs:0.0 },
     { team:"MIA", full:"Miami Marlins",        w:40,l:38,pct:".513",gb:"10.0", home:"26-16",away:"14-22", rs:336, ra:336, diff:0, strk:"W4", l10:"7-3", highlight:false, srs:0.1 },
     { team:"WSN", full:"Washington Nationals", w:40,l:38,pct:".513",gb:"9.0", home:"16-22",away:"24-16", rs:416, ra:404, diff:+12, strk:"W1", l10:"5-5", highlight:false, srs:0.3 },
     { team:"NYM", full:"New York Mets",        w:34,l:43,pct:".442",gb:"14.5", home:"18-18",away:"16-25", rs:311, ra:342, diff:-31, strk:"L2", l10:"5-5", highlight:false, srs:-0.4 },
   ];
   
export const statcastHitters = [
  { name:"Michael Harris II", ev:"92.3",hardHit:"51.5%",xwoba:".384",xba:".308",xslg:".550",barrel:"15.0%",chase:"44.7%",whiff:"26.4%",kpct:"20.1%",bbpct:"4.6%", gbpct:"42.8%",fbpct:"24.2%",ldpct:"26.3%",pupct:"6.7%",pullAir:"16.5%"},
  { name:"Matt Olson", ev:"93.5",hardHit:"52.3%",xwoba:".370",xba:".261",xslg:".533",barrel:"14.4%",chase:"28.2%",whiff:"25.0%",kpct:"22.7%",bbpct:"9.7%", gbpct:"35.6%",fbpct:"34.3%",ldpct:"21.3%",pupct:"8.8%",pullAir:"19.9%"},
  { name:"Dominic Smith", ev:"88.8",hardHit:"35.9%",xwoba:".339",xba:".284",xslg:".448",barrel:"7.1%",chase:"34.0%",whiff:"19.2%",kpct:"13.1%",bbpct:"5.7%", gbpct:"35.9%",fbpct:"33.8%",ldpct:"26.1%",pupct:"4.2%",pullAir:"15.5%"},
  { name:"Drake Baldwin", ev:"92.5",hardHit:"52.7%",xwoba:".410",xba:".297",xslg:".580",barrel:"18.7%",chase:"34.9%",whiff:"23.6%",kpct:"21.7%",bbpct:"10.6%", gbpct:"45.3%",fbpct:"24.7%",ldpct:"25.3%",pupct:"4.7%",pullAir:"15.3%"},
  { name:"Mauricio Dubón", ev:"86.6",hardHit:"28.6%",xwoba:".322",xba:".270",xslg:".407",barrel:"6.1%",chase:"37.8%",whiff:"17.1%",kpct:"15.2%",bbpct:"6.9%", gbpct:"37.1%",fbpct:"26.3%",ldpct:"29.1%",pupct:"7.5%",pullAir:"14.6%"},
  { name:"Jorge Mateo", ev:"90.3",hardHit:"47.8%",xwoba:".350",xba:".288",xslg:".480",barrel:"10.4%",chase:"40.1%",whiff:"28.9%",kpct:"28.4%",bbpct:"5.9%", gbpct:"40.3%",fbpct:"31.3%",ldpct:"26.9%",pupct:"1.5%",pullAir:"20.9%"},
  { name:"Austin Riley", ev:"91.2",hardHit:"45.1%",xwoba:".302",xba:".212",xslg:".390",barrel:"10.4%",chase:"31.9%",whiff:"32.1%",kpct:"28.5%",bbpct:"8.4%", gbpct:"38.5%",fbpct:"31.3%",ldpct:"20.9%",pupct:"9.3%",pullAir:"19.8%"},
  { name:"Ozzie Albies", ev:"87.1",hardHit:"28.8%",xwoba:".310",xba:".259",xslg:".389",barrel:"4.5%",chase:"35.5%",whiff:"20.1%",kpct:"12.1%",bbpct:"7.0%", gbpct:"36.8%",fbpct:"30.0%",ldpct:"25.6%",pupct:"7.6%",pullAir:"25.6%"},
  { name:"Mike Yastrzemski", ev:"90.5",hardHit:"41.4%",xwoba:".287",xba:".225",xslg:".314",barrel:"3.8%",chase:"26.7%",whiff:"24.8%",kpct:"24.5%",bbpct:"9.6%", gbpct:"42.1%",fbpct:"29.3%",ldpct:"23.3%",pupct:"5.3%",pullAir:"19.5%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.6",hardHit:"34.2%",xwoba:".309",xba:".261",xslg:".386",barrel:"6.8%",chase:"27.7%",whiff:"25.3%",kpct:"15.8%",bbpct:"6.3%", gbpct:"54.8%",fbpct:"21.9%",ldpct:"20.5%",pupct:"2.7%",pullAir:"11.0%"},
  { name:"Ha-Seong Kim", ev:"84.6",hardHit:"20.9%",xwoba:".213",xba:".154",xslg:".199",barrel:"2.4%",chase:"25.9%",whiff:"19.3%",kpct:"24.2%",bbpct:"10.6%", gbpct:"51.2%",fbpct:"32.6%",ldpct:"7.0%",pupct:"9.3%",pullAir:"16.3%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
];

export const statcastPitchers = [
  { name:"Raisel Iglesias", ev:"87.2",hardHit:"29.8%",xwoba:".238",xba:".202",xslg:".286",kpct:"30.3%",bbpct:"5.6%", barrel:"5.4%", chase:"39.2%",whiff:"32.6%",gbpct:"35.1%",fbpct:"28.1%",ldpct:"24.6%",pupct:"12.3%", pullAir:"15.8%"},
  { name:"Dylan Lee", ev:"87.1",hardHit:"32.9%",xwoba:".212",xba:".174",xslg:".256",kpct:"34.8%",bbpct:"4.3%", barrel:"4.3%", chase:"36.4%",whiff:"38.2%",gbpct:"32.9%",fbpct:"31.4%",ldpct:"25.7%",pupct:"10.0%", pullAir:"28.6%"},
  { name:"Robert Suarez", ev:"84.3",hardHit:"30.5%",xwoba:".271",xba:".242",xslg:".340",kpct:"22.8%",bbpct:"4.4%", barrel:"3.7%", chase:"40.0%",whiff:"24.8%",gbpct:"46.3%",fbpct:"24.4%",ldpct:"20.7%",pupct:"8.5%", pullAir:"13.4%"},
  { name:"Bryce Elder", ev:"89.5",hardHit:"38.3%",xwoba:".283",xba:".233",xslg:".343",kpct:"19.9%",bbpct:"7.4%", barrel:"3.8%", chase:"29.9%",whiff:"22.6%",gbpct:"45.1%",fbpct:"26.1%",ldpct:"22.0%",pupct:"6.8%", pullAir:"17.8%"},
  { name:"Chris Sale", ev:"86.8",hardHit:"31.2%",xwoba:".292",xba:".234",xslg:".349",kpct:"28.8%",bbpct:"6.3%", barrel:"6.0%", chase:"36.2%",whiff:"29.5%",gbpct:"44.7%",fbpct:"23.6%",ldpct:"26.6%",pupct:"5.0%", pullAir:"18.1%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"88.3",hardHit:"31.9%",xwoba:".263",xba:".204",xslg:".299",kpct:"29.2%",bbpct:"8.0%", barrel:"4.4%", chase:"29.0%",whiff:"28.0%",gbpct:"39.1%",fbpct:"27.5%",ldpct:"21.7%",pupct:"11.6%", pullAir:"8.7%"},
  { name:"Tyler Kinley", ev:"85.0",hardHit:"27.3%",xwoba:".269",xba:".193",xslg:".346",kpct:"26.1%",bbpct:"8.4%", barrel:"6.6%", chase:"24.9%",whiff:"27.1%",gbpct:"32.5%",fbpct:"31.2%",ldpct:"23.4%",pupct:"13.0%", pullAir:"35.1%"},
  { name:"Martín Pérez", ev:"88.3",hardHit:"38.0%",xwoba:".314",xba:".247",xslg:".382",kpct:"20.8%",bbpct:"8.6%", barrel:"7.1%", chase:"27.1%",whiff:"22.5%",gbpct:"47.4%",fbpct:"22.8%",ldpct:"25.1%",pupct:"4.7%", pullAir:"21.6%"},
  { name:"Grant Holmes", ev:"91.0",hardHit:"44.9%",xwoba:".338",xba:".248",xslg:".433",kpct:"20.3%",bbpct:"10.7%", barrel:"9.8%", chase:"32.0%",whiff:"28.5%",gbpct:"42.0%",fbpct:"27.3%",ldpct:"23.9%",pupct:"6.8%", pullAir:"22.0%"},
  { name:"Reynaldo López", ev:"86.9",hardHit:"34.7%",xwoba:".339",xba:".261",xslg:".420",kpct:"20.2%",bbpct:"11.2%", barrel:"5.8%", chase:"25.0%",whiff:"20.2%",gbpct:"36.4%",fbpct:"27.3%",ldpct:"28.9%",pupct:"7.4%", pullAir:"23.1%"},
  { name:"JR Ritchie", ev:"89.3",hardHit:"40.0%",xwoba:".341",xba:".245",xslg:".408",kpct:"19.5%",bbpct:"13.6%", barrel:"7.0%", chase:"26.7%",whiff:"22.2%",gbpct:"45.0%",fbpct:"30.0%",ldpct:"23.0%",pupct:"2.0%", pullAir:"19.0%"},
  { name:"Dylan Dodd", ev:"89.7",hardHit:"36.6%",xwoba:".282",xba:".216",xslg:".366",kpct:"28.8%",bbpct:"9.1%", barrel:"9.8%", chase:"31.3%",whiff:"28.8%",gbpct:"29.3%",fbpct:"24.4%",ldpct:"26.8%",pupct:"19.5%", pullAir:"41.5%"},
  { name:"James Karinchak", ev:"88.5",hardHit:"16.7%",xwoba:".221",xba:".111",xslg:".294",kpct:"30.0%",bbpct:"10.0%", barrel:"16.7%", chase:"30.3%",whiff:"35.0%",gbpct:"16.7%",fbpct:"50.0%",ldpct:"16.7%",pupct:"16.7%", pullAir:"16.7%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"22.2%"},
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
// Updated June 20, 2026
//   Hitters:  wRC+ (30) · xwOBA (22) · Barrel% (16) · EV (12) · LA SwSp% (10) · Squared-Up% (10)
//   Pitchers: SIERA inv (27) · K-BB% (22) · WHIP inv (18) · xwOBA inv (14) · SwStr% (12) · EV inv (8)
// 100-centered, 15 points per pooled standard deviation. Recalibrate league
// constants at season end from Baseball Savant / FanGraphs MLB-wide leaderboards.
// ════════════════════════════════════════════════════════════════════════════

const _pct = (v) => (typeof v === "string" ? parseFloat(v.replace("%","")) : Number(v));
const _num = (v) => (typeof v === "string" ? parseFloat(v.replace(/[^\d.\-]/g,"")) : Number(v));
const _z   = (val, mean, sd) => (sd > 0 ? (val - mean) / sd : 0);

// ─── League constants ──────────────────────────────────────────────────────
const LG_HIT = {
  wrc:       { mean: 100,   sd: 20    },
  xwoba:     { mean: 0.320, sd: 0.030 },
  barrel:    { mean: 8.0,   sd: 4.0   },
  ev:        { mean: 88.7,  sd: 2.0   },
  laSwSp:    { mean: 33.0,  sd: 4.0   },
  squaredUp: { mean: 33.0,  sd: 3.0   },
};
const W_HIT = {
  wrc: 0.30, xwoba: 0.22, barrel: 0.16, ev: 0.12, laSwSp: 0.10, squaredUp: 0.10,
};

const LG_PIT = {
  siera: { mean: 4.00,  sd: 0.50  },   // inverted (lower = better)
  kbb:   { mean: 15.0,  sd: 5.0   },
  whip:  { mean: 1.30,  sd: 0.15  },   // inverted (lower = better)
  xwoba: { mean: 0.320, sd: 0.030 },   // inverted (lower allowed = better)
  swstr: { mean: 11.5,  sd: 2.5   },
  ev:    { mean: 88.7,  sd: 2.0   },   // inverted (lower allowed = better)
};
const W_PIT = {
  siera: 0.26, kbb: 0.22, whip: 0.18, xwoba: 0.14, swstr: 0.12, ev: 0.08,
};

// ─── Lookup tables ─────────────────────────────────────────────────────────
const _scHitterByName  = Object.fromEntries(statcastHitters.map(s => [s.name, s]));
const _scPitcherByName = Object.fromEntries(statcastPitchers.map(s => [s.name, s]));

// ─── Compute TrackerHit+ for a hitter ──────────────────────────────────────
const _computeTrackerHit = (h) => {
  const sc = _scHitterByName[h.name] || {};
  const wrc       = Number(h.wrc);
  const xwoba     = _num(h.xwoba ?? sc.xwoba);
  const barrel    = _pct(sc.barrel);
  const ev        = _num(sc.ev);
  const laSwSp    = _pct(h.laSwSp);
  const squaredUp = _pct(h.squaredUp);
  if ([wrc, xwoba, barrel, ev, laSwSp, squaredUp].some(v => !isFinite(v))) return null;
  const z =
      W_HIT.wrc       * _z(wrc,       LG_HIT.wrc.mean,       LG_HIT.wrc.sd)
    + W_HIT.xwoba     * _z(xwoba,     LG_HIT.xwoba.mean,     LG_HIT.xwoba.sd)
    + W_HIT.barrel    * _z(barrel,    LG_HIT.barrel.mean,    LG_HIT.barrel.sd)
    + W_HIT.ev        * _z(ev,        LG_HIT.ev.mean,        LG_HIT.ev.sd)
    + W_HIT.laSwSp    * _z(laSwSp,    LG_HIT.laSwSp.mean,    LG_HIT.laSwSp.sd)
    + W_HIT.squaredUp * _z(squaredUp, LG_HIT.squaredUp.mean, LG_HIT.squaredUp.sd);
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
