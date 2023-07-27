import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  dataPicker: document.getElementById('datetime-picker'),
};

const options = {
  enableTime: true, // Enables time picker
  time_24hr: true, // Displays time picker in 24 hour mode without AM/PM selection when enabled.
  defaultDate: new Date(), // Sets the initial selected date(s).
  // If you're using mode: "multiple" or a range calendar supply an Array of Date objects or an Array of date strings which follow your dateFormat.
  // Otherwise, you can supply a single Date object or a date string.
  minuteIncrement: 1, // Adjusts the step for the minute input (incl. scrolling)
  onClose(selectedDates) {
    // Function(s) to trigger on every time the calendar is closed.
    console.log(selectedDates[0]);
  },
};
