
// blog
document.getElementById('blog-id').addEventListener('click', function () {
    window.location.href = './blog.html';


})

// history button section 
document.getElementById('btn-history').addEventListener('click', function () {
    const btnDonation = getAtributeById('btn-donation');
    btnDonation.remove('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
    btnDonation.add('text-discriptionColor')

    const btnHistory = getAtributeById('btn-history');
   btnHistory.add('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
   btnHistory.remove('text-discriptionColor')

    getAtributeById('main').add('hidden');
    getAtributeById('footer').add('hidden');

    // history card
    const historyCard = getAtributeById('history-section');
    historyCard.remove('hidden');

})

//  donation button section 
document.getElementById('btn-donation').addEventListener('click', function () {

    const btnDonation = getAtributeById('btn-donation');
    btnDonation.add('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');
    btnDonation.remove('text-discriptionColor')

    const btnHistory = getAtributeById('btn-history');
   btnHistory.remove('bg-btnColor', 'text-hColor', 'sm:text-xs', 'font-semibold');

    getAtributeById('main').remove('hidden');
    getAtributeById('footer').remove('hidden');

    // history card
    const historySection = getAtributeById('history-section');
    historySection.add('hidden');


});

// first card button
document.getElementById('donate-btn-noyakhali').addEventListener('click', function () {
    const costAmmount = getInputValueById('donation-input-one');
    const mainBalance = getInnerTextById('main-balance');
    const firstCardDonationAmmount = getInnerTextById('donation-noakhali-ammount');

    if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {

        const newMainBalance = mainBalance - costAmmount;
        document.getElementById('donation-noakhali-ammount').innerText = (costAmmount + firstCardDonationAmmount).toFixed(2);

        const innerText = document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);


        // history card
        const historySection = gettingElementById('history-section');
        const div = document.createElement('div');
        div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

        div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${costAmmount} Donate for Flood at Noakhali, Bangladesh</p>
        <p class='text-discriptionColor'>Date : ${new Date()}
        `;
        historySection.insertBefore(div, historySection.firstChild);
        
        // modal
        const myModal = gettingElementById('my_modal_5');
        myModal.showModal();

        document.getElementById('modal-close').addEventListener('click', function () {
            const myModal = getAtributeById('my_modal_5');
            myModal.close();
        })

    } else {
        alert('Invalid Donation Ammount');

    }
});

// second card button 
document.getElementById('feni-donation-btn')
    .addEventListener('click', function () {
        const costAmmount = getInputValueById('donation-input-two');
        const mainBalance = getInnerTextById('main-balance');
        const donatedAmount = getInnerTextById('feni-donated-amount')

        if (typeof costAmmount === 'number' && costAmmount > 0 && costAmmount < mainBalance) {
            const balance = mainBalance - costAmmount;
            document.getElementById('main-balance').innerText = balance.toFixed(2);
            document.getElementById('feni-donated-amount').innerText = (costAmmount + donatedAmount).toFixed(2);

            // modal
            const myModal = gettingElementById('my_modal_5');
            myModal.showModal();

            document.getElementById('modal-close').addEventListener('click', function () {
                const myModal = getAtributeById('my_modal_5');
                myModal.close();
            })

            // history card
            const historySection = gettingElementById('history-section');
            const div = document.createElement('div');
            div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

            div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${costAmmount} Donate for Flood Relief in Feni,Bangladesh</p>
        <p class='text-discriptionColor'>Date : ${new Date()}
        `;
            historySection.insertBefore(div, historySection.firstChild);
        } else {
            alert('Invalid Donation Ammount');

        }
    });

// third card button 
document.getElementById('quota-donation-button').addEventListener('click', function () {
    const inputCostAmmount = getInputValueById('quota-donation-input');
    const mainBalance = getInnerTextById('main-balance');
    const showigCostAmount = getInnerTextById('quota-donation-ammount');

    if (typeof inputCostAmmount === 'number' && inputCostAmmount > 0 && inputCostAmmount < mainBalance) {

        const newMainBalance = mainBalance - inputCostAmmount;
        document.getElementById('main-balance').innerText = newMainBalance.toFixed(2);
        document.getElementById('quota-donation-ammount').innerText = (inputCostAmmount + showigCostAmount).toFixed(2);

        // modal
        const myModal = gettingElementById('my_modal_5');
        myModal.showModal();

        document.getElementById('modal-close').addEventListener('click', function () {
            const myModal = getAtributeById('my_modal_5');
            myModal.close();
        })

        // history card
        const historySection = gettingElementById('history-section');
        const div = document.createElement('div');
        div.className = 'border-2 border-gray-100 rounded-lg shadow-lg p-5 space-y-3';

        div.innerHTML = `
        <p class='text-xl font-semibold text-hColor'>${inputCostAmmount} Donate for Aid for Injured in the Quota Movement</p>
        <p class='text-discriptionColor'>Date : ${new Date()}
        `;
        historySection.insertBefore(div, historySection.firstChild);
    } else {
        alert('Invalid Donation Ammount');
    }
})
