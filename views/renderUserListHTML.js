function renderUserListHTML(userList) {
  return `
    <ul class="space-y-4">
      ${userList.map(user => `
        <li class="bg-gray-600 p-4 rounded-md">
          <strong>${user.name}</strong><br>
          ${user.description}<br>
          <div class=""flex item-start gap-2">
            <button 
            hx-delete="/delete-user/${user.id}" 
            hx-target="#user-list" 
            hx-swap="innerHTML"
            class="bg-red-500 py-2 px-4 mt-2 w-full rounded-md text-left"
            >
            Delete
            </button>
            <details class="relative w-auto">
            <summary class="cursor-pointer bg-blue-500 py-2 px-4 w-full mt-2 rounded-md inline-block">Edit</summary>
            <form
                hx-put="/update-user/${user.id}"
                hx-target="#user-list"
                hx-swap="innerHTML"
                class="mt-2"
            >
                <input type="text"
                name="name"
                class="bg-gray-500 rounded-lg w-full p-2 my-2"
                placeholder="edit name..."
                value="${user.name}"
                required
                ></input>
                    
                <textarea 
                name="description"
                class="bg-gray-500 rounded-lg w-full  p-2 my-2"
                placeholder="edit description..."
                required
                >${user.description}</textarea>
                
                <button 
                type="submit"
                class="bg-blue-500 p-2 w-full rounded-lg"
                >save</button>
            </form>
            </details>

            </div>
        </li>
      `).join('')}
    </ul>
  `;
}

module.exports = renderUserListHTML;