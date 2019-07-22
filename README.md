
Data scape is a stock price CRUD tool that allows users to create a scape that shows a company's stock index and start and end dates. 
Ideally, in the future, there will be an external API fetch that pulls down the company's stock prices for those days and will integrate a data visualization library to add on a pretty graph. 
Extra down the road, I'd like to add in another external API that illustrates the company's main S&P industry indices to help show the user how a company is doing against their competitors. 

To clone down data-scape: 

git clone git@github.com:indykiss/Data-scape.git

cd Data-scape

code open .

# Needed routes
 GET api/scape
 GET api/scape/:id
 POST api/scape
 PUT api/scape/:id
 DELETE 

# SCAPE Model: 
 name 
 stock
 start date
 end date
 history