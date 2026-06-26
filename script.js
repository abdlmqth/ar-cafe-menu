function showCategory(category, btn) {

  // Update active button
  document.querySelectorAll('.cat-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Show or hide dish cards
  document.querySelectorAll('.dish-card').forEach(function(card) {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Show or hide section titles
  document.querySelectorAll('.section-title').forEach(function(title) {
    if (category === 'all') {
      title.classList.remove('hidden');
    } else {
      title.classList.add('hidden');
    }
  });
}

function openAR(dishName) {
  // This will open the AR viewer in Phase 6
  // For now it confirms which dish was selected
  alert('AR coming soon for: ' + dishName);
}
