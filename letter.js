const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const text = document.getElementById("text");
const music = document.getElementById("bgMusic");

const message = `น้องขอโทษนะ...

น้องอยากที่จะมีพี่อยู่ข้างๆน้องนะ
ไม่อยากให้พี่ไปไหนเลย 
ไม่รู้ว่าตอนนี้พี่จะคิดยังไงบ้าง แต่ถ้าพี่ยังมีความรู้สึกดีๆให้กับน้องอยู่บ้าง
อยากจะขอโอกาสจากพี่อีกครั้งนะคะ
ไม่รู้ว่าพี่จะยอมให้โอกาสน้องอีกครั้งไหม 

ที่ผ่านมามันอาจจะเป็นเวลาที่ไม่ได้นานมากแต่น้องตั้งใจที่จะรัก
พี่มากๆเลยนะ อยากให้พี่ลองทบทวนแล้วคิดดีๆดูนะคะ ว่าพี่ยังอยากจะมีน้องอยู่ในชีวิตพี่ไหม

รักพี่มากๆเลยนะค้าบ

ถ้ายังพอมีโอกาส
อยากเริ่มต้นใหม่อีกครั้งนะ

❤️`;

let index = 0;

// คลิกซองจดหมาย
envelope.onclick = () => {

    music.play().catch(err => {
        console.log("Autoplay blocked:", err);
    });

    gsap.to(envelope,{
        scale:0,
        duration:0.5,
        opacity:0
    });

    gsap.to(paper,{
        opacity:1,
        y:-20,
        duration:1,
        delay:0.5
    });

    typeWriter();
};

// พิมพ์ข้อความ
function typeWriter(){

    if(index < message.length){
        text.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter,50);
    }
}

// เอฟเฟกต์ลอย
function createFloat(container, emoji){

    const el = document.createElement("div");
    el.className="float";
    el.innerHTML = emoji;
    el.style.left = Math.random()*100+"vw";
    el.style.fontSize = (20+Math.random()*30)+"px";

    document.getElementById(container).appendChild(el);

    setTimeout(()=>el.remove(),8000);
}

setInterval(()=>createFloat("hearts","❤️"),400);
setInterval(()=>createFloat("roses","🌹"),900);
setInterval(()=>createFloat("glow","✨"),300);
