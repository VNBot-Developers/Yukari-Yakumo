/* jshint shadow:true */
/*jshint -W038 */
/*jshint -W069 */
/*jshint -W030*/
/*jshint -W083*/
/* Đừng có edit nếu bạn không biết nó để làm gì, đa phần là không -.-*/
/////////////////////////////
var steemjs = require('steem');
const youtubedl = require('youtube-dl');
const fs = require("fs");
let database = JSON.parse(fs.readFileSync("./pp/main.json", "utf8"));
var google = require('google');
var cool = require('cool-ascii-faces');
var base32 = require('hi-base32');
var login = require("facebook-chat-api");
var retrieve, mess;
var config = require('./config.js');
var admin = 100009205764028;
var uriencode = require('urlencode');
var request = require('request');
var giphy = require("giphy-api")();
const cmd = require('node-cmd');
var exec = require('child_process').exec;
var api = require('./scr/assets/const.js').api;
var math = api.MATH;
var coin = api.COINMARKET;
var thoitietapi = api.THOITIET;
var wolfram = api.WOLFRAM;
var simsimi = api.SIMSIMIAPI;
var youtube = api.YOUTUBE;
var accesstoken = "e2f33cc239c13c3fe4d93cea78bec096";
var endpoint = "5f3a947e.compilers.sphere-engine.com";
var randFrom = require('./scr/exfunction/randfr.js').randFrom;
var compiler1 = api.COMPILERID1;
var compiler2 = api.COMPILERID2;
var wikicustomsearch = api.GOOGLESEARCH;
var javcode = Array('MIAD-530', 'MIDD-944', 'LADY-077', 'SW-186', 'STAR444', 'T28-184', 'dvdes-635', 'BOD-277', 'BOD-277', 'ARMG-014', 'JUC-579', 'BBI-142', 'MILD-716', 'FSLV-002', 'CRS-S014',
    'ODFW-006', 'SOE-837', 'SOE-837', 'Nhdta-141', 'NADE-783', 'PPPD-294', 'MIRD-102', 'SRS-022', 'BBI-163', 'BIST-001',
    'SIRO-1690', 'HAWA-020', 'SNIS-166', 'MIRD136', 'ABP-138', 'WANZ-201', 'STAR-524', 'SAMA-385', 'ABP-171', 'IPZ-409', 'ABP-108', 'MIDE128', 'N0960', 'JUX-357', 'SNIS-070',
    'SIRO-1774', 'MIRD-134', 'MIDE-128', 'ABP-145', 'N0962', 'ABP159', 'ZIZG-003', 'CWP-107', 'IPZ-127', 'MIDD-532', 'IPTD-748', 'IESP-144', 'crpd-222', 'GAR-280', 'BW248', 'MXGS173', 'MIAD-530', 'RCT-402', 'ABP-159',
    'ABP-103', 'ABP-105', 'ABP-108', 'ABP-117', 'ABP-128', 'ABP-013', 'ABP-138', 'ABP-142', 'ABP-171', 'ABP-276', 'ABP-092', 'ABS-130', 'ABS-141', 'ABS-170', 'ABS-217', 'ABS-047', 'ABS-070',
    'ABS-074', 'ABS-083', 'ADN-032', 'AKB-056', 'AMBI-048', 'AOZ-173z', 'AOZ-189z', 'AOZ-212z', 'AOZ-217z', 'AP-154', ' AP-081', 'APAA-151', 'APAA-246', 'APAA-258',
    'APAA-272', 'APAA-280', 'APAA-299', 'APAK-074', 'APAK-078', 'APAK-086', 'APAK-088', 'ARM-383', 'ARM-416', 'ARMF-003', 'ATID-157', 'ATID-207', 'ATOM-093', 'AUKG-276', 'AUKG-293', 'AUKG-045', 'AVOP-109', 'AVOP-155', 'AVOP-159', 'AVOP-167', 'AVOP-002',
    'BAMS-001', 'BDSR-185', 'BDSR-202', 'BGN-018', 'BGN-005', 'BKSP-274', 'BRA-007', 'BUG-012', 'CCCV-001', 'CHN-035', 'CLUB-196', 'CMV-049', 'CND-128', 'CND-129', 'CND-142', 'CND-089', 'CRIM-035', 'CRS-046', 'CUT-002', 'CWM-221',
    'DAJ-075', 'DANDY-289', 'DANDY-368', 'DANDY-440', 'DASD-267', 'DDT-469', 'DDT-482', 'DFE-020', 'DISM-001', 'DIY-030', 'DMOW-098', 'DOM-021',
    'DOM-043', 'DOPP-035', 'DPHN-142', 'DV-1175', 'DV-1246', 'DVDES-659', 'DVDES-734', 'DVDES-804', 'DVDES-818', 'DVDES-832', 'DVDES-836', 'DVDES-878', 'DVLL-010', 'DWI-01',
    'EBOD-249', 'EBOD-338', 'EBOD-405', 'EBOD-416', 'EDD-191', 'EMRD-058', 'EQ-059', 'EXD-048', 'FAJS-035', 'FAX-306', 'FAX-428', 'FSET-249', 'FSET-264', 'FSET-294', 'FSET-320', 'FSET-321', 'FSET-323', 'FSET-324', 'FSET-421', 'FSET-553',
    'GASO-0012', 'GASO-0013', 'GDTM-044', 'GDTM-054', 'GDTM-078', 'GENT-060', 'GENT-075', 'GEXP-91', 'GEXP-93', 'GG-106', 'GG-132', 'GG-177', 'GG-228', 'GIRO-92', 'GKI-012', 'GSHRB-037', 'GSHRB-046', 'GVG-106', 'GVG-135', 'GVG-158', 'GVG-067', 'GVRD-05',
    'HAVD-596', 'HAVD-830', 'HAVD-837', 'HBAD-141', 'HBAD-260', 'HBAD-267', 'HDI-001', 'HED-002', 'HELL-102', 'HERR-024', 'HERR-029', 'HERX-025', 'HERX-029', 'HND-110', 'HND-132', 'HND-138', 'HND-186', 'HNDS-024', 'HNDS-024', 'HODV-20467', 'HODV-20978',
    'HODV-20986', 'HODV-20993', 'HODV-21002', 'HODV-21027', 'HODV-21062', 'HRRB-003', 'HUNT-852', 'HUNT-913', 'HUNT-946', 'HUNT-971', 'HUNT-999', 'HUNTA-018', 'HUNTA-025', 'HUNTA-032', 'HUNTA-006', 'IBW-312',
    'IBW-356', 'IBW-363', 'IBW-372', 'IBW-475z', 'IBW-476z', 'IBW-483z', 'IBW-495z', 'IBW-506z', 'IBW-508z', 'IBW-518z', 'IDOL-018', 'IEND-002', 'IENE-101', 'IENE-112', 'IENE-114', 'IENE-159', 'IENE-160',
    'IENE-386', 'IENE-406', 'IENE-412', 'IENE-431', 'IESP-104', 'IESP-114', 'IESP-418', 'IESP-458', 'INU-027', 'IPTD-587', 'IPTD-619', 'IPTD-694', 'IPTD-813', 'IPTD-949', 'IPZ-140', 'IPZ-187', 'IPZ-204', 'IPZ-210',
    'IPZ-226', 'IPZ-228', 'IPZ-235', 'IPZ-257', 'IPZ-281', 'IPZ-306', 'IPZ-331', 'IPZ-344', 'IPZ-368', 'IPZ-040', 'IPZ-478', 'JOHS-005', 'JUC-112', 'JUC-368', 'JUC-398', 'JUC-419', 'JUC-944', 'JUMP-2210', 'JUMP-2312',
    'JUX-298', 'JUX-360', 'JUX-500', 'KAWD-596', 'KAWD-608', 'KAWD-629', 'KAWD-640', 'KAWD-651', 'KISD-082', 'KK-054', 'KRND-020', 'KRND-027', 'KRND-029', 'KRND-031', 'KTDS-726', 'KTDS-769', 'KTDS-774', 'LLR-005',
    'LLR-008', 'LOL-089', 'LOL-091', 'LOVE-90', 'MAS-052', 'MDTM-001', 'MDTM-013', 'MDTM-027', 'MDTM-029', 'MDYD-732', 'MDYD-785', 'MDYD-811', 'MDYD-881', 'MIAD-488', 'MIAD-573', 'MIAD-730', 'MIAD-767', 'MIDD-678',
    'MIDE-113', 'MIDE-123', 'MIDE-243', 'MIDE-007', 'MIGD-590', 'MIGD-594', 'MIGD-613', 'MIGD-625', 'MIGD-639', 'MIGD-654', 'MILD-863', 'MIMK-023', 'MIRD-139', 'MIST-045',
    'MMND-104', 'MNG-93', 'MOC-004',
    'MOMJ-017', 'MSK-006', 'MSTT-002', 'MUKD-192', 'MUKD-335', 'MUM-001', 'MUM-105', 'MUM-109', 'MUM-110', 'MUM-113', 'MUM-114', 'MUM-119', 'MUM-126', 'MUM-130',
    'MUM-132', 'MUM-135', 'MUM-143', 'MUM-144', 'MUM-165',
    'MUM-168', 'MUM-169', 'MUM-172', 'MUM-173', 'MUM-174', 'MUM-019', 'MUM-067', 'MUM-007', 'MUM-079', 'MUM-097', 'MVSD-198', 'MXGS-236', 'MXGS-271', 'MXGS-553',
    'MXGS-729', 'MXSPS-178', 'NHDT-996', 'NHDTA-141',
    'NHDTA-153', 'NHDTA-223', 'NHDTA-276', 'NHDTA-295', 'NHDTA-314', 'NHDTA-346', 'NHDTA-348', 'NHDTA-399', 'NHDTA-557', 'NHDTA-564', 'NHDTA-583', 'NHDTA-588', 'NHDTA-591', 'NHDTA-599', 'NHDTA-600', 'NHDTA-605',
    'NHDTA-606', 'NHDTA-610', 'NHDTA-636', 'NHDTA-639', 'NHDTA-644', 'NHDTA-657', 'NIN-004', 'NITR-139', 'NOP-019', 'NTR-003', 'ODFB-037', 'ODFP-010', 'OGPP-006', 'OKSN-103', 'OKSN-127', 'OKSN-228', 'OKSN-242',
    'ONED-557', 'ONED-989', 'ONEG-029', 'ONEZ-027', 'ONEZ-035', 'ONI-013', 'OVG-025', 'OYC-004', 'OYC-005', 'PARM-062', 'PARM-065', 'PARM-070', 'PARM-077', 'PGD-587', 'PGD-788', 'PMP-189', 'PMP-193', 'PMS-198',
    'PMS-201', 'PPPD-320', 'PPPD-337', 'QBD-065', 'QQ-041', 'R18-294', 'RAW-006', 'RBD-173', 'RBD-249', 'RBD-281', 'RBD-291', 'RBD-306', 'RBD-328', 'RBD-346', 'RBD-360', 'RBD-368', 'RBD-395', 'RBD-397', 'RBD-418',
    'RBD-441', 'RBD-481', 'RBD-487', 'RBD-493', 'RBD-503', 'RBD-505', 'RBD-541', 'RBD-551', 'RBD-626', 'RBD-628', 'RBD-694', 'RCT-222', 'RCT-352', 'RCT-600', 'RCT-666', 'RCT-752', 'RDD-122', 'RHTS-015', 'RHTS-032',
    'RHTS-040', 'RTP-020', 'RTP-035', 'RTP-039', 'RTP-049', 'RTP-057', 'RTP-009', 'SAK-8453', 'SAMA-842', 'SAMA-853', 'SBNS-078', 'SCOP-118', 'SCOP-185', 'SCOP-266', 'SCR-111', 'SCR-021', 'SCR-022',
    'SCR-023', 'SCR-040', 'SCR-043', 'SCR-050', 'SCR-056', 'SCR-057', 'SCR-067', 'SCR-069', 'SCR-077', 'SCR-082', 'SCR-089', 'SCR-092', 'SCR-099', 'SDDE-346', 'SDDE-372', 'SDDE-391', 'SDMS-297', 'SDMT-506',
    'SDMU-100', 'SDMU-120', 'SDMU-140', 'SDMU-161', 'SDMU-165', 'SDMU-194', 'SDMU-196', 'SERO-0262', 'SERO-0269', 'SGA-019', 'SHE-125', 'SHE-147', 'SHKD-315', 'SHKD-345', 'SHKD-378', 'SHKD-403', 'SHKD-409',
    'SHKD-489', 'SHKD-518', 'SHKD-546', 'SHKD-586', 'SHKD-614', 'SHKD-619', 'SHL-035', 'SILK-001', 'SILK-052', 'SILK-009', 'SIS-012', 'SIS-020', 'SIS-021', 'SIS-022', 'SIS-023', 'SIS-028', 'SIS-032', 'SIS-007',
    'SMA-661', 'SMA-723', 'SMS-004', 'SND-003', 'SNIS-110', 'SNIS-268', 'SNIS-313', 'SNIS-070', 'SNIS-070', 'SOE-146', 'SOE-028', 'SOE-339', 'SOE-586', 'SOE-910', 'SOE-936', 'SOE-940', 'SOE-941', 'SOE-990', 'SOE-992',
    'SOE-992', 'SON-501', 'SOR-018', 'SQTE-082', 'SQTE-090', 'SQTE-092', 'SRS-015', 'SS-025', 'SS-005', 'SSD-111', 'SSD-086', 'STAR-3115', 'STAR-316', 'STAR-325', 'STAR-395', 'STAR-476', 'STAR-545', 'STAR-551',
    'STAR-553');
