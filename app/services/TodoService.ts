import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    const url = `${API_URL}`; // APIのURLを設定
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch todos');
        }
    } catch (error) {
        console.error(error);
        return []; // エラーが発生した場合は空の配列を返す
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos || todos.length === 0) return;
    const url = `${API_URL}`; // APIのURLを設定
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todos),
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to save todos');
        }
    } catch (error) {
        console.error(error);
    }
}