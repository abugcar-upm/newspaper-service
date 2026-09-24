export interface Article {
    id: number;
    title: string;
    subtitle: string;
    body: string;
    abstract: string;
    category: 'National' | 'International' | 'Sports' | 'Economy';
}