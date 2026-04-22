import * as lucide from 'lucide-react';
import fs from 'fs';

const keys = Object.keys(lucide);
const relevant = keys.filter(k => 
    k.toLowerCase().includes('ball') || 
    k.toLowerCase().includes('soccer') || 
    k.toLowerCase().includes('fut') || 
    k.toLowerCase().includes('sport')
);
fs.writeFileSync('lucide-search2.txt', relevant.join(', '));
