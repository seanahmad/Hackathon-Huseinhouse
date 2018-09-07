var dadah_relationship = JSON.parse('[[1.0, 0.9423331741604152, 0.900681468525479, 0.5431948047387217, 0.8884965326629932, 0.7784049704606694, -0.28921348006837844, -0.7561805054452745, -0.11899511128437666, -0.4423790123064668, 0.7461810745977384, -0.6627943673097213, 0.9581457347538372, 0.9773825379164666, -0.09779010355840229, -0.32539511230879276, -0.2126515444982069], [0.9423331741604152, 1.0, 0.9111743443861005, 0.6980849036064887, 0.9689019226634483, 0.8471757927262391, -0.18683241049341226, -0.679313699531397, 0.12337864104390325, -0.2162651845204737, 0.9176562104523905, -0.461338136020598, 0.870026116829691, 0.9761874065935222, 0.1068603258343525, -0.05975939761210008, -0.015029785308954451], [0.900681468525479, 0.9111743443861005, 1.0, 0.49496888303444786, 0.8384380353908331, 0.9419529932332313, -0.38132385865579765, -0.7606689985612751, -0.08241002207851622, -0.3716993154498716, 0.7305289597193635, -0.571158941067618, 0.8966363465767996, 0.9305795952060651, -0.03956195825828394, -0.12339012887801039, -0.2128391898952996], [0.5431948047387217, 0.6980849036064887, 0.49496888303444786, 1.0, 0.6046494240726297, 0.6376060639820232, 0.4222417643393709, -0.14264536892468885, 0.7361685232142865, 0.5041489566973204, 0.7487806973339015, 0.21831818930694455, 0.3059465526692785, 0.6492703216052775, 0.7686704589377342, 0.5375324823399956, 0.6914911531294143], [0.8884965326629932, 0.9689019226634483, 0.8384380353908331, 0.6046494240726297, 1.0, 0.7257938447956385, -0.27736012350180794, -0.7024972011749561, 0.05465313000002392, -0.2745813293122648, 0.9480377252839592, -0.4978710321434998, 0.8519682445897326, 0.9074671410949284, 0.00013241903969123098, -0.11065016934025042, -0.10260607561109218], [0.7784049704606694, 0.8471757927262391, 0.9419529932332313, 0.6376060639820232, 0.7257938447956385, 1.0, -0.1209069025253693, -0.5370366995707486, 0.19888684916809193, -0.07409389820332622, 0.7057348697644724, -0.2779116777935362, 0.7092511970366813, 0.8686124194557174, 0.24125160626652314, 0.1484488156276383, 0.07124095797147241], [-0.28921348006837844, -0.18683241049341226, -0.38132385865579765, 0.4222417643393709, -0.27736012350180794, -0.1209069025253693, 1.0, 0.8132695926608564, 0.8198707601580825, 0.8007228248344809, -0.03902044477830971, 0.8192429718902349, -0.5316292436301885, -0.16343197324777423, 0.6915294744121729, 0.4723066555764585, 0.8345093783148921], [-0.7561805054452745, -0.679313699531397, -0.7606689985612751, -0.14264536892468885, -0.7024972011749561, -0.5370366995707486, 0.8132695926608564, 1.0, 0.5206276520088903, 0.6765992407847318, -0.48761878785576945, 0.866156650246939, -0.8678948463087367, -0.6625357157291645, 0.372942061012585, 0.3565330272170514, 0.5578756144496322], [-0.11899511128437666, 0.12337864104390325, -0.08241002207851622, 0.7361685232142865, 0.05465313000002392, 0.19888684916809193, 0.8198707601580825, 0.5206276520088903, 1.0, 0.9315584063631833, 0.3498846724989854, 0.8141365113775823, -0.36991837312968967, 0.052740089368993735, 0.934272708576599, 0.825442177458868, 0.9667310728222359], [-0.4423790123064668, -0.2162651845204737, -0.3716993154498716, 0.5041489566973204, -0.2745813293122648, -0.07409389820332622, 0.8007228248344809, 0.6765992407847318, 0.9315584063631833, 1.0, 0.03144452418784092, 0.9422541161862732, -0.6573938609638841, -0.28964688920591786, 0.9168526910956021, 0.8951727804805406, 0.9615264157682445], [0.7461810745977384, 0.9176562104523905, 0.7305289597193635, 0.7487806973339015, 0.9480377252839592, 0.7057348697644724, -0.03902044477830971, -0.48761878785576945, 0.3498846724989854, 0.03144452418784092, 1.0, -0.19896152688040122, 0.651589762357639, 0.8206182935710371, 0.2623713233226427, 0.16728054385703453, 0.17950412975174945], [-0.6627943673097213, -0.461338136020598, -0.571158941067618, 0.21831818930694455, -0.4978710321434998, -0.2779116777935362, 0.8192429718902349, 0.866156650246939, 0.8141365113775823, 0.9422541161862732, -0.19896152688040122, 1.0, -0.8293332468987887, -0.5149026953607873, 0.7391003246001545, 0.772618970124819, 0.8377518468649834], [0.9581457347538372, 0.870026116829691, 0.8966363465767996, 0.3059465526692785, 0.8519682445897326, 0.7092511970366813, -0.5316292436301885, -0.8678948463087367, -0.36991837312968967, -0.6573938609638841, 0.651589762357639, -0.8293332468987887, 1.0, 0.9037404612331448, -0.344434593559405, -0.4835429575291738, -0.4709392761084289], [0.9773825379164666, 0.9761874065935222, 0.9305795952060651, 0.6492703216052775, 0.9074671410949284, 0.8686124194557174, -0.16343197324777423, -0.6625357157291645, 0.052740089368993735, -0.28964688920591786, 0.8206182935710371, -0.5149026953607873, 0.9037404612331448, 1.0, 0.046805328838687314, -0.17126100962393753, -0.06913237018604412], [-0.09779010355840229, 0.1068603258343525, -0.03956195825828394, 0.7686704589377342, 0.00013241903969123098, 0.24125160626652314, 0.6915294744121729, 0.372942061012585, 0.934272708576599, 0.9168526910956021, 0.2623713233226427, 0.7391003246001545, -0.344434593559405, 0.046805328838687314, 1.0, 0.8980837916011389, 0.9682476177931549], [-0.32539511230879276, -0.05975939761210008, -0.12339012887801039, 0.5375324823399956, -0.11065016934025042, 0.1484488156276383, 0.4723066555764585, 0.3565330272170514, 0.825442177458868, 0.8951727804805406, 0.16728054385703453, 0.772618970124819, -0.4835429575291738, -0.17126100962393753, 0.8980837916011389, 1.0, 0.8378162858482874], [-0.2126515444982069, -0.015029785308954451, -0.2128391898952996, 0.6914911531294143, -0.10260607561109218, 0.07124095797147241, 0.8345093783148921, 0.5578756144496322, 0.9667310728222359, 0.9615264157682445, 0.17950412975174945, 0.8377518468649834, -0.4709392761084289, -0.06913237018604412, 0.9682476177931549, 0.8378162858482874, 1.0]]');
var relationship_list = JSON.parse('["Binaan", "Perkilangan", "Pengurusan", "Penuntut", "Perkeranian", "Hiburan", "Pribumi Sabah", "Pribumi Sarawak", "lain-lain etnik", "Perempuan", "Rangsangan", "Menahan kesakitan", "Secara tidak sengaja", "HSC/STP/STPM", "Diploma", "Ijazah/Master/PHD", "lain-lain kelulusan"]');
var year_relationship = JSON.parse('[[1.0, 0.9988520336757913, 0.9976076481817651, 0.9951296953325969, 0.995266084025281, 0.9944056421046055], [0.9988520336757913, 1.0, 0.999321453551864, 0.9958493560970924, 0.9957935955633124, 0.9951491771821936], [0.9976076481817651, 0.999321453551864, 1.0, 0.9967096554181478, 0.996373515845452, 0.9956464368780127], [0.9951296953325969, 0.9958493560970924, 0.9967096554181478, 1.0, 0.9991464436312095, 0.9979897419442554], [0.995266084025281, 0.9957935955633124, 0.996373515845452, 0.9991464436312095, 1.0, 0.9992031690788122], [0.9944056421046055, 0.9951491771821936, 0.9956464368780127, 0.9979897419442554, 0.9992031690788122, 1.0]]');
var year_list = JSON.parse('["2010", "2011", "2012", "2013", "2014", "2015"]');
var state_relationship = JSON.parse('[[1.0, 0.9814638111879374, 0.9367170850965825, 0.982704784726033, 0.9795054908124726, 0.8959605971780493, 0.9713951911418325, 0.977939255596651, 0.9671966081874276, 0.9189248093924804, 0.9494375993665943, 0.9912746770325248, 0.9376831089356854], [0.9814638111879374, 1.0, 0.9377277979017519, 0.951167649104152, 0.9476128472948891, 0.8641901804220012, 0.9236865869079164, 0.9868474151585257, 0.9584257242346066, 0.9349197537143665, 0.9656856248767045, 0.9762883306438503, 0.8846196627405433], [0.9367170850965825, 0.9377277979017519, 1.0, 0.954983256116382, 0.9370666346267947, 0.8934852525300967, 0.9221318928145291, 0.9630094968431052, 0.8600779686743103, 0.9778225850361388, 0.9631945314957422, 0.903060860257823, 0.9289096463537899], [0.982704784726033, 0.951167649104152, 0.954983256116382, 1.0, 0.9777735687299972, 0.919503964993436, 0.9578420665608633, 0.9601936450221716, 0.905909638055411, 0.9304018722168917, 0.9554036509647226, 0.9737641595035805, 0.983260663140713], [0.9795054908124726, 0.9476128472948891, 0.9370666346267947, 0.9777735687299972, 1.0, 0.9641321243691973, 0.9804806896775368, 0.9357961371021457, 0.9208735430751576, 0.8787693266317655, 0.9040010560856638, 0.9726137915011481, 0.9366369819800026], [0.8959605971780493, 0.8641901804220012, 0.8934852525300967, 0.919503964993436, 0.9641321243691973, 1.0, 0.9119294188719349, 0.8365461559050644, 0.7945096859563983, 0.7933336830434685, 0.8170772083539213, 0.8999341320098472, 0.8830643793072368], [0.9713951911418325, 0.9236865869079164, 0.9221318928145291, 0.9578420665608633, 0.9804806896775368, 0.9119294188719349, 1.0, 0.9315606274046976, 0.9430708394661447, 0.8727717637922816, 0.8802898956751689, 0.9446013302150323, 0.922237695327625], [0.977939255596651, 0.9868474151585257, 0.9630094968431052, 0.9601936450221716, 0.9357961371021457, 0.8365461559050644, 0.9315606274046976, 1.0, 0.9496007091084692, 0.9738264400207435, 0.9854123106818098, 0.9556602534531051, 0.9138693607947589], [0.9671966081874276, 0.9584257242346066, 0.8600779686743103, 0.905909638055411, 0.9208735430751576, 0.7945096859563983, 0.9430708394661447, 0.9496007091084692, 1.0, 0.8591574972469266, 0.8888647356649986, 0.9517089883169098, 0.8339569951797398], [0.9189248093924804, 0.9349197537143665, 0.9778225850361388, 0.9304018722168917, 0.8787693266317655, 0.7933336830434685, 0.8727717637922816, 0.9738264400207435, 0.8591574972469266, 1.0, 0.9863817918214468, 0.8822110787506057, 0.9085382919664089], [0.9494375993665943, 0.9656856248767045, 0.9631945314957422, 0.9554036509647226, 0.9040010560856638, 0.8170772083539213, 0.8802898956751689, 0.9854123106818098, 0.8888647356649986, 0.9863817918214468, 1.0, 0.9328050616443961, 0.9262281810711837], [0.9912746770325248, 0.9762883306438503, 0.903060860257823, 0.9737641595035805, 0.9726137915011481, 0.8999341320098472, 0.9446013302150323, 0.9556602534531051, 0.9517089883169098, 0.8822110787506057, 0.9328050616443961, 1.0, 0.9238781499710957], [0.9376831089356854, 0.8846196627405433, 0.9289096463537899, 0.983260663140713, 0.9366369819800026, 0.8830643793072368, 0.922237695327625, 0.9138693607947589, 0.8339569951797398, 0.9085382919664089, 0.9262281810711837, 0.9238781499710957, 1.0]]');
var state_list = JSON.parse('["JOHOR ", "KEDAH ", "KELANTAN ", "KUALA LUMPUR ", "MELAKA ", "NEGERI SEMBILAN ", "PAHANG ", "PERAK ", "PERLIS ", "PULAU PINANG ", "SABAH ", "SARAWAK ", "SELANGOR "]');
var age_list = JSON.parse('["<13", "13-15", "16-19", "20-24", "25-29", "30-34", "35-39", "40 >", "Tiada maklumat", "BUNUH", "ROGOL", "SAMUN BERKAWAN BERS/API", "SAMUN BERKAWAN TANPA BERS/API", "SAMUN BERSENJATAPI", "SAMUN TANPA S/API", "MENCEDERAKAN", "CURI", "CURI MOTOKAR", "CURI MOTOSIKAL", "CURI VAN/LORI/JBERAT", "CURI RAGUT", "PECAH RUMAH DAN CURI"]');
var age_relationship = JSON.parse('[[1.0, 0.4250732322320815, 0.2228129296872639, 0.39269290345216096, 0.24837978363161897, -0.2622020854009851, -0.4807427080262505, -0.6815696606102022, 0.2769237552899398, -0.2284317891548969, 0.5000706708415911, 0.13241506953572743, 0.2790644395881423, 0.11408235527856567, 0.6745775684553144, 0.31515678213110326, 0.5451851104997044, 0.328492015067612, 0.363069098796096, 0.16044939837064276, 0.3053792518929073, 0.5428033798369613], [0.4250732322320815, 1.0, 0.9576057279790983, 0.8838313020025488, 0.6966350827942397, -0.2758650367347679, -0.1432968630895731, -0.3410127043585467, 0.9093269228485789, -0.2804321383642274, 0.6480081641956178, 0.8701670693395155, -0.03780648101946871, 0.8634919486564634, 0.5161074062921049, 0.8593409314220462, 0.8198203110956249, -0.08396796107718138, 0.38972857161685703, 0.033090933676064055, 0.9302397871718991, 0.7870584200206233], [0.2228129296872639, 0.9576057279790983, 1.0, 0.8513474751178451, 0.723324491065308, -0.22275342230351003, -0.009957974594141234, -0.16801308831736214, 0.9384224268503478, -0.22962502374542465, 0.5955386148596592, 0.9398562526669533, -0.058769959923146584, 0.9413610671294621, 0.48063841066095275, 0.8581401845714705, 0.7690596240111597, -0.13342610721784934, 0.35940526209044854, 0.08652478743922432, 0.9510763438194888, 0.738650488754934], [0.39269290345216096, 0.8838313020025488, 0.8513474751178451, 1.0, 0.9374534952628126, 0.1938279529792162, 0.26988733834896345, 0.019602926044821042, 0.6639383460375863, -0.5726431479762545, 0.27372225860864463, 0.6377432928283914, -0.41886012722543425, 0.6387200719125752, 0.2817570672823019, 0.5401631097768197, 0.5063477184814119, -0.4126744330431372, -0.02964468816427519, -0.29660703551852713, 0.6956975841913967, 0.4689506290938962], [0.24837978363161897, 0.6966350827942397, 0.723324491065308, 0.9374534952628126, 1.0, 0.4686638074674442, 0.543893401093088, 0.3146985538319459, 0.48694909088333893, -0.5809038462004898, 0.04390630400533042, 0.4925328612171546, -0.5433198330336971, 0.502044818543236, 0.16848860835749768, 0.3166310727137436, 0.2747388929595921, -0.5092148911203276, -0.23233169382951094, -0.3446826796086235, 0.5112551938995668, 0.24751334031581257], [-0.2622020854009851, -0.2758650367347679, -0.22275342230351003, 0.1938279529792162, 0.4686638074674442, 1.0, 0.9343209104927149, 0.8634132331054015, -0.5086670365183752, -0.5037239931875745, -0.8174513102596856, -0.4537956310174743, -0.8162738579446714, -0.4361440219319089, -0.5867607234872961, -0.6651699361737674, -0.704796188835004, -0.7058245158852229, -0.8882697739568184, -0.6784404661132494, -0.49597174351615136, -0.7108076559278951], [-0.4807427080262505, -0.1432968630895731, -0.009957974594141234, 0.26988733834896345, 0.543893401093088, 0.9343209104927149, 1.0, 0.9585059369340039, -0.3002023411623385, -0.4410407986713872, -0.7366802451715112, -0.2035329478396486, -0.8230347397578981, -0.1801278475283352, -0.5848026769903419, -0.47992252179541617, -0.6044472573991695, -0.7611430652591481, -0.8160883843386271, -0.6119071895934064, -0.29503288677321454, -0.6154216325992481], [-0.6815696606102022, -0.3410127043585467, -0.16801308831736214, 0.019602926044821042, 0.3146985538319459, 0.8634132331054015, 0.9585059369340039, 1.0, -0.4046914206118391, -0.23415185478004544, -0.7791290018519905, -0.2833754886386977, -0.7036825101056426, -0.25827776175782025, -0.6603751719535584, -0.5590794447436656, -0.7078934427284405, -0.6551527963582378, -0.7749958921970019, -0.49281071782805813, -0.4133646605642062, -0.7082109079966483], [0.2769237552899398, 0.9093269228485789, 0.9384224268503478, 0.6639383460375863, 0.48694909088333893, -0.5086670365183752, -0.3002023411623385, -0.4046914206118391, 1.0, 0.07284797042268287, 0.8249845396388878, 0.98772498556724, 0.2819796269948089, 0.983283278172052, 0.6761285025843691, 0.9786160472388481, 0.9204375265925778, 0.20246938197008058, 0.657397204503838, 0.3947484233620164, 0.9975127026850239, 0.9066268844337412], [-0.2284317891548969, -0.2804321383642274, -0.22962502374542465, -0.5726431479762545, -0.5809038462004898, -0.5037239931875745, -0.4410407986713872, -0.23415185478004544, 0.07284797042268287, 1.0, 0.4214036563815599, 0.1001203843727001, 0.7962956831899873, 0.09209185840469969, 0.3344896799615757, 0.18649039912707457, 0.18957905949052253, 0.8279272099740439, 0.6509823248407628, 0.831828684099213, 0.00778494103301739, 0.2520416731134979], [0.5000706708415911, 0.6480081641956178, 0.5955386148596592, 0.27372225860864463, 0.04390630400533042, -0.8174513102596856, -0.7366802451715112, -0.7791290018519905, 0.8249845396388878, 0.4214036563815599, 1.0, 0.7616213254245681, 0.7355694580846359, 0.745241529346604, 0.882127587301998, 0.9062853185382505, 0.9641907245861474, 0.6870660506308907, 0.9509275416350856, 0.7305287577177602, 0.809155304484122, 0.9770312097944774], [0.13241506953572743, 0.8701670693395155, 0.9398562526669533, 0.6377432928283914, 0.4925328612171546, -0.4537956310174743, -0.2035329478396486, -0.2833754886386977, 0.98772498556724, 0.1001203843727001, 0.7616213254245681, 1.0, 0.2362276524766413, 0.9994862701597906, 0.6028136224617303, 0.9511643769703708, 0.8572119007219887, 0.14844631198624791, 0.6073721388029606, 0.3846204286110845, 0.9804126042348871, 0.8442375985927985], [0.2790644395881423, -0.03780648101946871, -0.058769959923146584, -0.41886012722543425, -0.5433198330336971, -0.8162738579446714, -0.8230347397578981, -0.7036825101056426, 0.2819796269948089, 0.7962956831899873, 0.7355694580846359, 0.2362276524766413, 1.0, 0.22190870817380687, 0.7159456698275556, 0.42668992967167085, 0.5387593029721636, 0.9741824023420571, 0.8999635267344888, 0.9419031925339666, 0.24238437750035693, 0.5851836848041134], [0.11408235527856567, 0.8634919486564634, 0.9413610671294621, 0.6387200719125752, 0.502044818543236, -0.4361440219319089, -0.1801278475283352, -0.25827776175782025, 0.983283278172052, 0.09209185840469969, 0.745241529346604, 0.9994862701597906, 0.22190870817380687, 1.0, 0.592302253503876, 0.941702426012592, 0.8434981305898791, 0.1319030963204986, 0.5912073018166081, 0.3778563008351974, 0.9758846454544077, 0.8302398372562406], [0.6745775684553144, 0.5161074062921049, 0.48063841066095275, 0.2817570672823019, 0.16848860835749768, -0.5867607234872961, -0.5848026769903419, -0.6603751719535584, 0.6761285025843691, 0.3344896799615757, 0.882127587301998, 0.6028136224617303, 0.7159456698275556, 0.592302253503876, 1.0, 0.7139145345934808, 0.8523288197494103, 0.7057524501111295, 0.8342033275427089, 0.763762025448975, 0.6613134710332312, 0.8778138697297634], [0.31515678213110326, 0.8593409314220462, 0.8581401845714705, 0.5401631097768197, 0.3166310727137436, -0.6651699361737674, -0.47992252179541617, -0.5590794447436656, 0.9786160472388481, 0.18649039912707457, 0.9062853185382505, 0.9511643769703708, 0.42668992967167085, 0.941702426012592, 0.7139145345934808, 1.0, 0.9614518954274603, 0.343736266497261, 0.7739899337356848, 0.48574909258645343, 0.9731896533985607, 0.9517083007157726], [0.5451851104997044, 0.8198203110956249, 0.7690596240111597, 0.5063477184814119, 0.2747388929595921, -0.704796188835004, -0.6044472573991695, -0.7078934427284405, 0.9204375265925778, 0.18957905949052253, 0.9641907245861474, 0.8572119007219887, 0.5387593029721636, 0.8434981305898791, 0.8523288197494103, 0.9614518954274603, 1.0, 0.47992977732560144, 0.8376244441699117, 0.557423125928688, 0.9180949196670863, 0.997142186947787], [0.328492015067612, -0.08396796107718138, -0.13342610721784934, -0.4126744330431372, -0.5092148911203276, -0.7058245158852229, -0.7611430652591481, -0.6551527963582378, 0.20246938197008058, 0.8279272099740439, 0.6870660506308907, 0.14844631198624791, 0.9741824023420571, 0.1319030963204986, 0.7057524501111295, 0.343736266497261, 0.47992977732560144, 1.0, 0.852088890139834, 0.9224061276910591, 0.1585752489947264, 0.5355889718263225], [0.363069098796096, 0.38972857161685703, 0.35940526209044854, -0.02964468816427519, -0.23233169382951094, -0.8882697739568184, -0.8160883843386271, -0.7749958921970019, 0.657397204503838, 0.6509823248407628, 0.9509275416350856, 0.6073721388029606, 0.8999635267344888, 0.5912073018166081, 0.8342033275427089, 0.7739899337356848, 0.8376244441699117, 0.852088890139834, 1.0, 0.8775989567589263, 0.6271806946079389, 0.8659142330657047], [0.16044939837064276, 0.033090933676064055, 0.08652478743922432, -0.29660703551852713, -0.3446826796086235, -0.6784404661132494, -0.6119071895934064, -0.49281071782805813, 0.3947484233620164, 0.831828684099213, 0.7305287577177602, 0.3846204286110845, 0.9419031925339666, 0.3778563008351974, 0.763762025448975, 0.48574909258645343, 0.557423125928688, 0.9224061276910591, 0.8775989567589263, 1.0, 0.3446636129259786, 0.61047830943586], [0.3053792518929073, 0.9302397871718991, 0.9510763438194888, 0.6956975841913967, 0.5112551938995668, -0.49597174351615136, -0.29503288677321454, -0.4133646605642062, 0.9975127026850239, 0.00778494103301739, 0.809155304484122, 0.9804126042348871, 0.24238437750035693, 0.9758846454544077, 0.6613134710332312, 0.9731896533985607, 0.9180949196670863, 0.1585752489947264, 0.6271806946079389, 0.3446636129259786, 1.0, 0.899662981858356], [0.5428033798369613, 0.7870584200206233, 0.738650488754934, 0.4689506290938962, 0.24751334031581257, -0.7108076559278951, -0.6154216325992481, -0.7082109079966483, 0.9066268844337412, 0.2520416731134979, 0.9770312097944774, 0.8442375985927985, 0.5851836848041134, 0.8302398372562406, 0.8778138697297634, 0.9517083007157726, 0.997142186947787, 0.5355889718263225, 0.8659142330657047, 0.61047830943586, 0.899662981858356, 1.0]]');
var overall = JSON.parse('{"Federal Territory of Kuala Lumpur": {"bunuh": 276, "curi": 24112, "rogol": 849},"Selangor": {"bunuh": 881, "curi": 31816, "rogol": 2611},"Johor": {"bunuh": 457, "curi": 17549, "rogol": 2719},"Melaka": {"bunuh": 75, "curi": 5047, "rogol": 540},"Terengganu": {"bunuh": 26, "curi": 2752, "rogol": 562}, "Kedah": {"bunuh": 154, "curi": 9397, "rogol": 1649}, "Perlis": {"bunuh": 8, "curi": 1300, "rogol": 240}, "Negeri Sembilan": {"bunuh": 141, "curi": 7468, "rogol": 956}, "Pahang": {"bunuh": 119, "curi": 6132, "rogol": 1096}, "Kelantan": {"bunuh": 102, "curi": 3711, "rogol": 1438},"Penang": {"bunuh": 232, "curi": 9148, "rogol": 706}, "Sarawak": {"bunuh": 246, "curi": 12040, "rogol": 944},"Perak": {"bunuh": 259, "curi": 7931, "rogol": 1082}, "Sabah": {"bunuh": 343, "curi": 11014, "rogol": 1367}}');
var overall_years = JSON.parse('{"Federal Territory of Kuala Lumpur": {"cedera": [969, 741, 749, 744, 690, 725], "bunuh": [61, 33, 46, 58, 43, 35], "curi": [6186, 4497, 3910, 3391, 3133, 2995], "rogol": [161, 145, 138, 143, 139, 123]}, "Selangor": {"cedera": [2057, 1488, 1179, 1108, 1086, 1217], "bunuh": [175, 127, 166, 167, 109, 137], "curi": [7459, 5941, 4437, 5147, 4675, 4157], "rogol": [653, 516, 421, 395, 317, 309]}, "Johor": {"cedera": [1026, 862, 838, 676, 700, 650], "bunuh": [58, 86, 80, 89, 70, 74], "curi": [4356, 3811, 2910, 2322, 2216, 1934], "rogol": [619, 582, 504, 443, 306, 265]}, "Melaka": {"cedera": [263, 171, 170, 141, 222, 192], "bunuh": [9, 14, 14, 19, 11, 8], "curi": [1256, 1219, 888, 696, 570, 418], "rogol": [105, 81, 97, 110, 65, 82]}, "Terengganu": {"cedera": [127, 119, 107, 152], "bunuh": [8, 6, 7, 5], "curi": [847, 816, 651, 438], "rogol": [152, 135, 150, 125]}, "Kedah": {"cedera": [492, 498, 469, 383, 369, 402], "bunuh": [24, 28, 29, 20, 24, 29], "curi": [2225, 2097, 1657, 1298, 1015, 1105], "rogol": [352, 327, 291, 230, 245, 204]}, "Perlis": {"cedera": [72, 66, 83, 85, 64, 85], "bunuh": [1, 3, 1, 0, 2, 1], "curi": [282, 310, 251, 202, 163, 92], "rogol": [39, 51, 42, 41, 36, 31]}, "Negeri Sembilan": {"cedera": [276, 252, 334, 430, 380, 263], "bunuh": [22, 21, 27, 24, 25, 22], "curi": [1164, 1240, 1460, 1368, 1228, 1008], "rogol": [196, 172, 170, 166, 135, 117]}, "Pahang": {"cedera": [304, 271, 254, 222, 232, 250], "bunuh": [14, 21, 20, 22, 24, 18], "curi": [1314, 1303, 992, 822, 974, 727], "rogol": [223, 222, 216, 191, 150, 94]}, "Kelantan": {"cedera": [386, 323, 340, 294, 323, 277], "bunuh": [21, 16, 17, 21, 15, 12], "curi": [909, 736, 595, 447, 531, 493], "rogol": [311, 276, 237, 228, 206, 180]}, "Penang": {"cedera": [593, 358, 344, 337, 328, 324], "bunuh": [33, 31, 47, 36, 53, 32], "curi": [2778, 1907, 1274, 1089, 1131, 969], "rogol": [149, 146, 123, 118, 93, 77]}, "Sarawak": {"cedera": [596, 531, 538, 452, 413, 362], "bunuh": [36, 35, 46, 51, 41, 37], "curi": [2939, 2517, 2394, 1730, 1282, 1178], "rogol": [197, 151, 163, 147, 138, 148]}, "Perak": {"cedera": [548, 533, 481, 402, 382, 372], "bunuh": [43, 41, 41, 52, 32, 50], "curi": [1986, 1784, 1185, 989, 1021, 966], "rogol": [293, 226, 188, 156, 127, 92]}, "Sabah": {"cedera": [402, 324, 358, 273, 232, 263], "bunuh": [63, 68, 61, 63, 52, 36], "curi": [2705, 2324, 1695, 1466, 1236, 1588], "rogol": [243, 240, 224, 225, 220, 215]}}');

function setgraph(state){
  var trace1 = {
    x: year_list,
    y: overall_years[state]['cedera'],
    mode: 'scatter',
    name: 'Mencederakan'
  }
  var trace2 = {
    x: year_list,
    y: overall_years[state]['bunuh'],
    mode: 'scatter',
    name: 'Bunuh'
  }
  var trace3 = {
    x: year_list,
    y: overall_years[state]['rogol'],
    mode: 'scatter',
    name: 'Rogol'
  }
  var trace4 = {
    x: year_list,
    y: overall_years[state]['curi'],
    mode: 'scatter',
    name: 'Kecurian'
  }
  var layout = {
    'title': state + ' Crime Rate over Year',
    xaxis: {
      autotick: false
    }
  }
  Plotly.newPlot('myDiv_graph', [trace1, trace2, trace3, trace4], layout);
  $('#slidedownhell').slideDown(500).delay(1000);
}
