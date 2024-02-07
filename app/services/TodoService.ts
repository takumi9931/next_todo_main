import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    const url = API_URL + "/api/todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    const url = API_URL + "/api/todo/add";
    const data = JSON.stringify(todos);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        if (response.ok) {
            // データが正常に保存された場合、何らかの処理を行うことができます
        }
    } catch (error) {
        console.error(error)
    }
}
