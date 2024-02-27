// export const getContacts = state => state.contacts;

// export const getFilter = state => state.filter;
// ====================
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.text;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    // console.log('Calculating visible tasks');
    if (contacts.length > 0) {
      return contacts.filter(
        contact =>
          contact.name
            .toLowerCase()
            .split(` `)
            .filter(n => n.startsWith(filter.toLowerCase())).length > 0
      );
    } else {
      return contacts;
    }
  }
);

// export const selectTaskCount = createSelector([selectTasks], tasks => {
//   console.log('Calculating task count');

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// });
