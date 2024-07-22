import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/Addons.js';
const scene = new THREE.Scene(); //screen

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000); //first person camera
/*

    created the scree and the perspective camera 
    1st person cameras(field of view ; the aspact ratio,0,1//nearest point,0 //far)--> are to be provided

*/
scene.add(camera);

camera.position.set(0,0,10);
//move the camera 5 units back



/*
    create a rengerer with webGL parameter

*/
//Renderer
const renderer = new THREE.WebGLRenderer({antialias : true}); //smooth edges antialias
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0x696969 , 1); // bkg color
document.body.appendChild(renderer.domElement); // add the render to the html file
/*
//lights
//ambient light
let ambientLight = new THREE.AmbientLight(0x101010,1.0); // colour , intensity , distance

ambientLight.position.x = camera.position.x; //light follows Camera
ambientLight.position.y = camera.position.y; //light follows Camera
ambientLight.position.z = camera.position.z; //light follows Camera

scene.add(ambientLight);

//directional light

let sunLight = new THREE.DirectionalLight(0x563497,1.0);
sunLight.position.y = 15;
sunLight.position.x = 15;
scene.add(sunLight);

*/

//controls = new PointerLockControls( camera, document.body );




//texter for the floor plane 
let floorTexture = new THREE.TextureLoader().load("./src/Public/images/tiles_floor.jpg");
floorTexture.repeat = new THREE.Vector2(25,25);
floorTexture.wrapS = THREE.ReplaceWrapping;
floorTexture.wrapT = THREE.ReplaceWrapping;

//creating a floor plane
let PlaneGeometry = new THREE.PlaneGeometry(50,50); //height and width
let PlaneMaterial = new THREE. MeshBasicMaterial( {map: floorTexture, side: THREE.DoubleSide} ); // render the two siades of the material
let floorPlane = new THREE.Mesh( PlaneGeometry, PlaneMaterial );

floorPlane.rotation.x = Math.PI/2;
floorPlane.position.y = -Math.PI;

scene.add( floorPlane );




//cealing
let CealingGeometry = new THREE.PlaneGeometry(50,50); //height and width
let CealinngMaterial = new THREE. MeshBasicMaterial( {color: 0x241023, side: THREE.DoubleSide} ); // render the two siades of the material
let Cealing = new THREE.Mesh( CealingGeometry, CealinngMaterial );

Cealing.rotation.x = Math.PI/2;
Cealing.position.y = 10;
scene.add( Cealing );



//create walls 

const WallGroup = new THREE.Group(); // create a group to hold the walls
scene.add(WallGroup);

let WallTexture = new THREE.TextureLoader().load("./src/Public/images/wall8.jpg");
WallTexture.repeat = new THREE.Vector2(25,5);
WallTexture.wrapS = THREE.ReplaceWrapping;
WallTexture.wrapT = THREE.ReplaceWrapping;



let waterTexture = new THREE.TextureLoader().load("./src/Public/art/8.jpg");


//front wall
const FrontWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,1),
    new THREE. MeshBasicMaterial( {map: WallTexture})
);// box
FrontWall.position.z = -25;
//back wall
const BackWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,1),
    new THREE. MeshBasicMaterial( {map: waterTexture})
);// box
BackWall.position.z = 25;
//Right wall
const RightWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,1),
    new THREE. MeshBasicMaterial( {map: WallTexture})
);// box
RightWall.rotation.y = -Math.PI/2;
RightWall.position.x = 25;
//back wall
const LeftWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,1),
    new THREE. MeshBasicMaterial( {map: WallTexture})
);// box
LeftWall.rotation.y = -Math.PI/2;
LeftWall.position.x = -25;
WallGroup.add(FrontWall,BackWall,RightWall,LeftWall);









function createPainting(imageURL, width , height, position){


    const Texture_loadder = new THREE.TextureLoader();
    const paintingTexture = Texture_loadder.load(imageURL);
    const paintingMaterial = new THREE.MeshBasicMaterial({map: paintingTexture});
    const paintingGeometry = new THREE.PlaneGeometry(width,height);

    const painting = new THREE.Mesh(paintingGeometry , paintingMaterial);

    painting.position.set(position.x , position.y , position.z);

    return painting;
} 
//Front  wall 
const Painting1 = createPainting(
    "./src/Public/art/1.jpg",
    7,10, 
    new THREE.Vector3(-11,3,-24.4)
);

