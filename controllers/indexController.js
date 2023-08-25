const menu = require('../data/menu.json');


module.exports = {
    index : (req,res) => {
        return res.render('index',{
            menu
        })
    },
    detailItem : (req,res) => {
        const itemID = req.params.item;

      const item = menu.find(item => item.id === +itemID)

       return res.render('detalleMenu', {
        item
       })
    }
}