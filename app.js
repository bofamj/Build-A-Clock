setInterval(clocke, 1000)

const huersReh = document.getElementById('hour');
const minuteReh = document.getElementById('minute');
const secondReh = document.getElementById('second');




function clocke(){
    const corentHur = new Date ();
    const second = corentHur.getSeconds() /60;
    const munet = (second + corentHur.getMinutes()) / 60 ;
    const hures = (munet + corentHur.getHours()) / 12 ;
    
    setRotation(secondReh , second )
    setRotation(minuteReh , munet )
    setRotation(huersReh , hures )
    
    

}
function setRotation ( element , rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
clocke()


