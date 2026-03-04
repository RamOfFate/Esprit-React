import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Trash2, Edit3, Plus, X, Save } from "lucide-react";

// --- Schema Definition ---
const categorySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  color: z
    .string()
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Invalid Hex color"),
});

type Category = z.infer<typeof categorySchema>;

const API_URL = "https://localhost:3000/categories"; // Replace with your endpoint

const Category = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: "", description: "", color: "#4B0082" },
  });

  // --- CRUD Operations ---

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      setCategories(response.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onSubmit = async (data: Category) => {
    setLoading(true);
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, data);
      } else {
        await axios.post(API_URL, data);
      }
      reset();
      setEditingId(null);
      fetchCategories();
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const startEdit = (cat: Category) => {
    setEditingId(cat.id!);
    setValue("name", cat.name);
    setValue("description", cat.description);
    setValue("color", cat.color);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Book Category Manager
      </h2>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg border border-gray-200 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              {...register("name")}
              className="mt-1 block w-full border rounded-md p-2"
              placeholder="e.g. Cyberpunk"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Theme Color (Hex)
            </label>
            <div className="flex gap-2">
              <input
                {...register("color")}
                type="color"
                className="h-10 w-12 border rounded cursor-pointer"
              />
              <input
                {...register("color")}
                className="flex-1 border rounded-md p-2"
                placeholder="#000000"
              />
            </div>
            {errors.color && (
              <p className="text-red-500 text-xs mt-1">
                {errors.color.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              className="mt-1 block w-full border rounded-md p-2"
              rows={2}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {editingId ? (
              <>
                <Save size={18} /> Update
              </>
            ) : (
              <>
                <Plus size={18} /> Add Category
              </>
            )}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                reset();
              }}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              <X size={18} /> Cancel
            </button>
          )}
        </div>
      </form>

      {/* List Section */}
      <div className="space-y-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg border-l-4 shadow-sm"
            style={{ borderLeftColor: cat.color }}
          >
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{cat.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-1">
                {cat.description}
              </p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => startEdit(cat)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
              >
                <Edit3 size={18} />
              </button>
              <button
                onClick={() => deleteCategory(cat.id!)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