const Painting2 = createPainting(
    "./src/Public/art/2.jpg",
    7,10, 
    new THREE.Vector3(-21,3,-24.4)
);
const Painting3 = createPainting(
    "./src/Public/art/3.jpg",
    7,10, 
    new THREE.Vector3(-1,3,-24.4)
);
const Painting4 = createPainting(
    "./src/Public/art/4.jpg",
    7,10, 
    new THREE.Vector3(9,3,-24.4)
);
const Painting5 = createPainting(
    "./src/Public/art/5.jpg",
    7,10, 
    new THREE.Vector3(19,3,-24.4)
);
scene.add(Painting1,Painting2,Painting3,Painting5,Painting4);


//right wall 
const Painting1r = createPainting(
    "./src/Public/art/1.jpg",
    7,10, 
    new THREE.Vector3(24.4 , 3 , -21)
);
Painting1r.rotation.y = -Math.PI/2;
const Painting2r = createPainting(
    "./src/Public/art/2.jpg",
    7,10, 
    new THREE.Vector3(24.4 , 3 , -11)
);
Painting2r.rotation.y = -Math.PI/2;
const Painting3r = createPainting(
    "./src/Public/art/3.jpg",
    7,10, 
    new THREE.Vector3(24.4 , 3 , -1)
);
Painting3r.rotation.y = -Math.PI/2;
const Painting4r = createPainting(
    "./src/Public/art/4.jpg",
    7,10, 
    new THREE.Vector3(24.4 , 3 , 9)
);
Painting4r.rotation.y = -Math.PI/2;
const Painting5r = createPainting(
    "./src/Public/art/5.jpg",
    7,10, 
    new THREE.Vector3(24.4 , 3 , 19)
);
Painting5r.rotation.y = -Math.PI/2;
scene.add(Painting1r,Painting2r,Painting3r,Painting5r,Painting4r);




//left wall 
const Painting1l = createPainting(
    "./src/Public/art/1.jpg",
    7,10, 
    new THREE.Vector3(-24.4 , 3 , 21)
);
Painting1l.rotation.y = Math.PI/2;
const Painting2l = createPainting(
    "./src/Public/art/2.jpg",
    7,10, 
    new THREE.Vector3(-24.4 , 3 , 11)
);
Painting2l.rotation.y = Math.PI/2;
const Painting3l = createPainting(
    "./src/Public/art/3.jpg",
    7,10, 
    new THREE.Vector3(-24.4 , 3 , 1)
);
Painting3l.rotation.y = Math.PI/2;
const Painting4l = createPainting(
    "./src/Public/art/4.jpg",
    7,10, 
    new THREE.Vector3(-24.4 , 3 , -9)
);
Painting4l.rotation.y = Math.PI/2;
const Painting5l = createPainting(
    "./src/Public/art/5.jpg",
    7,10, 
    new THREE.Vector3(-24.4 , 3 , -19)
);
Painting5l.rotation.y = Math.PI/2;
scene.add(Painting1l,Painting2l,Painting3l,Painting5l,Painting4l);


























//vontroles
    

const controls = new PointerLockControls(camera, document.body);

// locjk tghe pointer and hides the menue

function startExperience(){
    //lock the pointer
    controls.lock();

    //hide the menue
    hideMenu();
}


//variable for the play butten 
const playbutton = document.getElementById("play_button");
playbutton.addEventListener("click",startExperience);

//hide the menu 

function hideMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = "none";
}

function shwMenus(){
    const menu = document.getElementById("menu");

    menu.style.display = "block";
}



//contrils------------> Event listner
//event listner on pressing the keys

document.addEventListener("keydown",onKeyDown, false);

//when key is press do something
function onKeyDown(event){
    let keycode = event.which;


    //39 right
    if(keycode === 39 || keycode == 68){
        controls.moveRight(0.15);
    }
    //37 left
    if(keycode === 37 || keycode == 65){
        controls.moveRight(-0.15);
    }
    //38 backward(up arrow)
    if(keycode === 38 || keycode == 87){
        controls.moveForward(0.15);
    }
    //40 farward(down arrow)
    if(keycode === 40|| keycode == 83){
        controls.moveForward(-0.15);
    }
}


//render loop

let renderloop = function(){
    
renderer.render(scene,camera); 



window.requestAnimationFrame(renderloop);
}

renderloop();






