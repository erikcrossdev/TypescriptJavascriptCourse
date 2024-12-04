//New Object -> Object.prototype

const objA = {
  chaveA: "A",
  //_proto_: Object.prototype  ///é criado por default e não tem pai
};

//New Object -> Object.prototype

const objB = {
  chaveB: "B",
  //_proto_: Object.prototype  ///é criado por default e não tem pai
};

const ObjC = new Object();
ObjC.chaveC = "C";

Object.setPrototypeOf(objB, objA); //Agora o prototype de B é A, agora o objeto A é o pai de B
Object.setPrototypeOf(ObjC, objB);
console.log(ObjC.chaveA);
console.log(ObjC.chaveB);
console.log(ObjC.chaveC);
