const generation = {
  genOne: 1,
  genTwo: 2,
  genThreeAndUp: 3
}

function splash(gen) {
  switch(gen){
  case generation.genOne:
    console.log("No effect!");
    break;
  case generation.genTwo:
    console.log("But nothing happened.");
    break;
  case generation.genThreeAndUp:
    console.log("But nothing happened!");
    break;
  }
}

module.exports = { generation, splash };