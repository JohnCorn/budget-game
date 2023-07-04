let currBudgetValue;
const totalBudgetValue = 11000000000;

function SetUp()
{
    currBudgetValue = totalBudgetValue;

    UpdateCurrBudget(0);

    var wrapper = document.getElementById("wrapper");

    for (let i = 0; i < purchasable.length; i++)
    {
        const cardHolder = document.createElement('div'); 
        cardHolder.classList ="shadow-xl shadow-black p-2 flex justify-center bg-gray-700 rounded-lg text-white text-center grid row-auto";
        wrapper.appendChild(cardHolder);

        // === Image ===
        const image = document.createElement('img'); 
        image.classList = "";
        image.src = purchasable[i].img;
        cardHolder.appendChild(image);
        // === Display Text ===

        const displayName = document.createElement('h1'); 
        displayName.classList = "";
        displayName.innerText = purchasable[i].displayName;
        cardHolder.appendChild(displayName);

        const cost = document.createElement('h2'); 
        cost.classList = "";
        cost.innerText = `${'$' + purchasable[i].cost.toLocaleString()}`;
        cardHolder.appendChild(cost);

        // === Button Holder ===
        const btnHolder = document.createElement('div'); 
        btnHolder.classList = "interactable justify-center p-1 bg-gray-300 rounded-lg  grid grid-cols-3";
        cardHolder.appendChild(btnHolder);

        const sellBtn = document.createElement('button'); 
        sellBtn.classList ="sellBtn rounded-md font-bold"
        + " h-5 w-5 bg-red-500";
        sellBtn.addEventListener('click', () => Sell(i));
        sellBtn.innerText = "-";
        btnHolder.appendChild(sellBtn);

        const quanity = document.createElement('h2'); 
        quanity.classList ="text-black font-medium";
        quanity.innerText = `${purchasable[i].quanity}`;
        btnHolder.appendChild(quanity);

        const buyBtn = document.createElement('button'); 
        buyBtn.classList ="buyBtn rounded-md font-bold"
        + " h-5 w-5 bg-green-500"
        + " hover:h-6 hover:w-6 hover:bg-green-700";
        buyBtn.addEventListener('click', () => Buy(i));
        buyBtn.innerText = "+";
        btnHolder.appendChild(buyBtn);    
    }
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

    ItemizeList();
}

function ItemizeList()
{
    const list = document.getElementById('itemized');
    list.innerHTML = "";
    const template = document.createElement('div');    //create DIV element.

    let total = 0;
    for (let i = 0; i < purchasable.length; i++)
    {       
        template.innerHTML += `
        <div>
            <h3>${purchasable[i].displayName}: 
                ${'$' + purchasable[i].cost.toLocaleString()}
                * ${purchasable[i].quanity}
            </h3>
        </div>`
        list.appendChild(template)

        total += (purchasable[i].cost * purchasable[i].quanity);
    }

    template.innerHTML += `<h3>$${total.toLocaleString()}</h3>`
}