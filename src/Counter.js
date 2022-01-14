import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import Badge from '@mui/material/Badge';
// Task
// Add movie - name, poster, summary, rating
// Delete movie from list
// Warning: Each child in a list should have a unique "key" prop.

export function Counter({rating}) {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div className="movie-counter">
        <div>
            <IconButton onClick={() => setLike(like + 1)} aria-label="like">
                <Badge badgeContent={like} color="success">
                    <ThumbUpRoundedIcon/>
                </Badge>
            </IconButton>
        </div>
        <div>
            <IconButton onClick={() => setDisLike(disLike + 1)} aria-label="disLike">
                <Badge badgeContent={disLike} color="error">
                    <ThumbDownRoundedIcon/>
                </Badge>
            </IconButton>
        </div>
        <div>
            {rating}
        </div>
    </div>
  );
}
