import * as lucide from 'lucide-react';
import fs from 'fs';

const keys = Object.keys(lucide);
const relevant = keys.filter(k => 
    k.toLowerCase().includes('run') || 
    k.toLowerCase().includes('foot') || 
    k.toLowerCase().includes('basket') || 
    k.toLowerCase().includes('dribbble') || 
    k.toLowerCase().includes('ball') || 
    k.toLowerCase().includes('swim') || 
    k.toLowerCase().includes('wave') || 
    k.toLowerCase().includes('tennis') || 
    k.toLowerCase().includes('ping') || 
    k.toLowerCase().includes('chess') || 
    k.toLowerCase().includes('crown') || 
    k.toLowerCase().includes('castle') || 
    k.toLowerCase().includes('person') || 
    k.toLowerCase().includes('circle') || 
    k.toLowerCase().includes('target')
);
fs.writeFileSync('lucide-search.txt', relevant.join(', '));
