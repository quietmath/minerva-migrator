export interface MarkdownPost {
    Title: string;
    Author: string;
    DatePublished: Date;
    Post: string;
    Image: string;
    MetaTitle: string;
    MetaDescription: string;
    Tags: any[];
    IsPage: boolean;
}
