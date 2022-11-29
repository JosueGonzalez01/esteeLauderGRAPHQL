
import Category from "./models/Category";
import Brand from "./models/Brand";
import Product from "./models/Product";

export const resolvers ={
    Query: {
        async Categories(){
            const categories = await Category.find();
            return categories;
        },
        async Brands(){
            const brands = await Brand.find();
            return brands;
        },
        async Products(){
            const products = await Product.find().populate('brand category');
            return products;
        }


    },
    Mutation:{
        //categories mutation
        async createCategory(_, {input}){
            const newCategory = new Category(input);
            await newCategory.save();

            return newCategory;
            
        },
        async deleteCategory(_, {_id}){
           return await Category.findByIdAndDelete(_id);
        },
        async updateCategory(_, {_id, input}){
            return await Category.findByIdAndUpdate(_id,input,{new: true});

        },
        //brands mutations
        async createBrand(_, {input}){
            const newBrand = new Brand(input);
            await newBrand.save();

            return newBrand;
            
        },
        async deleteBrand(_, {_id}){
           return await Brand.findByIdAndDelete(_id);
        },
        async updateBrand(_, {_id, input}){
            return await Brand.findByIdAndUpdate(_id,input,{new: true});

        },
        //products mutations
        async createProduct(_, {input}){
            let newProduct = new Product(input);
            const category = await Category.find();
            const brand = await Brand.find();
            newProduct.category = category[category.length-1]._id;
            newProduct.brand = brand[category.length-1]._id;

            await newProduct.save();

            return newProduct;
            
        },
        async deleteProduct(_, {_id}){
           return await Product.findByIdAndDelete(_id);
        },
        async updateProduct(_, {_id, input}){
            return await Product.findByIdAndUpdate(_id,input,{new: true});

        }


    }
};