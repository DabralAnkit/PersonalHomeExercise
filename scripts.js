function setReminder() {
    const time = document.getElementById('reminderTime').value;
    localStorage.setItem('reminderTime', time);
    alert(`Reminder set for ${time}!`);
}

const weeklyExerciseData = {
    'Monday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute jog', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Push-ups: 3 sets of 10 reps', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'Jumping jacks: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute walk', duration: '5 mins' }
    ],
    'Tuesday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute brisk walk', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Squats: 3 sets of 15 reps', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'High knees: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute stretching', duration: '5 mins' }
    ],
    'Wednesday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute stretching', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Lunges: 3 sets of 12 reps each leg', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'Butt kicks: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute walk', duration: '5 mins' }
    ],
    'Thursday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute jog', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Planks: 3 sets of 30 seconds', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'Spot jogging: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute stretching', duration: '5 mins' }
    ],
    'Friday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute brisk walk', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Sit-ups: 3 sets of 15 reps', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'Jumping jacks: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute walk', duration: '5 mins' }
    ],
    'Saturday': [
        { time: '09:00', activity: 'Warm-up', description: '5-minute stretching', duration: '5 mins' },
        { time: '09:05', activity: 'Strength Training', description: 'Push-ups: 3 sets of 10 reps', duration: '10 mins' },
        { time: '09:15', activity: 'Cardio', description: 'High knees: 3 sets of 30 seconds', duration: '5 mins' },
        { time: '09:20', activity: 'Cool Down', description: '5-minute stretching', duration: '5 mins' }
    ],
    'Sunday': [
        // Rest day
    ]
};

const weeklyMealData = {
    'Monday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Paneer Bhurji with 2 whole wheat rotis, Lemon and Mint Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Chicken Curry with brown rice, Simple Salad: Cucumber and tomatoes' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Chickpeas' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Vegetable Pulao with raita' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Chamomile tea' }
    ],
    'Tuesday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Vegetable Sandwich with whole wheat bread, Orange and Basil Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Vegetable Curry with barley, Simple Salad: Lettuce and carrot' },
        { time: '4:00 PM', meal: 'Snack', description: 'Fruit Salad' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Mixed Vegetable Stir Fry' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Peppermint tea' }
    ],
    'Wednesday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Vegetable Upma, Cucumber and Ginger Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Chickpea Curry with wild rice, Simple Salad: Beetroot and apple' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Makhana (Fox Nuts)' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Grilled Chicken with steamed vegetables' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Lavender tea' }
    ],
    'Thursday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Curd Rice with fruits, Lemon and Mint Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Vegetable Biryani with cucumber raita' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Chickpeas' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Paneer Tikka with green salad' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Chamomile tea' }
    ],
    'Friday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Paneer Bhurji with 2 whole wheat rotis, Lemon and Mint Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Dal Makhani with barley, Simple Salad: Spinach and carrot' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Chickpeas' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Grilled Chicken with steamed vegetables' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Lavender tea' }
    ],
    'Saturday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Vegetable Dosa with sambar, Cucumber and Ginger Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Palak Paneer with wild rice, Simple Salad: Beetroot and apple' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Makhana (Fox Nuts)' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Vegetable Stir Fry' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Chamomile tea' }
    ],
    'Sunday': [
        { time: '11:00 AM', meal: 'Breakfast', description: 'Paneer Bhurji with 2 whole wheat rotis, Lemon and Mint Infused Water' },
        { time: '2:00 PM', meal: 'Lunch', description: 'Chicken Curry with brown rice, Simple Salad: Cucumber and tomatoes' },
        { time: '4:00 PM', meal: 'Snack', description: 'Roasted Chickpeas' },
        { time: '8:00 PM', meal: 'Dinner', description: 'Vegetable Pulao with raita' },
        { time: '10:00 PM', meal: 'Before Bed', description: 'Chamomile tea' }
    ]
};


