const router = require('express').Router();

const students=[
    {
        name:"Karen Gerry",
        dob:"24/04/1989",
        program:"Bsc CS",
        level:"400",
        image:"/images/a.jpg",
    },
    {
        name:"Diamond Jobs",
        dob:"01/12/1987",
        program:"Bsc MIS",
        level:"200",
        image:"/images/b.jpg",
    },
    {
        name:"Raissa Morrison",
        dob:"06/10/1994",
        program:"Bsc IT",
        level:"300",
        image:"/images/c.jpg",
    },
    {
        name:"Kelly Terbi Nartey",
        dob:"09/09/1996",
        program:"Bsc MIS",
        level:"100",
        image:"/images/d.jpg",
    },
    {
        name:"Dominic Klu",
        dob:"03/07/1989",
        program:"Bsc Cs",
        level:"200",
        image:"/images/m.jpg",
    },
    {
        name:"Fred Obeng",
        dob:"08/03/1990",
        program:"Bsc IT",
        level:"100",
        image:"/images/i.jpg",
    },
    {
        name:"Gladys Acquah",
        dob:"24/05/1994",
        program:"Bsc MIS",
        level:"400",
        image:"/images/f.jpg",
    },
    {
        name:"Felix Akanbasi",
        dob:"14/10/1994",
        program:"Bsc Cs",
        level:"100",
        image:"/images/h.jpg",
    },
    {
        name:"Nana Ama Biney",
        dob:"24/11/1990",
        program:"Bsc IT",
        level:"300",
        image:"/images/k.jpg",
    },
    {
        name:"Hannah Arthur",
        dob:"16/09/1991",
        program:"Bsc Cs",
        level:"200",
        image:"/images/e.jpg",
    },
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/students/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('students.ejs', {
        title: students[id].name,
        student
    })
});

module.exports = router;