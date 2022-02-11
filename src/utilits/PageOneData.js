
//  --------------------Statistika-----------------------------------------

import stat1  from '../assets/icons/stat1.svg'
import stat2  from '../assets/icons/stat2.svg'
import stat3  from '../assets/icons/stat3.svg'
import stat4  from '../assets/icons/stat4.svg'

//  --------------------Kurslar-----------------------------------------

import cours1  from '../assets/images/cours1.png'
import cours2  from '../assets/images/cours2.png'
import cours3  from '../assets/images/cours3.png'

//  --------------------Bepul Darsliklar-----------------------------------------

import free1  from '../assets/images/free1.jpg'
import free2  from '../assets/images/free2.jpg'
import free3  from '../assets/images/free3.jpg'
import free4  from '../assets/images/free4.jpg'

//  --------------------Bizning Jamoa-----------------------------------------


import myteam1  from '../assets/images/myteam1.png'
import myteam2  from '../assets/images/myteam2.png'
import myteam3  from '../assets/images/myteam3.png'
import myteam4  from '../assets/images/myteam4.png'

//  --------------------Messenger Icons-----------------------------------------

import facebook  from '../assets/icons/facebok.svg'
import insta  from '../assets/icons/insta.svg'
import youtube  from '../assets/icons/youtube.svg'
import github  from '../assets/icons/github.svg'


//  ---------------------------------------------------------------------------



// ----------------------------------------------------------------------------

import Generic from '../components/Generic'
import Youtube from '../pages/YouTube'
import BizningJamoaPage from '../pages/BizningJamoaPage'
import Natijalar from '../pages/Natijalar'
import Asosiy from '../pages/Asosiy'
import Button from '../components/Button'
import Kurslarimiz from '../pages/Kurslarimiz'
 
export const navbarData = [
    { id: 1, title: "Asosiy", path: '/asosiy', Comp: Asosiy, hidden: false },
    { id: 2, title: "Kurslarimiz", path: '/kurslarimiz', Comp: Kurslarimiz, hidden: false },
    { id: 3, title: "Natijalar", path: '/natijalar', Comp: Natijalar, hidden: false },
    { id: 4, title: "Bizning Jamoa", path: '/bizningJamoa', Comp: BizningJamoaPage, hidden: false },
    { id: 5, title: "YouTube", path: '/youtube', Comp: Youtube, hidden: false },
    { id: 6, title: "SignIn", path: '/signin', Comp: Generic, hidden: true },
    { id: 7, title: "SignUp", path: '/signup', Comp: Generic, hidden: true },
]  


export const statisData = [
    { id: 1, icon: stat1, number: '7', desc: 'lorem lorem', path: '/', Comp: '', hidden: false },
    { id: 2, icon: stat2, number: '267', desc: 'lorem lorem', path: '/', Comp: '', hidden: false },
    { id: 3, icon: stat3, number: '227', desc: 'lorem lorem', path: '/', Comp: '', hidden: false },
    { id: 4, icon: stat4, number: '9', desc: 'lorem lorem', path: '/', Comp: '', hidden: false },
]  


export const coursData = [
    { id: 1, img: cours1, title: 'Mobile Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem', btn: Button  , path: '/', Comp: '', hidden: false },
    { id: 2, img: cours2, title: 'Mobile Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem', btn: Button  , path: '/', Comp: '', hidden: false },
    { id: 3, img: cours3, title: 'Frontend Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem', btn: Button  , path: '/', Comp: '', hidden: false },
]  


export const bepulDarsliklarData = [
    { id: 1, img: free1, title: 'Mobile Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 2, img: free2, title: 'Frontend Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 3, img: free3, title: 'Backend Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 4, img: free4, title: 'Backend Bootcamp', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
]  


export const bizningJamoaData = [
    { id: 1, img: myteam1, status: 'Frontend Dasturchi', fullname: 'Sardor Muxtorov', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 2, img: myteam2, status: 'Frontend Dasturchi', fullname: 'Zohidjon Akbarov', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 3, img: myteam3, status: 'Frontend Dasturchi', fullname: 'Hamza Kuranbayev', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
    { id: 4, img: myteam4, status: 'Frontend Dasturchi', fullname: 'Eldor Eshmanov', desc: 'lorem lorem lorem lorem lorem lorem loremlorem lorem',  path: '/', Comp: '', hidden: false },
]  


export const messengerData =[
    { id:1, facebook: facebook, insta: insta, youtube: youtube, github: github }
]



export const footerDataOne =[
    { id: 1, team: 'team', partners: 'partners', lessons: 'lessons', abot: 'abot' }
]


export const footerDataTwo =[
    { id:1, docs: 'docs', changelog: 'changelog', licence: 'licence', support: 'support' }
]



