'use strict';

const sessions = [
  {
    sessionTitle: 'Beekeeping 101',
    sessionPresenter: 'Olivia Arias',
  },
  {
    sessionTitle: 'Geometry of Honeycombs',
    sessionPresenter: 'Igor Sikorsky',
  }
];

const user = {
  firstName: 'Navin',
  lastName: 'Patel',
};

// Flag duplicate arguments in function
const confirm = (sessions) => {
  // Flag invalid typeof comparison string
  if (typeof(sessions) === 'object' &&
      sessions.length &&
      sessions.length > 0) {
    let confirmation = sessions.map(function(session) {
      // Flag template literal syntax in string
      const confText = `${user.firstName} ${user.lastName} is confirmed for ${session.sessionTitle} with ${session.sessionPresenter}`;
      return confText;
    });
    // Flag console method use other than console.warn
    console.warn(confirmation);
  // Flag empty block in control flow structure
  // } else {
  }
};
confirm(sessions, user);