function loadDailyExercisePlan() {
    const exercisePlanSection = document.getElementById('exercisePlan');
    let content = '';

    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
    content += `<h2>${currentDay}</h2>`; // Display the day of the week
    const dailyData = weeklyExerciseData[currentDay];
    dailyData.forEach(exercise => {
        content += `
            <div class="exercise">
                <span>${exercise.time}</span>
                <span>${exercise.activity}</span>
                <span>${exercise.description}</span>
                <span>${exercise.duration}</span>
                <span><a href="${exercise.video}" target="_blank">Link</a></span>
            </div>
        `;
    });

    exercisePlanSection.innerHTML = content;
}

// Function to load daily meal plan
function loadDailyMealPlan() {
    const mealPlanSection = document.getElementById('mealPlan');
    let content = '';

    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
    content += `<h2>${currentDay}</h2>`; // Display the day of the week
    const dailyData = weeklyMealData[currentDay];
    dailyData.forEach(meal => {
        content += `
            <div class="meal">
                <span>${meal.time}</span>
                <span>${meal.meal}</span>
                <span>${meal.description}</span>
            </div>
        `;
    });

    mealPlanSection.innerHTML = content;
}

// Function to load weekly exercise plan
function loadWeeklyExercisePlan() {
    const exercisePlanSection = document.getElementById('exercisePlan');
    let content = '';

    for (let day in weeklyExerciseData) {
        content += `<h2>${day}</h2>`;
        weeklyExerciseData[day].forEach(exercise => {
            content += `
                <div class="exercise">
                    <span>${exercise.time}</span>
                    <span>${exercise.activity}</span>
                    <span>${exercise.description}</span>
                    <span>${exercise.duration}</span>
                    <span><a href="${exercise.video}" target="_blank">Link</a></span>
                </div>
            `;
        });
    }

    exercisePlanSection.innerHTML = content;
}

// Function to load weekly meal plan
function loadWeeklyMealPlan() {
    const mealPlanSection = document.getElementById('mealPlan');
    let content = '';

    for (let day in weeklyMealData) {
        content += `<h2>${day}</h2>`;
        weeklyMealData[day].forEach(meal => {
            content += `
                <div class="meal">
                    <span>${meal.time}</span>
                    <span>${meal.meal}</span>
                    <span>${meal.description}</span>
                </div>
            `;
        });
    }

    mealPlanSection.innerHTML = content;
}

// Add an event listener to the viewToggle select element
document.getElementById('viewToggle').addEventListener('change', function () {
    const selectedValue = this.value;

    if (selectedValue === 'daily') {
        // Load daily exercise and meal data
        document.getElementById('exercisePlan').style.display = 'block'; // Show exercise plan
        document.getElementById('mealPlan').style.display = 'block'; // Show meal plan
        loadDailyExercisePlan();
        loadDailyMealPlan();
    } else if (selectedValue === 'weeklyExercise') {
        // Load weekly exercise data
        document.getElementById('exercisePlan').style.display = 'block'; // Show exercise plan
        document.getElementById('mealPlan').style.display = 'none'; // Hide meal plan
        loadWeeklyExercisePlan();
    } else if (selectedValue === 'weeklyMeals') {
        // Load weekly meal data
        document.getElementById('exercisePlan').style.display = 'none'; // Hide exercise plan
        document.getElementById('mealPlan').style.display = 'block'; // Show meal plan
        loadWeeklyMealPlan();
    }
});

// Initialize the view with daily data
loadDailyExercisePlan();
loadDailyMealPlan();


let timerInterval;
let timerSeconds = 0;

function updateTimerHand() {
    const timerHand = document.querySelector('.timer-hand');
    const rotation = (timerSeconds / 60) * 360;
    timerHand.style.transform = `rotate(${rotation}deg)`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        timerSeconds++;
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        document.getElementById('timerDisplay').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        updateTimerHand(); // Ensure this line is present
    }, 1000);
}



function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    document.getElementById('timerDisplay').textContent = '00:00';
}

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

function openLightbox(videoUrl) {
    const lightbox = document.getElementById('videoLightbox');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoUrl + "?autoplay=1";
    lightbox.style.display = 'block';
}

document.getElementById('closeLightbox').addEventListener('click', function() {
    const lightbox = document.getElementById('videoLightbox');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Stop video playback
    lightbox.style.display = 'none';
});
