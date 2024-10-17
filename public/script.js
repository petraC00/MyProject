
const ctx = document.getElementById('lineChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'Active Users',
            data: [300, 350, 370, 400, 460, 420, 450, 500, 540],
            borderColor: '#42307d',
            backgroundColor: 'rgba(190, 66, 193, 0.1)',
            fill: true,
            pointRadius: 0,
            
        },
        {
            label: 'Active Users',
            data: [400, 460, 520, 590, 600, 570, 600, 640, 660],
            borderColor: '#9e77ed',
            backgroundColor: 'rgba(190, 66, 193, 0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 0
        },
        {
            label: 'Active Users',
            data: [550, 600, 650, 690, 700, 620, 700, 750, 900],
            borderColor: '#6941c6',
            backgroundColor: 'rgba(190, 66, 193, 0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 0
        }
    ]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        }
    },
    scales:{
        x:{
            grid:{
                display:true,
                color:'#d0d5dd',
                lineWidth:1,
            }
        },
        y:{
            grid:{
                display: false
            },
            ticks:{
                stepSize:100,
            }
        }
    }
});


document.getElementById('signInBtn').addEventListener('click', function(event) {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    
    if (email === '' || password === '') {
        errorMessage.style.display = 'block';  
        event.preventDefault();                
    } else {
        errorMessage.style.display = 'none';
        window.location.href = 'checkYourEmail.html'   
    }
});

document.getElementById('getStartedBtn').addEventListener('click', function(event) {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    
    if (name === '' || email === '' || password === '') {
        errorMessage.style.display = 'block';  
        event.preventDefault();                
    } else {
        errorMessage.style.display = 'none';
        window.location.href = 'checkYourEmail.html'   
    }
});


