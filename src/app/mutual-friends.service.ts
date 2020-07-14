import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { TwitterUser } from './mutual-friends/mutual-friends.component';

const Ids = [
  "303740946",
  "18839785",
  "998732084314165249",
  "1268640880728178688",
  "2357343270",
  "15978244",
  "1148660512290418689",
  "778632436288749568",
  "203471820",
  "1108769816230293504",
  "1258382463505559552",
  "4614862275",
  "2780361002",
  "951158574163505152",
  "2707179805",
  "971416299816607745",
  "817880",
  "1115965065578958848",
  "19877186",
  "3317233336",
  "245687754",
  "1047644343874465792",
  "16665197",
  "9505092",
  "1049301506435031042",
  "31364622",
  "1660468830",
  "880389288",
  "138203134",
  "783792992",
  "802306846161780736",
  "14367723",
  "870291911122108416",
  "1060520815928606720",
  "617227987",
  "829722967453995009",
  "737583593245937664",
  "4112031734",
  "902045266034925568",
  "1274038568",
  "2341741537",
  "4053162792",
  "1447949844",
  "316622389",
  "60843563",
  "1588390411",
  "2227695199",
  "305840110",
  "14800270",
  "20571756",
  "1636590253",
  "14130366",
  "816653",
  "775296019",
  "2541363451",
  "1669854782",
  "1072993274",
  "58243368",
  "57948579",
  "3298037209",
  "718493776306511874",
  "220259132",
  "441595447",
  "37034483",
  "16616754",
  "581427498",
  "885487044243238912",
  "868356059143917568",
  "62513246",
  "865147068418883585",
  "3911707993",
  "812357564272934912",
  "809458189116682240",
  "574023889",
  "112346217",
  "32390618",
  "2937482924",
  "164213375",
  "1394204198",
  "757564694953545732",
  "90420314",
  "46791535",
  "507911269",
  "348468331",
  "26997136",
  "208539732",
  "163101589",
  "2156307732",
  "124107801",
  "2174179033",
  "228745963",
  "726696870010081280",
  "116372682",
  "1153045459",
  "74937547",
  "63514892",
  "117569600",
  "52368811",
  "11348282",
  "14824849",
  "332723655",
  "15846407",
  "513067381",
  "30364057",
  "2766064128",
  "72545248",
  "415860281",
  "32008199",
  "1263706735",
  "52551600",
  "15693493",
  "336116660",
  "18948541",
  "414946220",
  "44196397",
  "90973658",
  "1481232188",
  "34316925",
  "2247560024",
  "495851295",
  "15473958",
  "204832963",
  "2799687219",
  "3267008203",
  "902534288",
  "21408397",
  "215341494",
  "280605022",
  "98215252",
  "314440346",
  "78941611",
  "108252113",
  "18538525",
  "14120922",
  "468479147",
  "1475013896",
  "127869815",
  "68977380",
  "260251320",
  "87484569",
  "1317076194",
  "471741741",
  "5402612",
  "207809313",
  "60937837",
  "231033118",
  "2574232910",
  "39743812",
  "15492359",
  "16589206",
  "237845487",
  "3171712086",
  "561335546",
  "216776631",
  "29442313",
  "168857946",
  "24775410",
  "2475872178",
  "2775598132",
  "370573869",
  "52408930",
  "23439085",
  "1062720092",
  "2536674722",
  "54334562",
  "121689512",
  "345510637",
  "522946187",
  "556151596",
  "15439395",
  "256495314",
  "177829660",
  "373416209",
  "813286",
  "24705126",
  "19929890",
  "37710752",
  "2842597998",
  "38647512",
  "116994659",
  "3020929064",
  "20751449",
  "711694309",
  "137979201",
  "343311611",
  "20015311",
  "19725644",
  "15143478",
  "1102810780351655936",
  "1275701569732952064",
  "813766729939750912",
  "1142635990118539264",
  "879742154066731009",
  "2909164273",
  "14143960",
  "1270771291956494336",
  "1026892156735115264",
  "975137590050508800",
  "1331784224",
  "553205436",
  "376819015",
  "275710913",
  "2543629379",
  "861667040658063364",
  "3065618342",
  "333430027",
  "20536157",
  "21457289",
  "48504989",
  "755887116",
  "1591741",
  "847378752",
  "29961025",
  "63873759",
  "3297072122",
  "4641572533",
  "50107253",
  "214013416",
  "913840752",
  "1851545900",
  "706710185977380869",
  "956466499325116416",
  "940872243579584512",
  "165262228",
  "14768955",
  "1062443042",
  "1066739042769747968",
  "489989988",
  "1110442460",
  "14649267",
  "20865833",
  "101687417",
  "19253334",
  "72481380",
  "1073078053",
  "176378257",
  "2765974980",
  "2253142422",
  "511402689",
  "1451773004",
  "2259046662",
  "15332486",
  "26244629",
  "67611162",
  "701855337230393344",
  "19515424",
  "9557282",
  "1350259454",
  "48100125",
  "102957248",
  "14488786",
  "23976386",
  "15485441",
  "2893511188",
  "768487569164210176",
  "2867732858",
  "891962364974596096",
  "822215679726100480",
  "1344951",
  "13298072",
  "34743251",
  "2494241653",
  "97865628",
  "227276239",
  "171498955",
  "65321351",
  "759520045",
  "19895282",
  "2803191",
  "133880286",
  "22940219",
  "339825212",
  "1639411922",
  "50393960",
  "783214"
]

@Injectable({
  providedIn: 'root'
})
export class MutualFriendsService {


  getMutualFriends(user1: string, user2: string): Observable<TwitterUser> {
    const csv = (ids: string[]) => ids.length == 1 && ids[0].toString() || (ids[0].toString() + ',' + csv(ids.slice(1)))
    //TODO: paginate
    //@ts-ignore
    return this.http.get(`${window.origin}/friends/mutual?user1=${user1}&user2=${user2}`, {})
      .pipe(switchMap(((ids: string[]) => this.http.get(`${window.origin}/friends/show?ids=${csv(ids.slice(0, 100))}`))))
      .pipe(switchMap((arr: string[]) => from(arr)))
    // .subscribe(res => console.log(res))
  }
  constructor(private http: HttpClient) { }
}
