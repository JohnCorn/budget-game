let currBudgetValue;
const totalBudgetValue = 11000000000000;

purchasable = [
    {
        displayName: "Ice Teas",
        cost: 5,
        quanity: 0
    },
];



function SetUp()
{
    ItemSetup();

    currBudgetValue = totalBudgetValue;

    UpdateCurrBudget(0);

    var x = document.getElementsByClassName("display");
    for (var i = 0; i < x.length; i++) 
    {
        x[i].getElementsByTagName("h1")[0].innerHTML = purchasable[i].displayName;
        x[i].getElementsByTagName("h2")[0].innerHTML = '$' + purchasable[i].cost.toLocaleString();
        x[i].getElementsByTagName("h2")[1].innerHTML = purchasable[i].quanity;
    }
}

function ItemSetup()
{
    purchasable = [
        {
            displayName: "Ice Tea",
            cost: 5,
            quanity: 0
        },
        {
            displayName: "Air Pods",
            cost: 199,
            quanity: 0
        },
        {
            displayName: "Obj3",
            cost: 2500,
            quanity: 0
        },
        {
            displayName: "Obj4",
            cost: 10000,
            quanity: 0
        },
    ];
}

function Buy(index)
{
    if (currBudgetValue <= 0)
        return;
     
    purchasable[index].quanity++;

    UpdateCurrBudget(purchasable[index].cost);
}

function Sell(index)
{
    if (currBudgetValue >= totalBudgetValue)
        return;   

    if(purchasable[index].quanity <= 0)
        return;
        
    purchasable[index].quanity--;

    UpdateCurrBudget(-purchasable[index].cost);
}

function UpdateCurrBudget(offsetValue)
{
    currBudgetValue -= offsetValue;

    var x = document.getElementsByClassName("display");
    for (var i = 0; i < x.length; i++) 
    {
        x[i].getElementsByTagName("h2")[1].innerHTML = purchasable[i].quanity;
    }
    document.getElementById('currBudget').innerHTML = "CurrBudget: $" + currBudgetValue.toLocaleString();
}

function Itemize()
{
    let s = "";

    for (var i = 0; i < x.length; i++) 
    {

    }

    document.getElementById('itemized').innerHTML = s;
}