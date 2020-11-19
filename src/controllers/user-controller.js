exports.listAll = (req, res) => {
    let users = [
        {
            nome: 'ana maria',
            email: 'ana@hotmail.com'
        },
        {
            nome: 'lima barreto',
            email: 'lima.barreto@gmail.com'
        }
    ]
    res.send(users)
} 