var s;
var sql = require('sqlite');
sql.open("./pp/score.sqlite");
var trans = api.TRANSLATE;
var vm = require('vm');
var Suspend = {};
var osu = require('node-osu');
var ZWS = '\u200B';
var EXIT_F = -666;
var EXIT_S = 666;
const net = require('net');
const util = require('util');
const crypto = require('crypto');
var justleave = [];
var hackme = [];
var func = require('./scr/assets/func.js');
var funchash = require('./scr/assets/hashfunc.js');
func.log('/********* WELCOME TO FACEBOOK BOT XD *********/'.green);
func.log(`,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,*,..........*,,*****************************************************&**,*******
,,.,,,,,,,,,,,,,,,,,,,,,,,,,,**....***......*...******************************************************,****************
,,.,,,,,,,,,,,,,,,,,,,,,,,,,*..,*****.........******************************************,***********.*,/***************
,,......................../..*********......*****************************************,.*.,***********,.*,/*************
,,,,,,,,,,,,,,,,,,,,,,,,.,,***//////****..**/************************************,.***..,.,*******.*.**.,.,(*,,,,,,,,,,
,,,,,,,,,,,,,,,,,,,,,,,(.***///////////.*//////////****************##(************.***.....********....*....,,,,,,,,,,,
**********************%,***//////////////#(////////#/////*********/(%%##**********.,**......*********...,.....%,,,,,,,,
*************************///////////////##////////%#%/////////////(%%&&%%//***********...*...*********.........,.......
/////////////////////***//////////////(##(///////%&&%%#////(%%##%%&&&&&&%%//**********.*.**../*********,........,......
/////////////////////**//////////////(%##///////(&&&&&&&&&&&&&&%/#&&&&&&&%///*********,****,.************.*......,,,,,,
(((((((/////////////**//////////////#####///////%&&&&&&&&(///%//////////#%////////(*********.,**//////****.*.,.*..,....
((((((((////////////**/////////////#####(///////%&&////////////////////(///////((////******.////////////,**.*.*../...
(((((((((((((((((((*(/////////////######////////%%/////////////(//////(/////////(#(//////////*////////////////**,*..,,,
((((((((((//////////(////////////#######////////#/////////////(////////////////(##(//////////////////#/////////(***.,,,
(((((((((((####///*/(#//////////##%####(////////////////////(##/////(,/*///////###(//////////(///////(//////////(***./,
(((((((((((#####/(*/(((////////########////////////////////####/////**//*/////####(/////////(////////(#///////////****,
(((((((((((((((#((*/,     ,///###%#####//////////////////####*#//***,,////(///#####////////(#////////(#////////////****
(((((((//(((((###((.        *(#########//////////////(//####,*(//*/.,,(///*//(#####////////##////////(#(//////(/////**/
((/((((((((#%%%###(           ########(//////////////((###/.,****(* .,**//*//######///////##(////(///###//////(///(/**(
((///(((((%%%%%####            *######(/////(////////(##(....,,**/ * ,,//(*//#%####//////(##/////(///###//////(#////**/
((///(((&(%%##(%%%#.            .(####(////(#///////(###..   ,,(*/   *,**(**(######//////###////((///###//////(#/////**
(#*******////////(%/             .####(////##///////(##  (.  .,/*.   .,,/(,*(#(/###(////###(////*(//(####/(///(##//(/**
###/***///*..,/////(              #####///###///////## /%%%%%#,,/     , .#,,,(/*###(///####///(**///*(##///(//###//(/**
////**/////*/,.////(  ..         .#####//(###(//////#.    .#%%%%%     .  (./.(***###//####(///**///,*(##//*(//###//(/**
/*****///////////(/( ,,,,,,..,,,,.#####//####(//////(         ,%%%%      . ,. * */##/#####///.,*/(.,*(##//*(/(###(///**
///***///////(###%%# .,,,,,,,,,,*(#####/(#####///(//(            .%%%.  .   . / .,#######//../,(/ .,*###(.*//####(///**
///(((*//(#######%##  ,,,,,,,,,,*#############//////(.              /%%.  *   .  ,*#####/(  .,(.   ,*##(..*/(###(/(//*/
/#####((#(########(, .,**    ./*((############///////..(#%%%#%%%%%%##(#%%        .,((#(/. .,,. ./%%%%%# ..*#####/////*/
#######(((((##%#(## *             ,#(#########(///(//...........                 . (((.    (%%%%%/. *#....#####/((///*(
######((#####&((#(                    ((######(//////,...........                      .#%%%.       (  .*#####(/(///**(
##########//#((                          (#####///(,*/..........                           ,#%%%(. ....##%###(//////**(
#######,/(*(.                              ####////.**..........                           .....,#,...(#####(///////*/(
,,,,,,,,&.         .,,,,..                 .(##(//*../,........                    .      ...........,####%#///////**//
,,,,,,%         ,,,,,,,,,,,*,,,,,,,,****,,. ((#(//*.../.......                           .......... .######(///(///**//
,,,,,/       ,,,,,,,*/*.                     (((///.   *                                 ............######///((//**///
,,,,,*      ,**.                             .(((//                                       ..........#######//(#(//**///
,,,,,*                                        (((//               ,                        .........######///##(//*////
******                                        ,((/*.              ,, ,*/**,,.                  ....(######/(###//*/////
******                                        ,(((/*,            ,..,.,.,,*///#(.                .*######/(###(//*(((((
(((((                             ..,*,,..  .*((((//,,           ,...,,,,,,,,//*                .*#######(####(/*((((((
*****               ,,,,,**.                   #(##(/,,,           ..........*                 .(##########%#(/*///////
/////*           .,*,                          .(##/*,**,,                                   .,#############((**(((((((
/////(                                          ####(**,,/,,.                              .##############%%(**////////
******                                          ####(%#***,,*,,                        /#(##############(#((/*/((((((((
******/                                       .#%####%%%%****,,**.               *(&((######(##########(#(#/*//////////
******(/                                  .* #%%#%###(%%%%%(*****(#(..... ,#(/,,.#&(#######/##########(##//**//////////
////////(                           .*.      .%%%%%%##%%%%%%%%**%%%%%%%%%%%#%@%#########%#///#######((#%/(*////////////
/////((((.              .,,,,*/*,           . (%%%%%%#(%%%%%%%%(%%%%%%%%%%%%%%%%%%###%##%#///######((,,(#*/////////////
((((#(((((                ...                .((#%%%%%%#%%%%%%%(%%%%%%%%%%%%%%%%%####%####//######(###/#///////////////`.yellow);
func.log('/********* COPYRIGHT (C) Gr33ntii. WORK UNDER MIT LICENSE!! *********/'.red);
login({
    email: config.account.email,
    password: config.account.password,
}, function callback(err, api) {
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
    func.log('Logged as https://fb.com/' + api.getCurrentUserID(), 0);
    func.log('Start listening!', 0);
    func.log('Enjoy my facebook bot xD \n Author : Gr33ntii \n Facebook : https://www.facebook.com/0x80f700 \n \n Started '.red, 2);
    func.log(`Bot \n LOGGED IN ID : ${config.bot.id} \n Name : Yukari Yakumo \n Ready \n prefix : "${config.prefix}" `.bold.yellow, 0);
    api.setOptions({
        forceLogin: true,
        selfListen: false,
        listenEvents: true,
        logLevel: 'warn'
    });
    var stopListen = api.listen(function (err, event) {
        if (err) return err.error;
        var osuApi = new osu.Api('f542df9a0b7efc666ac0350446f954740a88faa8', {
            notFoundAsError: true,
            completeScores: false
        });


        function setThreadColorRandom(threadID, message) {
            var threadColors = {
                "null": "MessengerBlue",
                "#44bec7": "Viking",
                "#ffc300": "GoldenPoppy",
                "#fa3c4c": "RadicalRed",
                "#d696bb": "Shocking",
                "#6699cc": "PictonBlue",
                "#13cf13": "FreeSpeechGreen",
                "#ff7e29": "Pumpkin",
                "#e68585": "LightCoral",
                "#7646ff": "MediumSlateBlue",
                "#20cef5": "DeepSkyBlue",
                "#67b868": "Fern",
                "#d4a88c": "Cameo",
                "#ff5ca1": "BrilliantRose",
                "#a695c7": "BilobaFlower",
            };

            var threadColor;
            var msg = "";
            var color = message.substring('$color '.length);

            if ((/^null$/).test(color)) {
                threadColor = null;
            } else if ((/^#[a-fA-F0-9]{6}$/).test(color)) {

                threadColor = color;
                if (threadColors[threadColor] == null) {
                    msg += "Màu Chat Không Hợp Lệ!\n";
                    threadColor = randFrom(Object.keys(threadColors));
                }
            } else {
                threadColor = randFrom(Object.keys(threadColors));
            }

            msg += "Đã Đổi màu chat thành " + threadColors[threadColor] + " (" + threadColor + ")" + "...";
            api.sendMessage(msg, event.threadID);
            api.changeThreadColor(threadColor, event.threadID, (err) => {
                if (err) {
                    return console.error(err);
                }
            });
        }

        function ReportAD(data, id, gid) {
            func.log(id + " has been reported to admin!", -1);
            api.sendMessage(data + '\nhttp://fb.com/' + id, admin);
            return api.sendMessage("êu ơi chửi em, em mách admin rồi :(((", gid);
        }

        function osuinfo(username) {
            var main = (osuApi.apiCall('/get_user', {
                u: username
            }).then(user => {
                var username = (user[0].username);
                var playcount = (user[0].playcount);
                var ppraw = (user[0].pp_raw);
                var level = (user[0].level);
                var countryrank = (user[0].pp_country_rank);
                var accuracy = (user[0].accuracy);
                api.sendMessage(`*OSU INFO*\n*username* : ` + username + `\n*level* :` + level + `\n*playcount* :` + playcount + `\n*CountryRank* : ` + countryrank + `\n*Total PP* : ` + ppraw + `\n*Accuracy* :` + accuracy + `\n<3 `, event.threadID);
            }));
            return api.sendMessage(main, event.threadID);
        }

        function dunhavpermisson(id, gid) {
            func.log(id + " someone tried to be come you xd!", -1);
            return api.sendMessage("Bạn không có đủ quyền để thực hiện lệnh này :'(", gid);
        }



        function colorrandom() {
            var lett3r = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) { // Hex
                color += lett3r[Math.floor(Math.random() * 16)];
            }

            return color;
        }

        function getdate() {
            return (new Date()).toLocaleDateString();
        }

        function setimagefromurl(url, threadID, errMsg = "@@ OOPSS tHIS PHOTO is DED") {
            const path = `scr/images/${encodeURIComponent(url)}.png`;
            request(url).pipe(fs.createWriteStream(path)).on('close', (err, data) => {
                if (!err) {
                    api.changeGroupImage(fs.createReadStream(`${__dirname}/${path}`), event.threadID, (err) => {
                        fs.unlink(path);
                        if (err) {
                            sError(errMsg, event.threadID);
                        }
                    });
                } else {
                    console.log("Không tìm thấy ảnh");
                }
            });
        }


        function sError(m, threadID) {
            api.sendMessage(`Lỗi: ${m}`, event.threadID);
        }
        exports.sError = sError;

        function YoutubeSearch(data, id) {
            request(youtube + encodeURI(data), function (err, response, body) {
                if (err) {
                    api.sendMessage("Lỗi cmnr :| Bác check lại link bác gửi thử coi sao?", event.threadID);
                    func.log('502. Bad gateway!', -1);
                    return EXIT_F;
                }
                retrieve = JSON.parse(body);
                var link = retrieve.items[0].id.videoId;
                api.sendMessage(`https://www.youtube.com/watch?v=` + link, id);


                return func.log('Sent youtube search result to ' + id + ' with keyword: ' + data, 0);
            });
        }

        function clean(text) {
            if (typeof (text) === "string") {
                return text.replace(/``/g, "`" + String.fromCharCode(8203) + "`").replace(/@/g, "@" + String.fromCharCode(8203));
            } else if (text !== null && text !== undefined) {
                return text.toString().replace(/``/g, "`" + String.fromCharCode(8203) + "`").replace(/@/g, "@" + String.fromCharCode(8203));
            } else {
                return text;
            }
        }

        function shorturl(domain, result) {
            var short = "https://api.awau.moe/shorten/polr?action=shorten&apikey=6b307832-8801-4a83-aafc-a11030345b63&url=" + domain + "&resultUrl=" + result;
            request(short, function (err, response, body) {
                if (body.toString() === "invalid URL") {
                    api.sendMessage("Có thể bạn chưa dùng đúng lệnh :'(\n-Cách dùng : $shorturl https://google.com+<domain short trong list có thể xem bằng lệnh $shorturl -d>\n-Ví dụ $shorturl https://google.com+google.in-my.life", event.threadID);
                } else
                    return api.sendMessage(body, event.threadID);

            });
        }

        function coinchecker(coin) {
            request('https://api.coinmarketcap.com/v1/ticker/' + coin,
                function (error, res, body) {
                    var obj = JSON.parse(body);
                    if (obj[0] === undefined) {
                        console.log("@@ lỗi");
                        api.sendMessage('Chưa có loại coin này :3', event.threadID);
                    } else {
                        result = '*' + coin + '*' + "\nGiá hiện tại " + '*_' + obj[0].price_usd + "$_*" + "\nxếp hạng  " + '*_' + obj[0].rank + '_*';
                        api.sendMessage(result, event.threadID);
                    }
                });
        }

        function threadsuppport(threadID) {
            func.log(event.threadID + "Lệnh không thể dùng trong Boxchat này");
            return api.sendMessage(":'( Lệnh này đang trong giai đoạn thử nghiệm \nvui lòng vào chatbox (Bot Developers) để sử dụng\n link : https://m.me/join/AbaM4uorkHklxs2p <3", event.threadID);
        }
        switch (event.type) {
            case "message":
                var name;
                api.getUserInfo(event.senderID, (err, ret) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    name = '@' + ret[event.senderID].name;
                    func.log(event.threadID + ': ' + event.body);
                    if (event.body.indexOf("$pause") == 0) {
                        if (event.senderID == config.owner.id) {
                            func.log("Suspend at " + event.threadID + " by admin", -1);
                            Suspend[event.threadID] = true;
                            return api.sendMessage("Đã tạm ngưng hoạt động.", event.threadID);
                        }
                        return;
                    }
                    if (Suspend.hasOwnProperty(event.threadID)) {
                        if (event.senderID == config.owner.id) {
                            if (event.body.indexOf("$continue") == 0) {
                                func.log("Started at " + event.threadID + " by admin", 0);
                                delete Suspend[event.threadID];
                                return api.sendMessage("Đã hoạt động trở lại!", event.threadID);
                            }
                        }
                        return;
                    }

                    if (event.body === '$start') {
                        api.sendMessage("Connected \n Hi I'm Yukari", event.senderID);
                        api.sendMessage("Kiểm tra inbox của bạn nhé :3 ", event.threadID);
                        return;
                    }

                    if (event.body.indexOf('$kickbot') == 0) {
                        api.removeUserFromGroup("100004118504339", event.threadID);
                        return;
                    }
                    if (event.body === '$g9') {
                        api.sendMessage("Chúc bạn ngủ ngon mơ đẹp ạ <3", event.threadID);
                        return;
                    }
                    if (event.body === '$Yukari') {
                        api.sendMessage("It's me xd :niconico: \n Yukari here", event.threadID);
                        return;
                    }
                    if (event.body.indexOf(`$echo`) == 0) {
                        var str = (event.body.substring(5, event.body.length)).trim();
                        func.log('Echo This Message [' + str + ']', 0);
                        api.sendMessage(str, event.threadID);
                        return;
                    }
                    if (event.body.indexOf('$adduser') == 0) {
                        var ID = (event.body.substring(8, event.body.length)).trim();
                        func.log('Đã Thêm [USER] có ID là [' + ID + '] Vào chatbox ');
                        api.addUserToGroup(ID, event.threadID);
                        if (err)
                            func.log(err);
                        return EXIT_F;
                    }
                    if (event.body.indexOf('$talk') == 0) {
                        var talk = (event.body.substring(4, event.body.length)).trim();
                        request(simsimi + uriencode(talk), function (err, response, body) {
                            api.sendMessage(body, event.threadID);
                            return EXIT_S;
                        });
                        return EXIT_S;
                    }


                    if (event.body.indexOf('$kick') == 0) {
                        for (var i = 0; i < Object.keys(event.mentions).length; i++) {
                            api.removeUserFromGroup(Object.keys(event.mentions)[i], event.threadID);
                            return;
                        }
                        return;
                    }
                    if (event.body.indexOf('tấn như mồm') == 0) {
                        api.sendMessage('Tuốn Im mồm', event.threadID);
                        return;
                    }
                    if (event.body.indexOf('$tát') == 0 || event.body.indexOf('$vả') == 0) {
                        for (var i = 0; i < Object.keys(event.mentions).length; i++) {
                            var x = (event.body.substring(5, event.body.length)).trim();
                            api.sendMessage({
                                body: x + ' Vừa Bị Vả Vỡ Mồm \n',
                                mentions: [{
                                    tag: x,
                                    id: Object.keys(event.mentions)[i],
                                }],
                            }, event.threadID);
                        }
                        return;
                    }
                    if (event.body.indexOf('$getid') == 0) {
                        var name = (event.body.substring(6, event.body.length)).trim();
                        var ID;
                        api.getUserID(name, function (err, body) {
                            if (err) {
                                func.log('Không thể lấy ID với Username: ' + name, 1);
                                return EXIT_F;
                            }
                            ID = body[0].userID;
                            func.log('From [' + name + '] -> [' + ID + ']');
                            api.sendMessage(name + ` có id là : ` + ID, event.threadID);

                            return ID;
                        });
                    }

                    if (event.body === '$roll') {
                        var roll = Math.round(Math.random() * 100);
                        api.sendMessage('UwU Your Number is ' + roll + ' ', event.threadID);
                        return;
                    }
                    if (event.body === '$waifu') {
                        var route = Math.round(Math.random() * 10);
                        if (route == 1) {
                            api.sendMessage("Dạ em sẽ làm vợ anh <3", event.threadID);
                            api.sendMessage("Yêu chàng nhiều <3", event.threadID);
                            return;
                        } else if (route == 2) {
                            api.sendMessage("Làm Bạn thôi nhé :'(", event.threadID);
                            return;
                        } else if (route == 3) {
                            api.sendMessage("Dạ em sẽ làm vợ anh <3", event.threadID);
                            api.sendMessage("Yêu chàng nhiều <3", event.threadID);
                            return;
                        } else if (route > 4) {
                            api.sendMessage("-.-", event.threadID);
                            api.sendMessage("Chúng ta chỉ là bạn thôi :'(", event.threadID);
                            return;
                        }
                    }

                    if (event.body === '$w') {
                        api.sendMessage("UwU xd", event.threadID);
                        return;
                    }
                    if (event.body === '$ping') {
                        api.sendMessage("PONGGG! 🏓", event.threadID);
                        return;
                    }

                    //#### Bad words filter
                    if (event.body.indexOf("$đcm") > -1 || event.body.indexOf("$Bot") > -1 ||
                        event.body.indexOf("$bot") > -1 || event.body.indexOf("$điếm") > -1 ||
                        event.body.indexOf("Yukari") > -1 || event.body.indexOf("Yukari") > -1) {
                        if (event.body.indexOf("ngu") != -1 || event.body.indexOf("cặc") != -1 ||
                            event.body.indexOf("óc") != -1 || event.body.indexOf("chó") != -1 ||
                            event.body.indexOf("đm") != -1 || event.body.indexOf("mẹ") != -1 ||
                            event.body.indexOf("địt") != -1 || event.body.indexOf("sủa") != -1 ||
                            event.body.indexOf("súc vật") != -1 || event.body.indexOf("như lồn") != -1 ||
                            event.body.indexOf("đĩ") != -1 || event.body.indexOf("cave") != -1 ||
                            event.body.indexOf("lồn") != -1 || event.body.indexOf("địt mẹ") != -1) {
                            return ReportAD("Êu ơi vừa này có thằng chửi em kìa anh ơi :'(", event.threadID);
                        }
                        return;
                    }

                    //Bad words filter ####
                    if (event.body === '$help') {
                        api.sendMessage({
                            body: 'Chào ' + name + ' các lệnh hiện có thể sử dụng đây http://botyukari.xyz/com.html',
                            mentions: [{
                                tag: name,
                                id: event.senderID,
                            }],
                        }, event.threadID);
                        return;
                    }


                    if (event.body === '$admin') {
                        api.sendMessage("Gr33ntii Shit", event.threadID);
                        return;
                    }

                    //#### ENCODE/DECODE (base64)
                    if (event.body.indexOf("$base64 -e") == 0) {
                        var str = (event.body.substring(10, event.body.length)).trim();
                        var res = funchash.base64_encode(str);
                        func.log('Base64_Encode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$base64 -d") == 0) {
                        var str = (event.body.substring(10, event.body.length)).trim();
                        var res = funchash.base64_decode(str);
                        func.log('Base64_Decode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }
                    //ENCODE/DECODE (base64) #### 

                    //######ENCODE/DECODE (base32) #### 
                    if (event.body.indexOf("$base32 -e") == 0) {
                        var str = (event.body.substring(10, event.body.length)).trim();
                        var res = base32.encode(str);
                        func.log('Base32_Encode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$base32 -d") == 0) {
                        var str = (event.body.substring(10, event.body.length)).trim();
                        var res = base32.decode(str);
                        func.log('Base32_Decode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }
                    //ENCODE/DECODE (base32)###



                    //HASH######
                    if (event.body === "$hash") {
                        api.sendMessage(`Bạn vui lòng dùng lệnh $hash -h để biết thêm chi tiết nhé haha`);
                        return;
                    }
                    if (event.body === "$hash -h") {
                        func.log('Hash_Help', 0);
                        api.sendMessage(`*HASH Gr33nTII* \n hiện có thể sử dụng được \n $hash -sha512 \n $hash -sha384 \n $hash -sha512_256 \n $hash -sha512_224 \n  $hash -md5 \n <3`, event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$hash -sha512") == 0) {
                        var str = (event.body.substring(13, event.body.length)).trim();
                        var res = funchash.sha512(str);
                        func.log('Hash_SHA512 [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;

                    }
                    if (event.body.indexOf("$hash -md5") == 0) {
                        var str = (event.body.substring(10, event.body.length)).trim();
                        var res = funchash.md5(str);
                        func.log('Hash_MD5 [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$hash -sha384") == 0) {
                        var str = (event.body.substring(13, event.body.length)).trim();
                        var res = funchash.sha384(str);
                        func.log('Hash_SHA384 [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }

                    ///HASH-END####


                    //#### ENCODE/DECODE HTML//

                    if (event.body.indexOf("$html -e") == 0) {
                        var str = (event.body.substring(8, event.body.length)).trim();
                        var res = funchash.htmlEncode(str);
                        func.log('HTML_ENCODE [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.senderID);
                        api.sendMessage('đoạn mã hóa html đã được gửi vào trong inbox của bạn rồi nhé <3 <3', event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$html -d") == 0) {
                        var str = (event.body.substring(8, event.body.length)).trim();
                        var res = funchash.htmlDecode(str);
                        func.log('HTML_DECODE [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.senderID);
                        api.sendMessage('đoạn giải mã hóa html đã được gửi vào trong inbox của bạn rồi nhé <3 <3', event.threadID);
                        return;
                    }

                    ///########################




                    //### ENCODE/DECODE (hex)
                    if (event.body.indexOf("$hex -e") == 0) {
                        var str = (event.body.substring(7, event.body.length)).trim();
                        var res = funchash.hex_encode(str);
                        func.log('hex_encode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }

                    if (event.body.indexOf('$color') == 0) {
                        setThreadColorRandom(event.threadID, event.body);
                        return;

                    }

                    if (event.body.indexOf("$hex -d") == 0) {
                        var str = (event.body.substring(7, event.body.length)).trim();
                        var res = funchash.hex_decode(str);
                        func.log('hex_decode [' + str + '] -> [' + res + ']', 0);
                        api.sendMessage(res, event.threadID);
                        return;
                    }
                    if (event.body.indexOf("$math") == 0) {
                        var m = event.body.split(" ");
                        var o = m[1];
                        var l = "http://lmgtfy.com/?q=" + o.replace(/ /g, "+");
                        var cont = (event.body.substring(6, event.body.length)).trim();
                        request(wolfram + uriencode(cont), function (err, response, body) {
                            if (body.toString() === "Wolfram|Alpha did not understand your input") {
                                api.sendMessage(l, event.threadID);
                            } else if (body.toString() === "Wolfram|Alpha did not understand your input") {
                                api.sendMessage("I Don't understand your question :3 ", event.threadID);
                            } else if (body.toString() === "My name is Wolfram Alpha.") {
                                api.sendMessage('My name is Yukari Yakumo.', event.threadID);
                            } else if (body.toString() === "I was created by Stephen Wolfram and his team.") {
                                api.sendMessage("I Was Created by Gr33ntii, I love him too <3", event.threadID);
                            } else if (body.toString() === "I am not programmed to respond to this dialect of English.") {
                                api.sendMessage("Tôi không được lập trình để nói những thứ vô học như này\n:)", event.threadID);
                            } else if (body.toString() === 'StringJoin(CalculateParse`Content`Calculate`InternetData(Automatic, Name))') {
                                api.sendMessage("I Don't know how to answer this question", event.threadID);
                            } else
                                api.sendMessage(body, event.threadID);
                            return;
                        });
                        return EXIT_S;
                    }

                    //####  Youtube search
                    if (event.body.indexOf("$youtube") == 0) {
                        var cont = (event.body.substring(8, event.body.length)).trim();
                        YoutubeSearch(cont, event.threadID);
                    }
                    //////////////

                    if (event.body.indexOf('$shorturl -d') == 0) {
                        api.sendMessage(`https://hastebin.com/kopobuyaro.makefile`, event.threadID);
                        return EXIT_S;
                    }
                    if (event.body.indexOf("$shorturl") == 0) {
                        var string = (event.body.substring(9, event.body.length)).trim();
                        var yo1 = string.search(/(?:\+)/g);

                        var result = (string.substring(yo1, string.length)).trim();
                        var domain = (string.substring(0, string.length - result.length)).trim();
                        func.log("SHORTED DOMAIN [" + domain + "] to [" + result + "]", -1);
                        shorturl(domain, result);
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -c') == 0) {
                        var code = (event.body.substring(12, event.body.length)).trim();
                        var csubmisson = {
                            language: 11,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                        });
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -php') == 0) {
                        var code = (event.body.substring(14, event.body.length)).trim();
                        var csubmisson = {
                            language: 29,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                        });
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -go') == 0) {
                        var code = (event.body.substring(14, event.body.length)).trim();
                        var csubmisson = {
                            language: 114,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                        });
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -py2') == 0) {
                        var code = (event.body.substring(14, event.body.length)).trim();
                        var csubmisson = {
                            language: 4,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                            return EXIT_S;
                        });
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -c++') == 0) {
                        var code = (event.body.substring(14, event.body.length)).trim();
                        var csubmisson = {
                            language: 1,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                        });
                        return EXIT_S;
                    }

                    if (event.body.indexOf('$compiler -node') == 0) {
                        var code = (event.body.substring(15, event.body.length)).trim();
                        var csubmisson = {
                            language: 56,
                            sourceCode: code
                        };
                        request({
                            url: 'http://5f3a947e.compilers.sphere-engine.com/api/v3/submissions?access_token=e2f33cc239c13c3fe4d93cea78bec096',
                            method: 'POST',
                            form: csubmisson
                        }, function (error, response, body) {

                            if (error) {
                                console.log('Connection problem');
                            }
                            if (response) {
                                if (response.statusCode === 201) {
                                    console.log(JSON.parse(response.body)); // submission data in JSON
                                } else {
                                    if (response.statusCode === 401) {
                                        console.log('Invalid access token');
                                    }
                                }
                            }
                            retrieve = JSON.parse(response.body);
                            var id = retrieve.id;
                            api.sendMessage('Id là : ' + id + '', event.threadID);
                            api.sendMessage('Vui Lòng dùng $compiler -get <id> để lấy output', event.threadID);
                        });
                        return EXIT_S;
                    }

                    //COMPILER ###

                    if (event.body.indexOf('$compiler -get') == 0) {
                        var id = (event.body.substring(14, event.body.length)).trim();
                        request(compiler1 + id + compiler2, function (err, response, body) {
                            api.sendMessage(body, event.threadID);
                            return EXIT_S;
                        });
                        return EXIT_S;


                    }

                    //

                    //Thời Tiết API FROM BÉ ĐIỆU - THANKS BÉ XD

                    if (event.body.indexOf("$thoitiet") == 0) {
                        var str = (event.body.substring(9, event.body.length)).trim();

                        request(thoitietapi + uriencode(str), function (err, response, body) {
                            if (err) {
                                api.sendMessage("Không thể lấy dữ liệu thời tiết :'(( Sorry buddy", event.threadID);
                                func.log('Unable to get weather data from server', 1);
                                return EXIT_F;
                            }
                            retrieve = JSON.parse(body);
                            var t = retrieve.messages[0].text + '\n' + retrieve.messages[1].text + '\n' + retrieve.messages[2].text + '\n' + retrieve.messages[3].text + '\n' + retrieve.messages[4].text + '\n' + retrieve.messages[5].text + '\n' + retrieve.messages[6].text;
                            api.sendMessage(t, event.senderID);
                            api.sendMessage('Đã Gửi Vào Ib bạn rồi nhé <3', event.threadID);
                            return EXIT_S;
                        });
                    }

                    if (event.body.indexOf("$start") == 0) {
                        var delay = 2000;
                        api.sendMessage('Connecting', event.threadID);
                        setTimeout(() => {
                            api.sendMessage('Connected', delay);
                        }, delay);
                        api.sendMessage('Bạn đã kết nối với bot \n send $help để biết thêm thông tin nè', event.threadID);
                        return EXIT_S;
                    }

                    if (event.body.indexOf("$dich") == 0) {
                        var str = (event.body.substring(5, event.body.length)).trim();

                        request(trans + uriencode(str), function (err, response, body) {
                            if (err) {
                                api.sendMessage("Không thể dịch được :'(", event.threadID);
                                return EXIT_F;
                            }
                            retrieve = JSON.parse(body);
                            var t = retrieve.data.translations[0].translatedText;
                            api.sendMessage(t, event.threadID);
                            return EXIT_S;
                        });
                    }
                    if (event.body.indexOf('$wiki') == 0) {
                        var query = (event.body.substring(5, event.body.length)).trim();
                        request(wikicustomsearch + uriencode(query), function (err, res, body) {
                            if (err) {
                                api.sendMessage("Không Tìm được huhu :'( ", event.threadID);
                                return EXIT_F;
                            }
                            results = JSON.parse(body);
                            var snippet = results.items[0].snippet;
                            api.sendMessage('``` \n ' + snippet + ' ```', event.senderID);
                            api.sendMessage('Đã gửi thông tin vào inbox của bạn', event.threadID);
                        });
                        return;
                    }

                    if (event.body.indexOf('$coin') == 0) {
                        coinname = (event.body.substring(6, event.body.length)).trim();
                        coinchecker(coinname);
                        return;
                    }


                    //### JAV Code (random)

                    if (event.body.indexOf("$jav") != -1 || event.body.indexOf("$Jav") != -1) {
                        var ran = Math.floor((Math.random() * javcode.length));
                        api.sendMessage(javcode[ran], event.threadID);
                        return;
                    }

                    if (event.body.indexOf("$osuinfo -u") == 0) {
                        var username = (event.body.substring(11, event.body.length)).trim();

                        osuinfo(username);

                    }
                    if (event.body == 'YES' && justleave.indexOf(event.senderID) > -1) {
                        justleave.splice(justleave.indexOf(event.senderID), 1);
                        api.removeUserFromGroup(event.senderID, event.threadID);
                        api.sendMessage({
                            body: name + ' Đã Rời Nhóm',
                            mentions: [{
                                tag: name,
                                id: event.senderID
                            }]
                        }, event.threadID);
                        return;
                    }


                    if (justleave.indexOf(event.senderID) > -1) {
                        justleave.splice(justleave.indexOf(event.senderID), 1);
                        api.sendMessage({
                            body: name + ' Yukari Đã Hủy Request Rời Nhóm Của Bạn ',
                            mentions: [{
                                tag: name,
                                id: event.senderID
                            }]
                        }, event.threadID);
                        return;
                    }


                    if (event.body == '$leave') {
                        if (justleave.indexOf(event.senderID) == -1) {
                            justleave.push(event.senderID);
                        }
                        api.sendMessage({
                            body: name + ' gõ "YES" viết hoa để xác nhận muốn rời nhóm và gõ bất kỳ để hủy.',
                            mentions: [{
                                tag: name,
                                id: event.senderID
                            }]
                        }, event.threadID);
                        return;
                    }

                    if (event.body.indexOf('$giphy') == 0) {
                        if (event.threadID == config.threadadmin.threadid) {
                            var query = (event.body.substring(6, event.body.length));
                            giphy.search(query).then(function (res) {
                                var gif = res.data[Math.floor(Math.random() * res.data.length)].images.downsized.url;
                                var resx = shorturl(gif, 'i.am-a.ninja');
                                api.sendMessage(resx, event.threadID);
                            });
                        } else {
                            threadsuppport(threadID);
                        }
                    }


                    if (event.body == '$lenny') {
                        var res = cool();
                        api.sendMessage(res, event.threadID);
                        return;
                    }
                    if (event.body.indexOf('$changeimage') == 0) {
                        var url = (event.body.substring(13, event.body.length)).trim();
                        if (url) {
                            setimagefromurl(url, event.threadID, "OOPSSS Something wrong");
                        } else if (attachments && attachments[0]) {
                            if (attachments[0].type == "photo") {
                                setimagefromurl(attachments[0].largePreviewUrl, event.threadID, "OOPPSS something wrong");
                            } else {
                                sError("Chỉ Áp dụng cho file ảnh thôi ạ", event.threadID);
                            }
                        } else {
                            sError("Lệnh này yêu cầu URL hình ảnh", event.threadID);
                        }
                    }
                    //////////////POINT-SYSTEM ":XXXXX:"///////////////////
                    if (!database[event.senderID]) database[event.senderID] = {
                        points: 0,
                        money: 0,
                        level: 0
                    };
                    let u = database[event.senderID];
                    let curLevel = Math.floor(0.12 * Math.sqrt(u.points));
                    if (event.isGroup) {
                        u.points = u.points + 15.5;
                    }
                    if (curLevel > u.level) {
                        u.level = curLevel;
                        api.sendMessage({
                            body: name + ` đã tăng level lên *${curLevel}*!`,
                            attachment: fs.createReadStream(__dirname + `/scr/images/levelup.png`),
                            mentions: [{
                                tag: name,
                                id: event.senderID,
                            }],
                        }, event.senderID);
                        return;
                    }


                    if (event.body === "$level") {
                        if (event.senderID === config.owner.id) {
                            api.sendMessage({
                                body: name + `\n- *LEVEL* : ${u.level}\n\n- *ĐIỂM* : ${u.points}\n\n- *ROLES* : *${u.roles}*`,
                                mentions: [{
                                    tag: name,
                                    id: event.senderID,
                                }],
                            }, event.threadID);
                        } else {
                            api.sendMessage({
                                body: name + `\n- *LEVEL* : ${u.level}\n- *ĐIỂM* : ${u.points}\n`,
                                mentions: [{
                                    tag: name,
                                    id: event.senderID,
                                }],
                            }, event.threadID);
                        }
                    }


                    /**
                     * Facebook Bot User From 0x80f700 - Gr33ntii
                     * Happy With more than 1000 line of code :")   
                     * Thanks 4 Using me
                     */


                    //  Honestly If you spam this shit u are so stupid it's gonna crash your app or device
                    // if (event.body == '$dos') {
                    // 	api.sendMessage({body: "uded oke :))))", mentions: [{ tag: '0x80f700', id: event.senderID}]}, event.threadID);
                    // 	return;
                    // }


                    fs.writeFile("./pp/main.json", JSON.stringify(database), (err) => {
                        if (err) console.error(err);
                    });

                    /**
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                         MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh--//:..`./NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm/-///:.``:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNs:////-..-mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmms/////../mMMMNyyMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdsyhNMMh//+ddo/+//:-oNMmo+sNMMMMMMMNNNNMMNNMMMMMMMMMMMM
                        MMmsoooooosyhdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMm-.-::os:::::+:/:+++/:dd+++yMMNNNNNNNNNNMMMNNmmmNMMMMMMM
                        MMMNdo:.`````...-:/+sydNMMMMMMMMMdMMMMMNmmNN+``/ssoosyhhhhyyo+o/++yo++FomNNMMNMMMMMMNmNNNNMMMmmNMMMMM
                        MMMMMMMmyo:.``.....-----:+smNMMMN-+hNMM+`.`-.`odmmmmmNNmmmmmmmdyo/sosymNNNNNmmmNNNMMNMMNNNMMMMmNMMMM
                        MMMMMMMMMMMmo-....-://///////ohmN//+odm.   -+hmhhyddmmmmmddddddmmmmmmmNMMMMMMNNNmmmNNMMMMMNNMNNMMMMM
                        MMMMMMMMMMMMMmy+-...-://++++++++oo++++o` -sdmddysyhddmNNmmmddhhdmmNNNNNMMMMMMMMMMMNNNNNNMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMNdy+:...-://+++++++o-. `odddddmhddmmmNNNNNNNNmmmmNNNNmmNMMMMMMMMMMMNNNNNNNMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMNNmhso+//+++++++/ `sdhyhdmmmmmmmNMNhhNNNNNNmmmNNMNNNNNNMMMMMMMMMMNNMNNNNMMMMMNMM
                        MMMMMMMMMMMMMMMMMMMMMMNNNNNNNmmNNNmd/`+hdyydmNmmNmmmNMNy+ohdmhdNmmNMMMmNMMNNNNNNMMMMMMNNNMNNNMMMMNNM
                        MMMMMMMMMMMMMMMMMMMMNdNNNNNNNNNNNNNmsohdmddNNdsmmmmmNmNs:-.::++ommNMMMmmmNNNNMMNmmNMMMMNNNMNNNNMMMmM
                        MMMMMMMMMMMMMMMMMMNmNNNmNMMNNNNNMNNNNmdNmmmNNo/dhmNNNhd/..:syso+:dNMMNNMMMMNNNmmmhhmNMMNNNMMNNNMMMmM
                        MMMMMMMMMMMMMMMMMNmMMMNmMNMNNNMMMNNmmmmNmmmNdo::oomNNs+..ohdh:yyh+mNMMNMMMMMMMMMMMNsmNMMNNNMNNNMMNMM
                        MMMMMMMMMMMMMMMMNmmMMNmmMMNNNNMMNNmdmmNMNmNMs-.:+/oym+.``./Nyhds+/hNMmNMMMMMMMNNMMMdhNNMMNMMNNNMNMMM
                        MMMMMMMMMMMMMMMMNmMMMmmdNNNMNMNNNMMMNmNMNNNN/:hddos-/-`````ho+ss.`sNy+sNMMMMMdmMMMMMoMNMMMNNNNNNNMMM
                        MMMMMMMMMMMMMMMMNmNMMdddhNMNNMMNMMMMMNNNNNNm/dhNdsh:```````.:---..hNy+omMMdmMhNMMMMNsMNNNmNNNMMNMMMM
                        MMMMMMMMMMMMMMMMMNmMMNdhddNMMMMNNMMMMMNNNNNNododyoso`````````.....+Ns+yMMMddMNmNNMmhmmmdmNNMMMNMMMMM
                        MMMMMMMMMMMMMMMMMMNNNNmhdmmNNNMNNNMMMMNmNNMMm:--o:-.``````````````-NsdNMMMMNmmmNNNmmmmmNMMMMNNMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMmmmNNNNNNNNNMNNmNNMMhs-`....````+so.`````.yNNMMMMMMMMMMMNmNNmNNMMMNNMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNmNMMNmNNMNdo/:.```````+so/````:hNNMMMMMMMMMMMMNmMNmNMMNNMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMNmNNNNNMMMNNNNNNNNNNMMNmNMMNhhhy/.``````--.``./mMdMMMMMMMMMMMMMNmNmNMNNMNMMMMMMMMMM
                        MMMMMMMMMMMMNNNNNmMMMNNNMMMNNNNMNNNMNMMMNNMMNmMMNmhso+/:--.-:///dNmMMMMMMMMMMMMMMNNNmNNMMmNMMMMMNMMM
                        MMMMMMMMMMMMNMMNNmMMMMNMMMMNNNNNNNNNNMMMNdmNNmNMMMNNNh+o++/+////+s+mMmhyhmMMMMMMMMNNNNmMMMNNMMMNMMMM
                        MMMMMMMMMMMmNMMNNmNMMMMMMMMNNNNmNNMhNMMyoy+dNNmmdds+:o--.///+/://smm+..``.:yNMMMMMMMMMmNNNMNMMMMMMMM
                        MMMMMMMMMMMNmNMNNmddNNNMNMmNNNNmNNNdmMh-./-/yh+:/-`/--.+sossssyyhhs:.-.`````/NMMMMMMMMMNNNMMMMMMMMMM
                        MMMMMMMMMMMMMNNNNNmdhhhdhysshmmmNNNhNMy+--..+-/::/-:/::+hhdmdmdddso/:-..:````/:oMMMMMMMMMNNMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMNNms:.`--.:hNNmdmNNm/-...-.`.+/.::+syhdhysdddhoo++-:/..-:::-sMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMm/.--..:+:+dmNMNmmd+:..-.``::.`.-+yyyso++sddy+//++//:////---yMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMh+/--..-..++ohMMNdmmmdo```-`::...```---...--+yy/.`.``.-::----:dMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMN+``:....-//oohNMMmmmmNy+:---:/.```````````````.``````   ``.---/NMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMm` `//:-/++/omMMMMNNNNNmh+.-:+/-..`````````````````````--..-://mMNNMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMN:  `-:::/::sMMMMMMMNMMMN+--:--...`...-....```````````./+::::/oNMNNNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMN/```.--:/yMMMMMMMNNNNNNys/:``       `.-::::-...```..-+/:---:yMMMMNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMho--::+mMMMMMmmNNNNNNNNy+.            `-::..``````--o:/````:mMMMNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMN/:::/sNMMMMMMNNysdNNNNo`             `-` `       `/+/`````+NNNNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMo.....oNMMMMMNs//ymdNNh:``.  `     ````          .ohs``````sMNNNMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMN/.```.+mMMMNo::///+mNNmhso:-/----/oyo.`        `smMy``````.sNNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMd-`````:dMN+..-://hMNmNNNNNNmmmmmmmmmds/-..:``.+mMMh```````.yNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMy.`````.o/````./hMMNmmNNNNNNNNdmNNNmmNNmdhyssyNMNMN.```````-mMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMy.``````..```-hMMMmmmmmmNNNNNdhhydmmNNMMMMMNMMMMMM+```````-NMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMh-``````-``-hMMMmdmmmmmmmmmddssydNNNNNMMNNNMMMMMMm:``````/NMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMm+.```...:dMMMMhshmmmmmNNmdmmmhhNNNNNMMNMMMMMMMMMmo.`...oNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMh/...-/dMMMNmyysydmmmNNhssymhmNNNNMMNMMMMMMMMMMMMd+-.-sMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNh+:+mMMMmhhdhyyyhmmNdmhyhmNNNNNNmNMMMMMMMMMMMMMMMhosNMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMNNMMNNNNMMMNNNMNdosyhhmmhhyhdmdmmmhdmmdhhyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMNy-/o//://oyy/yy+-`.+syyyyyyyyyhhNddhhyyhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMNh+/`-:-----/``.--``  /syyyyhhdddmhmdhhyyyyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMm+:-`.///:::-... `---..:sddddddhhhdmdNmmmmdhyyysssyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMNo---:////::::`.  ./+osyhdhyyyhhddds:/smdddmNmdhyyyymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMd+-..-+///:::::-` :ssyyhdmhyhhdddy+-` -/yddddddmmmmdmNMMMMMMMNNNMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMm.````+//////o+`.  .yhdmmmmddddho-`    .:/ohddddddmNhyyyhddmdysoshdyymMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMh````-+/:/+ymNm+.`  ydddddddhs+-.``````.:::/hdddddmmdhss+/+so/+oso+++omMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMmo::://+sdmNNNy/:-  +ydddyo/::------..----::/oddddhyyo/o+/ooo/++o/:oooodNNMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMy:-..ydNNNNNNNNs```.yyo:`   ````````````---`./hddys:-/++++++++++o+++o:-+oshMMMMMMMMMMMMMM
                        MMMMMMMMMMm.````smmmmmmNNmhoo+..`                  `--:so+o++/-/++oo++++++++++++++++odMMMMMMMMMMMMMM
                        MMMMMMMMMMm:````:hmmmmmmmmmmN+``.-`                //:+Nh+:oooooooooooo++++++++++oo+/yMMMMMMMMMMMMMM
                        MMMMMMMMMMMy...-:/ymmmmmmmmmmdhdmm.`.:.``.````+/-..dMNmo--ooooyoo++++++++++++++++++oymMMMMMMMMMMMMMM
                        MMMMMMMMMMMMNh/:...+dmmmmmmmmmmmNNhhdNy.-hds++NNNNNNmo:--/+///s++ooooo++++++++++++smMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMh.`   `-sdmmmmmmmmmmmNNNNNNNNNNMMNNNNmo.:oo+/:::/oo++++++++++++++ooosmMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMNo`     `-+ydmmmmmmmNNNNNNNNMNNNmmh+:.`.ss//::::/+so+++++++++++++dMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMh-```....:/:/shmmmNNNNNNNNNmdy/`.:+o++os//:::://o++o++++++ososhMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMdy++--:::.   ``-///+ooo/++/.``.////oyos/::::::/o++oyhsosymMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMNNmo-`     ``.`.`..-.``.:://///+yoy:-.....-syhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMNy/:-. `..-::.   -+/:hmmd/////s+o-..````.yMMMMMMMMMMMMMMNmMMMMMNNMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMh////:///soy--.-/yNMMMMd//:--+:/-.`````.sMMMMMMMMMMMMMNhhhhhhyyhNMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMmo//:////sos/////omMMMMdo:...::::``````.yMMMMMMMMMNdhyhhhhhyhhhmMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMo::::///sos//////dMMMMNs...`./-/``````.yMMMMMMNysssysydhhhhydmNMMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMh....::/oos+//://dMMMMMh..```+-/.`````.sMMMMMMMmysyhyyhhyyhNMNNNMMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMN:````.-:o+/:--.:dMMMMMN:.```::::```..-sMMMMMMMMNdyhdhhhdo.hMMMNNMMMMMMMMMMM
                        MMMMMMMMMMMMMMMMMMMMMMMMMy.`````.+::.`...hMMMMMMs.```-+:+::///+dMMMMMMMMmyo/+sdddh::odMMNMMMMMMMMMMM
                                     */
                });

                break;
            case 'event':
                func.log(event);
                break;
            default:
                break;
        }
        return;
    });
});

/** 
`
NEKO NEKO NEKO
NEKO NEKO NEKO
NEKO NEKO NEKO
NEKO NEKO NEKO
NEKO NEKO NEKO
    ＿＿＿＿＿
　 ／＼＿＿＿＿＼
　|￣＼∩・ω・)＼
　|　 ｜￣￣∪￣｜ ﾁﾗｯ`

*/