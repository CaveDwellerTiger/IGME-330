// Question 2 TypeScript Practical: Support Ticket Tracker

// FOLLOW THESE COMMENTS AS Your INSTRUCTIONS!!! 
// Your goal is to apply TypeScript best practices by adding types, fixing unsafe patterns,
// and ensuring this code is type-safe and maintainable.

// DO NOT use `any` — use meaningful types, interfaces, and enums where appropriate.
// Final check: There should be NO red errors in VS Code's Problems tab.

// But be sure to complete ALL the instructions below, 
// THERE ARE THINGS YOU ARE EXPECTED TO DO (see comments) EVEN IF NO PROBEMS SHOW! 
// Read comments carefully!.
//----------------------------------------------------------------------------



// 1. Create an enum called `TicketStatus`.
// Include at least three possible status values (refer to the "tickets" array for examples).
// This will help make the `status` field more type-safe.
enum TicketStatus {
  closed = "closed",
  open = "open",
  inProgress = "in-progress"
}

// 2. Create an interface for a SupportTicket.
// Use the structure of the objects in the "tickets" array below to define:
// - id (number)
// - title (string)
// - status (connect this to your enum from step 1)
// - resolvedOn (optional — Date)
interface SupportTicket {
  id: number,
  title: string,
  status: TicketStatus,
  resolvedOn?: Date
}

// 3. Add an explicit type to the `tickets` array using your interface.
// Declare this array as an array of SupportTicket.
// After typing it, TypeScript will likely show an error — fix it by using your enum values correctly.

const tickets: SupportTicket[] = [
    { id: 101, title: "Cannot log in", status: TicketStatus.closed, resolvedOn: new Date("2024-10-21") },
    { id: 102, title: "Feature request: dark mode", status: TicketStatus.open },
    { id: 103, title: "Bug in report export", status: TicketStatus.inProgress }
  ];
  
  // 4. Fix the typing for this function: `addTicket()`
  // - The `title` parameter should be typed appropriately.
  // - The returned object should match the SupportTicket interface.
  // Be sure to use your enum for the `status` field — not a plain string.
  
  function addTicket(title: string) {
    const id = getNextTicketId(tickets);
  
    const newTicket = {
      id,
      title,
      status: TicketStatus // <- should use the enum here
    };
  
    tickets.push(newTicket);
    return newTicket;
  }
  
  // 5. Fix the typing for this function: `getNextTicketId()`
  // - Strongly type the parameter tix (hint: a collection a tickets!)
  // - Return type should be a number
  
  function getNextTicketId(tix: Array<typeof tickets>): number  {
    return tix.reduce((max, t) => (t.id > max ? t.id : max), 0) + 1;
  }
  
  // 6. Fix the issue with DOM typing below.
  // Given this HTML: <input id="priority" type="number" />
  // Fix the error TypeScript shows on the next line.

  const priorityInput = document.querySelector('#priority') as HTMLInputElement;
  priorityInput.value = '1';
  
  // 7. Strongly type the parameters and return value of this utility function.

  function calculateAverageResponseTime(totalMinutes: number, ticketCount: number): number {
    return totalMinutes / ticketCount;
  }


  // 8. Resolve the problem below where we have value = 42 (without using `any`)

  let value: string;

  // DO NOT EDIT below this line!
  value = "Hello";
  value = 42;  // <- This line is causing an error
