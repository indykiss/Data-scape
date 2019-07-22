# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

scapes = Scape.create(
    [ 
        { name: "Apple scape", 
        stock: "AAPL",
        history: {
            open: "202",
            close: "203"
            },
        start_date: 181201,
        end_date: 181215
        },
        { name: "Restaurant brands scape", 
        stock: "QSR",
        history: {
            open: "23",
            close: "25"
            },
        start_date: 19110,
        end_date: 19220
        } 
    ]
)