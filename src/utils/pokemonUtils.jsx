// Calculate the Power for each Pokemon

export const calculatePower = (pokemon) => {
  const { hp, attack, defense, special_attack, special_defense, speed } =
    pokemon;
  return hp + attack + defense + special_attack + special_defense + speed;
};
