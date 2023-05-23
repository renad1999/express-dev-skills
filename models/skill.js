const skills = [
    { id: 239202, skill: 'JavaScript', level: 'Advanced' },
    { id: 249205, skill: 'CSS', level: 'Advanced' },
    {id: 259206, skill: 'HTML', level: 'Advanced' },
    { id: 269252, skill: 'React', level: 'Beginner' },
    { id: 279965, skill: 'Python', level: 'Beginner' },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}



function create(skill){
skill.id = Date.now() % 1000000;
skill.done = false;
skills.push(skill);

}



function getOne(id) {
id = parseInt(id);
return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}